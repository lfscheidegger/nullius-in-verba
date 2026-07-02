---
title: Light in a Dark Room (draft)
chapter: 5
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

Cairo, around the year 1015. A scholar from Basra sits under house
arrest,[^madness] with little to do but think about light. His name is
al-Ḥasan ibn al-Haytham. By the time he is released he will have
dismantled a thousand years of optics and, almost as a by-product,
invented a way of knowing that we still use.

Start with what everyone believed. The Greek geometers had built a
beautiful theory of vision. Euclid and Ptolemy — the same Ptolemy whose
planetary machinery we met in
[Saving the Appearances](saving-the-appearances.md) — taught that the eye
*emits* rays. Sight reaches out like a hand: visual rays leave the eye,
touch the object, and report back. The theory was not stupid. It explained
why we see along straight lines, and it let Euclid do real geometry with
vision — perspective, apparent size, mirrors.

But it would not survive contact with ordinary experience, if anyone
pressed. Ibn al-Haytham pressed. Stare at the Sun and the eye is dazzled;
an afterimage floats in the dark when you close your eyes. If sight were
something the eye sends out, why should the object *injure the eye*?
And when you open your eyes at night, the stars appear at once. Must the
eye's rays cross half the cosmos in an instant? Ibn al-Haytham's answer
was blunt: vision happens when light — a real, physical thing, moving in
straight lines — enters the eye from the object. The eye is not a lantern.
It is a window.

The decisive witness was a dark room. Seal a chamber against daylight,
prick one small hole in the wall, and the scene outside paints itself on
the opposite wall — in full color, in motion, and upside down.[^precursors]
Ibn al-Haytham did not merely marvel at this *camera obscura*; he analyzed
it. Every point of every lit object throws off light in all directions.
Ordinarily those rays overlap on a wall in a hopeless blur. The small hole
acts as a censor: from each point of the scene it admits only the one
narrow bundle of rays aimed through it. Straight lines from the top of a
tree pass through the hole and continue downward; lines from its base
continue upward. The image *must* invert. The geometry is the same similar
triangles we used to
[measure the world with shadows](measuring-the-world-with-shadows.md):

$$
\frac{h_{\text{image}}}{h_{\text{object}}} = \frac{b}{a},
$$

where $a$ is the distance from object to pinhole and $b$ from pinhole to
wall. Make the room deeper and the image grows in exact proportion. That
is a prediction, and it checks.

<figure>
<figcaption>The camera obscura. Light from each point of the object travels
in a straight line through the pinhole; rays from the top land at the
bottom, and the image inverts. Image and object heights stand in the ratio
of their distances from the hole.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Ray diagram of a camera obscura: an upright object at left, a wall with a pinhole in the middle, and an inverted image on a screen at right">
  <line x1="210" y1="20" x2="210" y2="105" stroke="currentColor" stroke-width="2"/>
  <line x1="210" y1="115" x2="210" y2="200" stroke="currentColor" stroke-width="2"/>
  <line x1="350" y1="20" x2="350" y2="200" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  <line x1="60" y1="40" x2="350" y2="175.3" stroke="currentColor" stroke-width="0.75" opacity="0.6"/>
  <line x1="60" y1="150" x2="350" y2="72.7" stroke="currentColor" stroke-width="0.75" opacity="0.6"/>
  <line x1="60" y1="150" x2="60" y2="44" stroke="currentColor" stroke-width="2"/>
  <path d="M 60 40 L 55 50 L 65 50 Z" fill="currentColor"/>
  <line x1="350" y1="72.7" x2="350" y2="171" stroke="currentColor" stroke-width="2.5"/>
  <path d="M 350 175.3 L 345 165 L 355 165 Z" fill="currentColor"/>
  <text x="60" y="170" text-anchor="middle" font-size="13" fill="currentColor">object</text>
  <text x="210" y="215" text-anchor="middle" font-size="13" fill="currentColor">pinhole</text>
  <text x="352" y="60" text-anchor="middle" font-size="13" fill="currentColor">image</text>
</svg>
</figure>

