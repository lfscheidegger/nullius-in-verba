---
title: The Hydrogen Atom, Solved (draft)
chapter: 39
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

For fifteen years the hydrogen atom had been half-solved, and the half
that worked was an embarrassment.
[Bohr had drawn the electron on circular orbits](inside-the-atom.md) and
simply forbidden it to fall, decreeing that its angular momentum came in
whole multiples of $\hbar$. The decree worked. Out fell the
[Balmer integers](spectroscopy.md) and the right spectrum for hydrogen,
to a precision that should have felt like triumph. It felt like a trick.
Bohr could not say why angular momentum was quantized, why the orbiting
electron did not radiate as [Maxwell demanded](maxwells-synthesis.md), or
why the same rules, turned on helium, gave nonsense.
[The old quantum theory](the-old-quantum-theory.md) was a bundle of
correct answers with no derivation.

Then came the wave.
[de Broglie gave the electron a wavelength](matter-waves.md);
[Schrödinger gave it an equation](two-roads-to-quantum-mechanics.md).[^history]
The question narrowed to something sharp and answerable: put the
electron-wave in the atom, and see what the equation says.

The atom's grip is the Coulomb potential — the same inverse-square pull
[that holds planets to the Sun](universal-gravitation.md), now between a
proton and an electron. Written for the standing wave $\psi$ of an
electron of mass $m$ and energy $E$, the time-independent Schrödinger
equation reads

$$
-\frac{\hbar^2}{2m}\nabla^2\psi - \frac{e^2}{4\pi\varepsilon_0 r}\,\psi = E\psi .
$$

This is not a law of motion. Nothing orbits. It is a shape condition — an
equation for the standing waves that fit inside a Coulomb well, exactly as
a string's length picks out the frequencies that fit between its fixed
ends.

Now the decisive move, and it costs no new postulate. A physical wave must
behave: finite everywhere, single-valued, and fading to nothing far from
the proton, so that the electron is *somewhere* at all. Demand that, then
solve. For almost every value of the energy $E$, the surviving solution
grows without bound at large $r$ — it runs off to infinity, describes an
electron that is nowhere, and must be thrown away. Only for a discrete,
special ladder of energies does the runaway part vanish and leave a wave
that decays to zero. The integers are the survivors:

$$
E_n = -\frac{m e^4}{2(4\pi\varepsilon_0)^2\hbar^2}\,\frac{1}{n^2}
    = -\frac{13.6\ \text{eV}}{n^2},
\qquad n = 1, 2, 3, \dots
$$

Read what just happened. Bohr's $n$ was an assumption. Schrödinger's $n$
is a *count* — the number of the standing wave, forced by the demand that
the wave not blow up. The quantization is a boundary condition, no more
mysterious and no less than the fact that a guitar string sounds a
discrete series of notes. The whole numbers Balmer had read off his
spectrograph were counting the nodes of a wave nobody had yet imagined.

<figure>
<figcaption>The energy ladder of hydrogen. The levels crowd toward zero as
<em>n</em> grows, because the spacing falls off as 1/<em>n</em>². Each
downward arrow to <em>n</em> = 2 is one visible line of the Balmer series;
arrows to <em>n</em> = 1 (not drawn) land in the ultraviolet.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Energy levels of hydrogen drawn as horizontal lines converging toward zero, with downward arrows marking transitions to the second level">
  <text x="72" y="24" font-size="12" fill="currentColor" text-anchor="end">0 eV</text>
  <text x="72" y="204" font-size="12" fill="currentColor" text-anchor="end">−13.6 eV</text>
  <line x1="80" y1="200" x2="300" y2="200" stroke="currentColor" stroke-width="1.5"/>
  <line x1="80" y1="65" x2="300" y2="65" stroke="currentColor" stroke-width="1.5"/>
  <line x1="80" y1="40" x2="300" y2="40" stroke="currentColor" stroke-width="1.5"/>
  <line x1="80" y1="31" x2="300" y2="31" stroke="currentColor" stroke-width="1.5"/>
  <line x1="80" y1="20" x2="300" y2="20" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 3" opacity="0.6"/>
  <text x="310" y="204" font-size="13" fill="currentColor">n = 1</text>
  <text x="310" y="69" font-size="13" fill="currentColor">n = 2</text>
  <text x="310" y="44" font-size="13" fill="currentColor">n = 3</text>
  <text x="310" y="24" font-size="13" fill="currentColor">n → ∞</text>
  <line x1="150" y1="40" x2="150" y2="62" stroke="currentColor" stroke-width="1"/>
  <polygon points="150,66 147,60 153,60" fill="currentColor"/>
  <line x1="120" y1="31" x2="120" y2="62" stroke="currentColor" stroke-width="1"/>
  <polygon points="120,66 117,60 123,60" fill="currentColor"/>
  <text x="188" y="50" font-size="13" fill="currentColor">Balmer</text>
</svg>
</figure>

Every arrow in that ladder is a spectral line. An electron dropping from
level $n$ to level $2$ throws off a photon
[whose energy is the drop](light-is-grainy-after-all.md), $E_n - E_2$, and
whose wavelength therefore obeys

$$
\frac{1}{\lambda} = R_\infty\left(\frac{1}{2^2} - \frac{1}{n^2}\right).
$$

