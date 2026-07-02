---
title: Special Relativity II: Matter and Energy (draft)
chapter: 31
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

The [last chapter](special-relativity-space-and-time.md) rebuilt space
and time and left mechanics standing in the rubble. Newton's laws were
written for the old stage: absolute time, velocities that add like
lengths on a ruler. The new stage keeps neither. Chase a light beam at
half its speed and it still recedes at $c$; fire a bullet at $0.5c$ from
a ship moving at $0.5c$ and the ground sees not $c$ but $0.8c$. Every
formula in mechanics that leans on simple velocity addition is now
suspect. The question of 1905 was which ones survive.

The first casualty is the oldest bookkeeping in physics. Since
[Huygens](huygens.md), collisions have balanced on a single ledger:
momentum, mass times velocity, the same total before and after. That
ledger balanced in *every* uniformly moving frame — but only because
Newtonian velocities add simply. Run the same collision through the new
addition rule and the books no longer close. An observer on the ground
sees momentum conserved; an observer drifting past sees the total
change. A conservation law that holds for one observer and not another
is no law at all.

Two escapes exist. Abandon conservation of momentum — unthinkable, and
after [the deep link between conservation and
symmetry](conservation-and-symmetry.md), doubly so: giving up the law
means giving up the sameness of space itself. Or keep the law and fix
the formula. The fix is almost forced. Measure a particle's motion not
by coordinate time, which belongs to the observer, but by the particle's
own wristwatch — its proper time, which every observer agrees on.
Distance per unit *proper* time, times mass, gives

$$
\vec p = \gamma m \vec v,
\qquad
\gamma = \frac{1}{\sqrt{1 - v^2/c^2}} .
$$

At everyday speeds $\gamma \approx 1$ and Newton is recovered whole.
Near $c$, the factor $\gamma$ grows without bound — and with it comes
the speed limit. Force is still the rate of change of momentum, but a
steady force now buys less and less speed: as $v \to c$ the momentum
diverges, so no finite push, sustained for any finite time, reaches $c$.
The limit is not a wall in space. It is an asymptote in the
bookkeeping.

<figure>
<figcaption>Momentum against speed. Newton's straight line
<em>p</em> = <em>mv</em> and the relativistic curve
<em>p</em> = <em>γmv</em> agree at low speed, then part company; the
curve climbs without bound as <em>v</em> approaches <em>c</em>. Drawn to
scale from the formula.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Graph of momentum versus speed showing Newton's straight line and the relativistic curve that diverges as speed approaches c">
  <line x1="40" y1="190" x2="370" y2="190" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="190" x2="40" y2="20" stroke="currentColor" stroke-width="1"/>
  <line x1="360" y1="20" x2="360" y2="190" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 4" opacity="0.6"/>
  <line x1="40" y1="190" x2="360" y2="135" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <path d="M 40 190 L 104 178.8 L 168 166 L 200 158.2 L 232 148.8 L 264 136.1 L 296 116.7 L 312 101.3 L 328 76.4 L 334.4 60.9 L 343.6 25" fill="none" stroke="currentColor" stroke-width="1.75"/>
  <text x="300" y="70" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">p = γmv</text>
  <text x="280" y="160" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">p = mv</text>
  <text x="360" y="207" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">v = c</text>
  <text x="48" y="32" text-anchor="start" font-size="13" fill="currentColor">momentum</text>
  <text x="190" y="207" text-anchor="middle" font-size="13" fill="currentColor">speed</text>
</svg>
</figure>

Nature had already run the experiment. Walter Kaufmann in Göttingen was
deflecting beta rays — electrons flung from radium at more than nine
tenths of $c$ — through electric and magnetic fields, and their momentum
refused to follow the straight Newtonian line. It curved, and within a
few years of dispute the curve settled onto $\gamma m v$.[^kaufmann]

Momentum settled, energy follows. Push a particle from rest and add up
the work; with the new momentum, the kinetic energy comes out as
$K = (\gamma - 1)mc^2$. Expand $\gamma$ for small $v$ and watch Newton
fall out as the first term:

