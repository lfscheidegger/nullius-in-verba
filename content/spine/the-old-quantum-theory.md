---
title: The Old Quantum Theory (draft)
chapter: 36
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1911 the atom had a center. Rutherford's foil experiment had
[packed the positive charge into a tiny nucleus](inside-the-atom.md) and
left the electrons outside, and the only picture that fit was a miniature
solar system: light electrons orbiting a heavy core, bound by the same
inverse-square law that holds the planets. It was a beautiful picture, and
it could not survive an afternoon. An orbiting electron accelerates, and
[Maxwell's equations](maxwells-synthesis.md) are merciless about
accelerating charge: it radiates. A hydrogen electron should pour out its
energy as light and spiral into the nucleus in about a hundred-billionth
of a second. On classical physics, matter should not exist.

The spectroscopists carried a second scandal. Heated hydrogen does not
glow in a smear of color. It emits a few sharp lines at fixed wavelengths
[and nothing between them](spectroscopy.md). In 1885 a Swiss schoolteacher
named Johann Balmer had noticed that the visible lines obeyed a simple
numerical formula — and no one could say why a formula should live inside
an atom.[^rydberg] By 1912 the pieces were on the table and refused to
join: a nuclear atom that must collapse, a spectrum that must not, and two
warnings from [Planck](the-ultraviolet-catastrophe.md) and
[Einstein](light-is-grainy-after-all.md) that energy comes in lumps.

Niels Bohr joined them by decree. In 1913 he simply forbade the collapse.
An electron, he postulated, occupies only certain *stationary states*, and
in a stationary state it does not radiate — never mind what Maxwell says.
The states are picked out by a quantum rule: the angular momentum comes in
whole multiples of $\hbar = h/2\pi$,

$$
m v r = n \hbar, \qquad n = 1, 2, 3, \ldots
$$

Set the Coulomb attraction equal to the centripetal force, feed in that
rule, and the arbitrary orbit snaps to a ladder of allowed radii
$r_n = n^2 a_0$, with $a_0 \approx 0.529$ Å, and a ladder of allowed
energies

$$
E_n = -\frac{m e^4}{8 \varepsilon_0^2 h^2}\,\frac{1}{n^2}
     = -\frac{13.6 \text{ eV}}{n^2}.
$$

Light appears only when the electron jumps: a photon of energy
$h\nu = E_i - E_f$ carries off the difference.[^bohr] Put the two energies
into that rule and Balmer's mystery formula falls out — not fitted, but
*derived*, with its numerical constant built from the electron's mass and
charge, Planck's constant, and the speed of light. Bohr had computed a
spectral line from first principles. Nothing like it had been done.

<figure>
<figcaption>The hydrogen energy ladder, <em>E<sub>n</sub></em> =
−13.6&nbsp;eV/<em>n</em>². The rungs crowd together as they climb toward
the ionization limit at zero. Every jump down to <em>n</em>&nbsp;=&nbsp;2
emits a visible Balmer line; the arrows show the first two.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Energy-level diagram for hydrogen, with horizontal rungs converging toward the top and downward arrows marking Balmer transitions onto the n=2 level">
  <line x1="120" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="120" y1="73"  x2="300" y2="73"  stroke="currentColor" stroke-width="1.5"/>
  <line x1="120" y1="49"  x2="300" y2="49"  stroke="currentColor" stroke-width="1"/>
  <line x1="120" y1="41"  x2="300" y2="41"  stroke="currentColor" stroke-width="1"/>
  <line x1="120" y1="30"  x2="300" y2="30"  stroke="currentColor" stroke-width="0.75" opacity="0.5" stroke-dasharray="4 3"/>
  <text x="310" y="204" font-size="13" fill="currentColor">n = 1</text>
  <text x="310" y="77"  font-size="13" fill="currentColor">2</text>
  <text x="310" y="52"  font-size="13" fill="currentColor">3</text>
  <text x="310" y="34"  font-size="13" fill="currentColor" opacity="0.7">&#8734;</text>
  <line x1="180" y1="49" x2="180" y2="71" stroke="var(--accent)" stroke-width="1.5"/>
  <path d="M 180 73 l -3 -6 l 6 0 z" fill="var(--accent)"/>
  <line x1="210" y1="41" x2="210" y2="71" stroke="var(--accent)" stroke-width="1.5"/>
  <path d="M 210 73 l -3 -6 l 6 0 z" fill="var(--accent)"/>
  <text x="150" y="120" font-size="13" fill="currentColor" font-style="italic">Balmer</text>
</svg>
</figure>

Arnold Sommerfeld then pushed the picture as far as it would go. Circles
were too rigid; he let the orbits be [ellipses](../vocab/ellipse.md) and
quantized each coordinate separately, replacing Bohr's single rule with a
*phase integral* over each closed loop of the motion,

$$
\oint p \, dq = n h.
$$

Elliptical orbits of the same energy but different shape, plus a
relativistic correction for the electron's speed, split Bohr's single
levels into close-spaced multiplets — the *fine structure* of the lines,
observed and now explained, and out of the arithmetic dropped a pure
number near $1/137$ that would haunt physics for a century.[^finestructure]

Holding the whole edifice together was Bohr's *correspondence principle*.
A quantum atom must, for very large $n$, reproduce classical physics,
because that is the regime where classical physics works. In that limit
the frequency of the photon from $n \to n-1$ must equal the frequency at
which the electron classically circles. Bohr used the demand as a tool:
it pinned down constants and told him which jumps an atom would and would
not make.

> **Interactive (planned):** dial the quantum numbers of a hydrogen atom
> and watch its Bohr–Sommerfeld orbit and the line it emits. Push $n$ into
> the hundreds and see the correspondence principle bite — the quantum
> spacing shrinking until the spectrum blurs into the smooth classical
> orbital frequency. The spectral lines shown will be the measured
> hydrogen wavelengths, not draft inventions.

And yet everyone knew the theory was a chimera. It reproduced hydrogen and
singly-ionized helium to breathtaking precision, then failed flatly on
neutral helium — two electrons broke it completely.[^helium] It gave the
*positions* of lines but never their *brightness*. Its quantum rules were
postulated, not proven; its orbits were fictions the electron did not
radiate from and could not really be following. It worked too well to
throw away and stood on foundations too rotten to believe. Sommerfeld
called it a magic that no one understood; Born called it a fortunate guess.
It was scaffolding, and its builders said so. The real building — matter
waves and the mechanics after them — was ten years off.

## A prediction you can make

Take the Balmer line from $n_i = 3$ down to $n_f = 2$. The Bohr energies
give the photon's wavelength through the Rydberg relation,

$$
\frac{1}{\lambda} = R\!\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)
= R\!\left(\frac{1}{4} - \frac{1}{9}\right) = \frac{5R}{36},
$$

