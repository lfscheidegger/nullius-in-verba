// Generator test suite: builds two fixture sites and asserts on the output.
// Run with `npm test`.
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { readFile, rm } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildSite } from '../build.ts'
import { relativeUrl } from '../links.ts'

const here = dirname(fileURLToPath(import.meta.url))
const out = join(here, '.out')
await rm(out, { recursive: true, force: true })

let passed = 0
function test(name: string, fn: () => void): void {
  try {
    fn()
    passed++
  } catch (e) {
    console.error(`✗ ${name}`)
    throw e
  }
}

// --- relativeUrl ------------------------------------------------------

test('relativeUrl walks between directory URLs', () => {
  assert.equal(relativeUrl('/spine/02-beta/', '/spine/01-alpha/'), '../01-alpha/')
  assert.equal(relativeUrl('/spine/02-beta/', '/vocab/energy/'), '../../vocab/energy/')
  assert.equal(relativeUrl('/', '/spine/01-alpha/'), 'spine/01-alpha/')
  assert.equal(relativeUrl('/spine/01-alpha/', '/'), '../../')
  assert.equal(relativeUrl('/spine/01-alpha/', '/style.css'), '../../style.css')
  assert.equal(relativeUrl('/vocab/energy/', '/vocab/energy/'), './')
})

// --- the good site builds, with the right artifacts -------------------

{
  const goodOut = join(out, 'good')
  const { errors } = await buildSite(join(here, 'fixtures/good'), goodOut)

  test('good site builds without errors', () => {
    assert.deepEqual(errors, [])
  })

  const alpha = await readFile(join(goodOut, 'spine/01-alpha/index.html'), 'utf8')
  const beta = await readFile(join(goodOut, 'spine/02-beta/index.html'), 'utf8')

  test('KaTeX renders at build time', () => {
    assert.match(alpha, /class="katex"/)
    assert.match(alpha, /katex-display/) // the $$ block
    assert.doesNotMatch(alpha, /\$E = mc\^2\$/) // no raw math left behind
  })

  test('plain dollar amounts are not eaten as math', () => {
    assert.match(alpha, /\$5 or \$10/)
  })

  test('sidenotes render as margin notes with a no-JS toggle', () => {
    assert.match(alpha, /class="sidenote-number"/)
    assert.match(alpha, /<input type="checkbox" id="sn-1" class="sidenote-toggle">/)
    assert.match(alpha, /class="sidenote"/)
    assert.match(alpha, /joules/) // definition body made it into the page
  })

  test('internal links are rewritten to relative URLs', () => {
    assert.match(beta, /href="\.\.\/01-alpha\/"/)
    assert.match(beta, /href="\.\.\/\.\.\/vocab\/energy\/"/)
    assert.match(beta, /href="\.\.\/01-alpha\/#anchor"/) // site-absolute form, hash kept
  })

  test('link direction is not enforced (editorial, not tooling)', () => {
    assert.match(alpha, /href="\.\.\/02-beta\/"/) // spine forward glance
    const energy = readFileSync(join(goodOut, 'vocab/energy/index.html'), 'utf8')
    assert.match(energy, /href="\.\.\/\.\.\/spine\/01-alpha\/"/) // vocab -> spine
  })

  test('external links pass through untouched', () => {
    assert.match(alpha, /href="https:\/\/example\.org\/page"/)
  })

  test('site chrome: index, stylesheet, KaTeX assets, chapter nav', () => {
    assert.ok(existsSync(join(goodOut, 'index.html')))
    assert.ok(existsSync(join(goodOut, 'style.css')))
    assert.ok(existsSync(join(goodOut, 'katex/katex.min.css')))
    assert.ok(existsSync(join(goodOut, 'katex/fonts')))
    assert.match(alpha, /class="nav-next"[^>]*>&rarr; Beta/)
    assert.match(beta, /class="nav-prev"[^>]*>&larr; Alpha/)
  })
}

// --- the bad site fails, for every reason it should -------------------

{
  const badOut = join(out, 'bad')
  const { errors } = await buildSite(join(here, 'fixtures/bad'), badOut)
  const all = errors.join('\n')

  const expectError = (name: string, pattern: RegExp) =>
    test(name, () => assert.match(all, pattern))

  expectError('broken link fails the build', /broken link "99-nonexistent\.md"/)
  expectError('missing sidenote definition fails the build', /missing sidenote definition \[\^ghost\]/)
  expectError('unused sidenote definition fails the build', /unused sidenote definition \[\^orphan\]/)
  expectError('invalid TeX fails the build', /KaTeX error/)

  test('a failing build writes nothing', () => {
    assert.ok(!existsSync(badOut))
  })
}

console.log(`All ${passed} tests passed.`)