$$
\gamma m c^2 = mc^2 + \frac{1}{2}mv^2
+ \frac{3}{8}\frac{mv^4}{c^2} + \cdots
$$

Everything after the second term is invisible at everyday speeds. But
look at the *first* term. The natural energy account is not $K$ but
$E = \gamma m c^2$, and at rest it does not read zero. It reads $mc^2$ —
an energy a body owns by mere virtue of its mass. Einstein saw in
September 1905 that this is no accounting fiction. A body that radiates
away light of energy $L$ becomes lighter by exactly $L/c^2$: run the
emission from a moving frame, balance energy in both frames, and the
mass loss is forced.[^september] Mass is not a separate conserved stuff
sitting beside energy, as two centuries of chemistry had it. Mass *is*
energy, banked. The exchange rate $c^2$ is enormous — nine times
$10^{16}$ joules per kilogram — which is why the ledger looked
separate for so long: ordinary transactions move too little mass to
weigh.

One equation gathers all of it. Energy, momentum, and mass lock together
as

$$
E^2 = (pc)^2 + (mc^2)^2 ,
$$

with mass the part of the energy that no change of viewpoint can remove.
Set $m = 0$ and $E = pc$: light, which
[Maxwell's theory](maxwells-synthesis.md) already required to carry
momentum, fits the same ledger with no mass at all.[^relmass]

> **Interactive (planned):** collisions at relativistic speeds. Set two
> particles on a collision course, choose the speeds, and watch both
> ledgers side by side: the Newtonian columns ($mv$ and
> $\tfrac{1}{2}mv^2$) drift out of balance as the speeds climb, while
> the relativistic columns ($\gamma m v$ and $\gamma m c^2$) balance to
> the last digit — including collisions where kinetic energy becomes
> new mass. Then replay Kaufmann's beta-ray deflections against his
> published data (provenance to be documented in `/data/`); this draft
> fakes nothing in its place.

## A prediction you can make

In 1932 Cockcroft and Walton fired protons at lithium and got two alpha
particles out: ${}^{7}\mathrm{Li} + p \to 2\,{}^{4}\mathrm{He}$. You can predict
the energy released from a table of masses alone.[^masses] Going in:
$7.016003 + 1.007825 = 8.023828$ atomic mass units. Coming out:
$2 \times 4.002602 = 8.005204$. The books do not balance — mass
$\Delta m = 0.018624$ u has vanished, about a quarter of one percent.
At the exchange rate of $931.494$ MeV per unit,

$$
\Delta m \, c^2 = 0.018624 \times 931.494 \approx 17.35 \text{ MeV},
$$

so each alpha particle should fly off with about $8.7$ MeV. Cockcroft
and Walton measured about $8.6$ MeV apiece — the first direct check of
$E = mc^2$, and it balanced.

[^kaufmann]: Straightened history: Kaufmann's own 1906 analysis favored
  a *rival* electron theory, Abraham's, and he said so; Einstein
  answered that the rival theories explained less. Better measurements
  by Bucherer (1908) and others settled it for $\gamma m v$. The
  dispute was real and took years.

[^september]: The argument fills three pages — "Does the inertia of a
  body depend upon its energy content?", the short sequel to the June
  relativity paper. Einstein wrote the speed of light as $V$, so the
  famous equation first appeared, in effect, as $m = L/V^2$.

[^relmass]: Older books fold $\gamma$ into the mass and speak of mass
  growing with speed. This book does not: $m$ here always means the
  rest mass, the invariant every observer agrees on, and the
  speed-dependence lives in $\gamma$ where it belongs. Same physics,
  cleaner ledger.

[^masses]: Atomic masses from the standard modern evaluation (AME):
  ${}^{1}\mathrm{H}$ 1.007825 u, ${}^{7}\mathrm{Li}$ 7.016003 u,
  ${}^{4}\mathrm{He}$ 4.002602 u; $1 \text{ u} = 931.494$ MeV$/c^2$. Using
  atomic rather than bare-nucleus masses is safe here: the electron
  counts balance on both sides. These are measured values, not draft
  inventions.
