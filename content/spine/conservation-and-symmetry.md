---
title: Conservation and Symmetry (draft)
chapter: 16
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1700 mechanics could compute almost anything and agree on almost
nothing about what it meant. Descartes had declared that God keeps the
total *quantity of motion* in the universe constant, and defined it as
mass times speed: $m|v|$. Leibniz, in 1686, called this a memorable
error. His counterexample came straight from
[Galileo's inclined planes](galileos-mechanics.md): a body falling from
four times the height arrives with only twice the speed, yet it can
rise four times as high, drive a stake four times as deep, do — in
some sense not yet named — four times the *work*. The true measure of a
motion's force, Leibniz argued, is not $mv$ but $mv^2$, which he called
*vis viva*, the living force. For half a century the learned world split
into camps and fought.[^tidy]

The fight was strange, because both sides kept winning.
[Huygens](huygens.md) had shown that when hard elastic balls collide,
the sum of $mv^2$ is the same before and after — a Leibnizian fact. But
he had also shown that the sum of $mv$, *taken with signs*, survives
every collision whatsoever, elastic or not — exactly what
[Newton's third law](newton-laws-of-motion.md) guarantees, each body's
gain being the other's loss. Two equal lumps of soft clay, flung
together head-on, stop dead. Signed momentum is conserved trivially:
zero before, zero after. But the vis viva has vanished. Where did it go?
Into the clay — into heat — but this book has not yet earned that
answer, and will not borrow it. For now, mark the debt.

Experiment could still rule, and in Leiden around 1722 Willem
's Gravesande ruled. He dropped brass balls into a bed of soft clay
from different heights and measured the dents. Galileo's law of fall
says the impact speed obeys $v^2 = 2gh$, so the drop height *is* a
measurement of $v^2$. If the ball's power to deform clay went as $mv$,
doubling the dent should take four times the height. It did not. The
dents grew in direct proportion to the height — that is, to $v^2$.
Émilie du Châtelet made these experiments the centerpiece of the vis
viva chapters of her *Institutions de physique*: the Cartesian measure,
she argued, could not survive a bed of clay.[^emilie]

<figure>
<figcaption>'s Gravesande's experiment. The same brass ball dropped from
heights in the ratio 1 : 2 : 3 strikes with speeds in the ratio
1 : &#8730;2 : &#8730;3 — and dents the clay to depths in the ratio
1 : 2 : 3. The dent tracks <em>v</em>², not <em>v</em>. Geometry
schematic; the real chapter will draw his published numbers.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Three balls dropped from heights h, 2h, and 3h into a clay bed, leaving dents of depth d, 2d, and 3d">
  <rect x="40" y="150" width="320" height="55" fill="currentColor" opacity="0.08"/>
  <line x1="40" y1="150" x2="360" y2="150" stroke="currentColor" stroke-width="1.5"/>
  <text x="52" y="197" font-size="13" fill="currentColor" font-style="italic">clay</text>
  <circle cx="90" cy="110" r="6" fill="currentColor"/>
  <line x1="90" y1="116" x2="90" y2="150" stroke="currentColor" stroke-width="0.75" stroke-dasharray="3 3"/>
  <path d="M 83 150 L 83 162 A 7 7 0 0 0 97 162 L 97 150" fill="none" stroke="currentColor" stroke-width="1.25"/>
  <text x="76" y="114" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">h</text>
  <text x="103" y="166" font-size="13" fill="currentColor" font-style="italic">d</text>
  <circle cx="200" cy="70" r="6" fill="currentColor"/>
  <line x1="200" y1="76" x2="200" y2="150" stroke="currentColor" stroke-width="0.75" stroke-dasharray="3 3"/>
  <path d="M 193 150 L 193 174 A 7 7 0 0 0 207 174 L 207 150" fill="none" stroke="currentColor" stroke-width="1.25"/>
  <text x="186" y="74" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">2h</text>
  <text x="213" y="178" font-size="13" fill="currentColor" font-style="italic">2d</text>
  <circle cx="310" cy="30" r="6" fill="currentColor"/>
  <line x1="310" y1="36" x2="310" y2="150" stroke="currentColor" stroke-width="0.75" stroke-dasharray="3 3"/>
  <path d="M 303 150 L 303 186 A 7 7 0 0 0 317 186 L 317 150" fill="none" stroke="currentColor" stroke-width="1.25"/>
  <text x="296" y="34" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">3h</text>
  <text x="323" y="190" font-size="13" fill="currentColor" font-style="italic">3d</text>
</svg>
</figure>

> **Interactive (planned):** run the clay experiment yourself. Choose a
> drop height, release the ball, measure the dent; repeat until you have
> enough points to plot depth against height and against speed, and
> discover the $v^2$ scaling with your own data. The sim's clay will
> resist with the constant force the real experiment approximates, and
> the real chapter will set 's Gravesande's published measurements
> beside the reader's — provenance documented in `/data/`.

The resolution, when it came, was almost an anticlimax: both sides were
right, because they were measuring different things. Push on a body with
force $F$ and ask what accumulates. Accumulate the force over *time* and
you change the momentum; accumulate it over *distance* and you change
the vis viva:

$$
\int F\,dt = \Delta(mv),
\qquad
\int F\,dx = \Delta\!\left(\tfrac{1}{2}mv^2\right).
$$

The second follows from the first in three lines, since
$F\,dx = m\frac{dv}{dt}\,v\,dt = d\!\left(\tfrac12 mv^2\right)$. The
clay pushes back on the ball with a roughly constant force, so the
depth of the dent measures the force-times-distance — the $v^2$
quantity. A pendulum stopping a ball measures force-times-time — the
$mv$ quantity. There was never one "force of motion." There were two
bookkeepings, and nature honors both.[^halfnote]

Why these two? Why should *any* quantity survive all the shoving? The
[least-action](least-action.md) view of mechanics gives the deepest
answer physics has: **conservation laws are shadows of symmetries.** If
the action does not care *when* an experiment is performed, energy is
conserved. If it does not care *where*, momentum is conserved. If it
does not care about *orientation*, angular momentum is conserved — and
that last one you have already met in the wild:
[Kepler's equal areas](tychos-data-keplers-laws.md) are nothing but the
constancy of Mars's angular momentum $L$, since the sweep rate of the
sun-line is

$$
\frac{dA}{dt} = \frac{L}{2m}.
$$

The Sun's pull points along that line, exerts no twist, and so cannot
change $L$: the areas *must* come out equal. This symmetry-to-
conservation dictionary is Noether's theorem, and it is the most
load-bearing wall in this book: when, centuries from this chapter,
Newton's mechanics itself is torn down, the walls left standing are the
ones built here.[^noether]

## A prediction you can make

Rerun 's Gravesande on a kitchen table: a steel ball and a tub of soft
modeling clay. Drop the ball from 50 cm; it lands at
$v = \sqrt{2 \times 9.8 \times 0.5} \approx 3.1$ m/s. Drop it from
200 cm; it lands at $\sqrt{2 \times 9.8 \times 2.0} \approx 6.3$ m/s —
exactly twice the speed. If the dent were bought with momentum, twice
the speed would buy twice the depth. Energy says: four times the depth.
Measure both dents to the bottom with a toothpick. The ratio should sit
near 4, not 2 — Descartes and Leibniz, settled for the price of some
clay.

[^tidy]: Tidied, as usual. The quarrel ran for decades, entangled
  metaphysics with mechanics, and did not end on a single day; the young
  Kant's first published work waded into it, and d'Alembert's famous
  1743 verdict that it was a dispute over words settled less than
  tradition claims. The clay, the logic, and the resolution are real;
  the crisp storyline is ours.

[^emilie]: Du Châtelet's *Institutions de physique* appeared in 1740.
  She also produced the French translation of Newton's *Principia*,
  with commentary, that is still the standard one — finished in the
  months before her death in 1749.

[^halfnote]: Anachronisms confessed: Leibniz's vis viva was $mv^2$, with
  no one-half; the $\tfrac12$ enters with Coriolis in 1829, and the word
  *energy* with Thomas Young in 1807. This chapter uses the modern
  quantity and, mostly, the modern word, because the ideas — not the
  labels — are what the era discovered.

[^noether]: A larger anachronism, confessed in full: Emmy Noether proved
  the theorem in 1918, some 170 years after this chapter's setting, to
  resolve a puzzle about energy in general relativity. The eighteenth
  century knew the conservation laws; it did not know they were
  symmetries. We plant the flag early because the whole road ahead —
  through thermodynamics, relativity, and quantum theory — will lean on
  it.