This is Balmer's formula — the one he found by fitting integers to
wavelengths with no physics at all. Now the fudge constant $R_\infty$ is
built from things you can weigh and clock: the electron's mass and charge,
Planck's constant, the speed of light. The spectrum of hydrogen is the
audible shape of a wave in a box, and the box is an atom.

<figure>
<figcaption>The four visible Balmer lines, plotted at their measured
wavelengths. They bunch toward the violet series limit at 364.6 nm — the
same 1/<em>n</em>² crowding as the energy ladder, seen now in light.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="The four visible Balmer lines of hydrogen on a wavelength axis, crowding together toward the series limit in the violet">
  <line x1="40" y1="140" x2="380" y2="140" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
  <line x1="86" y1="140" x2="86" y2="145" stroke="currentColor" stroke-width="0.75"/>
  <text x="86" y="160" font-size="12" fill="currentColor" text-anchor="middle">400</text>
  <line x1="189" y1="140" x2="189" y2="145" stroke="currentColor" stroke-width="0.75"/>
  <text x="189" y="160" font-size="12" fill="currentColor" text-anchor="middle">500</text>
  <line x1="293" y1="140" x2="293" y2="145" stroke="currentColor" stroke-width="0.75"/>
  <text x="293" y="160" font-size="12" fill="currentColor" text-anchor="middle">600 nm</text>
  <line x1="351" y1="60" x2="351" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <text x="351" y="52" font-size="13" fill="currentColor" text-anchor="middle">Hα</text>
  <line x1="175" y1="70" x2="175" y2="140" stroke="currentColor" stroke-width="1.2"/>
  <text x="175" y="62" font-size="13" fill="currentColor" text-anchor="middle">Hβ</text>
  <line x1="121" y1="80" x2="121" y2="140" stroke="currentColor" stroke-width="1"/>
  <text x="121" y="72" font-size="13" fill="currentColor" text-anchor="middle">Hγ</text>
  <line x1="97" y1="90" x2="97" y2="140" stroke="currentColor" stroke-width="0.9"/>
  <text x="97" y="82" font-size="13" fill="currentColor" text-anchor="middle">Hδ</text>
  <line x1="50" y1="110" x2="50" y2="140" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 2" opacity="0.7"/>
  <text x="50" y="104" font-size="12" fill="currentColor" text-anchor="middle">limit</text>
</svg>
</figure>

The energy is only the first dividend. The full solutions — the orbitals —
are the three-dimensional standing waves themselves, and a wave in three
dimensions needs three whole numbers to name it: $n$ for the radial rings,
and two more, $\ell$ and $m$, for the pattern woven around the sphere. The
lopsided lobes in every chemistry textbook are these standing waves, drawn
at last from first principles rather than sketched by hand.[^oneelectron]

> **Interactive (planned):** dial the three quantum numbers $n$, $\ell$,
> and $m$ and watch the orbital assemble as a three-dimensional standing
> wave, with nodes surfacing exactly where the electron never is. A second
> panel computes the emission spectrum from $E_n$ and lays it over a real
> hydrogen-lamp spectrum (source to be documented in `/data/`); every
> computed line should fall on a measured one.

## A prediction you can make

Take the red line of hydrogen, the one you would meet first in any prism.
It is the drop from $n = 3$ to $n = 2$. The energy released is

$$
E_3 - E_2 = 13.6\left(\frac{1}{2^2} - \frac{1}{3^2}\right)\text{eV}
          = 13.6 \times \frac{5}{36}\ \text{eV}
          \approx 1.89\ \text{eV}.
$$

A photon of $1.89$ eV has wavelength $\lambda = hc / E$, and with the handy
constant $hc \approx 1240\ \text{eV·nm}$ this gives

$$
\lambda = \frac{1240\ \text{eV·nm}}{1.89\ \text{eV}} \approx 656\ \text{nm}
$$

— deep red.[^reduced] The measured line, Balmer's $H_\alpha$, sits at
656.3 nm.[^data] The integers, the equation, and the night sky agree.

[^history]: The path is straightened here. Schrödinger's *first* wave
  equation for hydrogen was the relativistic one; it gave the wrong fine
  structure of the lines and he set it aside, publishing the
  non-relativistic version used above. The relativistic account he
  abandoned was recovered, correctly, by Dirac a few years later — a
  chapter still ahead of us. The clean story is ours; the retreat was his.

[^oneelectron]: "Solved" means solved *exactly*, in closed form, and that
  luxury belongs to one electron only. Add a second — helium — and the two
  electrons repel each other, the equation no longer separates, and no
  pencil-and-paper solution exists. From there physics computes rather than
  solves. Hydrogen is the last atom we get for free.

[^reduced]: The number 13.6 eV (more precisely 13.606 eV) treats the proton
  as an infinitely heavy anchor. The proton in fact recoils, so the honest
  calculation uses the electron–proton *reduced mass*, which trims the
  constant by about one part in two thousand. The quoted energies and the
  Rydberg constant $R_\infty$ are standard measured values, not draft
  inventions; $R_\infty$ carries the ∞ precisely to flag the fixed-nucleus
  idealization.

[^data]: Real values. The Balmer-α line is measured at 656.28 nm in air
  (656.46 nm in vacuum); the four wavelengths in the spectrum figure —
  656.3, 486.1, 434.0, 410.2 nm — are the standard visible Balmer lines,
  and the series limit sits at 364.6 nm. The real chapter will overlay a
  photographed hydrogen-lamp spectrum with documented provenance.
