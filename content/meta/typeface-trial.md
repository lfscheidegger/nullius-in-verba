---
title: Typeface Trial
---

<style>
@font-face {
  font-family: 'XCharter Trial';
  src: url('../fonts/trial/XCharter-Roman.woff2') format('woff2');
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'XCharter Trial';
  src: url('../fonts/trial/XCharter-Italic.woff2') format('woff2');
  font-weight: 400; font-style: italic; font-display: swap;
}
@font-face {
  font-family: 'XCharter Trial';
  src: url('../fonts/trial/XCharter-Bold.woff2') format('woff2');
  font-weight: 700; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'XCharter Trial';
  src: url('../fonts/trial/XCharter-BoldItalic.woff2') format('woff2');
  font-weight: 700; font-style: italic; font-display: swap;
}
@font-face {
  font-family: 'Source Serif 4 Trial';
  src: url('../fonts/trial/SourceSerif4-Regular.woff2') format('woff2');
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'Source Serif 4 Trial';
  src: url('../fonts/trial/SourceSerif4-It.woff2') format('woff2');
  font-weight: 400; font-style: italic; font-display: swap;
}
@font-face {
  font-family: 'Source Serif 4 Trial';
  src: url('../fonts/trial/SourceSerif4-Bold.woff2') format('woff2');
  font-weight: 700; font-style: normal; font-display: swap;
}
@font-face {
  font-family: 'Source Serif 4 Trial';
  src: url('../fonts/trial/SourceSerif4-BoldIt.woff2') format('woff2');
  font-weight: 700; font-style: italic; font-display: swap;
}
.face-georgia  { font-family: Georgia, serif; }
.face-xcharter { font-family: 'XCharter Trial', serif; }
.face-source   { font-family: 'Source Serif 4 Trial', serif; }
.face-label {
  font-variant: small-caps;
  letter-spacing: 0.08em;
  color: var(--ink-faint);
  margin: 3rem 0 0;
  padding-top: 1rem;
  border-top: 1px solid var(--rule);
}
</style>

Three candidates for the body serif, each set on the same specimen. Requires
`scripts/fetch-trial-fonts.sh` to have run (the fonts are local-only). Read
each block twice — once in each theme — then delete this page and its
fonts once the choice is made. The mathematics is KaTeX in every case; what
varies is the prose around it.

<p class="face-label">Candidate 1 · Georgia (control — today's Windows fallback)</p>

<div class="face-georgia">

By 1600 Tycho had *twenty years* of Mars positions, good to about $2'$ of
arc.[^g1] Kepler trusted the data more than the **thousand-year-old
circle**, and the [ellipse](../vocab/ellipse.md) followed: the orbit obeys
$r = p/(1 + e\cos\theta)$ with $e \approx 0.093$, and the radius vector
sweeps equal areas in equal times,

$$
\frac{dA}{dt} = \frac{L}{2m} = \text{const.}
$$

[^g1]: Georgia: Matthew Carter, 1993 — designed for the screen, but its
  default figures are oldstyle, which wobble beside lining math digits.

| Planet  | $a$ (AU) | $T$ (yr) | $a^3/T^2$ |
|:--------|---------:|---------:|----------:|
| Mercury |    0.387 |    0.241 |     0.998 |
| Earth   |    1.000 |    1.000 |     1.000 |
| Mars    |    1.524 |    1.881 |     1.000 |

<p class="chapter-number">Chapter 4 · Tycho's Data, Kepler's Laws — 0123456789</p>

</div>

<p class="face-label">Candidate 2 · XCharter (Bitstream Charter + true small caps)</p>

<div class="face-xcharter">

By 1600 Tycho had *twenty years* of Mars positions, good to about $2'$ of
arc.[^x1] Kepler trusted the data more than the **thousand-year-old
circle**, and the [ellipse](../vocab/ellipse.md) followed: the orbit obeys
$r = p/(1 + e\cos\theta)$ with $e \approx 0.093$, and the radius vector
sweeps equal areas in equal times,

$$
\frac{dA}{dt} = \frac{L}{2m} = \text{const.}
$$

[^x1]: XCharter: Bitstream Charter (Matthew Carter, 1987, drawn to survive
  low resolution) extended by Michael Sharpe with true small caps and
  oldstyle figures. Free Bitstream license. What macOS readers see today.

| Planet  | $a$ (AU) | $T$ (yr) | $a^3/T^2$ |
|:--------|---------:|---------:|----------:|
| Mercury |    0.387 |    0.241 |     0.998 |
| Earth   |    1.000 |    1.000 |     1.000 |
| Mars    |    1.524 |    1.881 |     1.000 |

<p class="chapter-number">Chapter 4 · Tycho's Data, Kepler's Laws — 0123456789</p>

</div>

<p class="face-label">Candidate 3 · Source Serif 4 (Adobe, OFL)</p>

<div class="face-source">

By 1600 Tycho had *twenty years* of Mars positions, good to about $2'$ of
arc.[^s1] Kepler trusted the data more than the **thousand-year-old
circle**, and the [ellipse](../vocab/ellipse.md) followed: the orbit obeys
$r = p/(1 + e\cos\theta)$ with $e \approx 0.093$, and the radius vector
sweeps equal areas in equal times,

$$
\frac{dA}{dt} = \frac{L}{2m} = \text{const.}
$$

[^s1]: Source Serif 4: Frank Grießhammer for Adobe, SIL Open Font License,
  actively maintained. Caveat, visible one line below: it has **no true
  small caps** — the browser fakes them by shrinking capitals, thinner and
  darker-spotted than the real thing.

| Planet  | $a$ (AU) | $T$ (yr) | $a^3/T^2$ |
|:--------|---------:|---------:|----------:|
| Mercury |    0.387 |    0.241 |     0.998 |
| Earth   |    1.000 |    1.000 |     1.000 |
| Mars    |    1.524 |    1.881 |     1.000 |

<p class="chapter-number">Chapter 4 · Tycho's Data, Kepler's Laws — 0123456789</p>

</div>
