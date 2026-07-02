---
title: Electricity and Magnetism Meet (draft)
chapter: 25
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

In 1785 electricity was a cabinet of curiosities. Rubbed amber picked up
straw; Leyden jars stored a jolt; lightning, Franklin had shown, was the
same stuff writ large. Magnetism was older still and just as orphaned:
lodestones and compass needles, catalogued for centuries, explained by
nobody. The two subjects sat in separate drawers. Everyone knew they were
different — electricity could be made and spent, magnetism came only in
inseparable north–south pairs — and the best authorities said the drawers
would stay shut to each other.

The first drawer opened to a measurement. Charles-Augustin de Coulomb hung
a light horizontal needle from a fine silver wire. A charged pith ball
rode one end of the needle; a second charged ball stood fixed nearby. The
electric force pushed the needle around, twisting the wire, and the wire's
resistance to twist — which Coulomb had already calibrated — turned angle
into force. Twist is an exquisite amplifier: the balance could feel
something like a hundred-thousandth of a newton. The verdict echoed
[Newton](universal-gravitation.md): halve the distance and the force
quadruples,

$$
F = k\,\frac{q_1 q_2}{r^2},
$$

an inverse-square law, the same shape as gravity, now written over
charges instead of masses.[^coulombdata] Nature apparently liked this law
enough to use it twice.

<figure>
<figcaption>Coulomb's torsion balance, seen from above. The fixed charge
repels the movable one, rotating the needle through the angle
<em>θ</em> against the twist of the suspending fiber. Calibrated twist
turns a tiny force into a readable angle.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Top view of a torsion balance: a needle suspended at its center, a movable charge at one end pushed away from a fixed charge, with the deflection angle marked">
  <circle cx="200" cy="110" r="90" fill="none" stroke="currentColor" stroke-width="0.75" opacity="0.35"/>
  <line x1="126.3" y1="161.6" x2="273.7" y2="58.4" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="200" cy="110" r="2.5" fill="currentColor"/>
  <circle cx="273.7" cy="58.4" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="290" cy="110" r="5" fill="currentColor"/>
  <path d="M 255 110 A 55 55 0 0 0 245.1 78.5" fill="none" stroke="currentColor" stroke-width="0.75"/>
  <text x="264" y="98" font-size="13" fill="currentColor" font-style="italic">&#952;</text>
  <text x="188" y="128" text-anchor="end" font-size="13" fill="currentColor">fiber</text>
  <text x="300" y="114" font-size="13" fill="currentColor">fixed charge</text>
  <text x="272" y="44" text-anchor="middle" font-size="13" fill="currentColor">movable charge</text>
</svg>
</figure>

> **Interactive (planned):** work Coulomb's own torsion balance. The
> reader sets the ball separation, reads the twist, and recovers the
> inverse square from Coulomb's published 1785 measurements — the real
> table from his memoir, digitized with provenance in `/data/`; this
> draft fakes nothing in its place.

For thirty-five years that was the whole story: two inverse-square
subjects, side by side, unrelated. Coulomb himself argued they must stay
unrelated. What changed everything was a new instrument — Volta's pile,
the first battery, which replaced the static spark with a steady, patient
current — and one Danish lecture. In April 1820 Hans Christian Ørsted ran
a current above a compass needle and watched the needle swing.[^oersted]
Not toward the wire. Not away from it. *Sideways*, settling crosswise to
the current, as if the wire were wrapped in rings of magnetic influence.
Every force in the book so far had pulled along the line between two
bodies. This one circled.

<figure>
<figcaption>Ørsted's surprise, end-on. With the current coming out of the
page, a compass needle placed anywhere nearby settles along a circle
around the wire — a force that circulates instead of attracting.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Cross-section of a wire carrying current out of the page, with concentric circular field lines around it and arrowheads showing their counterclockwise direction">
  <circle cx="200" cy="110" r="35" fill="none" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
  <circle cx="200" cy="110" r="65" fill="none" stroke="currentColor" stroke-width="1.25"/>
  <circle cx="200" cy="110" r="95" fill="none" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
  <circle cx="200" cy="110" r="5" fill="currentColor"/>
  <polygon points="265,98 261,110 269,110" fill="currentColor"/>
  <polygon points="135,122 131,110 139,110" fill="currentColor"/>
  <text x="274" y="88" font-size="13" fill="currentColor" font-style="italic">B</text>
  <text x="200" y="90" text-anchor="middle" font-size="13" fill="currentColor">current out of the page</text>
