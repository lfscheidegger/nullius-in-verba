---
title: Marrying Quanta and Relativity (draft)
chapter: 44
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1928 quantum mechanics had a triumphant equation and a quiet
embarrassment. The triumph was Schrödinger's: it
[solved the hydrogen atom](the-hydrogen-atom-solved.md) to the precision
of the spectroscopists. The embarrassment was that it could not possibly
be right. Schrödinger built his wave equation from the Newtonian energy
$E = p^2/2m$, a formula relativity had already
[demolished](special-relativity-matter-and-energy.md). And it treated
space and time unequally — one derivative in time, two in space — while
relativity insists the two stand on exactly equal footing. A law of nature
written in a frame-dependent way is a law that changes when you walk past
it. That cannot be a law.

So the marriage was overdue. The relativistic energy of a free particle is
fixed, and it is not $p^2/2m$:

$$
E^2 = (pc)^2 + (mc^2)^2.
$$

The obvious move is to feed this straight into a wave equation, replacing
$E$ and $p$ by their quantum operators. You get a clean, symmetric,
second-order equation — the Klein–Gordon equation. And it fails for the
electron.[^kg] Being second order in time, it lets the conserved density
that should count probability go *negative*, which is meaningless. Worse,
its energies come in two signs: for every solution with energy $+E$ there
is one with $-E$, an abyss with no bottom.

Paul Dirac refused both defects at once. He wanted an equation *first*
order in time, like Schrödinger's, so that probability stayed positive —
but relativity then forces it to be first order in space as well. That
meant taking the square root of $E^2 = (pc)^2 + (mc^2)^2$ and getting
something *linear* in $p$. With ordinary numbers this is hopeless;
$\sqrt{p^2 + m^2}$ is not a linear expression. Dirac's leap was to demand
coefficients that make it one:

$$
i\hbar\frac{\partial \psi}{\partial t} = \left(c\,\vec{\alpha}\cdot\vec{p} + \beta\, mc^2\right)\psi.
$$

Square the right-hand side and insist you recover $E^2 = (pc)^2 + (mc^2)^2$.
The cross terms must vanish and each square must give one. The coefficients
have to satisfy

$$
\alpha_i\alpha_j + \alpha_j\alpha_i = 2\delta_{ij}, \qquad \alpha_i\beta + \beta\alpha_i = 0, \qquad \beta^2 = 1.
$$

No numbers do this — two numbers always commute. But *matrices* need not.
The smallest matrices that work are $4\times4$, and so $\psi$ cannot be a
single number at each point. It must carry four components. Dirac had asked
only for consistency with relativity, and algebra handed him four-fold
structure he never requested.

Two of those components are the answer to a five-year-old mystery. The
electron's [spin](spin-and-structure.md) had been bolted onto the theory
by hand — an extra two-valued label with no home in Schrödinger's
equation. In Dirac's equation it is not optional. The four-component wave
function describes a particle that automatically has spin
$\tfrac{1}{2}\hbar$ and, when you couple it to a magnetic field, a magnetic
moment with $g$-factor exactly $2$ — the very value experiment demanded and
no earlier theory could explain.[^g2] Spin came *for free*, as a corollary
of taking relativity seriously.

The other two components were the abyss again: negative-energy solutions,
still there, still refusing to leave. An ordinary electron could cascade
down into them forever, radiating without limit. Dirac's escape was the
boldest guess in the history of the subject.[^sea] The negative-energy
states, he proposed, are all *already filled* — the vacuum is not empty but
a packed sea, and the exclusion principle keeps ordinary electrons out. Knock
one negative-energy electron up into the light and you leave a *hole*: an
absence that behaves in every way like a particle with the electron's mass
but the opposite charge. Pure mathematics had predicted a new particle. An
anti-electron.

<figure>
<figcaption>The forbidden gap. Free-particle energies split into a
positive continuum above <em>+mc</em>² and a negative one below
<em>−mc</em>², separated by a gap of width 2<em>mc</em>². Lifting an
electron across the gap leaves a hole that reads as a positron.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="An energy diagram: a shaded positive-energy band at top, a shaded negative-energy band at bottom, and an empty gap of width two m c squared between them">
  <line x1="60" y1="20" x2="60" y2="200" stroke="currentColor" stroke-width="1"/>
  <text x="52" y="24" text-anchor="end" font-size="12" fill="currentColor" font-style="italic">E</text>
  <rect x="70" y="20" width="240" height="70" fill="currentColor" opacity="0.15"/>
  <rect x="70" y="130" width="240" height="70" fill="currentColor" opacity="0.15"/>
  <line x1="70" y1="90" x2="310" y2="90" stroke="currentColor" stroke-width="0.75"/>
  <line x1="70" y1="130" x2="310" y2="130" stroke="currentColor" stroke-width="0.75"/>
  <text x="316" y="94" font-size="12" fill="currentColor">+mc²</text>
  <text x="316" y="134" font-size="12" fill="currentColor">−mc²</text>
  <text x="190" y="114" text-anchor="middle" font-size="12" fill="currentColor">2mc²</text>
  <text x="190" y="55" text-anchor="middle" font-size="13" fill="currentColor">positive continuum</text>
  <text x="190" y="170" text-anchor="middle" font-size="13" fill="currentColor">filled negative sea</text>
