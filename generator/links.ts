import { posix } from 'node:path'
import type { Page } from './types.ts'

/**
 * Relative URL from one site-absolute URL to another, so the built site works
 * from any base path (GitHub Pages serves project sites under /repo-name/).
 * Directory URLs end with "/"; anything else is treated as a file.
 */
export function relativeUrl(fromDirUrl: string, toUrl: string): string {
  const from = fromDirUrl.split('/').filter(Boolean)
  const toParts = toUrl.split('/').filter(Boolean)
  const toIsDir = toUrl.endsWith('/')
  const toDir = toIsDir ? toParts : toParts.slice(0, -1)
  const file = toIsDir ? '' : toParts[toParts.length - 1]!

  let common = 0
  while (common < from.length && common < toDir.length && from[common] === toDir[common]) common++
  const up = '../'.repeat(from.length - common)
  const down = toDir
    .slice(common)
    .map((seg) => seg + '/')
    .join('')
  return up + down + file || './'
}

/**
 * Builds the per-page link resolver. Authors write internal links either as
 * relative paths to source files ("../vocab/energy.md", "03-copernicus.md")
 * or as site-absolute URLs ("/vocab/energy/"). The resolver rewrites them to
 * page-relative URLs and enforces the linking rules from VISION.md:
 *
 *   - spine -> earlier spine chapter: ok
 *   - spine -> vocab: ok
 *   - spine -> same or later spine chapter: BUILD ERROR (backward links only)
 *   - vocab -> vocab: ok
 *   - vocab -> spine: BUILD ERROR (vocab pages are standalone; a spine link
 *     would smuggle a forward dependency past the check)
 */
export function makeLinkResolver(
  page: Page,
  bySource: Map<string, Page>,
  byUrl: Map<string, Page>,
  errors: string[],
): (href: string) => string | null {
  return (href) => {
    if (/^(?:[a-z][a-z0-9+.-]*:|#|\/\/)/i.test(href)) return null // external or same-page anchor

    const hashIndex = href.indexOf('#')
    const path = hashIndex < 0 ? href : href.slice(0, hashIndex)
    const hash = hashIndex < 0 ? '' : href.slice(hashIndex)

    let target: Page | undefined
    if (path.startsWith('/')) {
      target = byUrl.get(path.endsWith('/') ? path : path + '/')
    } else if (path.endsWith('.md')) {
      const rel = posix.normalize(posix.join(posix.dirname(page.sourceRel), path))
      target = bySource.get(rel)
    } else {
      errors.push(`${page.sourceRel}: unrecognized internal link "${href}" (use a .md path or a site-absolute URL)`)
      return null
    }

    if (target === undefined) {
      errors.push(`${page.sourceRel}: broken link "${href}"`)
      return null
    }
    if (page.kind === 'spine' && target.kind === 'spine' && target.number! >= page.number!) {
      if (target === page) {
        errors.push(`${page.sourceRel}: links to itself`)
      } else {
        errors.push(
          `${page.sourceRel}: FORWARD LINK to chapter ${target.number} (${target.sourceRel}) — spine links must point backward`,
        )
      }
      return null
    }
    if (page.kind === 'vocab' && target.kind === 'spine') {
      errors.push(
        `${page.sourceRel}: vocab page links to spine chapter ${target.sourceRel} — vocab pages must stand alone`,
      )
      return null
    }
    return relativeUrl(page.url, target.url) + hash
  }
}
