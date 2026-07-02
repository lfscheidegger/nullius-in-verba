---
title: The Nucleus (draft)
chapter: 45
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

Physicists entered the 1930s knowing the atom had a center and little
else. [Rutherford had found the nucleus](inside-the-atom.md): nearly all
the mass and all the positive charge crammed into a speck ten thousand
times smaller than the atom. Radioactivity had announced it decades
earlier. Becquerel's uranium fogged photographic plates in the dark;
Marie and Pierre Curie boiled tons of pitchblende down to polonium and
radium and named the phenomenon. Something inside heavy atoms was
unstable and spat out particles carrying millions of electron-volts. But
nobody knew what the nucleus was made of, or what held it together
against the furious electrical repulsion of its own protons.

The obvious guess was protons and electrons: a nucleus of mass number
$A$ and charge $Z$ built from $A$ protons and $A-Z$ electrons to cancel
the surplus. It gave the right mass and the right charge. It also broke
on quantum mechanics — the spins came out wrong.[^statistics] Electrons
could not live in the nucleus. The puzzle held until James Chadwick
closed it in 1932. The Curies' daughter and son-in-law, Irène and
Frédéric Joliot-Curie, had watched a strange neutral radiation knock
protons out of paraffin and called it gamma rays; Chadwick showed no
photon could land that blow. The projectile was a neutral particle of
nearly the proton's mass — the neutron. Now the nucleus was plain: $Z$
protons and $N = A - Z$ neutrons, bound by a new force, short-ranged and
overwhelmingly strong.

Weigh such a nucleus and it comes out lighter than its parts. The
missing mass is the binding energy, cashed out through
[$E = mc^2$](special-relativity-matter-and-energy.md):

$$
B = (Z m_p + N m_n - M)\,c^2 .
$$

Divide by $A$, plot against $A$, and you get the most important curve in
nuclear physics. It climbs steeply through the light elements, peaks near
iron-56 at about $8.8$ MeV per nucleon, then declines slowly toward
uranium. The peak means iron is the most tightly bound matter there is.
Fuse light nuclei and you climb toward it; split heavy ones and you climb
toward it. Either way, energy comes out.

<figure>
<figcaption>The binding-energy curve: energy released per nucleon when a
nucleus is assembled from free protons and neutrons. It peaks at iron-56,
near 8.8 MeV. Fusing light nuclei climbs the left slope; splitting a heavy
nucleus climbs the right slope. Light-nucleus bumps omitted for
clarity.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Binding energy per nucleon plotted against mass number, rising steeply to a peak at iron-56 and declining slowly toward uranium">
  <line x1="45" y1="190" x2="390" y2="190" stroke="currentColor" stroke-width="0.75"/>
  <line x1="45" y1="190" x2="45" y2="20" stroke="currentColor" stroke-width="0.75"/>
  <polyline points="48,170 51,63 68,46 95,37 125,32 175,35 215,38 300,47 380,54" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="125" cy="32" r="3" fill="currentColor"/>
  <text x="125" y="24" text-anchor="middle" font-size="13" fill="currentColor">Fe-56</text>
  <circle cx="380" cy="54" r="3" fill="var(--accent)"/>
  <text x="376" y="70" text-anchor="end" font-size="13" fill="currentColor">U-235</text>
  <circle cx="215" cy="38" r="3" fill="currentColor"/>
  <text x="215" y="30" text-anchor="middle" font-size="13" fill="currentColor">fragments</text>
  <path d="M 372 52 Q 300 30 222 38" fill="none" stroke="var(--accent)" stroke-width="1" stroke-dasharray="3 2"/>
  <text x="300" y="207" text-anchor="middle" font-size="13" fill="currentColor">mass number A</text>
  <text transform="translate(16,155) rotate(-90)" font-size="12" fill="currentColor">binding energy / nucleon</text>
</svg>
</figure>

The curve had bumps. Nuclei with 2, 8, 20, 28, 50, 82, or 126 protons or
neutrons were unusually tightly bound, unusually abundant, oddly reluctant
to react — the *magic numbers*. They looked like the closed electron
shells that make [noble gases inert](spin-and-structure.md), but no model
reproduced them until Maria Goeppert Mayer added a strong spin-orbit
coupling to the nuclear well in 1949. With it, the shells closed in
exactly the right places. Nucleons, like electrons, fill quantized levels.

