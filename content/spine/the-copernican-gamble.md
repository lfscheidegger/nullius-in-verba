---
title: The Copernican Gamble (draft)
chapter: 6
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1500 the machinery of [Saving the Appearances](saving-the-appearances.md) had run for thirteen centuries. Ptolemy's nested circles predicted eclipses, fixed the calendar, and put every planet within a degree or two of where it belonged. The system worked. But it worked strangely. Hidden inside each planet's private gearwork was an unexplained copy of the Sun's year. Mercury and Venus never wander far from the Sun; their circles were chained to it. Mars, Jupiter, and Saturn each rode an epicycle that turned once a year — exactly one year, all three — and each slipped into its backward loop only at opposition, when the planet stood opposite the Sun in our sky. Five planets, five separate mechanisms, the same year smuggled into every one. Ptolemy could accommodate the coincidence. He could not explain it.

Nicolaus Copernicus, a church canon working in the far north of Poland, proposed to explain it by a trade. Stop the sky. Move the Earth. Put the Sun at the center; let Earth spin daily and circle it yearly as the third planet. He worked out the consequences over three decades and published them in 1543, the year of his death.

The first thing the trade buys is retrograde motion — for free. Earth's mean orbital speed is 29.8 km/s; Mars's is 24.1. We travel the smaller, faster circle, so every couple of years we lap Mars, and while we pass it the line of sight swings backward. Mars appears to reverse against the stars the way a slower car seems to slide backward as you overtake it. The loop happens at opposition because opposition *is* the moment of passing. The year buried in every planet's mechanism is our own year, seen in five mirrors.

<figure>
<figcaption>Retrograde without machinery. Five equal time steps around opposition, drawn to scale for circular orbits with radii in the ratio 1 : 1.52. Earth, on the faster inner circle, overtakes Mars; the line of sight swings back, and Mars's projected position against the distant stars reverses between steps 2 and 4.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Earth overtaking Mars on concentric circular orbits, with sight lines showing Mars's apparent path reversing against the stars">
  <circle cx="110" cy="110" r="45" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="110" cy="110" r="68.4" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="110" cy="110" r="4" fill="currentColor"/>
  <text x="110" y="98" text-anchor="middle" font-size="13" fill="currentColor">Sun</text>
  <text x="110" y="80" text-anchor="middle" font-size="13" fill="currentColor">Earth</text>
  <text x="110" y="57" text-anchor="middle" font-size="13" fill="currentColor">Mars</text>
  <line x1="138.9" y1="144.5" x2="345" y2="119.6" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
  <line x1="150.8" y1="129.0" x2="354" y2="103.0" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
  <line x1="155" y1="110" x2="363" y2="110" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
  <line x1="150.8" y1="91.0" x2="372" y2="119.3" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
  <line x1="138.9" y1="75.5" x2="381" y2="104.7" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
  <circle cx="138.9" cy="144.5" r="2.5" fill="currentColor"/>
  <circle cx="150.8" cy="129.0" r="2.5" fill="currentColor"/>
  <circle cx="155" cy="110" r="2.5" fill="currentColor"/>
  <circle cx="150.8" cy="91.0" r="2.5" fill="currentColor"/>
  <circle cx="138.9" cy="75.5" r="2.5" fill="currentColor"/>
  <text x="127" y="149" text-anchor="middle" font-size="13" fill="currentColor">1</text>
  <text x="139" y="134" text-anchor="middle" font-size="13" fill="currentColor">2</text>
  <text x="143" y="114" text-anchor="middle" font-size="13" fill="currentColor">3</text>
  <text x="139" y="95" text-anchor="middle" font-size="13" fill="currentColor">4</text>
  <text x="133" y="68" text-anchor="middle" font-size="13" fill="currentColor">5</text>
  <circle cx="171.2" cy="140.6" r="2.5" fill="currentColor"/>
  <circle cx="176.6" cy="125.7" r="2.5" fill="currentColor"/>
  <circle cx="178.4" cy="110" r="2.5" fill="currentColor"/>
  <circle cx="176.6" cy="94.3" r="2.5" fill="currentColor"/>
  <circle cx="171.2" cy="79.4" r="2.5" fill="currentColor"/>
  <polyline points="345,119.6 354,103.0 363,110 372,119.3 381,104.7" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
  <circle cx="345" cy="119.6" r="2.5" fill="currentColor"/>
  <circle cx="354" cy="103.0" r="2.5" fill="currentColor"/>
  <circle cx="363" cy="110" r="2.5" fill="currentColor"/>
  <circle cx="372" cy="119.3" r="2.5" fill="currentColor"/>
  <circle cx="381" cy="104.7" r="2.5" fill="currentColor"/>
  <text x="337" y="133" text-anchor="middle" font-size="13" fill="currentColor">1</text>
  <text x="388" y="99" text-anchor="middle" font-size="13" fill="currentColor">5</text>
  <text x="381" y="152" text-anchor="end" font-size="13" fill="currentColor">Mars against the stars</text>
