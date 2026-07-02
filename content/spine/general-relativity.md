---
title: General Relativity (draft)
chapter: 32
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1900, [Newton's gravitation](universal-gravitation.md) was the most
successful theory in the history of science. Its masterpiece was
[Neptune](the-planet-at-the-tip-of-a-pen.md): a planet found at the tip of
a pen, deduced from wobbles in Uranus. Le Verrier, the man who did that
deduction, then turned the same machinery on Mercury — and Newton's
ledger did not balance. Mercury's orbit is an ellipse, but the ellipse
itself slowly turns: its perihelion advances. Most of the advance comes
from the tugs of the other planets, and Le Verrier computed those tugs
to exhaustion. A residue remained. After every known planet had been
paid its due, Mercury's perihelion still crept forward by 43 seconds of
arc per century.[^leverrier] Kepler lost the circles to eight
arcminutes; Newton now stood accused by 43 arcseconds.

Le Verrier reached for the trick that had worked before: an unseen
planet, inside Mercury's orbit, tugging the perihelion around. He named
it Vulcan. Astronomers hunted it through eclipses and transits for half
a century. It does not exist. This time the anomaly was not a missing
mass. It was a crack in the law itself.

The crack widened from an unexpected direction.
[Special relativity](special-relativity-space-and-time.md) had just
abolished instantaneous action at a distance: no influence outruns
light. But Newton's gravity acts *now*, across any gulf, at infinite
speed. The two theories could not both stand. Gravity needed rebuilding
from the ground, and Einstein began with the ground's oldest fact — the
one [Galileo](galileos-mechanics.md) established by rolling balls down
ramps: every body falls with the same acceleration, whatever it is made
of.[^eotvos] Einstein later called the next thought the happiest of his
life. A person falling freely does not feel their own weight. Inside a
sealed, freely falling box, gravity is *gone*: balls float, physics
looks exactly like empty space. Conversely, a box accelerating upward
in empty space feels exactly like a box at rest on the Earth. This is
the **equivalence principle**, and it carries an astonishing cargo. If
a laser beam crosses the accelerating box, the floor rushes up to meet
it; seen from inside, the beam curves downward. But that box is
indistinguishable from a box in gravity. Therefore **gravity bends
light**. By the same argument, clocks at the bottom of the box tick
slower than clocks at the top — near a mass, by the fraction
$gh/c^2$ per height $h$ — and **gravity slows time**.

A "force" that deflects everything identically, light included, and that
vanishes entirely in a falling frame, is behaving less like a force than
like geometry. That is Einstein's answer, eight hard years in the
making.[^eight] Mass and energy curve spacetime; freely falling bodies
follow **geodesics** — the straightest possible paths — through the
curved geometry. The Earth does not orbit because a force drags it off
its straight line. It orbits because, in the spacetime the Sun has
curved, its path *is* straight.

<figure>
<figcaption>A geodesic: the straightest path available on a curved
surface. On a sphere it is a great circle. The airliner's route from A
to B bows toward the pole not to detour but because that <em>is</em>
the straight line; the path that looks straight on the drawing — the
dashed parallel of latitude — is the longer way round. Spacetime plays
the sphere; planets play the airliner.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A sphere with two surface points joined by a great-circle arc bowing toward the pole and, dashed, a longer parallel-of-latitude path">
  <circle cx="200" cy="110" r="90" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <ellipse cx="200" cy="110" rx="90" ry="28" fill="none" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <path d="M 140 100 Q 200 52 260 100" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
  <path d="M 140 100 Q 200 114 260 100" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>
  <circle cx="140" cy="100" r="3.5" fill="currentColor"/>
  <circle cx="260" cy="100" r="3.5" fill="currentColor"/>
  <text x="128" y="96" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <text x="272" y="96" text-anchor="middle" font-size="13" fill="currentColor">B</text>
  <text x="200" y="66" text-anchor="middle" font-size="13" fill="currentColor">geodesic</text>
  <text x="200" y="130" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.7">longer</text>
</svg>
</figure>

> **Interactive (planned):** geodesics on curved surfaces. Launch a
> marble across a sphere, a saddle, and a funnel-shaped surface; the sim
> draws the straightest available path and lets you verify it is locally
> straight by zooming in. Then curve the surface like a star's spacetime
> and watch launched paths become orbits — including precessing ones.

In November 1915 Einstein completed the field equations that say *how
much* matter curves spacetime, and immediately did the calculation this
whole story has been waiting for. Near the Sun the curvature strengthens
gravity slightly beyond Newton's $1/r^2$, and an orbiting ellipse no
longer quite closes: each orbit, the perihelion advances by

$$
\Delta\phi = \frac{6\pi G M}{c^2\, a\,(1 - e^2)},
$$

where $M$ is the Sun's mass and $a$, $e$ are the orbit's elements. No
Vulcan, no adjustable knob — the number falls out of the geometry. For
Mercury it comes to 43 arcseconds per century. Einstein wrote that he
had palpitations of the heart. Half a century after Le Verrier posted
the debt, the theory paid it to the last arcsecond.

A postdiction, however beautiful, explains what is already known. The
theory also made a naked prediction. Starlight grazing the Sun's edge
should bend through

$$
\alpha = \frac{4GM}{c^2 b} \approx 1.75'' \quad (b = R_\odot),
$$

twice the value a naive Newtonian calculation gives for a falling
corpuscle — the factor of two is pure spacetime curvature. In May 1919
Eddington's expeditions photographed stars near the eclipsed Sun from
Príncipe and Sobral and compared their positions against night plates
taken months earlier. The stars had shifted, away from the Sun, by an
amount consistent with 1.75 arcseconds and inconsistent with both zero
and the Newtonian half-value.[^eddington] Newspapers announced that
space was curved. They were right.

<figure>
<figcaption>Light bending. Starlight grazing the Sun is deflected toward
it, so the observer, sighting back along the arriving ray (dashed), sees
the star displaced <em>away</em> from the Sun. The real deflection at
the solar limb is 1.75 arcseconds; this drawing exaggerates it roughly a
hundred-thousand-fold.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A light ray from a star bending around the Sun toward an observer, with a dashed sightline showing the star's displaced apparent position">
  <circle cx="200" cy="150" r="20" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 30 120 L 200 90 L 370 120" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="200" y1="90" x2="30" y2="60" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>
  <circle cx="30" cy="120" r="3.5" fill="currentColor"/>
  <circle cx="30" cy="60" r="3.5" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="370" cy="120" r="3.5" fill="var(--accent)"/>
  <text x="52" y="136" font-size="13" fill="currentColor">true star</text>
  <text x="52" y="58" font-size="13" fill="currentColor">apparent star</text>
  <text x="200" y="190" text-anchor="middle" font-size="13" fill="currentColor">Sun</text>
  <text x="368" y="140" text-anchor="end" font-size="13" fill="currentColor">Earth</text>
</svg>
</figure>

> **Interactive (planned):** light bending. Aim rays past a mass and
> watch geodesics deflect by $4GM/c^2 b$; slide the impact parameter and
> the mass. A second mode overlays Eddington's actual 1919 star fields —
> the Sobral and Príncipe plate measurements are published, and the real
> chapter will use them, with provenance documented in `/data/`. This
> draft fakes nothing in their place.

The field equations themselves — the language that makes "curvature"
precise — need mathematics this book has not yet taught, and we will
not pretend otherwise. What matters here is the shape of the event: an
anomaly the old trick could not cure, an old principle taken with total
seriousness, and a theory that paid a fifty-year-old debt and then
bought something new with the change.

## A prediction you can make

Compute Mercury's relativistic perihelion advance yourself. Take
$GM = 1.327 \times 10^{20}$ m³/s², $c = 2.998 \times 10^{8}$ m/s,
and Mercury's elements $a = 5.791 \times 10^{10}$ m,
$e = 0.2056$.[^values] Then $GM/c^2 = 1477$ m, and per orbit

$$
\Delta\phi = \frac{6\pi \times 1477}{5.791 \times 10^{10} \times (1 - 0.2056^2)}
\approx 5.02 \times 10^{-7} \text{ rad}.
$$

Mercury's year is 87.97 days, so a century holds
$36525 / 87.97 \approx 415.2$ orbits, giving
$2.08 \times 10^{-4}$ rad per century — multiply by $206265''$ per
radian to get **43.0 arcseconds per century**. The residue Le Verrier
could not explain, and radar ranging now confirms to a fraction of a
percent.

[^leverrier]: Idealized slightly: Le Verrier's 1859 value was about
  38 arcseconds per century; Simon Newcomb's re-analysis in 1882 raised
  it to roughly 43. The modern figure is $42.98''$ per century, out of a
  total apparent precession near $5600''$ — the rest is planetary
  perturbations and the precession of Earth's own coordinate frame.

[^eotvos]: And established ever more finely since: Eötvös's torsion
  balances around 1900 confirmed that all materials fall alike to about
  one part in $10^8$; the MICROSCOPE satellite (2017–2022) pushed the
  equivalence principle past one part in $10^{14}$.

[^eight]: The narrative here is straightened, as usual. From the happy
  thought of 1907 to the field equations of 1915 runs eight years of
  false starts, an *Entwurf* theory Einstein defended and then
  abandoned, and a final month racing Hilbert. The logic on this page is
  the reconstructed straight line, not the walked path.

[^eddington]: Honestly told, the 1919 data were marginal: Sobral's best
  instrument gave $1.98'' \pm 0.12''$, Príncipe $1.61'' \pm 0.30''$, and
  a third data set was discarded for instrumental faults — a choice
  critics have picked at ever since. History vindicated the verdict:
  modern radio interferometry confirms the relativistic deflection to
  about one part in $10^4$.

[^values]: Standard values, not draft inventions: IAU solar gravitational
  parameter and Mercury's mean orbital elements. The observed excess
  precession, $42.98 \pm 0.04$ arcseconds per century, matches the
  computed $43.0$ within measurement error.
