/** meta pages (styleguide, colophon, ...) build through the same pipeline
    but live at the site root and stay off the table of contents. */
export type PageKind = 'spine' | 'vocab' | 'meta'

export interface Page {
  kind: PageKind
  /** Source path relative to content/, e.g. "spine/04-tychos-data-keplers-laws.md". */
  sourceRel: string
  /** Filename without extension, e.g. "04-tychos-data-keplers-laws". */
  slug: string
  /** Chapter number, spine pages only. */
  number?: number
  title: string
  /** Site-absolute output URL with trailing slash, e.g. "/spine/04-tychos-data-keplers-laws/". */
  url: string
  /** Markdown body (frontmatter stripped). */
  body: string
}

/** Passed through markdown-it as `env` while rendering one page. */
export interface RenderEnv {
  page: Page
  /** Build-failing problems found while rendering. */
  errors: string[]
  /** Sidenote definitions collected during the block parse: id -> markdown. */
  sidenotes: Record<string, string>
  /** Definition ids actually referenced by a [^id] in the text. */
  usedSidenotes: Set<string>
  sidenoteCount: number
  /** True while rendering the inside of a sidenote (guards recursion). */
  inSidenote: boolean
  /**
   * Resolves an internal href to a page-relative URL, recording an error if
   * the link is broken or violates the backward-only rule. Returns null for
   * hrefs that should pass through untouched (external, same-page anchors).
   */
  resolveLink: (href: string) => string | null
}