</svg>
</figure>

> **Interactive (planned):** *Same sky, two models.* You watch Mars crawl through a full season of retrograde against the fixed stars. A toggle switches the machinery underneath the sky: Ptolemy's deferent-and-epicycle or Copernicus's two moving planets. Both mechanisms reproduce the same apparent path — that is the point. Mars's positions will come from a documented modern ephemeris.

The second purchase is bigger: the solar system acquires a scale. Ptolemy's mechanism for each planet fixes only the *ratio* of its epicycle to its deferent; the overall sizes are free, and the ordering of the planets is convention. In Copernicus's arrangement, geometry pins every orbit in units of the Earth–Sun distance. Take Venus, which never strays more than about 46° from the Sun. If Venus rides a circle inside ours, then at its greatest elongation our line of sight just grazes that circle, making a right angle at Venus — the same trick of triangles that [measured the world with shadows](measuring-the-world-with-shadows.md):

$$
a_{\text{Venus}} = (1\ \text{AU}) \times \sin\theta_{\max} \approx \sin 46^\circ \approx 0.72\ \text{AU}.
$$

<figure>
<figcaption>The triangle that sizes Venus's orbit. At greatest elongation the sight line from Earth grazes Venus's circle, so the angle at Venus is right and sin&#8202;<em>θ</em> = <em>a</em>/1 AU. Drawn to scale for <em>a</em> = 0.72 AU, <em>θ</em> &#8776; 46°.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Right triangle formed by the Sun, Earth, and Venus at greatest elongation, with Venus's circular orbit">
  <circle cx="150" cy="110" r="87" fill="none" stroke="currentColor" stroke-width="1"/>
  <line x1="150" y1="110" x2="270" y2="110" stroke="currentColor" stroke-width="1"/>
  <line x1="270" y1="110" x2="195.9" y2="32.0" stroke="currentColor" stroke-width="1"/>
  <line x1="150" y1="110" x2="213.1" y2="50.1" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M 207.3 55.6 L 212.8 61.4 L 218.6 55.9" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 240 110 A 30 30 0 0 1 249.3 88.2" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="150" cy="110" r="4" fill="currentColor"/>
  <circle cx="270" cy="110" r="3" fill="currentColor"/>
  <circle cx="213.1" cy="50.1" r="3" fill="currentColor"/>
  <text x="150" y="128" text-anchor="middle" font-size="13" fill="currentColor">Sun</text>
  <text x="270" y="128" text-anchor="middle" font-size="13" fill="currentColor">Earth</text>
  <text x="206" y="40" text-anchor="middle" font-size="13" fill="currentColor">Venus</text>
  <text x="174" y="76" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">a</text>
  <text x="224" y="99" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">θ</text>
  <text x="40" y="196" text-anchor="start" font-size="13" fill="currentColor">Venus's orbit</text>
</svg>
</figure>

A similar triangle sizes each outer orbit. One measurement per planet, and the whole system snaps into proportion:[^distances]

| Planet  | Copernicus (AU) | Modern (AU) |
|:--------|----------------:|------------:|
| Mercury |           0.376 |       0.387 |
| Venus   |           0.719 |       0.723 |
| Mars    |           1.520 |       1.524 |
| Jupiter |           5.219 |       5.203 |
| Saturn  |           9.174 |       9.537 |

