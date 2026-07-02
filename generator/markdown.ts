import MarkdownIt from 'markdown-it'
import katex from 'katex'
import type { RenderEnv } from './types.ts'

// Minimal local views of the markdown-it parser state — just the fields we
// touch, so the plugins below stay legible without depending on the library's
// internal type layout.
interface InlineState {
  src: string
  pos: number
  posMax: number
  env: RenderEnv
  push(type: string, tag: string, nesting: number): { content: string; meta: Record<string, string> }
}
interface BlockState {
  src: string
  line: number
  bMarks: number[]
  eMarks: number[]
  tShift: number[]
  env: RenderEnv
  isEmpty(line: number): boolean
  push(type: string, tag: string, nesting: number): { content: string; block: boolean; map: [number, number] | null }
}

/**
 * Inline math: $...$. The dollar must hug its content ($x$, not $ x $), which
 * keeps prose like "costs $5 and $10" from being eaten.
 */
function mathInline(state: InlineState, silent: boolean): boolean {
  const { src, pos } = state
  if (src[pos] !== '$') return false
  let end = pos + 1
  while (end < state.posMax) {
    if (src[end] === '$' && src[end - 1] !== '\\') break
    end++
  }
  if (end >= state.posMax) return false
  const content = src.slice(pos + 1, end)
  if (content === '' || /^\s/.test(content) || /\s$/.test(content)) return false
  if (!silent) {
    const token = state.push('math_inline', 'math', 0)
    token.content = content
  }
  state.pos = end + 1
  return true
}

/** Display math: a block opening with $$ and closing with $$. */
function mathBlock(state: BlockState, startLine: number, endLine: number, silent: boolean): boolean {
  let pos = state.bMarks[startLine]! + state.tShift[startLine]!
  let max = state.eMarks[startLine]!
  if (pos + 2 > max || state.src.slice(pos, pos + 2) !== '$$') return false
  if (silent) return true

  let firstLine = state.src.slice(pos + 2, max)
  let lastLine = ''
  let found = false
  if (firstLine.trim().endsWith('$$')) {
    firstLine = firstLine.trim().slice(0, -2)
    found = true
  }
  let nextLine = startLine
  while (!found) {
    nextLine++
    if (nextLine >= endLine) return false
    pos = state.bMarks[nextLine]! + state.tShift[nextLine]!
    max = state.eMarks[nextLine]!
    const line = state.src.slice(pos, max)
    if (line.trim().endsWith('$$')) {
      lastLine = line.trim().slice(0, -2)
      found = true
    }
  }

  const middle: string[] = []
  for (let l = startLine + 1; l < nextLine; l++) {
    middle.push(state.src.slice(state.bMarks[l]! + state.tShift[l]!, state.eMarks[l]!))
  }
  const token = state.push('math_block', 'math', 0)
  token.block = true
  token.content = [firstLine, ...middle, lastLine].filter((s) => s.trim() !== '').join('\n')
  token.map = [startLine, nextLine + 1]
  state.line = nextLine + 1
  return true
}

/**
 * Sidenote definition, footnote-style, collected during the block parse
 * (all blocks parse before any inline, so definitions may sit anywhere):
 *
 *   [^id]: One paragraph of markdown. Lines indented by two or more
 *     spaces continue the definition.
 */
function sidenoteDef(state: BlockState, startLine: number, endLine: number, silent: boolean): boolean {
  const start = state.bMarks[startLine]! + state.tShift[startLine]!
  const max = state.eMarks[startLine]!
  const m = /^\[\^([^\]\s]+)\]:\s*(.*)$/.exec(state.src.slice(start, max))
  if (!m) return false
  if (silent) return true

  let text = m[2]!
  let next = startLine + 1
  while (next < endLine && !state.isEmpty(next)) {
    const indent = state.tShift[next]!
    if (indent < 2) break
    text += ' ' + state.src.slice(state.bMarks[next]! + indent, state.eMarks[next]!).trim()
    next++
  }
  const id = m[1]!
  if (state.env.sidenotes[id] !== undefined) {
    state.env.errors.push(`duplicate sidenote definition [^${id}]`)
  }
  state.env.sidenotes[id] = text
  state.line = next
  return true
}

