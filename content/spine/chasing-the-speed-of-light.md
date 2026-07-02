---
title: Chasing the Speed of Light (draft)
chapter: 19
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

Does light take time to travel? For most of history the question felt
unaskable. Galileo tried: two men on facing hilltops, uncovering lanterns
at each other, hunting for a lag. He found none, and concluded only that
light was "extraordinarily rapid" — if it moved at all. Descartes went
further and declared it instantaneous. Meanwhile the
[previous chapter](what-is-light-round-one.md) left us with two rival
pictures of light, corpuscle and wave, and no experiment to choose between
them. The speed would eventually cast the deciding vote. But first someone
had to catch it.

The first clock fast enough was not on Earth. Among the moons
[Galileo's telescope](galileos-telescope.md) found circling Jupiter, the
innermost, Io, ducks into Jupiter's shadow every 42.5 hours — a lighthouse
blinking on a fixed schedule, visible across the solar system. In the
1670s Ole Rømer, working at the Paris Observatory, noticed the schedule
drifting. When Earth swings toward Jupiter, the eclipses run early; when
Earth recedes, they run late, the delays accumulating to many minutes.
The moon is not misbehaving. The *news* of each eclipse has farther to
travel. In 1676 Rømer went public with a prediction: the eclipse of
November 9 would come ten minutes behind the extrapolated schedule. It
did. Light, he announced, takes about 22 minutes to cross the diameter of
Earth's orbit.[^huygens] Finite, and measured — by a clock two light-hours
away.

<figure>
<figcaption>Rømer's geometry. Io's eclipses report on schedule when Earth
is near Jupiter and late when Earth is across its orbit: the news must
travel the extra diameter, about 16½ light-minutes by modern values
(Rømer said 22). Distances not to scale — Jupiter lies ten times farther
out than this page allows.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Earth's orbit around the Sun with two Earth positions six months apart, and sightlines to Jupiter and Io far to the right; the extra path equals the orbit's diameter">
  <circle cx="120" cy="110" r="70" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="120" cy="110" r="4" fill="var(--accent)"/>
  <text x="120" y="130" text-anchor="middle" font-size="13" fill="currentColor">Sun</text>
  <line x1="50" y1="110" x2="356" y2="110" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 3"/>
  <circle cx="190" cy="110" r="3" fill="currentColor"/>
  <text x="190" y="95" text-anchor="middle" font-size="13" fill="currentColor">Earth, near</text>
  <circle cx="50" cy="110" r="3" fill="currentColor"/>
  <text x="50" y="145" text-anchor="middle" font-size="13" fill="currentColor">six months later</text>
  <circle cx="366" cy="110" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="378" cy="102" r="2" fill="currentColor"/>
  <text x="366" y="90" text-anchor="middle" font-size="13" fill="currentColor">Jupiter, Io</text>
  <path d="M 50 165 L 50 172 L 190 172 L 190 165" fill="none" stroke="currentColor" stroke-width="0.75"/>
  <text x="120" y="190" text-anchor="middle" font-size="13" fill="currentColor">extra path: one orbit diameter</text>
</svg>
</figure>

Fifty years later the measurement improved by accident. James Bradley was
hunting stellar parallax — the yearly wobble that would finally prove the
Earth moves — and found instead that *every* star traces a tiny ellipse,
about $20.5''$ across, with the wrong phase for parallax.[^bradley] The
explanation is rain. Run through a vertical shower and you must tilt your
umbrella forward; ride a moving Earth through falling starlight and you
must tilt your telescope forward, by an angle set by the ratio of the two
speeds:

$$
\tan\theta = \frac{v_{\text{Earth}}}{c}.
$$

This *aberration of starlight* measures $c$ against Earth's orbital speed
directly — no eclipse timings, no debated solar-system distances — and it
agreed with Rømer. Two celestial methods, one number.

But both used the heavens as apparatus. A speed you can only measure with
a planet is a fact; a speed you can measure on a table is a *tool*. In
1849 Hippolyte Fizeau brought light's speed down to Earth. He sent a beam
through the gap between teeth of a spinning wheel, off to a mirror 8,633
meters away in Montmartre, and back through the wheel. Spin the wheel fast
enough and the returning light finds a tooth where a gap had been: the
beam winks out. With $N$ teeth turning at $f$ revolutions per second, the
first eclipse of the beam happens when the round trip $2L/c$ equals the
time to advance half a tooth-spacing, $1/(2Nf)$, so

$$
c = 4 L N f.
$$

Fizeau's wheel had 720 teeth and first darkened near 12.6 turns per
second, giving about $313{,}000$ km/s — high by five percent, but made
with brass and lamplight rather than moons.[^numbers]

Léon Foucault did better with a spinning mirror. Light strikes the
rotating mirror, flies a distance $L$ to a fixed mirror, and returns —
but in that round-trip time $2L/c$ the mirror has turned through a small
angle, and the beam comes back deflected by twice that:

$$
\theta = \frac{4\,\omega L}{c}.
$$

Everything on the right is knowable: the rotation rate $\omega$ from a
tuning-fork governor, $L$ with a surveyor's tape, $\theta$ with a
micrometer. By 1862 Foucault had folded the light path into a single room
and measured $c = 298{,}000 \pm 500$ km/s. The speed of light had become
a laboratory quantity, with an error bar.

> **Interactive (planned):** run Foucault's rotating-mirror measurement at
> its real precision. Set the mirror speed, watch the returned image creep
> across the micrometer scale, and fight the actual noise budget —
> rotation-rate stability, micrometer read-out, the finite width of the
> image. The apparatus parameters and the achievable error bar will follow
> Foucault's published 1862 arrangement, documented in `/data/`; nothing
> here will be faked.

And the spinning mirror answered the older question, the one this chapter
inherited. Newton's corpuscles explain refraction only if the dense medium
pulls the corpuscles in — light must travel *faster* in water than in air.
Waves bend the same ray the opposite way: light must travel *slower*. In
1850 Foucault ran his beam through a tube of water and raced it against
one in air. Water lost.[^wave] The corpuscle, as then conceived, was dead
by direct measurement.

So by 1862 the speed of light had a biography: born among Jupiter's
moons, raised on starlight, domesticated by a toothed wheel, and pinned
down by a mirror spinning in a Paris room. What it did not have was an
identity. Why *this* speed? Nothing in optics prefers one number over
another. The answer was already forming, in an apparently unrelated
subject — coils, magnets, and currents — and it will take this book
seven more chapters to earn it.

## A prediction you can make

Bradley's angle, modern value $20.5''$, plus Earth's orbital speed —
which you can compute yourself: the orbit's circumference is
$2\pi \times 1.496 \times 10^{8}$ km, the year is $3.156 \times 10^{7}$
seconds, so $v \approx 29.8$ km/s. The aberration formula then predicts

$$
c = \frac{v}{\tan\theta} \approx \frac{29.8}{9.94 \times 10^{-5}}
\approx 299{,}700 \text{ km/s},
$$

since $20.5''$ is $20.5/206265 \approx 9.94\times10^{-5}$ radians. The
modern value is $299{,}792.458$ km/s — your two-line estimate lands
within a tenth of a percent. Check the other direction too: at that speed,
light crosses the orbit's diameter, $2.99\times10^{8}$ km, in about 998
seconds — 16.6 minutes, the modern version of Rømer's 22.

[^huygens]: Idealized history, confessed: Rømer published the *delay*, not
  a speed — he never did the division, and his 22 minutes was about a
  third too long (the modern figure is 16.6). It was Christiaan
  Huygens, whom we met [nine chapters ago](huygens.md), who combined
  Rømer's delay with the best distance to the Sun and got roughly
  220,000 km/s: the first number ever attached to light.

[^bradley]: Bradley reported the semi-amplitude as about $20''$ (modern
  constant: $20.496''$) and from it derived a light-travel time from Sun
  to Earth of 8 minutes 12 seconds; the modern value is 8 minutes 19
  seconds. The story that the idea struck him watching a wind-vane on a
  boat on the Thames is told secondhand and may be polished.

[^numbers]: The figures in this paragraph and the next are the published
  results, not draft inventions: Fizeau, 1849, roughly 313,000 km/s over
  the Suresnes–Montmartre path; Foucault, 1862,
  $298{,}000 \pm 500$ km/s. Exact provenance will be documented in
  `/data/` when the interactive is built.

[^wave]: By 1850 the wave theory had already won most working physicists
  over on interference and diffraction, as the previous chapter told. The
  water race was less a turning of the tide than a public execution — and
  Fizeau, running the same experiment weeks behind Foucault, confirmed
  the verdict. "Slower in water" would itself need reinterpreting after
  1905, but that is a debt for a later chapter.