</svg>
</figure>

For a few years the prediction sat as an oddity most physicists hoped would
dissolve. Then, in 1932, Carl Anderson pointed a cloud chamber at the sky.
Cosmic rays streaking through his magnetized chamber left curved tracks;
the curvature measures momentum, and its direction measures charge. One
track curved the wrong way for an electron and ionized far too gently for a
proton. To prove which end came first, Anderson had laid a lead plate
across the chamber: a particle loses energy crossing it and curves more
tightly afterward. The photograph settled it. A positive particle, as light
as an electron, coming up through the lead.[^anderson] Dirac's hole had a
face.

<figure>
<figcaption>Anderson's positron, schematized. The track curves gently below
the lead plate (higher energy) and tightly above it (lower energy), fixing
the direction of travel; with the known field, the curvature marks a
positive charge too light to be a proton.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A curved particle track crossing a horizontal lead plate, curving gently below and tightly above, with the magnetic field marked into the page">
  <rect x="40" y="104" width="320" height="12" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="0.75"/>
  <text x="352" y="100" text-anchor="end" font-size="12" fill="currentColor">6 mm lead plate</text>
  <path d="M 250 208 C 232 178, 216 142, 200 116" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 200 104 C 188 78, 166 46, 132 24" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="262" y="200" font-size="13" fill="currentColor">63 MeV</text>
  <text x="96" y="30" font-size="13" fill="currentColor">23 MeV</text>
  <circle cx="330" cy="180" r="9" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="330" y="184" text-anchor="middle" font-size="11" fill="currentColor">×</text>
  <text x="330" y="205" text-anchor="middle" font-size="12" fill="currentColor">B</text>
</svg>
</figure>

> **Interactive (planned):** measure Anderson's positron yourself. The
> reader loads the actual 1932 cloud-chamber photograph, fits a circle to
> the track above and below the plate, and reads off the two momenta from
> the radii and the known field — recovering charge sign, and a mass far
> from the proton's. The image is the primary source; this draft fabricates
> none of its geometry.

## A prediction you can make

If matter and antimatter are mirror partners, a photon can convert into an
electron–positron pair — but only if it carries enough energy to build both
rest masses. The electron's rest energy is $m_e c^2 = 0.511$ MeV, so the
threshold is

$$
E_{\text{min}} = 2 m_e c^2 = 1.022 \text{ MeV}.
$$

A photon this energetic has wavelength
$\lambda = hc / E = (1240 \text{ eV·nm}) / (1.022\times10^{6}\text{ eV})
\approx 1.21\times10^{-3}$ nm, about $1.21$ picometers — a hard gamma ray,
just as observed. Below $1.022$ MeV, no pair; above it, pairs appear and
their production rate climbs. Point a detector at a $^{22}\text{Na}$ source,
whose positrons annihilate into paired $0.511$-MeV photons, and you can
check both halves of the number in an afternoon.

[^kg]: The Klein–Gordon equation is not *wrong* — it is the correct
  relativistic equation for a spin-0 particle, and pions obey it. It is
  wrong only for the electron, which has spin $\tfrac{1}{2}$. Its negative
  probabilities are later reread as charge density, which is allowed to
  change sign; but that repair came after Dirac, not before.

[^g2]: Dirac predicts $g = 2$ exactly. The measured value is
  $g \approx 2.00232$. That tiny excess is not a flaw in Dirac's equation
  but the first whisper of quantum electrodynamics — the electron
  interacting with its own radiation field — and it waits for a later
  chapter. Draft values here are standard constants, not inventions.

[^sea]: History bends here, and honestly it bent for Dirac too. He first
  guessed the hole was the *proton*, the only positive particle then known,
  and spent a year defending it before Oppenheimer and Weyl showed the hole
  must have the electron's mass exactly. Only then did he concede it was a
  new particle. The modern quantum field theory of antimatter needs no
  literal "sea" at all; the sea is a scaffold we now step off, but it is how
  the prediction was actually made.

[^anderson]: The primary source named for this chapter is Anderson's
  cloud-chamber photograph, published in *The Positive Electron*, Phys. Rev.
  43, 491 (1933). The plate was 6 mm of lead; the field roughly 15,000
  gauss; the track measured about 63 MeV below the plate and 23 MeV above
  it. Those figures are Anderson's own, to be reproduced from the paper when
  the real chapter is written.
