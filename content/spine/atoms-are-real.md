---
title: Atoms Are Real (draft)
chapter: 27
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

Chemistry found the atom's fingerprints a century before physics found
the atom. John Dalton, weighing the products of reactions around 1803,
noticed that elements combine in fixed proportions — and, more damning,
in *multiple* proportions. Carbon forms two gases with oxygen. Fix the
weight of carbon, and the weights of oxygen in the two gases stand in
the ratio 2 to 1. Exactly. Not 1.9, not 2.1. Small whole numbers
appeared everywhere Dalton weighed, and small whole numbers are what
you get when matter combines in indivisible units: one atom of carbon
takes one atom of oxygen, or two, and nothing in between.

But chemistry could only ever say *two to one*. It could not say how
many. The atom entered science as a bookkeeping device — a way to
balance ledgers of mass — and for a hundred years it was possible, and
respectable, to insist that it was nothing more. The kinetic theory
made [heat into motion](heat-is-motion.md) and got real numbers out —
molecular speeds, mean free paths. [Statistical mechanics](atoms-statistically.md)
explained entropy and [the arrow of time](the-arrow-of-time.md). And
still the skeptics stood firm, because every one of those successes was
a success of *averages*, and averages do not prove grains. Wilhelm
Ostwald built chemistry on energy alone. Ernst Mach, asked about atoms,
had a standing reply: have you ever seen one?[^mach]

The loose thread had been dangling since 1827. Robert Brown, a
botanist, watched microscopic granules suspended in water jiggle
without rest.[^brown] Not life: soot jiggled, powdered rock jiggled.
Not currents or light: sealed, dark, and still, the dance went on —
forever, faster in hot water, faster for smaller grains. If heat really
is molecular motion, the explanation stares back through the eyepiece:
a small enough grain is just a very large molecule, kicked unevenly
from all sides, and the jiggle is the bombardment showing through. But
every attempt to measure the grain's *velocity* failed. More
magnification revealed only more jag. The path had no tangent to
measure.

Einstein's 1905 paper made one move, and it was the right observable.
Do not ask how fast the grain moves; ask how *far* it gets.[^einstein]
Each kick is uncorrelated with the last, so the grain executes a random
walk: its average displacement is zero, but its mean *squared*
displacement grows in proportion to time,

$$
\langle x^2 \rangle = 2Dt,
$$

and the diffusion coefficient $D$ — found by balancing the osmotic push
of the grains against the viscous drag of the water — is

$$
D = \frac{RT}{N_A}\,\frac{1}{6\pi\eta a}.
$$

Look at the right-hand side. $R$ is the gas constant, known from
chemistry. $T$ comes off a thermometer, $\eta$ is the water's
viscosity, $a$ the grain's radius. One quantity is unknown: $N_A$,
Avogadro's number, the count of molecules in a mole. A microscope, a
stopwatch, and a grid of graph paper had become an instrument for
counting the invisible.

> **Interactive (planned):** watch the jiggle. A simulated grain in
> water (Langevin dynamics — the simulation method will be disclosed on
> the page) jiggles in the field of view; the reader marks its position
> every 30 seconds, plots $\langle x^2 \rangle$ against $t$, and finds
> the straight line hiding in the chaos.

<figure>
<figcaption>A Brownian track, drawn after the manner of Perrin's
<em>Les Atomes</em>: dots mark a grain's position at equal time
intervals, joined by straight lines. The lines are a fiction — between
any two dots the true path is just as jagged, at every magnification.
This particular track is illustrative, not measured data.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A jagged random-walk path of a Brownian particle, with dots marking positions at equal time intervals">
  <path d="M 60 120 L 85 95 L 70 70 L 100 60 L 130 85 L 115 115 L 145 130 L 170 105 L 195 130 L 225 110 L 210 80 L 245 65 L 275 90 L 300 70 L 330 95 L 315 125 L 345 140" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="60" cy="120" r="2.5" fill="currentColor"/>
  <circle cx="85" cy="95" r="2.5" fill="currentColor"/>
  <circle cx="70" cy="70" r="2.5" fill="currentColor"/>
  <circle cx="100" cy="60" r="2.5" fill="currentColor"/>
  <circle cx="130" cy="85" r="2.5" fill="currentColor"/>
  <circle cx="115" cy="115" r="2.5" fill="currentColor"/>
  <circle cx="145" cy="130" r="2.5" fill="currentColor"/>
  <circle cx="170" cy="105" r="2.5" fill="currentColor"/>
  <circle cx="195" cy="130" r="2.5" fill="currentColor"/>
  <circle cx="225" cy="110" r="2.5" fill="currentColor"/>
  <circle cx="210" cy="80" r="2.5" fill="currentColor"/>
  <circle cx="245" cy="65" r="2.5" fill="currentColor"/>
  <circle cx="275" cy="90" r="2.5" fill="currentColor"/>
  <circle cx="300" cy="70" r="2.5" fill="currentColor"/>
  <circle cx="330" cy="95" r="2.5" fill="currentColor"/>
  <circle cx="315" cy="125" r="2.5" fill="currentColor"/>
  <circle cx="345" cy="140" r="3.5" fill="var(--accent)"/>
  <text x="52" y="140" text-anchor="middle" font-size="13" fill="currentColor">start</text>
  <text x="350" y="160" text-anchor="middle" font-size="13" fill="currentColor">8 min later</text>
</svg>
</figure>

Jean Perrin did the counting. He spent months centrifuging gamboge — a
gum resin — until grams of raw material yielded milligrams of spheres
all the same size, their radius measured three independent ways. His
first experiment was simpler even than Einstein's formula: let the
grains settle. Gravity pulls them down; the jiggle stirs them back up;
at equilibrium the two balance, and the same statistics that thins the
[atmosphere with altitude](atoms-statistically.md) thins the grains:

