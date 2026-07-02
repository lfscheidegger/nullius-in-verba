---
title: Styleguide
---

This page is the design system's mirror: one instance of every element,
rendered by the real pipeline. It is not linked from the table of contents.
When the system changes, look here first.

## Prose and sidenotes

Body text sits in a single measure of about sixty characters. Claims that
deserve elaboration carry a sidenote,[^first] which lives in the margin on
wide screens and expands inline on narrow ones — tap the number. A sidenote
can hold math and links.[^second]

[^first]: Like this. Sidenotes are the book's second voice: qualifications,
  confessions of idealized history, provenance of data.

[^second]: The eccentricity of Mars is $e \approx 0.093$, small enough that
  its orbit *looks* circular when drawn — see [ellipse](../vocab/ellipse.md) —
  yet large enough to defeat Ptolemy, Copernicus, and very nearly Kepler.

## Mathematics

Inline math flows with the text: the area of an ellipse is $\pi a b$, and
ordinary dollar amounts like $5 or $10 are left alone. Display math gets its
own line:

$$
\frac{d}{dt}\!\left(\frac{\partial L}{\partial \dot q}\right)
- \frac{\partial L}{\partial q} = 0
$$

## Tables

Horizontal hairlines only; numerals are tabular. Real numbers wherever the
table pretends to be about the world — here, Kepler's third law in the inner
solar system:

| Planet  | $a$ (AU) | $T$ (yr) | $a^3/T^2$ |
|:--------|---------:|---------:|----------:|
| Mercury |    0.387 |    0.241 |     0.998 |
| Venus   |    0.723 |    0.615 |     0.999 |
| Earth   |    1.000 |    1.000 |     1.000 |
| Mars    |    1.524 |    1.881 |     1.000 |

## Figures

Figures carry their captions in the margin, beside the image they describe.
Direct labeling on the figure beats a legend.

<figure>
<svg viewBox="0 0 400 220" role="img" aria-label="An ellipse with its two foci marked">
  <ellipse cx="200" cy="110" rx="160" ry="90" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="67.7" cy="110" r="3.5" fill="currentColor"/>
  <circle cx="332.3" cy="110" r="3.5" fill="currentColor"/>
  <text x="67.7" y="132" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">F&#8321;</text>
  <text x="332.3" y="132" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">F&#8322;</text>
</svg>
<figcaption>An ellipse and its foci. The distances from any point on the
curve to the two foci sum to a constant. Drawn to scale for eccentricity
<em>e</em> = 0.83 — far more eccentric than any planet.</figcaption>
</figure>

A figure that needs room can opt out of the measure with
`class="fullwidth"`; its caption then sits below.

<figure class="fullwidth">
<svg viewBox="0 0 760 160" role="img" aria-label="Two cycles of a sine wave with its axis">
  <line x1="10" y1="80" x2="750" y2="80" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <path d="M 10 80 C 40 10, 70 10, 100 80 S 160 150, 190 80 S 250 10, 280 80 S 340 150, 370 80 S 430 10, 460 80 S 520 150, 550 80 S 610 10, 640 80 S 700 150, 730 80"
        fill="none" stroke="currentColor" stroke-width="1.5"/>
</svg>
<figcaption>A full-width figure. The caption sits beneath it rather than in
the margin.</figcaption>
</figure>

## Quotation, code, rules

> We revolve around the Sun like any other planet. — Copernicus, quoted the
> way a blockquote renders.

Code is rare in the prose but must not embarrass itself:

```
npm run build   # Markdown -> HTML, KaTeX at build time
npm test        # the generator's test suite
```

A horizontal rule marks a change of scene:

---

That is every element. If a page needs something not on this list, the
design system grows first and the page uses it second.