Then the heavy end of the curve did something no one predicted. Enrico
Fermi had been firing neutrons at uranium, expecting to build elements
heavier than any in nature. In 1938 Otto Hahn and Fritz Strassmann,
chasing his products chemically, found barium — element 56, a middleweight
sitting impossibly far down the table from uranium's 92.[^noddack] Hahn
wrote to Lise Meitner, his collaborator of thirty years, driven out of
Berlin by the Nazi race laws and newly exiled in Sweden. Over Christmas
she walked in the snow with her nephew Otto Frisch and did the arithmetic
on a scrap of paper. Treat the nucleus as a liquid drop, held together by
surface tension and pushed apart by charge. A neutron's nudge sets it
oscillating; stretch it into a dumbbell and the electrical repulsion of
the two ends can win, pinching the drop in two.

Then she asked what the split would yield. Two roads led to one
number.[^massformula] The two fragments together are lighter than the
original nucleus by about a fifth of a proton's mass — and a fifth of
$931$ MeV is near $200$ MeV. Cross-check it against the repulsion Frisch
worried about: two fragments of charge $46$ apiece, their centers roughly
$15$ fm apart at the moment they separate, fly off with Coulomb energy

$$
E = \frac{1}{4\pi\epsilon_0}\frac{Z^2 e^2}{d}
  = \frac{(46)^2 \times 1.44\ \text{MeV·fm}}{15\ \text{fm}}
  \approx 200\ \text{MeV} .
$$

The estimates agreed. Frisch, back in Copenhagen, borrowed a word from
biology for a dividing cell: *fission*.

> **Interactive (planned):** roll the liquid drop yourself. Deform the
> nucleus and watch surface tension (which resists) fight Coulomb
> repulsion (which drives) as a function of elongation; find the saddle
> where the barrier vanishes and the drop runs downhill to two fragments.
> A second panel overlays the real binding-energy curve, tabulated from
> the modern mass evaluation, so the reader reads the released energy
> straight off the data.

## A prediction you can make

You do not need Meitner's mass formula. Read two numbers off the
binding-energy curve. Uranium-235 binds at about $7.6$ MeV per nucleon;
the fragments of a typical split, near mass 95 and 140, sit close to
$8.5$ MeV per nucleon. When the $236$ nucleons of the struck nucleus each
settle roughly $0.9$ MeV deeper, the release is

$$
Q \approx (8.5 - 7.6)\ \text{MeV} \times 236 \approx 212\ \text{MeV} .
$$

Measured, one U-235 fission delivers about $200$ MeV.[^qval] Now compare
it to chemistry: burning a single carbon atom yields about $4$ eV. Atom
for atom, splitting uranium is some fifty million times more violent — the
whole terror and power of the twentieth century sitting in one subtraction
on the binding-energy curve.

[^statistics]: The "nitrogen catastrophe." Fourteen protons and seven
  electrons make twenty-one spin-½ particles, an odd count, which quantum
  mechanics says must behave as a [fermion](quantum-statistics.md) with
  half-integer total spin. The band spectra of nitrogen molecules showed
  the opposite — integer spin, a boson. The neutron, spin-½ and
  count-preserving, resolved it: fourteen nucleons, an even count, integer
  spin.

[^noddack]: In 1934 the chemist Ida Noddack, reviewing Fermi's uranium
  work, wrote plainly that the bombarded nuclei might "break up into
  several large fragments." No one pursued it — including Fermi. The idea
  had no scaffolding yet (the liquid-drop picture and the binding-energy
  arithmetic came later), and Noddack, a woman outside the physics
  establishment, was easy to ignore. Four years later the same idea
  returned with numbers attached and could not be dismissed.

[^massformula]: Meitner did not conjure "a fifth of a proton mass" from
  nowhere. She used von Weizsäcker's liquid-drop mass formula and the
  packing fractions Aston had measured by mass spectrometry; the figure is
  the difference between uranium's binding and the fragments', read off
  real data. The round numbers in the Coulomb estimate (charge 46 apiece,
  15 fm apart) are the era's own rough values, kept here for the
  arithmetic; the real chapter will use exact fragment masses.

[^qval]: The measured energy per U-235 fission is about $202$ MeV, divided
  among fragment kinetic energy ($\approx 168$ MeV), prompt neutrons and
  gamma rays, and the beta and neutrino decays of the fragments. The
  binding-energy-per-nucleon values used above — $7.6$ for uranium, about
  $8.5$ for the fragments — are real, taken from the mass tables; the
  subtraction is deliberately coarse.
