---
title: Sound (draft)
chapter: 17
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

This book opened its account of law with a string. Pythagoras stopped a
stretched string at half its length and heard the octave; at two-thirds,
the fifth — [the first law of nature](the-first-law-of-nature.md), whole
numbers hiding in sound. Then the ratios sat for two thousand years,
explaining nothing. *Why* whole numbers? What is the string doing? Nobody
could say, because nobody had the mechanics. Now we do: six chapters of
[force and acceleration](newton-laws-of-motion.md), and one watching
[a mass on a spring](the-spring-and-the-swing.md) trade displacement for
restoring force. Sound is where that machinery earns its keep on
something you can hear.

Look closely at a plucked string. Each small piece of it is a mass; the
tension on either side supplies the restoring force. Where the string
curves, the two pulls fail to cancel and the piece accelerates toward
straightness. Write Newton's second law for the piece and the geometry
does the rest: the sideways acceleration is proportional to the
*curvature*, the second derivative of the shape.[^history] For a string of
tension $T$ and mass per unit length $\mu$, with displacement
$y(x, t)$,

$$
\frac{\partial^2 y}{\partial t^2}
= \frac{T}{\mu}\,\frac{\partial^2 y}{\partial x^2}.
$$

This is the wave equation, and it will follow us for the rest of the
book — into light, into heat, into the atom. Its solutions travel at speed
$v = \sqrt{T/\mu}$: tighten the string and waves run faster, thicken it
and they slow.

But a guitar string is clamped at both ends, and a wave that cannot leave
must fold back on itself. The reflections interfere, and only special
shapes survive: waves that *stand* rather than travel, whole numbers of
half-wavelengths fitted exactly between the fixed ends. Between the ends
lie points that never move at all — nodes — and the string can only ring
at the frequencies whose nodes land where the clamps are:

$$
f_n = \frac{n}{2L}\sqrt{\frac{T}{\mu}},
\qquad n = 1, 2, 3, \dots
$$

There is Pythagoras's answer, twenty-two centuries late. The frequencies
come in whole-number ratios because a whole number of half-waves must fit
on the string. Halve the length and every $f_n$ doubles: the octave.
Stop the string at two-thirds and the frequencies climb by $3/2$: the
fifth. The monochord was a law of geometry wearing the costume of music.

<figure>
<figcaption>The first three modes of a clamped string. A whole number of
half-waves must fit between the fixed ends, so the allowed frequencies
are whole-number multiples of the lowest. Dots mark the nodes, which
never move.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Three standing-wave modes of a string fixed at both ends, with one, two, and three half-waves and their nodes marked">
  <line x1="40" y1="45" x2="360" y2="45" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
  <path d="M 40 45 C 146.7 15.7, 253.3 15.7, 360 45" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 40 45 C 146.7 74.3, 253.3 74.3, 360 45" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"/>
  <line x1="40" y1="110" x2="360" y2="110" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
  <path d="M 40 110 C 93.3 80.7, 146.7 80.7, 200 110 C 253.3 139.3, 306.7 139.3, 360 110" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 40 110 C 93.3 139.3, 146.7 139.3, 200 110 C 253.3 80.7, 306.7 80.7, 360 110" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"/>
  <circle cx="200" cy="110" r="3" fill="currentColor"/>
  <line x1="40" y1="175" x2="360" y2="175" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
  <path d="M 40 175 C 75.6 145.7, 111.1 145.7, 146.7 175 C 182.2 204.3, 217.8 204.3, 253.3 175 C 288.9 145.7, 324.4 145.7, 360 175" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 40 175 C 75.6 204.3, 111.1 204.3, 146.7 175 C 182.2 145.7, 217.8 145.7, 253.3 175 C 288.9 204.3, 324.4 204.3, 360 175" fill="none" stroke="currentColor" stroke-width="1" opacity="0.35"/>
  <circle cx="146.7" cy="175" r="3" fill="currentColor"/>
  <circle cx="253.3" cy="175" r="3" fill="currentColor"/>
  <text x="368" y="49" font-size="13" fill="currentColor" font-style="italic">f&#8321;</text>
  <text x="368" y="114" font-size="13" fill="currentColor" font-style="italic">2f&#8321;</text>
  <text x="368" y="179" font-size="13" fill="currentColor" font-style="italic">3f&#8321;</text>
</svg>
</figure>

