---
title: Atoms, Statistically (draft)
chapter: 24
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By the 1850s the ledger of heat was balanced.
[Heat was motion](heat-is-motion.md); Joule had measured the exchange
rate. But motion of *what*? Atoms were still a chemist's bookkeeping
device — handy for balancing reactions, embarrassing to point at. And the
gas laws sat there as bare facts, nearly two centuries old. Boyle: squeeze
a gas to half its volume and its pressure doubles. Charles: warm it and it
swells in proportion. Laws without a mechanism, as Kepler's had been
before Newton.

Clausius supplied the mechanism in 1857, in a paper titled with admirable
bluntness "On the Kind of Motion We Call Heat."[^bernoulli] Picture a gas
as a swarm of tiny particles in free flight, ricocheting off each other
and off the walls. No new physics enters: each particle obeys
[Newton's laws](newton-laws-of-motion.md), nothing more. Pressure, in
this picture, is not a substance pushing outward. It is drumming — the
blur of countless molecular impacts on the container wall, too many and
too fast to resolve into individual taps.

<figure>
<figcaption>Pressure as drumming. A molecule with horizontal speed
<em>v<sub>x</sub></em> bounces elastically off the wall; its momentum
along <em>x</em> reverses, so the wall absorbs an impulse
2<em>mv<sub>x</sub></em>. Sum the impulses of every molecule, every
second, over every unit of wall: that sum is the pressure.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A box of gas molecules with velocity arrows; one molecule bounces off the right wall, delivering an impulse to it">
  <rect x="60" y="30" width="280" height="150" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="100" cy="60" r="2.5" fill="currentColor"/>
  <line x1="100" y1="60" x2="112" y2="52" stroke="currentColor" stroke-width="1"/>
  <circle cx="150" cy="130" r="2.5" fill="currentColor"/>
  <line x1="150" y1="130" x2="139" y2="141" stroke="currentColor" stroke-width="1"/>
  <circle cx="200" cy="70" r="2.5" fill="currentColor"/>
  <line x1="200" y1="70" x2="214" y2="74" stroke="currentColor" stroke-width="1"/>
  <circle cx="120" cy="160" r="2.5" fill="currentColor"/>
  <line x1="120" y1="160" x2="128" y2="148" stroke="currentColor" stroke-width="1"/>
  <circle cx="250" cy="150" r="2.5" fill="currentColor"/>
  <line x1="250" y1="150" x2="238" y2="158" stroke="currentColor" stroke-width="1"/>
  <circle cx="180" cy="100" r="2.5" fill="currentColor"/>
  <line x1="180" y1="100" x2="172" y2="88" stroke="currentColor" stroke-width="1"/>
  <circle cx="90" cy="110" r="2.5" fill="currentColor"/>
  <line x1="90" y1="110" x2="103" y2="116" stroke="currentColor" stroke-width="1"/>
  <line x1="272" y1="71" x2="336" y2="105" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="272" cy="71" r="2.5" fill="currentColor"/>
  <line x1="336" y1="105" x2="276" y2="137" stroke="currentColor" stroke-width="1"/>
  <path d="M 276 137 L 287 136 L 282 127 Z" fill="currentColor"/>
  <line x1="341" y1="105" x2="368" y2="105" stroke="var(--accent)" stroke-width="1.5"/>
  <path d="M 368 105 L 358 100 L 358 110 Z" fill="var(--accent)"/>
  <text x="352" y="92" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">2mv&#8339;</text>
</svg>
</figure>

Counting the drumbeats is a half-page of arithmetic. A molecule of mass
$m$ and horizontal speed $v_x$ delivers momentum $2mv_x$ per bounce, and
bounces off a given wall once per round trip across the box. Add up all
$N$ molecules, write $\langle v^2 \rangle$ for the average of their
squared speeds, and note that on average a third of that average belongs
to each of the three directions. The drumming works out to

$$
PV = \tfrac{1}{3} N m \langle v^2 \rangle .
$$

Set this beside the experimental gas law, $PV = N k_B T$, and something
remarkable falls out. The match is exact if — and only if —

$$
\tfrac{1}{2} m \langle v^2 \rangle = \tfrac{3}{2} k_B T .
$$

Temperature, which [three chapters ago](taking-temperature.md) was a
number we struggled to even define, is nothing but the average kinetic
energy of molecules, in disguise. Boyle's law stops being a law and
becomes a consequence: halve the volume and each molecule makes its round
trip in half the time, so the drumming on each patch of wall doubles.

> **Interactive (planned):** pressure emerging from chaos. A box of a few
> hundred simulated molecules (exact elastic dynamics, no smoothing). The
> reader watches the momentum delivered to one wall, tap by tap: a jagged,
> random spike train that becomes a steady line as the averaging window
> grows. Then squeeze the box and recover Boyle's law from pure chaos.
> Real isotherm data — Regnault's, and Andrews' carbon-dioxide
> measurements — will be plotted alongside for the van der Waals act
> below; provenance to be documented in `/data/`.

Maxwell took the step Clausius flinched from. Clausius worked with the
average speed, as if the swarm were uniform. Maxwell asked, in 1860, how
the speeds are *distributed* — and derived the answer from symmetry
alone.[^maxwell] The fraction of molecules near speed $v$ follows

$$
f(v) = 4\pi \left( \frac{m}{2\pi k_B T} \right)^{3/2} v^2 \,
e^{-m v^2 / 2 k_B T} ,
$$

a lopsided hill with a long fast tail. This is the first time in this
book — the first time in physics — that a probability distribution
appears as a *law of nature* rather than a confession of sloppy
measurement. Nobody can track $10^{23}$ molecules. Maxwell's discovery is
that nobody needs to: the statistics themselves obey exact laws.
Boltzmann spent the rest of his life extending that idea, and we have
already met its darkest consequence — his statistical reading of
[the arrow of time](the-arrow-of-time.md).

<figure>
<figcaption>The Maxwell speed distribution. Molecules of one gas at one
temperature do not share a speed; they share this hill. The rms speed —
the one the pressure formula cares about — sits to the right of the peak,
pulled there by the fast tail.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="The Maxwell speed distribution: a skewed hill rising from zero, peaking, and decaying with a long tail toward high speeds, with the rms speed marked by a dashed line right of the peak">
  <line x1="40" y1="180" x2="380" y2="180" stroke="currentColor" stroke-width="1"/>
  <polyline points="40,180 67.5,159.3 95,111.2 122.5,66.7 150,50 177.5,64.3 205,96.2 232.5,129.4 260,154.1 287.5,168.7 315,175.7 342.5,178.6 370,179.6"
        fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="174.7" y1="180" x2="174.7" y2="61.7" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="182" y="58" font-size="13" fill="currentColor" font-style="italic">rms speed</text>
  <text x="330" y="200" font-size="13" fill="currentColor">speed &#8594;</text>
</svg>
</figure>

Now the honest confession. The equation $PV = N k_B T$ is called the
*ideal* gas law because no real gas obeys it. The derivation assumed
molecules are points, exerting no force on each other between collisions.
Squeeze a real gas hard enough and both assumptions fail — carbon dioxide
at room temperature simply liquefies, which no ideal gas would ever
do.[^andrews] In 1873 van der Waals repaired the law with two honest
patches: molecules occupy volume (subtract $b$) and attract one another
(the pull reduces the drumming, so add back $a/V_m^2$):

$$
\left( P + \frac{a}{V_m^2} \right) \left( V_m - b \right) = R T .
$$

Read the failure the right way and it is a gift. The correction $b$ is a
measurement of how much room the molecules themselves take up — fit it to
data and you get the first credible estimates of molecular size, for
things no microscope could show. The deviations from the ideal law were
not noise. They were atoms, leaving fingerprints.

Not everyone accepted the fingerprints. Respected physicists — Mach,
Ostwald — held to the end of the century that atoms were a useful
fiction, and demanded a swarm you could *see*. They had a point, and it
will be answered, but not in this chapter.

## A prediction you can make

Kinetic theory turns temperature into speed. For nitrogen at
$T = 293\ \text{K}$ (a 20&nbsp;°C room), with molecular mass
$m = 4.65 \times 10^{-26}\ \text{kg}$:[^values]

$$
v_{\text{rms}} = \sqrt{\frac{3 k_B T}{m}}
= \sqrt{\frac{3 \times 1.381 \times 10^{-23} \times 293}
{4.65 \times 10^{-26}}} \approx 511\ \text{m/s} .
$$

The air in your room is a hail of bullets. Now check it against
something you can hear. [Sound](sound.md) is carried by molecular
collisions, so it cannot outrun the molecules — kinetic theory predicts
the speed of sound is $\sqrt{\gamma/3}$ of the rms speed, where
$\gamma = 7/5$ for nitrogen. That gives
$0.683 \times 511 \approx 349\ \text{m/s}$. The measured speed of sound
in nitrogen at 20&nbsp;°C is 349 m/s. In ordinary air, a slightly heavier
mixture, it is the familiar 343 m/s.

[^bernoulli]: The narrative is straightened, as usual. Daniel Bernoulli
  derived gas pressure from particle impacts in 1738 and was ignored for
  a century. John Waterston submitted substantially the full theory to
  the Royal Society in 1845; the referee called it "nothing but
  nonsense," and the paper stayed buried in the Society's archives until
  Rayleigh exhumed and published it in 1892. Clausius gets the chapter
  because with Clausius, at last, the idea *took*.

[^maxwell]: Maxwell's 1860 argument assumed the three velocity components
  are statistically independent — elegant, and shakier than it looks. He
  and Boltzmann later re-derived the distribution from the collisions
  themselves, which is the version that survives scrutiny.

[^andrews]: Thomas Andrews measured carbon dioxide's isotherms through
  the liquefaction region in 1869, including the critical point at about
  31&nbsp;°C — the primary dataset the real chapter will plot against
  both gas laws. Van der Waals's 1873 thesis was built directly on
  Andrews's curves.

[^values]: Modern values, not draft inventions: Boltzmann's constant
  $k_B = 1.381 \times 10^{-23}\ \text{J/K}$; one N&#8322; molecule is
  28.0 atomic mass units, or $4.65 \times 10^{-26}$ kg. The Maxwell
  distribution figure is the true curve $v^2 e^{-v^2}$ in units of the
  most probable speed, plotted point by point.
