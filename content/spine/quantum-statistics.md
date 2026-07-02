---
title: Quantum Statistics (draft)
chapter: 42
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1925 the quantum atom worked. Schrödinger's equation
[gave hydrogen its exact spectrum](the-hydrogen-atom-solved.md), and
[spin and Pauli's exclusion principle](spin-and-structure.md) filled the
periodic table shell by shell. But exclusion was a decree, not a reason.
Two electrons may not share a quantum state — why not? Pauli had no answer.
He had a rule that worked and a shrug. The reason was hiding in a question
nobody had thought to ask carefully: what does it mean for two particles
to be *the same*?

In classical physics you can always tell them apart. Paint one red, follow
its trajectory, and you never lose track of which is which. Quantum
mechanics erases the paint. Two electrons have no trajectories to follow
and no property that distinguishes them. Swap them and the universe cannot
notice. So the swap can change the wavefunction only by a phase, and doing
it twice must return the original state. That forces the phase to be
$+1$ or $-1$ — nothing else squares to one. Nature splits in two.[^spinstat]

$$
\psi(\mathbf{r}_2, \mathbf{r}_1) = \pm\, \psi(\mathbf{r}_1, \mathbf{r}_2).
$$

The minus sign is the whole of Pauli's principle, derived at last. Put two
identical particles of the minus kind into the same state and the
wavefunction equals its own negative, so it vanishes: that state cannot
exist. These are the **fermions** — electrons, protons, neutrons, every
particle of half-integer spin. The plus sign has the opposite temperament.
Its particles crave company; any number will pile into one state. These
are the **bosons** — photons, and helium-4 nuclei. From two signs come two
worlds.

The signs rewrite statistics. Count how many particles, on average, occupy
a state of energy $\epsilon$ in a gas at temperature $T$, and the bookkeeping
of indistinguishability yields a single formula with a single fateful sign:

$$
\bar{n}(\epsilon) = \frac{1}{e^{(\epsilon - \mu)/kT} \pm 1}.
$$

The plus sign is Fermi–Dirac: $\bar{n}$ never exceeds one, because a
fermion state is either empty or full. The minus sign is Bose–Einstein:
as $\epsilon$ falls toward the chemical potential $\mu$, the denominator
collapses and the occupation runs away, all the particles crowding into
the lowest state at once.[^history]

<figure>
<figcaption>Two temperaments at absolute zero. Fermions stack one pair per
rung (two, counting spin up and down) and fill from the floor to a sharp
ceiling, the Fermi energy. Bosons ignore the ladder and pool in the ground
state. The same particles, the same levels — only the exchange sign
differs.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Left: energy rungs filled with pairs of fermions up to a Fermi level. Right: the same rungs with all bosons collected on the lowest rung.">
  <text x="110" y="15" text-anchor="middle" font-size="13" fill="currentColor">fermions</text>
  <text x="290" y="15" text-anchor="middle" font-size="13" fill="currentColor">bosons</text>
  <line x1="55" y1="190" x2="165" y2="190" stroke="currentColor" stroke-width="1"/>
  <line x1="55" y1="155" x2="165" y2="155" stroke="currentColor" stroke-width="1"/>
  <line x1="55" y1="120" x2="165" y2="120" stroke="currentColor" stroke-width="1"/>
  <line x1="55" y1="85" x2="165" y2="85" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <line x1="55" y1="50" x2="165" y2="50" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <circle cx="85" cy="190" r="4" fill="currentColor"/><circle cx="135" cy="190" r="4" fill="currentColor"/>
  <circle cx="85" cy="155" r="4" fill="currentColor"/><circle cx="135" cy="155" r="4" fill="currentColor"/>
  <circle cx="85" cy="120" r="4" fill="currentColor"/><circle cx="135" cy="120" r="4" fill="currentColor"/>
  <line x1="45" y1="102" x2="175" y2="102" stroke="var(--accent)" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="178" y="106" text-anchor="start" font-size="13" fill="currentColor" font-style="italic">E_F</text>
  <line x1="235" y1="190" x2="345" y2="190" stroke="currentColor" stroke-width="1"/>
  <line x1="235" y1="155" x2="345" y2="155" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <line x1="235" y1="120" x2="345" y2="120" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <line x1="235" y1="85" x2="345" y2="85" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <line x1="235" y1="50" x2="345" y2="50" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <circle cx="250" cy="190" r="4" fill="currentColor"/><circle cx="268" cy="190" r="4" fill="currentColor"/>
  <circle cx="286" cy="190" r="4" fill="currentColor"/><circle cx="304" cy="190" r="4" fill="currentColor"/>
  <circle cx="322" cy="190" r="4" fill="currentColor"/><circle cx="340" cy="190" r="4" fill="currentColor"/>
</svg>
</figure>

Now watch what the minus sign does to ordinary matter. Cool a metal toward
absolute zero. Its electrons cannot all sink to the lowest level; exclusion
forbids it. They stack instead, one pair to a state, filling every level
from the floor up to a ceiling called the Fermi energy $E_F$. This is the
*Fermi sea*. To compress the metal you must shove electrons into
higher-momentum states, and the cheap low ones are already taken. That
costs energy, and energy resisting compression is pressure — a pressure
that survives at absolute zero, where a classical gas would have none. This
**degeneracy pressure** is why solids are stiff and why your hand stops at
the table instead of flowing through it. Rigidity is exclusion made
mechanical.

> **Interactive (planned):** fill the Fermi sea. Add electrons one at a
> time and watch them stack into momentum states; raise the temperature and
> see the sharp surface at $E_F$ soften into the rounded Fermi–Dirac curve.
> Real densities for sodium, copper, and aluminum; the reader reads off
> each metal's Fermi energy and its degeneracy temperature.

<figure>
<figcaption>The Fermi–Dirac occupation. At absolute zero (dashed) every
state below <em>E</em><sub>F</sub> is full and every state above is empty —
a perfect cliff. Warm the gas and the cliff rounds off over a width of
about <em>kT</em>, but the sea beneath stays full.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Occupation number versus energy: a step at the Fermi energy for zero temperature, and a rounded sigmoid for finite temperature.">
  <line x1="40" y1="185" x2="385" y2="185" stroke="currentColor" stroke-width="0.75"/>
  <line x1="40" y1="185" x2="40" y2="35" stroke="currentColor" stroke-width="0.75"/>
  <text x="30" y="55" text-anchor="end" font-size="13" fill="currentColor">1</text>
  <text x="210" y="205" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">E_F</text>
  <text x="375" y="205" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">E</text>
  <line x1="210" y1="185" x2="210" y2="50" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
  <path d="M 40 50 L 210 50 L 210 185 L 385 185" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="5 3" opacity="0.7"/>
  <path d="M 40 51 L 150 54 C 188 58, 196 117, 210 117 C 224 117, 236 178, 300 182 L 385 184" fill="none" stroke="currentColor" stroke-width="1.5"/>
</svg>
</figure>

The same idea holds up a dead star. When a star like the Sun exhausts its
fuel, it has no heat left to fight gravity. Ralph Fowler saw in 1926 that it
does not need heat: its electrons are degenerate, and their zero-temperature
pressure alone can carry the load. A white dwarf is a Sun's worth of mass
squeezed into an Earth's worth of volume, held open by nothing but the
refusal of electrons to share.

But there is a ceiling. Subrahmanyan Chandrasekhar, nineteen years old and
sailing to England in 1930, worked out what happens as you pack the
electrons tighter. Their momenta climb, and eventually the fastest move near
the speed of light. For a slow gas the degeneracy pressure grows as
$P \propto n^{5/3}$ and easily outpaces gravity; but for a relativistic gas
it grows only as $n^{4/3}$ — exactly the rate at which gravity's demand
grows too. The two scale in lockstep, and the balance stops correcting
itself. Above a critical mass near $1.4\, M_\odot$, no density gives
equilibrium. The star cannot hold. It collapses — to a neutron star, or
past it to a black hole. This is why most white dwarfs sit quietly forever
and why a few, tipped over the Chandrasekhar limit, detonate as
supernovae.[^chandra]

> **Interactive (planned):** balance a white dwarf. Dial its mass and watch
> degeneracy pressure and gravity settle to a radius — then push the mass
> past $1.4\, M_\odot$ and watch equilibrium vanish. Built on the real
> relativistic equation of state, not a cartoon spring.

## A prediction you can make

The Fermi energy of a metal follows from its electron density $n$ alone:

$$
E_F = \frac{\hbar^2}{2 m_e}\left(3\pi^2 n\right)^{2/3}.
$$

Copper carries one free electron per atom, giving
$n = 8.47 \times 10^{28}\ \text{m}^{-3}$. Then
$3\pi^2 n \approx 2.51 \times 10^{30}\ \text{m}^{-3}$, its two-thirds power
is $1.85 \times 10^{20}\ \text{m}^{-2}$, and with
$\hbar^2 / 2 m_e = 6.10 \times 10^{-39}\ \text{J·m}^2$ this gives
$E_F \approx 1.13 \times 10^{-18}\ \text{J} \approx 7.0$ eV — the measured
value for copper. Divide by Boltzmann's constant and $E_F / k \approx 82{,}000$
K: the electron sea in the wire on your desk is, in its own terms, frozen
solid at room temperature. That is the whole reason metals are stiff, and
you just computed it from one number.

[^spinstat]: Which sign belongs to which particle is set by spin:
  half-integer spin takes the minus sign, integer spin the plus. This
  spin–statistics connection is stated here as an experimental fact, because
  its proof needs relativistic quantum field theory, which the book does not
  reach until [we marry quanta and relativity](marrying-quanta-and-relativity.md).
  Taking it on loan here is an idealization, and this note is the confession.

[^history]: The names honor independent discoveries in a two-year window.
  Satyendra Bose sent Einstein the photon-counting argument in 1924, and
  Einstein extended it to matter in 1925; Enrico Fermi and Paul Dirac
  published the exclusion-respecting statistics separately in 1926. The
  chronology here is compressed for the narrative; the physics is not.

[^chandra]: The exact limit depends on composition through the electrons-per-nucleon
  ratio; for a carbon–oxygen white dwarf it is close to $1.4\, M_\odot$.
  Chandrasekhar's result met years of loud public resistance from Arthur
  Eddington, who found a collapsing star philosophically intolerable.
  Chandrasekhar was right, and collected the Nobel Prize for it fifty-three
  years later.
