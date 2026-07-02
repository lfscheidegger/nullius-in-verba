---
title: Inside the Atom (draft)
chapter: 35
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1910 the atom had won its long argument for existence —
[Perrin had counted them](atoms-are-real.md) — and had promptly become a
puzzle box. It contained electrons: J.J. Thomson had
[weighed them](cracks-in-everything.md) at nearly two thousand times
lighter than hydrogen. So most of the atom's mass was something else,
and the whole was neutral. Thomson proposed the obvious architecture: a
diffuse sphere of positive charge with electrons embedded in it, like
raisins in a pudding.[^pudding] Nobody had ever looked inside an atom to
check.

Ernest Rutherford had the probe to do it. Alpha particles — helium ions
thrown off by radium at a few percent of the speed of light — could
punch through thin metal foil. In Manchester, Hans Geiger and Ernest
Marsden fired them at gold leaf a few thousand atoms thick and counted
where they came out, one faint scintillation at a time, in a dark room,
by eye.[^counts] Almost all sailed straight through, barely deflected,
exactly as a pudding atom predicts: spread the positive charge over the
whole atom and its field is everywhere feeble. But about one alpha in
eight thousand came out *backward*, deflected by more than a right
angle. Rutherford said it was as if a fifteen-inch shell had bounced off
tissue paper.

A diffuse sphere cannot do that, and neither can any accumulation of
gentle nudges. A single violent deflection needs a single violent
encounter: a field thousands of times stronger than any pudding can
muster, which means the positive charge is not spread out at all. It is
concentrated in a speck. Rutherford worked out what a point charge would
do to a beam of alphas — each trajectory a hyperbola, close passes bent
hard, distant passes barely touched — and the geometry fixed the count
at every angle:

$$
N(\theta) \propto \frac{1}{\sin^4(\theta/2)},
$$

falling by a factor of hundreds of thousands from small angles to large,
but never to zero. Geiger and Marsden spent two years counting
scintillations at angle after angle, and the counts followed the curve
across its entire range. The atom had a nucleus.

<figure>
<figcaption>Alpha particles passing a gold nucleus. Most miss by far and
barely bend; a close pass bends hard; a head-on alpha stops and returns.
Trajectories are schematic — the true paths are hyperbolas, and a real
nucleus is far too small to draw.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Several alpha-particle tracks passing a nucleus: distant tracks nearly straight, a near track sharply deflected, a head-on track reflected back">
  <path d="M 20 45 Q 230 45 390 32" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 20 78 Q 228 78 388 46" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 20 100 Q 222 100 350 22" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 20 107 L 222 107" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 222 113 L 30 113" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 38 109 L 30 113 L 38 117" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 20 122 Q 224 122 360 200" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 20 146 Q 228 146 388 176" fill="none" stroke="currentColor" stroke-width="1"/>
  <path d="M 20 180 Q 230 180 390 192" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="232" cy="110" r="3" fill="var(--accent)"/>
  <text x="232" y="132" text-anchor="middle" font-size="13" fill="currentColor">nucleus</text>
  <text x="30" y="36" font-size="13" fill="currentColor">&#945; beam</text>
  <text x="120" y="103" font-size="13" fill="currentColor">head-on: straight back</text>
</svg>
</figure>

How small a speck? Energy answers. A head-on alpha climbs the electric
hill until its motion is spent, where potential energy equals the
kinetic energy it brought. For Rutherford's fastest alphas, 7.7 MeV
against gold's 79 charges, that turnaround lies near
$3 \times 10^{-14}$ m — and since the scattering law held even there,
the nucleus is at least that small. The atom, at $10^{-10}$ m, is three
thousand times wider: overwhelmingly empty space.

> **Interactive (planned):** the Geiger–Marsden counts themselves —
> scintillations per unit time at each angle, from the 1913 paper
> (provenance to be documented in `/data/`). Plot the counts against
> $1/\sin^4(\theta/2)$, then against what a Thomson atom predicts, and see
> which one the data will tolerate. The dataset here will be real; this
> draft fakes nothing in its place.