</svg>
</figure>

In Paris, André-Marie Ampère heard the news in September and had the
next act on stage within a week. If a current deflects a magnet, currents
should deflect each other — and they do. Two parallel wires attract when
their currents run the same way and repel when opposed, with a force per
length

$$
\frac{F}{L} = \frac{\mu_0\, I_1 I_2}{2\pi d},
$$

where $d$ is the separation and $\mu_0$ is a constant of nature. Ampère
pushed further: perhaps *all* magnetism is currents — a lodestone is a
chorus of tiny circulating charges, aligned. Electricity did not merely
touch magnetism; it might be all the magnetism there is.

> **Interactive (planned):** build a motor. Ørsted gives the twist,
> Ampère the force law; the reader assembles coil, magnet, and commutator
> on screen, choosing turns and current, and watches torque win or lose
> against friction — the same continuous rotation Faraday first coaxed
> from a dangling wire in 1821.

Michael Faraday supplied the symmetric question: if electricity makes
magnetism, does magnetism make electricity? A decade of attempts said no.
Coils wrapped around magnets sat inert. The answer, when it came in 1831,
had a sting in its tense: a magnet makes no current, but a *changing*
magnet does. Thrust a bar magnet into a coil and current flows; hold it
still and the current dies; pull it out and the current flows the other
way. Call $\Phi$ the magnetic flux — field strength times the loop area
it threads, $\Phi = BA$ when the field runs straight through. Then the
driving voltage is the rate of change,

$$
\mathcal{E} = -\frac{d\Phi}{dt},
$$

a derivative sitting at the heart of a law of nature, and the reason a
loop of copper spun near a magnet becomes a generator.

Faraday could not follow the mathematics of his French rivals, and out of
that weakness came the century's deepest idea. He took his "lines of
force" — the curves iron filings trace — literally: space around a magnet
or a charge is not empty but *conditioned*, filled with a real physical
state that pushes and pulls whatever arrives. The field, not the distant
body, acts.[^fields] Newton's action at a distance had always smelled
wrong, even to Newton. Faraday's ontology replaces it: charges make
fields, fields move charges. What a field made of light might be, and how
fast its changes travel, is the next chapter's business.

## A prediction you can make

Ørsted's experiment is one battery away. A long straight wire carrying
current $I$ makes a field of strength $B = \mu_0 I / 2\pi d$ at distance
$d$, with $\mu_0 = 4\pi \times 10^{-7}$ in SI units. Run $I = 10$ A and
hold a compass $d = 2$ cm below the wire:

$$
B = \frac{(4\pi \times 10^{-7}) \times 10}{2\pi \times 0.02}
  = 1.0 \times 10^{-4}\ \text{T} = 100\ \mu\text{T}.
$$

The compass also feels the Earth, whose horizontal field at mid-latitudes
is about $20\ \mu\text{T}$.[^earthfield] Align the wire north–south, so
the two fields fight at right angles, and the needle settles at
$\theta = \arctan(100/20) = \arctan 5 \approx 79^{\circ}$ from north —
swung nearly crosswise, exactly as Ørsted saw. Halve the current and the
prediction drops to $\arctan 2.5 \approx 68^{\circ}$. Check both.

[^coulombdata]: Coulomb's published case rests on remarkably few points —
  his 1785 memoir reports three separations, with torsion angles near the
  ratio $1 : 4 : 16$ as the distance halved — and historians still argue
  over how clean his raw trials were. The planned interactive uses his
  actual table, sparse as it is. Henry Cavendish had found the same law
  earlier and more precisely, and told no one; the world learned of it
  from Maxwell's edition of his papers a century later.

[^oersted]: The famous version — a chance flicker during a public
  lecture, students watching — is polished legend. Ørsted had been
  hunting a link between the forces for years on philosophical grounds,
  and the decisive experiments came in private weeks after the lecture
  demonstration. The straightened story stands; the serendipity is ours.

[^fields]: A qualification the drama deserves: in 1831 the field was a
  picture, not yet a theory. Ampère's camp derived the same phenomena
  from action at a distance, and no experiment then could tell the
  ontologies apart. The field earns its reality in the next chapter, when
  it acquires energy, momentum, and a travel time.

[^earthfield]: The horizontal component varies from roughly 15 to
  30 $\mu\text{T}$ with location (it is what steers a compass; the total
  field, 25–65 $\mu\text{T}$, includes a vertical part the needle cannot
  follow). Look up your local value before trusting the angle to better
  than a few degrees.