That a canon with no telescope got the architecture of the solar system right to a few percent is the strongest argument that the arrangement is real, and not merely one more way of saving the appearances.

Now the costs. Copernicus kept the ancient axiom of uniform circular motion — he was proud of it, having purged Ptolemy's equant as a cheat. But real planets run faster on one side of their orbits than the other, so he patched his circles with smaller riding circles. The finished system used roughly as many circles as Ptolemy's and predicted planetary positions no better.[^history] The gamble bought naturalness and scale, not accuracy.

The second cost cut deeper. If Earth truly rides a circle 2 AU across, then over six months we view the stars from two vantage points 300 million kilometers apart, and the nearby stars should shift against the far ones — parallax, the shift your thumb makes when you blink one eye and then the other. For a star at distance $d$, the small-angle shift in seconds of arc is

$$
p'' \approx 206{,}265 \times \frac{1\ \text{AU}}{d}.
$$

Nobody had ever seen any. Tycho Brahe, whose instruments reached about one arcminute, looked hard and found none, which forces $d$ beyond $206{,}265/60 \approx 3{,}400$ AU — hundreds of times farther than Saturn, with nothing but void between. Tycho judged that absurd and proposed a compromise: the five planets circle the Sun, and the Sun circles a stationary Earth, a system that reproduces the same appearances without the monstrous gap.[^starsize] Copernicus had simply accepted the void: the stars are that far, and farther. He was right beyond his own imagining. The nearest star sits at about 270,000 AU, its parallax 0.77 seconds of arc, and no instrument detected any stellar parallax until 1838.[^bessel]

That is the shape of the gamble. Heliocentrism did not win because it fit the data better; in 1543 it did not. It won because it *explained* what the old system could only postulate, because it made the heavens measurable, and because it wrote one enormous cheque — parallax — that took three centuries to clear. Meanwhile the two skies looked identical — the interactive's toggle is honest. Breaking the tie would take a new instrument, and data too good to forgive a circle.

## A prediction you can make

If Copernicus is right, a retrograde of Mars is nothing but Earth lapping Mars, and its rhythm follows from two numbers you can look up: Earth's year, 365.26 days, and Mars's, 686.98 days. Earth gains a full lap at the difference of the two rates:

$$
\frac{1}{T_{\text{lap}}} = \frac{1}{365.26\ \text{d}} - \frac{1}{686.98\ \text{d}} \approx \frac{1}{779.9\ \text{d}}.
$$

So Mars should stand at opposition — and run retrograde — every 780 days, about two years and seven weeks. Check it against any almanac. Mars reached opposition on 2020 October 13 and again on 2022 December 8: an interval of 786 days. The next pair, 2025 January 16 to 2027 February 19, spans 764 days. The average rhythm is exactly as predicted; the individual beats wobble by a couple of weeks, because Mars's orbit is not the circle this chapter assumed but an [ellipse](../vocab/ellipse.md) — a discrepancy we bank now and cash two chapters from here.

[^history]: Two confessions of compression. Copernicus's motives were as much aesthetic as empirical — the equant offended him more than retrograde loops did — and the popular story that his system was dramatically simpler is folklore: circle for circle, *De Revolutionibus* is about as baroque as the *Almagest*, and no more accurate. What it had was the explanation of the coincidences, and the scale.

[^distances]: Copernican values are the mean orbital radii as commonly transcribed from *De Revolutionibus* (Book V); modern values are present-day semi-major axes. The real chapter will cite a specific edition and page for each figure.

[^starsize]: Tycho had a second, entirely rational objection. To the naked eye a bright star shows an apparent disk of an arcminute or so; at Copernican distances such a disk would have to be around 1 AU across — hundreds of Suns wide. The rebuttal came only later: the naked-eye disk is spurious, an artifact of optics and atmosphere, and real stellar disks are far tinier.

[^bessel]: Friedrich Bessel, in 1838, measured the parallax of the star 61 Cygni as 0.314 seconds of arc with a purpose-built telescope; the modern value is 0.286 arcseconds, putting the star about 11.4 light-years — roughly 720,000 AU — away. It was the final settlement of the Copernican debt, paid 295 years after the book.
