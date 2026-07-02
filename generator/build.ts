import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createMarkdown, newRenderEnv } from './markdown.ts'
import { makeLinkResolver } from './links.ts'
import { documentHtml, indexHtml } from './template.ts'
import type { Page, PageKind } from './types.ts'

export interface BuildResult {
  errors: string[]
  pages: Page[]
}

/** Frontmatter is deliberately minimal: "---", "key: value" lines, "---". */
function parseFrontmatter(src: string, sourceRel: string, errors: string[]): { data: Record<string, string>; body: string } {
  if (!src.startsWith('---\n')) {
    errors.push(`${sourceRel}: missing frontmatter`)
    return { data: {}, body: src }
  }
  const end = src.indexOf('\n---', 4)
  if (end < 0) {
    errors.push(`${sourceRel}: unterminated frontmatter`)
    return { data: {}, body: src }
  }
  const data: Record<string, string> = {}
  for (const line of src.slice(4, end).split('\n')) {
    if (line.trim() === '') continue
    const colon = line.indexOf(':')
    if (colon < 0) {
      errors.push(`${sourceRel}: bad frontmatter line "${line}"`)
      continue
    }
    data[line.slice(0, colon).trim()] = line.slice(colon + 1).trim()
  }
  return { data, body: src.slice(src.indexOf('\n', end + 4) + 1) }
}

async function collectPages(contentDir: string, kind: PageKind, errors: string[]): Promise<Page[]> {
  const dir = join(contentDir, kind)
  if (!existsSync(dir)) return []
  const pages: Page[] = []
  for (const file of (await readdir(dir)).filter((f) => f.endsWith('.md')).sort()) {
    const sourceRel = `${kind}/${file}`
    const slug = file.slice(0, -3)
    const src = await readFile(join(dir, file), 'utf8')
    const { data, body } = parseFrontmatter(src, sourceRel, errors)
    if (data['title'] === undefined) errors.push(`${sourceRel}: frontmatter is missing "title"`)
    // Chapter numbers live in frontmatter, not filenames: the spine gets
    // renumbered as VISION.md evolves, and URLs must survive that.
    let number: number | undefined
    if (kind === 'spine') {
      if (/^\d/.test(file)) {
        errors.push(`${sourceRel}: spine filename embeds a chapter number — use a bare slug and "chapter: N" frontmatter`)
        continue
      }
      const chapter = data['chapter']
      if (chapter === undefined || !/^\d+$/.test(chapter)) {
        errors.push(`${sourceRel}: spine frontmatter needs "chapter: N" (an integer)`)
        continue
      }
      number = parseInt(chapter, 10)
    }
    pages.push({
      kind,
      sourceRel,
      slug,
      number,
      title: data['title'] ?? slug,
      url: kind === 'meta' ? `/${slug}/` : `/${kind}/${slug}/`,
      body,
    })
  }
  return pages
}

export async function buildSite(rootDir: string, outDir: string): Promise<BuildResult> {
  const errors: string[] = []
  const contentDir = join(rootDir, 'content')

  const spine = await collectPages(contentDir, 'spine', errors)
  const vocab = await collectPages(contentDir, 'vocab', errors)
  const meta = await collectPages(contentDir, 'meta', errors)
  const pages = [...spine, ...vocab, ...meta]

  const seenNumbers = new Map<number, Page>()
  for (const p of spine) {
    const dup = seenNumbers.get(p.number!)
    if (dup) errors.push(`${p.sourceRel}: duplicate chapter number ${p.number} (also ${dup.sourceRel})`)
    seenNumbers.set(p.number!, p)
  }

  const bySource = new Map(pages.map((p) => [p.sourceRel, p]))
  const byUrl = new Map(pages.map((p) => [p.url, p]))

  const md = createMarkdown()
  const rendered = new Map<Page, string>()
  for (const page of pages) {
    const env = newRenderEnv(page, makeLinkResolver(page, bySource, byUrl, errors))
    const contentHtml = md.render(page.body, env)
    errors.push(...env.errors.map((e) => `${page.sourceRel}: ${e}`))
    for (const id of Object.keys(env.sidenotes)) {
      if (!env.usedSidenotes.has(id)) errors.push(`${page.sourceRel}: unused sidenote definition [^${id}]`)
    }
    rendered.set(page, contentHtml)
  }

  if (errors.length > 0) return { errors, pages }

  // All checks passed — write the site.
  await rm(outDir, { recursive: true, force: true })
  await mkdir(outDir, { recursive: true })

  const spineSorted = [...spine].sort((a, b) => a.number! - b.number!)
  for (const page of pages) {
    const i = spineSorted.indexOf(page)
    const nav = page.kind === 'spine' ? { prev: spineSorted[i - 1], next: spineSorted[i + 1] } : {}
    const outPath = join(outDir, page.url.slice(1), 'index.html')
    await mkdir(dirname(outPath), { recursive: true })
    await writeFile(outPath, documentHtml(page, rendered.get(page)!, nav))
  }
  await writeFile(join(outDir, 'index.html'), indexHtml(spineSorted, vocab))

  await cp(join(rootDir, 'design/style.css'), join(outDir, 'style.css'))
  const fontsDir = join(rootDir, 'design/fonts')
  if (existsSync(fontsDir)) await cp(fontsDir, join(outDir, 'fonts'), { recursive: true })
  const katexDist = join(dirname(createRequire(import.meta.url).resolve('katex/package.json')), 'dist')
  await cp(join(katexDist, 'katex.min.css'), join(outDir, 'katex/katex.min.css'))
  await cp(join(katexDist, 'fonts'), join(outDir, 'katex/fonts'), { recursive: true })

  return { errors, pages }
}

// CLI entry: `npm run build`
const isMain = process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href
if (isMain) {
  const root = join(dirname(fileURLToPath(import.meta.url)), '..')
  const { errors, pages } = await buildSite(root, join(root, 'dist'))
  if (errors.length > 0) {
    console.error(`BUILD FAILED — ${errors.length} error(s):\n`)
    for (const e of errors) console.error(`  ✗ ${e}`)
    process.exit(1)
  }
  console.log(`Built ${pages.length} page(s) into dist/`)
}