with $R = 1.097 \times 10^7 \text{ m}^{-1}$. So
$1/\lambda = 5(1.097 \times 10^7)/36 \approx 1.524 \times 10^6
\text{ m}^{-1}$, giving $\lambda \approx 6.563 \times 10^{-7}$ m, or
**656.3 nm** — the red line you see in any hydrogen tube. The measured
value is 656.28 nm. A single postulate about angular momentum, and the
color comes out right to four figures.

[^rydberg]: Balmer's 1885 fit was $\lambda = B\,n^2/(n^2 - 4)$ for
  $n = 3, 4, 5, \ldots$; Rydberg recast it as the inverse-wavelength form
  used here. The modern constant is $R_\infty = 1.0974 \times 10^7
  \text{ m}^{-1}$, equivalently 13.606 eV — a measured constant, quoted,
  not a draft number.

[^bohr]: The narrative is straightened. Bohr's 1913 "trilogy" did not open
  from the angular-momentum rule; he reasoned partly backward from Balmer's
  formula and from a correspondence argument, and the clean postulate came
  after. The physics is his; the tidy order of presentation is ours.

[^helium]: The failure was not a rounding error. Applied to neutral helium
  the old quantum theory gave an energy off by whole electron-volts and
  could not be repaired by any choice of orbits. Two interacting electrons
  have no closed classical paths to quantize, and the method had nothing
  to say.

[^finestructure]: Sommerfeld's number is the fine-structure constant
  $\alpha = e^2 / (4\pi\varepsilon_0 \hbar c) \approx 1/137.036$, a
  dimensionless measured constant that sets the size of the fine-structure
  splitting. That his half-classical model landed on the right value —
  for reasons later shown to be partly luck — is a fair emblem of the
  whole era.
