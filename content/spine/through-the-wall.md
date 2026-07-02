---
title: Through the Wall (draft)
chapter: 40
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1927 the Schrödinger equation had done the impossible. It had drawn
the [hydrogen spectrum](the-hydrogen-atom-solved.md) out of a single wave,
and physicists began to trust it. A particle was no longer a point with a
definite place; it was a spread of probability amplitude, a
[matter wave](matter-waves.md), and you found it by solving for its shape.
But one corner of physics still refused to fall in line. Radioactivity.

Rutherford had [packed the atom's mass into a tiny nucleus](inside-the-atom.md)
and spent twenty years firing alpha particles at it. Some heavy nuclei —
uranium, radium, polonium — fired alpha particles back out on their own,
unprompted. This was alpha decay, and it hid a contradiction nobody could
resolve.

Picture the alpha particle inside the nucleus. Near the center the strong
nuclear attraction holds it in a deep well. Drag it just past the nuclear
edge and the electric repulsion of all those protons takes command,
hurling it outward. Between the well and freedom stands a hill: the
Coulomb barrier. Rutherford had measured its height himself. When he threw
alpha particles of $8.8$ MeV at uranium, they scattered as if off a pure
electric wall and never touched the nucleus.[^numbers] So the barrier
stands at least that tall. Yet uranium calmly emits alpha particles of
only about $4.2$ MeV — half the energy needed to clear the very hill they
had somehow crossed.

Classically this is gibberish. A ball that cannot roll over a hill is
never found on the far side of it. Worse, the rates made a mockery of any
ordinary mechanism: across the radioactive elements, half-lives ranged
from a fraction of a microsecond to billions of years — twenty-four orders
of magnitude — while the alpha energies varied by less than a factor of
two. No force anyone knew was that sensitive to so small a change.

In 1928 George Gamow took the wave seriously, and Ronald Gurney and Edward
Condon reached the same idea in the same year.[^history] Their move was to
stop treating the barrier as a wall and start solving Schrödinger's
equation straight through it.

Where a particle carries less energy than the barrier before it, the
equation changes character. Outside, where $E > V$, the wavefunction
oscillates — a traveling wave. Inside the forbidden region, where $E < V$,
it does not oscillate at all. It decays:

$$
\psi(x) \sim e^{-\kappa x}, \qquad \kappa = \frac{\sqrt{2m\,(V - E)}}{\hbar}.
$$

The amplitude falls off exponentially, but it never reaches zero. If the
wall is thin enough, $\psi$ is still nonzero at the far edge — and beyond
it the wave simply travels onward, smaller but genuine. Probability has
leaked through a barrier the particle could never climb. The particle
tunnels.

<figure>
<figcaption>A wave meets a barrier taller than its energy. Left of the
wall the wavefunction oscillates; inside it decays smoothly, with no
oscillation; beyond it the wave revives at reduced amplitude. The survivor
carries the tunneling probability.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A quantum wavefunction: a large oscillation on the left, an exponential decay inside a rectangular barrier, and a small oscillation on the right">
  <line x1="30" y1="140" x2="385" y2="140" stroke="currentColor" stroke-width="0.5" opacity="0.35"/>
  <rect x="185" y="45" width="50" height="95" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 40 140 C 50 108, 59 108, 69 140 C 79 172, 88 172, 98 140 C 108 108, 117 108, 127 140 C 137 172, 146 172, 156 140 C 166 108, 175 108, 185 140 C 197 128, 205 128, 215 140 C 223 145, 229 145, 235 140 C 245 130, 254 130, 264 140 C 274 150, 283 150, 293 140 C 303 130, 312 130, 322 140 C 332 150, 341 150, 351 140 C 361 130, 370 130, 380 140" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="210" y="38" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">V &gt; E</text>
  <text x="95" y="98" text-anchor="middle" font-size="13" fill="currentColor">incident</text>
  <text x="322" y="118" text-anchor="middle" font-size="13" fill="currentColor">transmitted</text>
</svg>
</figure>

Now count the fraction that survives. Adding up the decay across a barrier
of any shape gives a transmission probability

$$
T \approx e^{-2\gamma}, \qquad \gamma = \frac{1}{\hbar}\int_a^b \sqrt{2m\,[\,V(x) - E\,]}\;dx,
$$

where $a$ and $b$ are the points where the energy line meets the
barrier.[^wkb] This single exponential dissolved the paradox. The alpha
particle does not go *over* the Coulomb hill; it goes *through* it. And
because $T$ hides inside an exponential, a small rise in the alpha's energy
— which both lowers the hill and shortens the tunnel — swings the escape
rate by many powers of ten. That is the twenty-four-order-of-magnitude
spread, derived from first principles. Gamow ran the numbers across the
radioactive series and they came out right.

<figure>
<figcaption>The alpha particle's predicament. It rattles inside the deep
nuclear well; escape requires crossing the Coulomb barrier, whose peak
towers above the particle's energy <em>E</em>. The shaded stretch between
the nuclear edge and the outer turning point is the classically forbidden
region the alpha must tunnel through.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Potential energy versus distance for alpha decay: a deep well at small radius, a tall Coulomb barrier peak, and a one-over-r tail, with a horizontal energy line crossing the tail">
  <line x1="40" y1="150" x2="385" y2="150" stroke="currentColor" stroke-width="0.5" opacity="0.35"/>
  <path d="M 40 195 L 90 195 L 90 40 C 130 95, 180 130, 250 143 C 300 147, 340 149, 380 150" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="95" x2="380" y2="95" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="90" y1="95" x2="128" y2="95" stroke="currentColor" stroke-width="6" opacity="0.2"/>
  <circle cx="65" cy="195" r="4" fill="var(--accent)"/>
  <text x="65" y="212" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">&#945;</text>
  <text x="118" y="34" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">V(r)</text>
  <text x="386" y="92" font-size="13" fill="currentColor" font-style="italic">E</text>
  <text x="378" y="166" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">r</text>
</svg>
</figure>

> **Interactive (planned):** launch a Gaussian wave packet at a rectangular
> barrier and watch it split. Dial the barrier's height and width, or the
> packet's energy, and see part of the wave reflect while a smaller part
> emerges on the far side. A readout tracks the transmitted probability and
> checks it against $e^{-2\gamma}$. A second panel builds the alpha-decay
> Coulomb barrier and reproduces the Geiger–Nuttall spread.

For half a century tunneling stayed a story about the invisibly small. In
1981 Gerd Binnig and Heinrich Rohrer turned it into an instrument.[^stm]
Bring an atom-sharp metal tip within about a nanometer of a conducting
surface. Electrons tunnel across the empty gap, and a faint current flows.
Because that current is exponential in the gap width, nudging the tip
closer by a single atom's diameter multiplies it several times over. Scan
the tip across the surface while holding the current steady, and its height
traces the atoms one at a time. The same equation that lets an alpha
particle escape a uranium nucleus now draws portraits of single atoms.

## A prediction you can make

The scanning tunneling microscope lives or dies by that exponential, so
put a number on it. Electrons trying to cross the gap face a barrier set by
the metal's work function, about $\varphi \approx 4$ eV. Their decay
constant is $\kappa = \sqrt{2 m_e \varphi}\,/\,\hbar$, which for an electron
reduces to the handy form $\kappa \approx 0.51\sqrt{\varphi\,[\text{eV}]}$
in inverse ångströms:

$$
\kappa \approx 0.51\sqrt{4} = 1.02\ \text{Å}^{-1}.
$$

The tunneling current goes as $I \propto e^{-2\kappa d}$. Pull the tip back
by a single ångström — $d \to d + 1\,\text{Å}$, roughly one atomic diameter
— and the current falls by

$$
e^{-2\kappa \cdot 1\,\text{Å}} = e^{-2.04} \approx 0.13.
$$

The current drops to about an eighth: nearly one order of magnitude for one
ångström of retreat. That ferocious sensitivity is exactly why the
microscope resolves single atoms — a bump one atom high stands out in the
current like a shout. Predict it, then check it against any published STM
approach curve, where the current climbs by a factor of roughly ten for
every $0.1$ nm the tip descends.

[^numbers]: The values are the standard textbook ones. Uranium-238 emits
  alpha particles of about $4.2$ MeV with a half-life near $4.5$ billion
  years; polonium-212 emits $8.78$ MeV alphas and lives about $0.3$
  microseconds — a factor of two in energy against roughly twenty-four
  orders of magnitude in lifetime. Rutherford's scattering of $8.8$ MeV
  alphas off uranium, showing no departure from pure Coulomb repulsion, is
  what fixed the barrier's height. These are real numbers, not draft
  inventions.

[^history]: The tidy "and independently" is honest here but flattened.
  Gamow published in the summer of 1928; Gurney and Condon, working in the
  United States and unaware of him, submitted their version within weeks.
  The full theory of the barrier shape and the Geiger–Nuttall slope came
  together over the following two years, not in a single stroke.

[^wkb]: This transmission formula is the semiclassical (WKB)
  approximation: it treats the barrier as varying slowly compared with the
  wavelength and keeps only the dominant exponential, dropping a
  slowly-varying prefactor. It is excellent for tall, wide barriers — the
  alpha-decay regime — and is the approximation the real chapter's sim will
  disclose when it plots $e^{-2\gamma}$ beside an exact numerical solution.

[^stm]: Binnig and Rohrer, at IBM Zürich, shared the 1986 Nobel Prize in
  Physics for the microscope. The work function and decay constant used in
  the prediction are representative values for a clean metal; a real
  surface shifts them, but the order-of-magnitude-per-ångström rule is
  robust and is the number STM builders quote.