> **Interactive (planned):** a ray-optics sandbox built around the camera
> obscura. Drag the pinhole wider and watch the image brighten and blur as
> overlapping ray bundles smear each point; move the screen and verify the
> similar-triangle law; then add mirrors and a glass block to trace
> reflection and refraction by hand, the way Ibn al-Haytham's diagrams do.

He treated mirrors the same way: not with authority, but with apparatus.
Aim a beam at polished metal and measure. The reflected ray leaves in the
plane of the incident ray and the surface's perpendicular, at the equal
angle on the other side — $\theta_r = \theta_i$, confirmed by instrument,
not asserted by tradition. Refraction was harder. Pass light from air into
water or glass and it bends toward the perpendicular; back out, it bends
away. Ibn al-Haytham measured the bending carefully and established its
qualitative laws, but the clean rule beneath his tables eluded him and
everyone else for six more centuries.[^snell] We state it here because we
will need it soon:

$$
n_1 \sin\theta_1 = n_2 \sin\theta_2 ,
$$

where $n$ is a number belonging to each transparent material — about
$1.00$ for air, $1.33$ for water, $1.5$ for common glass — and the angles
are measured from the perpendicular. What that number *is* — what light
itself is — is a question this book will reopen more than once.

Set the results aside for a moment and look at the method, because the
method is the discovery. The *Book of Optics* proceeds in a loop we now
find obvious and his contemporaries did not: doubt the received account;
devise an arrangement of things — a dark room, a metal mirror, a graduated
instrument — that forces nature to answer; measure; let the geometry
follow the measurement. He wrote that the seeker after truth does not put
his trust in the ancients, but suspects them, and submits every claim to
proof.[^quote] That is an experiment's job description, written six
centuries before Newton — whose own work on light leaned on the tradition
this book began.

The eye became a window. The window became an instrument. And an
instrument, unlike an authority, can be checked by anyone with a dark room
and an awl. So check one.

## A prediction you can make

Sunlight through a pinhole makes a round spot on the floor — not because
the hole is round (it works with a square one), but because the spot is an
*image of the Sun*. The camera-obscura law says its size is the Sun's
angular size times the distance from the hole. The Sun's diameter is about
$1.39 \times 10^6$ km and its distance about $1.496 \times 10^8$ km, so
image height over screen distance equals Sun's diameter over Sun's
distance:

$$
\frac{d_{\text{spot}}}{L} = \frac{1.39 \times 10^6}{1.496 \times 10^8}
\approx 0.0093 .
$$

Prediction: about $9.3$ mm of image per metre of room. Pierce a card with
a pin, hold it $2$ m from the floor in direct sun, and the bright disc
should span about $18$ to $19$ mm — plus roughly the pinhole's own width
in blur. Measure it. If a partial solar eclipse ever finds you without a
filter, look down instead of up: every pinhole gap between tree leaves
will cast a floor full of crescents, each one obeying the same ratio.
Ibn al-Haytham watched eclipses exactly this way.

[^madness]: The story — that he promised the Caliph al-Hakim a scheme to
  regulate the Nile, saw it was impossible, and feigned madness to escape
  execution, remaining confined until the Caliph's death in 1021 — comes
  from biographers writing generations later. It may be embroidered. The
  *Book of Optics* from those Cairo years is not.

[^precursors]: The dark-room image itself was old news: the Chinese Mohists
  described it around the 4th century BCE, and a text from Aristotle's
  school asks why sunlight through a square hole makes a round spot. Ibn
  al-Haytham's originality was not the observation but the geometric
  analysis, and the use of the instrument as *evidence* — for the
  rectilinear propagation of light and against the visual-ray theory.

[^snell]: The sine law of refraction is due to Ibn Sahl (Baghdad,
  c. 984), whose work was forgotten, and independently to Willebrord
  Snellius (1621) and Descartes (1637), through whom it entered physics.
  Ptolemy and Ibn al-Haytham both compiled tables of refraction angles
  without extracting the law. Stating it in this chapter bends the
  historical order for the sandbox's sake.

[^quote]: Paraphrased from the *Doubts Concerning Ptolemy* (*al-Shukūk
  ʿalā Baṭlamyūs*); translations of the passage vary, and the real chapter
  will quote a cited scholarly translation rather than a paraphrase.
