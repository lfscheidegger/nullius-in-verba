---
title: What Is Light? Round One (draft)
chapter: 18
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

For a hundred years the question had been closed. Newton — the man who
had handed the world its [laws of motion](newton-laws-of-motion.md) — had
ruled that light is a stream of corpuscles, tiny particles flying in
straight lines. The evidence looked solid. Light traces straight rays
through [a dark room](light-in-a-dark-room.md) and casts sharp shadows.
[Sound](sound.md) pours around a doorway; light does not. Waves fill in
behind obstacles, so light, it seemed, could not be a wave.
[Huygens](huygens.md) had argued otherwise in 1690, building reflection
and refraction out of spreading wavefronts, but he could not explain the
sharpness of shadows, and Newton's authority buried him. By 1800 the
corpuscle was not a theory. It was a fact.

There were cracks. Grimaldi had noticed in the 1660s that shadow edges
are not perfectly sharp: faint bright and dark bands fringe them, as if
light leaked around the edge and argued with itself. And two beams of
light cross without deflecting each other, which streams of particles
should not manage. But no one had an experiment that forced a choice.

Thomas Young found one in 1801, and he found it by listening. He knew
from acoustics that two waves can *cancel*: two sound sources, a
half-wavelength out of step, produce silence. No stream of particles can
do that — add particles to particles and you only get more particles. So
here was a test with no escape. Take one beam of light, split it in two,
and let the halves overlap. If light is corpuscles, the overlap is simply
brighter. If light is a wave, there must be places where crest meets
trough and two lights make darkness.

Young let sunlight through a pinhole, then through two narrow openings
side by side, and caught the result on a screen.[^young] Stripes.
Alternating bands of bright and dark, exactly where two overlapping
ripples would agree and disagree. Darkness, from two lights combined.

The stripes carry numbers. Write each wave as $A\cos(kx - \omega t)$,
with $k = 2\pi/\lambda$ as in the [last chapter](sound.md). A point on
the screen sits at distance $x_1$ from one slit and $x_2$ from the other,
and the two arrivals add:

$$
A\cos(kx_1 - \omega t) + A\cos(kx_2 - \omega t)
= 2A\,\cos\!\left(\frac{k\,\Delta x}{2}\right)\cos\!\left(k\bar{x} - \omega t\right),
$$

where $\Delta x = x_2 - x_1$ and $\bar{x}$ is the mean distance. The
first cosine is the whole story: the point is bright when the path
difference is a whole number of wavelengths and dark when it is a half
number. For slits a distance $d$ apart and a point at angle $\theta$ from
the centerline, geometry gives $\Delta x = d\sin\theta$, so the bright
bands sit at

$$
d\sin\theta = m\lambda, \qquad m = 0, 1, 2, \dots
$$

On a screen at distance $L$, with the angles small, neighboring bright
bands are separated by $\Delta y = \lambda L / d$.

<figure>
<figcaption>Two slits, one point on the screen. The lower path is longer
by <em>d</em> sin <em>θ</em>. When that difference is a whole number of
wavelengths the two waves arrive in step and P is bright; a half number,
and they cancel.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Double-slit geometry: light arrives from the left at a barrier with two slits, and paths from each slit meet at a point P on a screen to the right">
  <line x1="15" y1="85" x2="55" y2="85" stroke="currentColor" stroke-width="1"/>
  <line x1="15" y1="110" x2="55" y2="110" stroke="currentColor" stroke-width="1"/>
  <line x1="15" y1="135" x2="55" y2="135" stroke="currentColor" stroke-width="1"/>
  <text x="35" y="72" text-anchor="middle" font-size="13" fill="currentColor">light</text>
  <line x1="90" y1="20" x2="90" y2="80" stroke="currentColor" stroke-width="3"/>
  <line x1="90" y1="90" x2="90" y2="130" stroke="currentColor" stroke-width="3"/>
  <line x1="90" y1="140" x2="90" y2="200" stroke="currentColor" stroke-width="3"/>
  <line x1="78" y1="85" x2="78" y2="135" stroke="currentColor" stroke-width="0.75"/>
  <text x="70" y="114" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">d</text>
  <line x1="90" y1="85" x2="350" y2="50" stroke="currentColor" stroke-width="1.25"/>
  <line x1="90" y1="135" x2="350" y2="50" stroke="currentColor" stroke-width="1.25"/>
  <line x1="90" y1="110" x2="350" y2="110" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 4" opacity="0.5"/>
  <line x1="90" y1="110" x2="350" y2="50" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 4" opacity="0.5"/>
  <text x="160" y="102" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">&#952;</text>
  <line x1="350" y1="20" x2="350" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="350" cy="50" r="3" fill="currentColor"/>
  <text x="360" y="54" text-anchor="start" font-size="13" fill="currentColor" font-style="italic">P</text>
  <text x="350" y="214" text-anchor="middle" font-size="13" fill="currentColor">screen</text>
</svg>
</figure>

Now run it backward: measure the stripe spacing with a ruler and the
equation hands you $\lambda$. Young did, and got wavelengths under a
thousandth of a millimeter — about 0.0007 mm for red light. That number
dissolves the corpuscle's best argument. Light *does* bend around
obstacles, exactly as a wave must; it bends on the scale of its
wavelength, which is why the eye sees sharp shadows and Grimaldi's fringes
hide at the edges.

> **Interactive (planned):** wave interference from first principles. The
> reader drops two point sources on a plane and watches circular ripples
> superpose, with amplitude computed honestly by summing the two cosines —
> no shortcut pattern painted on. Nodal lines emerge; the reader then
> narrows the sources into slits, drags the wavelength and slit spacing,
> and watches the fringe spacing obey $\lambda L/d$ live.