/** Sidenote reference: [^id]. Renders the definition into the margin. */
function sidenoteRef(state: InlineState, silent: boolean): boolean {
  const { src, pos } = state
  if (src[pos] !== '[' || src[pos + 1] !== '^') return false
  const end = src.indexOf(']', pos + 2)
  if (end < 0) return false
  const id = src.slice(pos + 2, end)
  if (id === '' || /[\s[\]]/.test(id)) return false
  if (!silent) {
    const token = state.push('sidenote_ref', '', 0)
    token.meta = { id }
  }
  state.pos = end + 1
  return true
}

export function createMarkdown(): MarkdownIt {
  const md = new MarkdownIt({ html: true, typographer: true })

  md.inline.ruler.after('escape', 'math_inline', mathInline as never)
  md.block.ruler.before('fence', 'math_block', mathBlock as never, {
    alt: ['paragraph', 'blockquote', 'list'],
  })
  md.block.ruler.before('reference', 'sidenote_def', sidenoteDef as never, {
    alt: ['paragraph', 'blockquote', 'list'],
  })
  md.inline.ruler.before('link', 'sidenote_ref', sidenoteRef as never)

  const renderMath = (tex: string, display: boolean, env: RenderEnv): string => {
    try {
      return katex.renderToString(tex, { throwOnError: true, displayMode: display })
    } catch (e) {
      env.errors.push(`KaTeX error in "${tex}": ${e instanceof Error ? e.message : e}`)
      return `<code class="math-error">${md.utils.escapeHtml(tex)}</code>`
    }
  }

  md.renderer.rules['math_inline'] = (tokens, idx, _opts, env: RenderEnv) =>
    renderMath(tokens[idx]!.content, false, env)

  md.renderer.rules['math_block'] = (tokens, idx, _opts, env: RenderEnv) =>
    renderMath(tokens[idx]!.content, true, env) + '\n'

  // Sidenotes follow the tufte-css pattern: a numbered label and a hidden
  // checkbox let narrow screens toggle the note inline, with zero JavaScript.
  // Numbering is done by a CSS counter; the checkbox id is the only thing
  // that needs uniqueness here.
  md.renderer.rules['sidenote_ref'] = (tokens, idx, _opts, env: RenderEnv) => {
    const id = tokens[idx]!.meta!['id']!
    const def = env.sidenotes[id]
    if (def === undefined) {
      env.errors.push(`missing sidenote definition [^${id}]`)
      return ''
    }
    if (env.inSidenote) {
      env.errors.push(`sidenote [^${id}] referenced inside another sidenote`)
      return ''
    }
    env.usedSidenotes.add(id)
    env.sidenoteCount += 1
    const n = env.sidenoteCount
    env.inSidenote = true
    const inner = md.renderInline(def, env)
    env.inSidenote = false
    return (
      `<label for="sn-${n}" class="sidenote-number"></label>` +
      `<input type="checkbox" id="sn-${n}" class="sidenote-toggle">` +
      `<span class="sidenote">${inner}</span>`
    )
  }

  // Route every link through the page's resolver so internal links are
  // rewritten to relative URLs and checked: no broken targets, no forward
  // links from the spine.
  md.renderer.rules['link_open'] = (tokens, idx, opts, env: RenderEnv, self) => {
    const token = tokens[idx]!
    const href = token.attrGet('href')
    if (href !== null) {
      const resolved = env.resolveLink(href)
      if (resolved !== null) token.attrSet('href', resolved)
    }
    return self.renderToken(tokens, idx, opts)
  }

  return md
}

export function newRenderEnv(page: RenderEnv['page'], resolveLink: RenderEnv['resolveLink']): RenderEnv {
  return {
    page,
    errors: [],
    sidenotes: {},
    usedSidenotes: new Set(),
    sidenoteCount: 0,
    inSidenote: false,
    resolveLink,
  }
}