$$
n(h) = n(0)\, e^{-N_A m' g h / RT},
$$

where $m'$ is the grain's mass corrected for buoyancy. For air
molecules the density falls by half over kilometers. For Perrin's
grains, a fifth of a micrometre in radius, it falls by half in tens of
micrometres — a miniature atmosphere, complete inside a droplet, with
its whole exponential profile visible in one field of view. Perrin
counted grains layer by layer and read off $N_A$.

<figure>
<figcaption>A miniature atmosphere. In sedimentation equilibrium the
number of grains per unit volume falls exponentially with height, just
as air pressure does — but the scale height <em>h</em>₀ is tens of
micrometres, not kilometres, because each grain outweighs an air
molecule about a billion-fold.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Graph of grain number density falling exponentially with height, with the scale height marked">
  <line x1="50" y1="190" x2="380" y2="190" stroke="currentColor" stroke-width="1"/>
  <line x1="50" y1="190" x2="50" y2="30" stroke="currentColor" stroke-width="1"/>
  <path d="M 50 40 L 70 65 L 90 86 L 110 103 L 130 118 L 150 130 L 170 140 L 190 148 L 210 155 L 230 161 L 250 166 L 270 170 L 290 173 L 310 176 L 330 178 L 350 180 L 370 182" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="160" y1="190" x2="160" y2="135" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 3"/>
  <text x="160" y="207" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">h&#8320;</text>
  <text x="185" y="60" font-size="13" fill="currentColor">grains per unit volume</text>
  <text x="370" y="212" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">height h</text>
</svg>
</figure>

Then he tracked displacements and checked Einstein's formula. Then
rotations. Then the way concentration fluctuates in a small volume.
Then he collected everyone else's routes to the same number: the
viscosity of gases, the blueness of the sky, the charge of the
electron, the helium bled out by decaying radium, the black-body
spectrum. A dozen phenomena with nothing in common except molecules,
and every one returned $N_A$ between about $6 \times 10^{23}$ and
$7.5 \times 10^{23}$.[^perrin] That convergence is the argument. A
bookkeeping fiction has no reason to give the same count when
interrogated through pollen grains and through starlight. Ostwald
conceded in print in 1909. Mach never did; he died in 1916 still
unpersuaded. But science had stopped waiting for him. Invisible things
had become countable — and a century later the count became the
standard itself: since 2019, $N_A = 6.02214076 \times 10^{23}$ per mole
*by definition*.

> **Interactive (planned):** extract Avogadro's number yourself, from
> Perrin-style data. The reader gets grain counts by height (the
> miniature atmosphere) and a set of tracked displacements, fits the
> exponential and the straight line, and reads off $N_A$ twice. The
> real chapter will use data digitized from Perrin's published tables
> (provenance to be documented in `/data/`); this draft fakes nothing
> in its place.

## A prediction you can make

Take a sphere one micrometre in radius suspended in water at
$20\,^\circ$C, where $\eta = 1.00 \times 10^{-3}$ Pa·s.[^values]
Einstein's formula gives

$$
D = \frac{RT}{N_A}\,\frac{1}{6\pi\eta a}
= \frac{8.314 \times 293}{6.022 \times 10^{23}}
\times \frac{1}{6\pi \times 10^{-3} \times 10^{-6}}
\approx 2.1 \times 10^{-13}\ \text{m}^2/\text{s}.
$$

In one minute the sphere should wander, along any one axis,

$$
\sqrt{\langle x^2 \rangle} = \sqrt{2Dt}
= \sqrt{2 \times 2.1 \times 10^{-13} \times 60}
\approx 5\ \mu\text{m}
$$

— five times its own radius, plainly visible in a student microscope.
And the signature that separates a random walk from any steady drift:
wait four minutes instead of one, and the wander doubles to about
10 μm instead of quadrupling. Distance grows as $\sqrt{t}$. Time it and
see.

[^mach]: Mach's skepticism was principled, not stubborn: he held that
  science should traffic only in what can be observed, and in 1900 no
  one had observed an atom. He died in 1916 without recanting. A story
  circulates that, shown the flashes of individual alpha particles on a
  scintillation screen, he said "now I believe in atoms" — the account
  is secondhand and disputed, and we do not lean on it.

[^brown]: What Brown actually watched were tiny granules *inside*
  burst pollen grains, not the pollen grains themselves — whole pollen
  grains are far too large to jiggle visibly. The popular version of
  the story shrinks this detail away; we keep it, because the size
  dependence is physics, not trivia.

[^einstein]: The narrative is straightened here, as usual. Einstein did
  not set out to explain Brown's observations; he derived the
  fluctuation effect from kinetic theory and wrote, cautiously, that
  the motions he predicted were "possibly identical" with the Brownian
  motion he knew only from secondhand reports. The theory came first
  and the phenomenon was waiting for it.

[^perrin]: The real chapter will reproduce Perrin's own summary table
  from *Les Atomes* (1913), with each method's value and provenance
  documented in `/data/`. The range quoted here is the spread of that
  table, from memory of its scale rather than a transcription — one of
  the things the draft owes the final version. Perrin's Nobel Prize
  came in 1926, "for his work on the discontinuous structure of
  matter."

[^values]: Standard handbook values: $R = 8.314$ J/(mol·K), water's
  viscosity $1.00 \times 10^{-3}$ Pa·s at $20\,^\circ$C. The
  one-micrometre sphere is generic — polystyrene calibration beads
  come in exactly this size, and diluted whole milk offers fat
  globules of about the same scale for free.
