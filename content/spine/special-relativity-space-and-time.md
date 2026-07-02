---
title: Special Relativity I: Space and Time (draft)
chapter: 30
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

Physics entered the twentieth century holding two principles, each
apparently unbreakable, and apparently at war. The first was
[Galileo's](galileos-mechanics.md): inside a smoothly sailing ship you
cannot tell you are moving. No experiment in the cabin — dripping water,
thrown balls, flying insects — picks out "at rest" from "in uniform
motion." Two and a half centuries of mechanics had honored that principle
without exception. The second was
[Maxwell's](maxwells-synthesis.md): light is an electromagnetic wave, and
the equations fix its speed,

$$
c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}} \approx 3.00 \times 10^8 \ \text{m/s},
$$

with no mention of who is measuring.[^c-value] Speed relative to *what*?
The obvious answer was the ether, and the
[previous chapter](the-ether-crisis.md) watched the finest interferometry
of the age fail to find it. Every rescue — dragged ether, shrinking
instruments — bought agreement with one experiment at the price of another,
and the patches were starting to look like epicycles.

In 1905 a patent examiner in Bern proposed the one move nobody wanted:
keep both principles, exactly as stated, and let everything else
break.[^history] Take as postulates that the laws of physics are the same
in every uniformly moving frame, and that light in vacuum moves at $c$ in
every such frame — the same $c$ whether the lamp rushes toward you or away.
Refuse to privilege any frame; refuse to break Maxwell. Then follow the
logic wherever it goes.

It goes first through simultaneity. Stand beside a railway line as
lightning strikes both ends of a passing train, and suppose the flashes
reach you together: for you, the strikes were simultaneous. A passenger
seated at the train's midpoint rides toward one flash and away from the
other, so she meets the forward flash first. Both of you measure each
flash traveling at $c$ — the second postulate insists on it — so she
concludes, correctly *in her frame*, that the front strike happened first.
Neither of you is wrong. "At the same time," for separated events, is not
a fact about the world; it is a fact about a frame. That sentence is the
price of admission, and everything else in the chapter is change from it.

Next, time itself. Build the simplest clock that honors the postulates: two
parallel mirrors a distance $L$ apart, a light pulse bouncing between them,
one tick per round trip. Watch an identical clock glide past at speed $v$.
In your frame its pulse travels a zigzag — longer legs than the vertical
bounce — yet still at speed $c$. Longer path at the same speed means more
time per tick. The Pythagorean theorem does the rest: each leg of the
zigzag satisfies $(c\,\Delta t/2)^2 = L^2 + (v\,\Delta t/2)^2$, and since
a tick of the clock at rest takes $\Delta\tau = 2L/c$,

$$
\Delta t = \frac{\Delta \tau}{\sqrt{1 - v^2/c^2}} = \gamma\,\Delta\tau,
\qquad \gamma \equiv \frac{1}{\sqrt{1 - v^2/c^2}} \geq 1.
$$

The moving clock runs slow, by the factor $\gamma$. Not because light
clocks are delicate: any clock — quartz, atomic, biological — must slow in
exactly the same ratio, or comparing it against the light clock would
reveal the cabin's motion and break the first postulate.[^any-clock]

<figure>
<figcaption>The light clock. At rest, the pulse bounces straight up and
down a distance <em>L</em>. Seen from a frame where the clock moves at
<em>v</em>, the same pulse traces a longer zigzag — at the same speed
<em>c</em>. The right triangle relating the three lengths is the whole
derivation.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A light clock at rest with a vertical light path, and the same clock moving, with the light path forming a zigzag between two mirror positions">
  <line x1="40" y1="45" x2="120" y2="45" stroke="currentColor" stroke-width="2.5"/>
  <line x1="40" y1="175" x2="120" y2="175" stroke="currentColor" stroke-width="2.5"/>
  <line x1="80" y1="50" x2="80" y2="170" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="80" y="30" text-anchor="middle" font-size="13" fill="currentColor">at rest</text>
  <text x="90" y="115" font-size="13" fill="currentColor" font-style="italic">L</text>
  <line x1="180" y1="45" x2="380" y2="45" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <line x1="180" y1="175" x2="380" y2="175" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <line x1="190" y1="45" x2="250" y2="45" stroke="currentColor" stroke-width="2.5"/>
  <line x1="310" y1="45" x2="370" y2="45" stroke="currentColor" stroke-width="2.5" opacity="0.5"/>
  <polyline points="220,170 280,50 340,170" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
  <line x1="220" y1="170" x2="340" y2="170" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 3"/>
  <text x="280" y="30" text-anchor="middle" font-size="13" fill="currentColor">moving at v</text>
  <text x="228" y="105" font-size="13" fill="currentColor" font-style="italic">ct/2</text>
  <text x="280" y="190" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">vt</text>
