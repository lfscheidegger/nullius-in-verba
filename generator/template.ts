import { relativeUrl } from './links.ts'
import type { Page } from './types.ts'

export function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export interface PageNav {
  prev?: Page
  next?: Page
}

/** Wraps rendered article HTML in the full document shell. */
export function documentHtml(page: Page, contentHtml: string, nav: PageNav): string {
  const asset = (path: string) => relativeUrl(page.url, path)
  const heading =
    page.kind === 'spine' ? `<p class="chapter-number">Chapter ${page.number}</p>\n` : ''
  const navLink = (p: Page | undefined, cls: string, label: string) =>
    p
      ? `<a class="${cls}" href="${relativeUrl(page.url, p.url)}">${label} ${escapeHtml(p.title)}</a>`
      : `<span class="${cls}"></span>`
  const footerNav =
    page.kind === 'spine'
      ? `<nav class="chapter-nav">${navLink(nav.prev, 'nav-prev', '&larr;')}${navLink(nav.next, 'nav-next', '&rarr;')}</nav>\n`
      : ''

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(page.title)} · By Candlelight</title>
<link rel="stylesheet" href="${asset('/katex/katex.min.css')}">
<link rel="stylesheet" href="${asset('/style.css')}">
</head>
<body>
<header class="site-header">
<a href="${asset('/')}">By Candlelight</a>
</header>
<main>
<article>
${heading}<h1>${escapeHtml(page.title)}</h1>
${contentHtml}</article>
${footerNav}</main>
<footer class="site-footer">
<p><em>Nullius in verba</em> — take nobody&rsquo;s word for it.</p>
</footer>
</body>
</html>
`
}

/** The front page: a table of contents. */
export function indexHtml(spine: Page[], vocab: Page[]): string {
  const chapters = spine
    .map(
      (p) =>
        `<li value="${p.number}"><a href="${relativeUrl('/', p.url)}">${escapeHtml(p.title)}</a></li>`,
    )
    .join('\n')
  const vocabItems = vocab
    .map((p) => `<li><a href="${relativeUrl('/', p.url)}">${escapeHtml(p.title)}</a></li>`)
    .join('\n')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>By Candlelight</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<main>
<article>
<h1>By Candlelight</h1>
<p><em>Nullius in verba</em> — take nobody&rsquo;s word for it.</p>
<p>The story of physics, from shadows on the ancient earth to the Standard
Model — each discovery presented as the problem that made it inevitable,
grounded in real data you can analyze yourself.</p>
<h2>Chapters</h2>
<ol class="toc">
${chapters}
</ol>
<h2>Vocabulary</h2>
<ul class="toc">
${vocabItems}
</ul>
</article>
</main>
</body>
</html>
`
}