The triumph opened a crisis. Electrons must orbit the nucleus, or fall
in. But an orbiting electron accelerates, and
[Maxwell's equations](maxwells-synthesis.md) say an accelerating charge
radiates. The electron should spiral inward, broadcasting all the way,
and the atom should collapse in about $10^{-11}$ seconds. Classical
physics did not predict that atoms are small. It predicted that atoms
are impossible.

Niels Bohr, working in Rutherford's own laboratory, cut the knot rather
than untying it. [Planck](the-ultraviolet-catastrophe.md) and
[Einstein](light-is-grainy-after-all.md) had shown that light trades
energy in lumps of $hf$; Bohr let the atom itself be lumpy. He decreed
that the electron may occupy only orbits whose angular momentum is a
whole multiple of $\hbar = h/2\pi$ — that is, $mvr = n\hbar$ — that in
such an orbit it does *not* radiate, and that light is emitted only when
the electron jumps between orbits, carrying off the energy difference as
one photon. Three postulates, none derived. Grind them through Coulomb's
law and the allowed energies of hydrogen fall out:

$$
E_n = -\frac{m e^4}{8\,\varepsilon_0^2 h^2}\,\frac{1}{n^2}
    = -\frac{13.6\ \text{eV}}{n^2}.
$$

Every symbol on the left was independently measured. And a jump from
level $n$ down to level 2 emits a photon of wavelength
$1/\lambda = R\left(\frac{1}{2^2} - \frac{1}{n^2}\right)$ — which is
exactly Balmer's formula, the naked pattern that had sat
[unexplained in the spectroscope](spectroscopy.md) for a quarter
century, with the Rydberg constant now *computed* from $e$, $m$, and
$h$, correct to better than one part in a thousand.[^history]

Half-explained, though — say it plainly. Bohr's model gives no reason
why those orbits and no others, no reason why an orbiting charge should
ignore Maxwell, and it fails for helium, the very next atom. It is a
scaffold: the right numbers held up by rules nobody can justify. Why the
rules work is a question this book has not yet earned the tools to
answer, and it will take three more chapters to earn them.

## A prediction you can make

Balmer's visible series ends, going up, in jumps from ever-higher $n$
down to $n = 2$. Predict the line after the red one — the jump from
$n = 4$:

$$
\Delta E = 13.6\left(\frac{1}{4} - \frac{1}{16}\right)
         = 13.6 \times \frac{3}{16} = 2.55\ \text{eV},
\qquad
\lambda = \frac{hc}{\Delta E} = \frac{1240\ \text{eV nm}}{2.55\ \text{eV}}
        \approx 486\ \text{nm},
$$

a blue-green line. The measured H$\beta$ line sits at 486.1 nm. Try the
red line too ($n = 3$: 1.89 eV, about 656 nm; measured 656.3 nm), and
the series limit ($n \to \infty$: 3.40 eV, about 365 nm), where the
ladder's rungs crowd together and hydrogen's visible spectrum runs out
of steps.[^values]

[^pudding]: Thomson's own model was more quantitative than the pudding
  caricature: he computed stable rings of orbiting electrons and tried to
  match them to the periodic table. It failed honorably, on data.

[^counts]: Geiger and Marsden counted flashes on a zinc-sulfide screen
  through a microscope, in the dark, in shifts of a few minutes because
  the eye tires. The one-in-eight-thousand figure is their 1909 result
  (for platinum foil, in fact); the full angular distribution for gold is
  their 1913 paper, and those counts are the real dataset this chapter
  will carry.

[^history]: The narrative here is straightened. Bohr built his model in
  1912–13 to explain atomic *stability*, not spectra; he did not know
  Balmer's formula until a colleague showed it to him in February 1913,
  whereupon — he said later — everything became clear at once. The order
  is bent; the physics is not.

[^values]: The constants are real, not draft inventions: $hc = 1240$
  eV nm to three figures, hydrogen's ionization energy 13.6 eV, and the
  Balmer wavelengths (656.3, 486.1, 434.0, 410.2 nm in air) as measured
  since Ångström. The closest-approach estimate uses the 7.7 MeV alphas
  of radium C, the fastest available to Rutherford.
