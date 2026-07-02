---
title: Newton II: Universal Gravitation (draft)
chapter: 13
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

[Kepler left three laws](tychos-data-keplers-laws.md) and no cause.
Planets ride [ellipses](../vocab/ellipse.md) with the Sun at one focus;
they sweep equal areas in equal times; the square of the period grows as
the cube of the distance. For eighty years these were facts about the
sky — as brute, and as unexplained, as the number of planets. Then
[Newton's laws of motion](newton-laws-of-motion.md) changed what a curved
path *means*. A planet that turns is a planet that accelerates, and an
acceleration demands a force. The question was no longer why the planets
keep moving — motion is free — but what bends them.

How the bending force falls off with distance was already within reach.
[Huygens](huygens.md) had shown that circular motion at speed $v$ and
radius $r$ requires an acceleration $v^2/r$ pointed at the center. For a
circular orbit, $v = 2\pi r / T$, so $a = 4\pi^2 r / T^2$. Now feed in
Kepler's third law, $T^2 = k r^3$:

$$
a = \frac{4\pi^2 r}{T^2} = \frac{4\pi^2 r}{k r^3} = \frac{4\pi^2}{k}\,\frac{1}{r^2}.
$$

Inverse square. By 1684 Halley, Hooke, and Wren could each run this
little argument over coffee, and did.[^coffee] The hard question was its
converse: circles are a special case, and the real orbits are ellipses.
What path does an inverse-square force produce *exactly*? Halley carried
the question to Cambridge. Newton answered without hesitation: an
ellipse. He had calculated it.

But the decisive test needs no ellipse. It needs the Moon. Suppose the
pull that drops an apple is not a property of apples, or of the ground,
but of the Earth — reaching outward forever, thinning as $1/r^2$. The
Moon sits about sixty Earth radii away.[^values] If the same pull holds
it, the Moon must be falling toward us with an acceleration
$60^2 = 3600$ times weaker than an apple's. An apple falls
$g = 9.8 \text{ m/s}^2$; [Galileo measured](galileos-mechanics.md) the
$4.9$ meters it drops in its first second. So the Moon should fall
$9.8/3600 \approx 2.7 \times 10^{-3} \text{ m/s}^2$ — about $1.4$
millimeters every second, and, prettily, $4.9$ meters every minute: the
Moon falls in a minute what the apple falls in a second. Does it? The
Moon's own orbit answers, with no theory in the loop. Its distance is
$3.84 \times 10^8$ m and its period $27.32$ days, so its centripetal
acceleration is $4\pi^2 r / T^2 = 2.72 \times 10^{-3} \text{ m/s}^2$.
Newton compared the two numbers and found them, in his words, to "answer
pretty nearly."[^apple] The Moon is a falling apple that keeps missing.

<figure>
<figcaption>The Moon as a falling body. Left alone it would coast along
the straight line — the first law. Instead it drops away from the
tangent, always toward the Earth, and the drop per minute matches an
apple's drop per second. Geometry to scale for the arc shown; the Earth
lies far below the frame.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A circular orbital arc with a tangent line at its top; the gap between tangent and arc is marked as the fall, with an arrow pointing from the Moon toward the Earth below">
  <line x1="200" y1="80" x2="360" y2="80" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <path d="M 60 110.2 A 340 340 0 0 1 340 110.2" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="340" y1="80" x2="340" y2="110.2" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <circle cx="200" cy="80" r="4" fill="currentColor"/>
  <circle cx="340" cy="110.2" r="4" fill="var(--accent)"/>
  <line x1="340" y1="122" x2="325" y2="155" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <polygon points="325,155 324.5,146 332,150" fill="currentColor"/>
  <text x="130" y="70" font-size="13" fill="currentColor">Moon, one minute ago</text>
  <text x="252" y="72" font-size="13" fill="currentColor">straight line</text>
  <text x="120" y="130" font-size="13" fill="currentColor">orbit</text>
  <text x="352" y="100" font-size="13" fill="currentColor">the fall</text>
  <text x="290" y="180" font-size="13" fill="currentColor">to Earth</text>
</svg>
</figure>

What the Moon does, everything does. That is the leap the word
*universal* carries. Every mass attracts every other mass, along the line
between them, in proportion to both masses and to the inverse square of
their separation:

$$
F = G\,\frac{m_1 m_2}{r^2}.
$$

One law for the apple, the Moon, the moons of Jupiter
[Galileo found](galileos-telescope.md), and the planets. Newton never
knew $G$ itself — orbits reveal only the product $GM$ of the central
body, and prying $G$ loose from $M$ took another century and a torsion
balance. But products were enough to derive everything Kepler had
measured. The area law comes first, and it comes cheap: the force points
always along the Sun–planet line, so it can spin the sweep-line neither
faster nor slower, and the sweep rate $dA/dt$ stays constant. Any
central force does this; the area law is the fingerprint of *central*,
not of inverse-square. The ellipse is the fingerprint of inverse-square:
Newton proved that a body under a $1/r^2$ pull traces a conic with the
force's source at one focus.[^conic] And the third law falls out with
its constant finally exposed:

$$
T^2 = \frac{4\pi^2}{GM}\,a^3.
$$

Kepler's $k$ was $4\pi^2 / GM_{\odot}$ all along — a disguised
measurement of the Sun's mass. The same formula, with Jupiter's mass in
the denominator, governs Jupiter's moons. Gravitation turned astronomy
into a scale: to weigh a body, find something orbiting it.

> **Interactive (planned):** an n-body sandbox seeded with the real solar
> system — positions, velocities, and masses from a published ephemeris,
> provenance documented in `/data/`. Verify Kepler's three laws live,
> then break them: double Jupiter's mass, add a rogue star, fling a comet
> past Saturn. The reader should discover that Kepler's laws are only
> almost true — every planet tugs every other — and that the "almost"
> is the next chapter's plot.

## A prediction you can make

You need no ephemeris to weigh the Earth's pull — the apple already did
it, since $GM_E = gR_E^2$. The International Space Station orbits about
$420$ km up, so $r = 6371 + 420 = 6791$ km. Predict its period:

$$
T = 2\pi\sqrt{\frac{r^3}{gR_E^2}}
  = 2\pi\sqrt{\frac{(6.79 \times 10^6)^3}{9.81 \times (6.37 \times 10^6)^2}}
  \approx 5.57 \times 10^3 \text{ s} \approx 93 \text{ min}.
$$

The station's actual period is about $92.9$ minutes: it circles the
Earth roughly $15.5$ times a day, which you can confirm against any
live tracker tonight.

[^coffee]: The coffee is documented. Wren offered a book worth forty
  shillings to whoever could derive the orbit from the inverse square;
  Hooke claimed he had it and never produced it. The inference *from*
  Kepler's third law was common property; the inference *to* the ellipse
  was not.

[^values]: Modern values throughout: mean Earth–Moon distance
  $3.84 \times 10^8$ m ($60.3$ Earth radii), sidereal month $27.32$
  days, $g = 9.81 \text{ m/s}^2$, Earth radius $6371$ km, ISS altitude
  about $420$ km. These are standard figures, not draft inventions; the
  rounded $60$ makes the agreement look cleaner than the percent-level
  match the exact numbers give.

[^apple]: The narrative here is straightened. The apple story comes from
  Newton himself, told in old age to William Stukeley, and the first
  Moon test dates to the plague years around $1666$ — but that early
  attempt used a poor value of the Earth's radius and agreed only
  roughly. The clean version waited nearly twenty years, for Picard's
  survey of the Earth and for Halley's visit to force the writing of
  the *Principia*.

[^conic]: Proved, but not here. Newton's demonstration is a triumph of
  classical geometry that this chapter's calculus cannot yet shortcut
  honestly, so we state the result and own the debt. The circular case
  above we did prove, and the general one adds no new physics — only
  harder mathematics.