England mostly sneered — attacking Newton was bad manners — and the
decisive round moved to France. In 1817 the French Academy set its prize
competition on the theory of diffraction, and the judging committee was
stacked with corpuscularians: Laplace, Biot, and Poisson among them. A
young engineer named Augustin Fresnel submitted a memoir that made
Huygens quantitative: every point on a wavefront radiates wavelets; sum
them, phases and all, and the integral predicts the diffraction pattern
behind any obstacle. His computed fringes matched measurement.

Poisson went looking for the absurdity that would kill it. He found one.
Apply Fresnel's mathematics to the shadow of a circular disk, and the
sum says something ridiculous: at the exact center of the shadow — the
darkest place in the whole arrangement, by corpuscular lights — there
should be a bright spot, as bright as if the disk were not there. Every
point on the disk's rim lies at the same distance from the center of the
shadow, so the wavelets creeping past the edge all arrive in step.
Poisson offered it as a refutation. Arago, the one wave sympathizer on
the committee, went to the laboratory with a two-millimeter disk and
looked.[^maraldi]

The spot was there.

<figure>
<figcaption>Poisson's absurdity. Every point on the disk's rim is the
same distance from the center of the shadow, so the edge waves all
arrive in phase there. If light is a wave, the darkest place must hold a
bright point. It does.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Light from the left strikes an opaque disk seen edge-on; paths from the top and bottom of the disk's rim converge on a bright point at the center of the shadow on a screen">
  <line x1="15" y1="70" x2="60" y2="70" stroke="currentColor" stroke-width="1"/>
  <line x1="15" y1="110" x2="60" y2="110" stroke="currentColor" stroke-width="1"/>
  <line x1="15" y1="150" x2="60" y2="150" stroke="currentColor" stroke-width="1"/>
  <text x="37" y="58" text-anchor="middle" font-size="13" fill="currentColor">light</text>
  <rect x="136" y="80" width="8" height="60" fill="currentColor"/>
  <text x="140" y="158" text-anchor="middle" font-size="13" fill="currentColor">disk</text>
  <line x1="144" y1="80" x2="340" y2="110" stroke="currentColor" stroke-width="1"/>
  <line x1="144" y1="140" x2="340" y2="110" stroke="currentColor" stroke-width="1"/>
  <text x="230" y="86" text-anchor="middle" font-size="13" fill="currentColor">equal paths</text>
  <line x1="340" y1="20" x2="340" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <rect x="337" y="80" width="6" height="60" fill="currentColor" opacity="0.25"/>
  <text x="330" y="72" text-anchor="end" font-size="13" fill="currentColor">geometric shadow</text>
  <circle cx="340" cy="110" r="3" fill="var(--accent)"/>
  <line x1="305" y1="178" x2="337" y2="114" stroke="currentColor" stroke-width="0.75" opacity="0.6"/>
  <text x="300" y="194" text-anchor="middle" font-size="13" fill="currentColor">bright spot</text>
</svg>
</figure>

Fresnel took the prize, and within a generation the wave theory of light
was orthodoxy. Notice the shape of the victory: the theory's most
committed opponent derived its most preposterous prediction, precisely to
destroy it, and the experiment answered him. A theory that survives that
kind of attack has earned something no amount of friendly evidence can
buy. But mark two loose threads before moving on. First: a wave is a wave
*in something* — waving what?[^medium] Second, this chapter is called
Round One for a reason. The corpuscle is down, not dead, and when it
returns it will not be as Newton imagined it.

## A prediction you can make

Point a red laser pointer ($\lambda = 650$ nm) at a standard double-slit
slide with slits $d = 0.10$ mm apart, and put a wall $L = 2.0$ m
away.[^numbers] The fringe spacing should be

$$
\Delta y = \frac{\lambda L}{d}
= \frac{(650 \times 10^{-9}\ \text{m})(2.0\ \text{m})}{1.0 \times 10^{-4}\ \text{m}}
= 1.3 \times 10^{-2}\ \text{m} = 13\ \text{mm}.
$$

Tape up paper and measure with a ruler: bright bands 13 mm apart, a
pattern you can check to a millimeter. Then run it backward — measure the
spacing, solve for $\lambda$, and you have measured the wavelength of
light with hardware from a stationery drawer.

[^young]: The canonical "two slits" is a later tidying of the story.
  Young's earliest demonstrations used pinholes and a thin card splitting
  a sunbeam, and his clearest interference evidence came from analogies
  with water waves in a ripple tank; the clean two-slit diagram is how his
  argument was later crystallized for the lecture hall. The physics of
  this chapter is his; the staging is the textbooks'.

[^maraldi]: History's footnote to the footnote: the spot had been seen
  and recorded a century earlier, by Delisle and by Maraldi around
  1715–1723, and forgotten — an observation with no theory to make it
  matter. And the spot now bears Poisson's name, a permanent monument to
  the argument he lost.

[^medium]: The nineteenth century's answer was the luminiferous ether, a
  medium filling all space for light to wave in. This book will take the
  ether seriously, spend it honestly, and watch it die — but not for
  eleven more chapters.

[^numbers]: These are real, representative values, not a measurement
  record: 650 nm is a typical red laser-pointer wavelength, and 0.10 mm
  is a standard slit separation on commercial demonstration slides.
  Young's own figure for red light, about 0.0007 mm, is likewise his
  published value converted to metric.
