---
title: Unification (draft)
chapter: 50
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By the middle of the 1970s physics owned three quantum field theories that
worked. [QED](qed-and-the-taming-of-infinity.md) tamed the electromagnetic
force to ten decimal places. [The weak force](the-weak-force.md) and
[the strong force](the-strong-force.md) each had a theory of the same
shape. Three triumphs — and a suspicion. Why three? Why these particles,
these charges, these strengths? A theory that works is not yet a theory you
understand.

The suspicion had a name: gauge symmetry. Return to electromagnetism. In
[Maxwell's synthesis](maxwells-synthesis.md) the field was a bookkeeping
convenience, a way to carry the force across empty space. There is a deeper
reading. An electron is described by a quantum amplitude with a phase, and
no experiment can measure that phase absolutely. So demand more: let the
phase be reset independently at every point in space and time — a *local*
symmetry. The bare derivative $\partial_\mu$ now fails, because it compares
amplitudes at neighboring points that no longer share a convention. To
compare them you must install a connection, a field that says how the phase
twists from here to there. That field is the photon. Electromagnetism is
not added to the electron; it is *demanded* by insisting on local phase
symmetry.

This inverts [Noether's lesson](conservation-and-symmetry.md). There, a
symmetry of the laws implied a conserved quantity. Here, insisting that a
symmetry hold *locally* generates a force to enforce it. Symmetry stops
describing the laws and starts producing them.

Then you enlarge the symmetry. Electromagnetism's phase is the smallest
group, $U(1)$. Promote it to $SU(2) \times U(1)$ — a richer set of rotations
that mixes the electron with its neutrino — and the same demand spits out
four force-carrying fields at once. Their couplings assemble into a single
covariant derivative,

$$
D_\mu = \partial_\mu - i g\, \vec{T}\cdot\vec{W}_\mu - i g'\, \tfrac{Y}{2}\, B_\mu,
$$

with two strengths, $g$ and $g'$, one for each factor. This is electroweak
unification: the electromagnetic and weak forces are two faces of one
structure, split only by how we look at it.

One obstacle nearly killed the idea. A gauge symmetry forbids a mass term
for its carriers — the symmetry that generates a field also insists the
field be long-ranged and its quantum massless. Fine for the photon. Fatal
for the weak force, whose carriers are heavy, which is exactly why it is
[short-ranged](the-weak-force.md). How do you give a gauge boson mass
without wrecking the symmetry that made the theory sensible?

You hide the symmetry instead of breaking it. Add one more field, $\phi$,
with a potential

$$
V(\phi) = -\mu^2\, \phi^\dagger\phi + \lambda\,(\phi^\dagger\phi)^2.
$$

<figure>
<figcaption>The Higgs potential. Its minimum lies not at zero but on a
ring around it, so the field settles into a nonzero value everywhere —
hiding the symmetry the laws still obey. A cross-section through the
"wine-bottle" shape.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="The Higgs potential drawn as a W-shaped curve with a bump at the center and two equal minima on either side">
  <line x1="30" y1="175" x2="370" y2="175" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <line x1="200" y1="180" x2="200" y2="42" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <path d="M 55 48 C 105 130, 120 160, 145 160 C 175 160, 185 112, 200 112 C 215 112, 225 160, 255 160 C 280 160, 295 130, 345 48" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="145" cy="160" r="3.5" fill="var(--accent)"/>
  <circle cx="255" cy="160" r="3.5" fill="var(--accent)"/>
  <text x="206" y="52" font-size="13" fill="currentColor" font-style="italic">V</text>
  <text x="360" y="171" font-size="13" fill="currentColor" font-style="italic">&#966;</text>
  <text x="200" y="128" text-anchor="middle" font-size="12" fill="currentColor">&#966; = 0</text>
  <text x="255" y="192" text-anchor="middle" font-size="12" fill="currentColor">vacuum</text>
</svg>
</figure>

The minimum sits not at $\phi = 0$ but on a ring away from it. The field
settles into a nonzero value everywhere, even in empty space. The laws keep
their symmetry; the vacuum does not. Three of the four electroweak bosons
gain mass by coupling to this frozen background — the $W^+$, $W^-$, and $Z$
— while one combination stays massless: the photon. A single mixing angle
$\theta_W$ governs the split and ties the masses together as
$M_W = M_Z\cos\theta_W$.[^ewk] The leftover ripple in $\phi$ is a particle
in its own right — the Higgs boson, found at last in 2012.

That is the whole recipe. The full field content of the Standard Model: six
quarks and six leptons in three generations; twelve gauge bosons — the
photon, $W^+$, $W^-$, $Z$, and eight gluons; and the Higgs. From three
symmetry groups and one hidden field, every force but gravity. It predicted
the $Z$ before anyone saw it, the top quark's mass before it was weighed,
the Higgs decades before the machine to find it existed.[^history] No theory
has been tested harder or lied less.

And yet. It carries some nineteen numbers it cannot explain, says nothing
about gravity, and — the plainest crack of all, written in ordinary
starlight — cannot account for most of the matter in the universe.

Vera Rubin and Kent Ford spent the 1970s measuring how fast stars and gas
orbit the centers of spiral galaxies, radius by radius. Newton makes a
clean prediction. Beyond the bright inner region, where the visible mass
runs out, the orbital speed should fall off just as the planets do around
the Sun: $v \propto 1/\sqrt{r}$, a Keplerian decline. The curves did not
decline. Out past the last visible star, past where the light gives out,
the velocity holds flat.[^data]

<figure>
<figcaption>Rotation speed against radius in a spiral galaxy. The visible
mass alone predicts a Keplerian decline past the bright edge (dashed); the
measured speed stays flat (solid). Schematic — the real chapter plots
Rubin's data; the curves here are illustrative.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A galaxy rotation curve: the observed orbital speed rises then stays flat with radius, while the speed predicted from visible mass alone rises then declines">
  <line x1="45" y1="30" x2="45" y2="180" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
  <line x1="45" y1="180" x2="380" y2="180" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
  <line x1="130" y1="70" x2="130" y2="180" stroke="currentColor" stroke-width="0.75" stroke-dasharray="2 3" opacity="0.6"/>
  <path d="M 45 180 C 75 175, 100 72, 130 70 L 375 70" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 130 70 C 200 82, 290 120, 375 150" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="40" y="34" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">v</text>
  <text x="378" y="196" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">r</text>
  <text x="300" y="62" text-anchor="middle" font-size="12" fill="currentColor">observed</text>
  <text x="300" y="138" text-anchor="middle" font-size="12" fill="currentColor">Keplerian</text>
  <text x="130" y="196" text-anchor="middle" font-size="11" fill="currentColor">visible edge</text>
</svg>
</figure>

Read the flatness through the orbit law $v^2 = GM(r)/r$:

$$
v^2 = \frac{G\,M(r)}{r} \quad\Longrightarrow\quad M(r) = \frac{v^2\, r}{G}.
$$

A flat $v$ demands $M(r) \propto r$: mass keeps piling up where there is no
light to show it. Either galaxies are full of matter that neither shines nor
absorbs, or gravity itself fails at these scales.[^mond] The most successful
theory in the history of science has no particle for the majority of the
universe's mass. The book that began by
[measuring the world with shadows](measuring-the-world-with-shadows.md) ends
in one.

> **Interactive (planned):** plot Rubin's rotation velocities for a spiral
> galaxy against radius, using her published data (provenance in `/data/`).
> Overlay the Keplerian curve the visible mass alone would produce, and drag
> the visible-mass estimate up and down — you can never make the dashed
> prediction meet the flat data without inventing mass that isn't there.

## A prediction you can make

Our own galaxy will do. The Sun orbits the Milky Way's center at
$r \approx 8.0$ kpc, moving at $v \approx 220$ km/s. One kiloparsec is
$3.086\times10^{19}$ m, so $r = 2.47\times10^{20}$ m. The mass enclosed
within the Sun's orbit is

$$
M = \frac{v^2\, r}{G} = \frac{(2.20\times10^5)^2\,(2.47\times10^{20})}{6.674\times10^{-11}} \approx 1.79\times10^{41}\ \text{kg},
$$

about $9\times10^{10}$ solar masses — already comparable to all the stars
and gas we can count inside that radius. Now repeat the arithmetic at
$r \approx 50$ kpc, where the rotation speed is still near $200$ km/s but the
galaxy has essentially stopped shining: the enclosed mass climbs past
$4\times10^{11}$ solar masses. The light barely grew. The mass grew
fivefold. Whatever fills the gap, the Standard Model does not name it — and
that missing name is where the next book begins.

[^ewk]: The measured values are $M_W \approx 80.4$ GeV and
  $M_Z \approx 91.2$ GeV, giving $\cos\theta_W \approx 0.88$ and
  $\sin^2\theta_W \approx 0.223$. These are experimental numbers, not draft
  inventions; the relation $M_W = M_Z\cos\theta_W$ holds at leading order,
  with small, measured corrections.

[^history]: The clean "demand a local symmetry and a force falls out" story
  is told forward here. History ran sideways. Yang and Mills wrote the
  non-abelian gauge theory in 1954 with no massive carriers and no obvious
  home for it; Glashow, Weinberg, and Salam assembled electroweak
  unification across the 1960s; and the mass-giving mechanism was published
  in 1964 by Englert and Brout, by Higgs, and by Guralnik, Hagen, and
  Kibble, all nearly at once. The name stuck to one of six people.

[^data]: Rubin and Ford's spiral-galaxy rotation curves — from the early
  1970s, beginning with Andromeda — are the primary dataset the real chapter
  will digitize; provenance will live in `/data/`. Earlier hints existed:
  Fritz Zwicky inferred missing mass in the Coma cluster in 1933. But
  Rubin's curves made it undeniable, galaxy after ordinary galaxy.

[^mond]: The flat curves are the observation; "dark matter" is one reading
  of them. The rival, modified Newtonian dynamics, changes the force law at
  very small accelerations instead of adding mass. Dark matter currently
  explains far more — galaxy clusters, gravitational lensing, the cosmic
  microwave background — and is the consensus, but honesty requires naming
  the fork: the data show flat curves, not dark particles directly.
