import { relativeUrl } from './links.ts'
import type { Page } from './types.ts'

export function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// Color scheme: the stylesheet uses light-dark() and follows the OS by
// default. A manual choice pins data-theme on <html> and persists in
// localStorage; this runs before first paint so there is no flash. These two
// snippets are the only JavaScript shipped on prose pages.
const themeInit = `<script>
(function () {
  var t = localStorage.getItem('theme')
  if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t
})()
</script>`

const themeToggleScript = `<script>
document.querySelector('.theme-toggle').addEventListener('click', function () {
  var root = document.documentElement
  var current = root.dataset.theme ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  root.classList.add('theme-fade')
  root.dataset.theme = current === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', root.dataset.theme)
  setTimeout(function () { root.classList.remove('theme-fade') }, 120)
})
</script>`

interface Shell {
  title: string
  /** Site-absolute URL of the page being rendered, used to relativize assets. */
  url: string
  /** Rendered contents of <main>. */
  main: string
}

function shell({ title, url, main }: Shell): string {
  const asset = (path: string) => relativeUrl(url, path)
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<title>${escapeHtml(title)}</title>
<link rel="preload" href="${asset('/fonts/xcharter/XCharter-Roman.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${asset('/katex/katex.min.css')}">
<link rel="stylesheet" href="${asset('/style.css')}">
${themeInit}
</head>
<body>
<header class="site-header">
<a href="${asset('/')}">By Candlelight</a>
<button class="theme-toggle" aria-label="Switch between light and dark">&#9680;</button>
</header>
<main>
${main}</main>
<footer class="site-footer">
<p><em>Nullius in verba</em> — take nobody&rsquo;s word for it.</p>
</footer>
${themeToggleScript}
</body>
</html>
`
}

export interface PageNav {
  prev?: Page
  next?: Page
}

/** Wraps rendered article HTML in the full document shell. */
export function documentHtml(page: Page, contentHtml: string, nav: PageNav): string {
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

  return shell({
    title: `${page.title} · By Candlelight`,
    url: page.url,
    main: `<article>
${heading}<h1>${escapeHtml(page.title)}</h1>
${contentHtml}</article>
${footerNav}`,
  })
}

/** The front page: a table of contents (meta pages deliberately absent). */
export function indexHtml(spine: Page[], vocab: Page[]): string {
  const item = (p: Page, value?: number) =>
    `<li${value !== undefined ? ` value="${value}"` : ''}><a href="${relativeUrl('/', p.url)}">${escapeHtml(p.title)}</a></li>`
  return shell({
    title: 'By Candlelight',
    url: '/',
    main: `<article>
<h1>By Candlelight</h1>
<p><em>Nullius in verba</em> — take nobody&rsquo;s word for it.</p>
<p>The story of physics, from shadows on the ancient earth to the Standard
Model — each discovery presented as the problem that made it inevitable,
grounded in real data you can analyze yourself.</p>
<h2>Chapters</h2>
<ol class="toc">
${spine.map((p) => item(p, p.number)).join('\n')}
</ol>
<h2>Vocabulary</h2>
<ul class="toc">
${vocab.map((p) => item(p)).join('\n')}
</ul>
</article>`,
  })
}
