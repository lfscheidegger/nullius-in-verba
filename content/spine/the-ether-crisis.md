---
title: The Ether Crisis (draft)
chapter: 29
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

Every wave this book has met so far waves *in something*.
[Sound](sound.md) is a pressure ripple in air; kill the air and you kill
the sound. Water waves need water. So when
[Maxwell's synthesis](maxwells-synthesis.md) proved that light is a wave —
electric and magnetic fields regenerating each other at
$c = 1/\sqrt{\mu_0 \varepsilon_0}$ — the nineteenth century asked the
obvious question: waves *in what?* The answer had a name before it had any
properties: the luminiferous ether, a medium filling all space, the thing
that does the waving. [Huygens](huygens.md) had assumed something like it
two centuries earlier. Nobody had ever detected it, but nobody had needed
to. It was less a hypothesis than a grammatical necessity.

The required properties were strange from the start. To carry transverse
waves at $3 \times 10^8$ m/s the ether had to be stiffer than steel, yet
the planets had swum through it for eons without slowing by a measurable
amount. Physicists noted the strangeness and moved on. What they could
not move past was a sharper question: how fast are *we* moving through
it? The Earth orbits the Sun at about 30 km/s. If the ether stands still
while the Earth plows through it, then in the laboratory there blows an
ether wind of 30 km/s, and the speed of light — a speed *relative to the
ether* — should differ with direction, the way a ferry's speed over the
ground differs upstream and down.

The catch is size. The ratio $v/c$ is $10^{-4}$, and the simplest
experiments are only sensitive to effects of order $(v/c)^2 = 10^{-8}$ —
ten parts in a billion.[^firstorder] Timing light over a round trip, as in
[the fly-wheel and mirror experiments](chasing-the-speed-of-light.md),
could not come close. Albert Michelson's insight was that a race needs no
stopwatch. Split a beam of light in two, send the halves down two
perpendicular arms of equal length $L$, bounce each off a mirror, and
recombine them. The two waves [interfere](what-is-light-round-one.md),
producing fringes; and the fringes register the *difference* in travel
time to within a fraction of a wavelength. The instrument is a stopwatch
with ticks $2 \times 10^{-15}$ seconds apart.

<figure>
<figcaption>The Michelson interferometer. A half-silvered mirror splits
the beam; the halves race down perpendicular arms, return, and recombine
at the telescope. If light's speed depends on direction, the fringes at
the telescope shift as the whole apparatus rotates.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Schematic of a Michelson interferometer: a source at the left, a beam splitter at the center, two perpendicular arms ending in mirrors, and a telescope below the splitter">
  <line x1="45" y1="110" x2="170" y2="110" stroke="currentColor" stroke-width="1"/>
  <line x1="170" y1="110" x2="320" y2="110" stroke="currentColor" stroke-width="1"/>
  <line x1="170" y1="110" x2="170" y2="35" stroke="currentColor" stroke-width="1"/>
  <line x1="170" y1="110" x2="170" y2="185" stroke="currentColor" stroke-width="1"/>
  <line x1="155" y1="125" x2="185" y2="95" stroke="currentColor" stroke-width="2"/>
  <line x1="320" y1="90" x2="320" y2="130" stroke="currentColor" stroke-width="3"/>
  <line x1="150" y1="35" x2="190" y2="35" stroke="currentColor" stroke-width="3"/>
  <circle cx="40" cy="110" r="5" fill="var(--accent)"/>
  <rect x="160" y="185" width="20" height="14" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="40" y="95" text-anchor="middle" font-size="13" fill="currentColor">source</text>
  <text x="330" y="80" text-anchor="middle" font-size="13" fill="currentColor">mirror</text>
  <text x="170" y="24" text-anchor="middle" font-size="13" fill="currentColor">mirror</text>
  <text x="230" y="135" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">L</text>
  <text x="185" y="65" text-anchor="start" font-size="13" fill="currentColor" font-style="italic">L</text>
  <text x="228" y="192" text-anchor="middle" font-size="13" fill="currentColor">telescope</text>
</svg>
</figure>

Here is the arithmetic the ether demands. Point one arm along the wind.
The light fights the current out at $c - v$ and rides it back at $c + v$:

$$
t_{\parallel} = \frac{L}{c-v} + \frac{L}{c+v}
= \frac{2L}{c}\,\frac{1}{1 - v^2/c^2}.
$$

The crosswind arm is the swimmer crossing a river: to travel straight
across it must aim upstream, and its speed made good is
$\sqrt{c^2 - v^2}$, so $t_{\perp} = (2L/c)/\sqrt{1 - v^2/c^2}$. Both
trips are slowed, but not equally. Expanding for small $v/c$, the
parallel trip loses by

$$
\Delta t = t_{\parallel} - t_{\perp} \approx \frac{L}{c}\frac{v^2}{c^2},
$$

and rotating the apparatus by $90^\circ$ swaps the arms, doubling the
effect. The fringes should drift back and forth as the instrument turns —
a total shift of $N = 2Lv^2/(\lambda c^2)$ fringes.

In 1887, in a basement in Cleveland, Michelson and Edward Morley built
the definitive version: a five-foot sandstone slab floating on a trough
of mercury, so it could rotate continuously without strain, with mirrors
folding the light path to an effective arm of eleven meters.[^history]
The predicted swing was about four tenths of a fringe. They could read a
hundredth. They rotated, at noon and at night, in July and expecting
better luck in other seasons, and watched. The fringes did not move.
The observed shift was at most one hundredth of a fringe — noise —
against a prediction forty times larger.[^data]

> **Interactive (planned):** the interferometer itself. The reader sets
> the ether-wind speed and watches the fringes crawl as the apparatus
> rotates — then dials in the Earth's real orbital motion, rotates the
> slab, and hunts for the shift in fringe positions driven by the actual
> 1887 measurements. There is nothing to find. That absence is the
> chapter's data, and the sim will draw it from the published numbers in
> Michelson and Morley's paper, not from a simulation of what they
> "should" have seen.

The null result refused every easy exit. Perhaps the Earth drags the
ether along with it, so the basement wind is calm? Stellar aberration —
the slight seasonal tilt of starlight — rules that out.[^drag] FitzGerald,
and independently Lorentz, proposed something desperate: matter moving
through the ether contracts along its motion by exactly
$\sqrt{1 - v^2/c^2}$, shortening the parallel arm by precisely enough to
cancel the delay. It fit. It explained nothing. A conspiracy in which
the medium hides itself by deforming every ruler that tries to measure
it is not a theory; it is a confession.

So the [cracks](cracks-in-everything.md) now ran through the foundation.
Maxwell's equations name one special speed, $c$ — but speed relative to
what? [Galileo's ship](galileos-mechanics.md) said uniform motion is
undetectable from inside; the ether said there is a fact about who is
*really* at rest; the interferometer sided with Galileo and said the
fact, if it exists, is invisible. Something had to give: Maxwell,
mechanics, or the idea of the ether itself. The next chapter gives it.

## A prediction you can make

Predict what Michelson and Morley should have seen — if the ether wind
blows. Take their effective arm $L = 11$ m, the Earth's orbital speed
$v = 30$ km/s (so $v^2/c^2 = 10^{-8}$), and yellow light,
$\lambda = 5.5 \times 10^{-7}$ m. The full rotation shift is

$$
N = \frac{2Lv^2}{\lambda c^2}
= \frac{2 \times 11 \times 10^{-8}}{5.5 \times 10^{-7}}
= 0.4 \text{ fringes},
$$

forty times their sensitivity of $0.01$ fringe. Check the other
direction too: for the *observed* shift of at most $0.01$ fringe, invert
the formula and the wind must satisfy $v \lesssim 30/\sqrt{40} \approx 5$
km/s — less than a sixth of the Earth's own orbital speed. The Earth
cannot stand still in the ether twice, six months apart, on opposite
sides of the Sun. The wind is not there.

[^firstorder]: Effects of first order in $v/c$ — one part in ten
  thousand — were within reach, and several experiments looked. All came
  up empty, but Fresnel's hypothesis of partial ether drag inside matter
  explained every first-order null. Only at second order did the ether
  have nowhere left to hide, and only Michelson's instrument could see
  that far.

[^history]: The narrative is straightened, as usual. Michelson ran a
  first, cruder version alone in Potsdam in 1881 and already saw nothing,
  but the analysis had an error and the margin was thin; the 1887
  experiment with Morley was the answer to critics of the first. And
  "crisis" is partly hindsight — many physicists treated the result as a
  puzzle for ether *models*, not a wound to physics, for nearly two
  decades.

[^data]: Their own summary: the displacement was "certainly less than
  the twentieth part" of the expected 0.4 fringes, "and probably less
  than the fortieth part." The numbers in this chapter — arm length,
  expected shift, observed bound — are from Michelson and Morley,
  *American Journal of Science*, 1887; nothing here is invented.

[^drag]: Aberration: because the Earth moves, telescopes must tilt
  slightly forward to catch starlight, like running through vertical
  rain. If the Earth dragged the local ether with it, the light would
  arrive pre-straightened and the tilt would vanish. It does not vanish;
  Bradley measured it in 1728. Fizeau's 1851 flowing-water experiment
  boxed the drag hypothesis in from the other side: moving water drags
  light only *partially*, by exactly Fresnel's factor.
