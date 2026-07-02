---
title: Tycho's Data, Kepler's Laws (draft)
chapter: 8
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1600 astronomy owned two competing blueprints of the heavens and no way
to choose between them. Ptolemy's nested circles still
[saved the appearances](saving-the-appearances.md); Copernicus had
[moved the Sun to the center](the-copernican-gamble.md) but kept the
circles, and even added small ones to make the motions come out right.
Both systems predicted planetary positions to roughly the same accuracy,
and both were wrong by amounts nobody could yet measure. What broke the
tie was not [a telescope](galileos-telescope.md). It was a catalog.

Tycho Brahe spent twenty years on the island of Hven measuring the
positions of the planets with giant quadrants and sextants, no lenses
anywhere, and got them good to about two arcminutes.[^precision] Nothing
close had existed before. In 1600 a young mathematician named Johannes
Kepler joined him in Prague and was handed the hardest planet in the
ledger: Mars.[^mars] Tycho died the next year. Kepler kept the data.

He began the way any competent astronomer would: with a circle. He
allowed himself every classical freedom — an off-center circle, an equant
point to govern the speed — and tuned the model against four of Tycho's
Mars oppositions. It worked beautifully. Predicted longitudes matched
observation to about two arcminutes, the limit of the data. Then he
checked the same model against observations away from the tuning points,
and it missed. Not by much: eight arcminutes at worst, about a quarter of
the full Moon's apparent width. Every astronomer before him would have
shrugged. Ptolemy's data had been uncertain by ten arcminutes; an
eight-arcminute miss was invisible to antiquity.

But Kepler knew what Tycho's instruments could do, and eight is bigger
than two. He wrote that since God had given us in Tycho an observer so
faithful, it was right to accept the gift with a grateful mind — and that
these eight minutes alone pointed the road to the reformation of the whole
of astronomy. This is the book's thesis in a single sentence: **the error
bar is a promise, and a theory that exceeds it is dead**, no matter how
old, how beautiful, or how nearly right. Two thousand years of circles
lost to eight minutes of arc.

> **Interactive (planned):** fit orbits to Tycho's actual Mars
> observations, digitized from the tables in Kepler's *Astronomia Nova*
> (provenance to be documented in `/data/`). Slide the circle's center and
> equant until the oppositions fit — then watch the model miss the other
> observations by eight arcminutes, and try to do better. The dataset here
> will be real; this draft fakes nothing in its place.

What followed was five years of arithmetic by candlelight.[^order] Kepler
used Mars itself as a fixed beacon: whenever Mars returns to the same
point of its orbit — every 687 days — the Earth stands somewhere new, and
the two sightlines triangulate the geometry, Earth's orbit and Mars's
both. Out of that survey came two laws. The orbit is not a circle. It is
an [ellipse](../vocab/ellipse.md) with the Sun at one focus, which in
polar form, measuring the angle $\theta$ from perihelion, reads

$$
r = \frac{p}{1 + e\cos\theta},
$$

where $e$ is the eccentricity and $p$ sets the size. And the planet does
not move uniformly, nor uniformly about any equant: the line from the Sun
to the planet sweeps out **equal areas in equal times**. Close to the Sun
the sweep-line is short, so the planet must race to cover its area;
far from the Sun the line is long and the planet ambles.

<figure>
<figcaption>Equal areas in equal times. The two shaded sectors are swept
in the same interval and have the same area: near the Sun the planet runs,
far from it the planet ambles. Eccentricity exaggerated to
<em>e</em> = 0.61 for legibility; Mars's is 0.093, and its true orbit
looks circular to the eye.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="An elliptical orbit with the Sun at one focus and two equal-area sectors shaded, a wide one near the Sun and a narrow one far from it">
  <ellipse cx="200" cy="110" rx="120" ry="95" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 273.3 110 L 277.1 37.2 A 120 95 0 0 1 277.1 182.8 Z" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="0.75"/>
  <path d="M 273.3 110 L 83.8 86.3 A 120 95 0 0 0 83.8 133.7 Z" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="0.75"/>
  <circle cx="273.3" cy="110" r="4" fill="var(--accent)"/>
  <text x="273.3" y="130" text-anchor="middle" font-size="13" fill="currentColor">Sun</text>
  <text x="342" y="30" text-anchor="middle" font-size="13" fill="currentColor">fast</text>
  <text x="62" y="70" text-anchor="middle" font-size="13" fill="currentColor">slow</text>
</svg>
</figure>

The area law hides a speed rule you can extract with nothing but
triangles. At perihelion and aphelion the planet moves at right angles to
the sweep-line, so in a short moment it sweeps a thin triangle of area
$\tfrac{1}{2} r v t$. Equal areas forces $r_p v_p = r_a v_a$, and since
$r_p = a(1-e)$ and $r_a = a(1+e)$,

$$
\frac{v_p}{v_a} = \frac{1 + e}{1 - e}.
$$

> **Interactive (planned):** discover the area law yourself. Drag Mars
> along its fitted ellipse; the sim shades the sector swept per week and
> plots sector area against position. The reader's job is to notice the
> flat line — and to check that no equant reproduces it.

Ten years later, comparing whole orbits rather than one, Kepler found a
third law: the square of a planet's period is proportional to the cube of
its mean distance. In Earth-years and astronomical units, $T^2 = a^3$ for
every planet in the solar system. He had no idea why. Neither, for now, do
we: the *why* is half a century and one Englishman away, and this book
does not borrow from chapters it has not yet earned.

## A prediction you can make

Kepler's triangulation gives Mars's mean distance: $a = 1.524$ AU. The
third law then predicts its year with no further observation:

$$
T = \sqrt{a^3} = \sqrt{1.524^3} = \sqrt{3.540} \approx 1.881 \text{ yr},
$$

which is $1.881 \times 365.25 \approx 687$ days. The measured value is
686.98 days.[^elements] And the speed rule: with $e = 0.093$, Mars at
perihelion moves faster than at aphelion by the factor
$1.093 / 0.907 \approx 1.21$ — twenty-one percent, which you can check
against any ephemeris: about 26.5 km/s at perihelion, 22.0 km/s at
aphelion.

[^precision]: About $2'$ of arc — a fifteenth of the full Moon's apparent
  diameter. Tycho did this with no telescope: giant quadrants, careful
  calibration, and twenty years of stubbornness.

[^mars]: A lucky assignment, though it did not feel lucky. Mars has the
  most eccentric orbit of any planet that is easy to observe
  ($e = 0.093$); Mercury's is more eccentric still, but Mercury hides in
  the Sun's glare. A gentler planet would have let the circle survive.

[^order]: The narrative here is straightened. Historically Kepler found
  the area law *before* the ellipse, spent a year defending an egg-shaped
  "ovoid" orbit that fit almost as well, and stumbled onto the ellipse
  partly through a lucky misreading of his own equations. The five years
  and the eight minutes are real; the tidiness is ours.

[^elements]: Modern values: Mars's semi-major axis is 1.5237 AU, its
  sidereal period 686.98 days, its eccentricity 0.0934. The numbers in
  this section are standard orbital elements, not draft inventions.