A real pluck excites many modes at once, and here Daniel Bernoulli made
the claim that scandalized his century: *every* motion of the string is a
sum of these modes, each ringing at its own frequency. That is why a
violin and a flute playing the same note sound different — same $f_1$,
different recipe of overtones. The full vindication of Bernoulli's idea
waits for Fourier, several chapters on; the ear, meanwhile, has believed
it all along.

> **Interactive (planned):** a string you can pluck and bow. Grab it
> anywhere and release; bow it and feel it lock into a mode. The sim
> integrates the wave equation live and shows the decomposition — a bar
> per mode, rising and falling as you play — so the reader hears
> superposition before ever meeting Fourier.

Sound in air is the same story with pressure in place of displacement: a
compression pushes on the layer ahead, which compresses the next. Newton
saw this and, in the *Principia*, made the first mechanical prediction of
the speed of sound: $v = \sqrt{p/\rho}$, pressure over density. Put in
air at freezing — $p = 101{,}325$ Pa, $\rho = 1.293$ kg/m³ — and you get
280 m/s. Measurement said about 330. Newton's mechanics was right and his
answer was wrong by fifteen percent,[^fudge] and the discrepancy stood
for over a century. Laplace found the missing physics: a sound wave
compresses air too quickly for the heat of compression to leak away, and
hot compressed air pushes back harder. The correction multiplies
$p/\rho$ by a factor $\gamma \approx 1.4$ whose meaning must wait for
the heat chapters — a debt this book records and will pay.

Strings vibrate in one dimension. In 1787 Ernst Chladni made the second
dimension visible: he strewed sand on a metal plate, bowed its edge, and
watched the grains dance off the moving regions and gather along the
still ones. The sand drew the nodes — no longer points but *curves*,
elegant and strange, a new pattern for each frequency. Napoleon saw the
demonstration and the Paris Academy offered a prize for the theory.
Sophie Germain, self-taught and barred from the schools, was the only
entrant in the world; it took her three attempts and seven years, and in
1816 she became the first woman to win the Academy's grand prize.[^germain]
The hard part is that a plate, unlike a string, resists *bending*: the
restoring force depends on fourth derivatives of the shape, not second,
and the tidy whole-number ratios of the string dissolve.

> **Interactive (planned):** a Chladni plate. Sweep the driving frequency;
> scattered virtual sand walks off the antinodes and settles on the nodal
> lines, pattern after pattern snapping into focus at each resonance. The
> mode shapes will be computed honestly, not painted on.

## A prediction you can make

Laplace's correction turns Newton's formula into
$v = \sqrt{\gamma p / \rho}$. For air at 0 °C, take $\gamma = 1.400$,
$p = 101{,}325$ Pa, $\rho = 1.293$ kg/m³:

$$
v = \sqrt{\frac{1.400 \times 101{,}325}{1.293}}
\approx \sqrt{109{,}700} \approx 331 \text{ m/s}.
$$

The measured speed of sound at 0 °C is 331.3 m/s. Warm air is a little
faster — 343 m/s at 20 °C, for reasons owed to the heat chapters — and
that number you can check yourself: sound covers a kilometer in about
2.9 seconds, so count the seconds from lightning flash to thunder and
divide by three to get the storm's distance in kilometers. Or stand
172 m from a large flat wall and clap: the echo's round trip is
$2 \times 172 / 343 \approx 1.00$ s.

[^history]: The history is compressed. Mersenne measured the string laws
  in 1637, Brook Taylor derived the fundamental frequency in 1713, and
  d'Alembert wrote the wave equation in 1747 — after which he, Euler, and
  Bernoulli spent decades quarreling over what counts as a solution.
  Fourier settled it; this chapter takes the physics and leaves the feud
  as a footnote.

[^fudge]: Newton knew. In later editions of the *Principia* he bridged
  the gap with ad hoc corrections — the "crassitude" of air particles
  among them — that amounted to fitting the answer. The greatest
  quantitative physicist of his age, caught fudging, because the honest
  number disagreed and he could not bear it.

[^germain]: With bends we here straighten. Germain competed under her own
  name only after years corresponding as "Monsieur LeBlanc"; her prize
  memoir had real mathematical gaps, Lagrange supplied a key correction
  along the way, and the plate equation was not put on fully rigorous
  footing until Kirchhoff in 1850. The prize, the courage, and the
  essential physical idea — elastic resistance to curvature — are hers.