</svg>
</figure>

> **Interactive (planned):** the light clock, live. Drag a slider for
> $v/c$ from 0 to 0.99 and watch the zigzag stretch while the pulse's
> speed stays fixed; the two clocks' tick counts diverge on screen, and a
> readout shows $\gamma$ tracking the geometry.

Space cannot escape. A muon created in the upper atmosphere rides its own
rest frame, where its clock ticks normally and its life is short. We see it
live $\gamma$ times longer and cross kilometers of air. But the muon sees
*us* moving, its own clock honest — so how does it reach the ground? Only
one answer preserves both stories: in the muon's frame the atmosphere is
*shorter*. A rod of rest length $L_0$, measured from a frame it moves
through at speed $v$, spans

$$
L = \frac{L_0}{\gamma} = L_0\sqrt{1 - v^2/c^2}.
$$

Moving clocks run slow; moving rods contract along the motion. The two
effects are one bookkeeping, seen from two chairs.

The clean way to hold all of this at once is a picture: plot position
across and time (as $ct$) up, so light always travels at 45°. An object's
history is a *worldline*. Events simultaneous for one observer lie on a
horizontal slice for her — and on a *tilted* slice for someone moving past.
The train paradox becomes a diagram you can read at a glance.

> **Interactive (planned):** manipulable spacetime diagrams. Place events,
> draw worldlines, then grab a slider to boost into a moving frame and
> watch the grid shear while every light ray holds its 45° line. The
> reader's job: find two events whose time order flips between frames —
> and verify that no such pair can be connected by a signal at or below
> $c$.

## A prediction you can make

In 1963 Frisch and Smith counted cosmic-ray muons at the top of Mount
Washington and again 1907 m below, near sea level.[^frisch-smith] Their
detector accepted muons moving at about $0.995c$, and it counted
$563 \pm 10$ per hour on the summit. A muon's mean life at rest is
2.2 μs. Descending 1907 m at $0.995c$ takes $6.4$ μs — about 2.9
lifetimes — so without relativity roughly $563 \times e^{-2.9} \approx 31$
per hour should survive to the bottom. With time dilation,
$\gamma = 1/\sqrt{1 - 0.995^2} \approx 10$, the muons age only
$0.64$ μs $\approx 0.29$ lifetimes in transit, predicting
$563 \times e^{-0.29} \approx 420$ per hour. Frisch and Smith measured
$408 \pm 9$. The muons, for their part, saw a mountain 190 m tall.

[^c-value]: Since 1983 the value is exact by definition:
  $c = 299{,}792{,}458$ m/s, with the meter defined from it. The rounded
  $3.00 \times 10^8$ serves every calculation in this chapter.

[^history]: The narrative is straightened, as usual. Lorentz and Poincaré
  already possessed most of the equations — the contraction and the
  transformation both carry Lorentz's name — but read them as dynamical
  effects of motion through a real ether. Einstein's 1905 paper never
  cites Michelson–Morley and may have leaned more on the asymmetries of
  electromagnetic induction; what was new was the interpretation: no
  ether, two postulates, and time itself on the table.

[^any-clock]: This is the first postulate doing quiet, essential work. If
  a heartbeat and a light clock slowed by different factors, their drift
  would be an onboard speedometer for absolute motion — exactly what the
  postulate forbids.

[^frisch-smith]: D. H. Frisch and J. H. Smith, *American Journal of
  Physics* **31**, 342 (1963); the counts quoted are theirs. The
  calculation here is idealized: real muons arrive with a spread of
  speeds and slow down in the detector and the intervening air, which the
  published analysis accounts for (their measured effective dilation
  factor was $8.8 \pm 0.8$). The real chapter will work from the paper's
  data, with provenance documented in `/data/`.
