# CLAUDE.md — nullius-in-verba

This repo is **By Candlelight**, an interactive online book telling the story of physics from the ancient world to the Standard Model. Read `VISION.md` first — it is the project's constitution. This file covers how to build it.

## Who you're working with

Luiz is a senior engineer (ex-Facebook/Uber/Nextdoor/Lindy, now Anthropic) with graduate-level physics engagement. Do not dumb things down in discussion; do push back on physics or pedagogy when warranted. The *reader* of the site, however, starts at basic algebra and R→R functions (trig, exponentials, polynomials) — all further math is taught by the project itself, on cue.

## Tech decisions (strong defaults, not dogma)

These are settled *as of now*. Revisit any of them when — and only when — there is **concrete, demonstrated pain**: a real chapter or sim that the current approach makes hard, slow, or ugly. Hypothetical futures and personal preference don't clear the bar; "the Chapter 23 Schrödinger sim genuinely needs X" does. When a decision changes, update this section in the same PR and note briefly what pain prompted it, so the doc stays the source of truth rather than an archaeology site.

- **No framework. No Astro, no React.** A small, hand-rolled static site generator we own: TypeScript (run via `tsx` or compiled), turning Markdown + frontmatter into HTML. Target: a few hundred lines we fully understand. Longevity is a feature — these pages should render in 2040.
- **Math: KaTeX, rendered at build time.** No client-side math rendering. Inline `$...$`, display `$$...$$`.
- **Simulations: plain ES modules**, one directory per chapter, hand-rolled Canvas/SVG/WebGL as each sim demands. No sim frameworks by default; a targeted, well-justified dependency for a specific sim (e.g. a WebGL helper for a genuinely 3D chapter) is acceptable under the revisit bar above — scoped to that sim, not adopted globally. Shared utilities (vector math, plotting axes, scrubbing/slider controls, unit formatting) live in a small common library that grows only as duplication demands.
- **Design system: Tufte-influenced.** Real margin notes/sidenotes (footnotes render in the margin on wide screens, inline-expandable on mobile), restrained palette, high data-ink ratio in all figures, beautiful typography (system for now; a considered serif for body text is an open task). One CSS file, custom properties for theming.
- **Deployment: GitHub Pages** via Actions on push to main. Fully static output in `dist/`. No server, no analytics beyond (maybe) something privacy-respecting later.
- **No client-side framework state.** Sims manage their own state in vanilla JS/TS.

## Repo layout (target)

```
/content/
  spine/          # 01-shadows.md ... 30-standard-model.md
  vocab/          # energy.md, calculus-derivatives.md, ...
/sims/
  common/         # shared plotting/controls/math utilities
  ch04-kepler/    # one dir per chapter's interactives
/data/            # primary datasets (Tycho's Mars obs, Joule's runs, spectra...)
                  # each with a README: source, provenance, license, units
/generator/       # the static site generator (TypeScript)
/design/          # CSS, fonts, design tokens, figure style guide
/dist/            # build output (gitignored)
VISION.md
CLAUDE.md
```

## Content rules (from VISION.md, operationalized)

- **Backward links only.** A spine chapter may link to vocab pages and earlier chapters, never forward. The generator should *enforce* this: fail the build on a forward link from the spine.
- **Real data is sacred.** Every dataset in `/data/` needs provenance documented. Never fabricate "realistic" numbers where primary data exists. When data is digitized from historical sources, document the digitization.
- **No lies-to-children in sims.** Numerical methods (RK4, finite differences, Monte Carlo) are fine and expected; conceptual simplifications that misrepresent the physics are not. If a sim must approximate, the approximation is disclosed in a sidenote.
- **Idealized historical path is fine; footnote the bends.** When the narrative departs from real history for clarity, a sidenote confesses it.
- **Every chapter ends with a quantitative prediction** the reader can make and check.
- **Prose style:** Elements of Style. Short declarative sentences. Active voice. Cut ruthlessly. Figures follow Tufte: no chartjunk, label directly on the figure rather than in legends where possible.

## Current status & next milestone

- Spine of 30 chapters is settled (see VISION.md).
- **Vertical slice: Chapter 4 — "Tycho's Data, Kepler's Laws."** Full article, full polish, the design system born from it. It exercises everything at once: real primary data, a discovery-path narrative, and a data-analysis interactive (fit orbits to Tycho's Mars observations; discover equal areas).
- Vertical-slice task order:
  1. Generator MVP: Markdown → HTML with KaTeX, sidenotes, and the backward-link check.
  2. Design system v1: typography, sidenotes, figure styles.
  3. Data: source Tycho's Mars observations (via Kepler's *Astronomia Nova* tables and/or modern transcriptions — document provenance carefully; this is a research task).
  4. The chapter draft (written collaboratively with Luiz — do not one-shot final prose).
  5. Sims: (a) plot Mars positions from the data, (b) the circle-fit that almost works and fails by 8 arcminutes, (c) the ellipse + equal-areas discovery.
  6. GitHub Pages deploy pipeline.

## Working conventions

- Small, reviewable commits with real messages. Main should always build.
- Prose drafts are collaborative: propose, don't finalize. Luiz co-writes.
- When physics accuracy and narrative convenience conflict, flag it — that's a decision for discussion, not silent resolution either way.
- If you (Claude Code) find a factual/physics error in existing content, fix it and call it out prominently in your summary.
