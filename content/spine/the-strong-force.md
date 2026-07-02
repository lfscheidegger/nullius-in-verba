---
title: The Strong Force (draft)
chapter: 49
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1950 the world looked finished. Matter was protons, neutrons, and
electrons; light was the photon;
[QED](qed-and-the-taming-of-infinity.md) had tamed the electron's field to
eleven decimal places, and [the weak force](the-weak-force.md) explained
why nuclei decay. Four particles, three forces, one tidy page.

Then the accelerators turned on, and the page tore. Cosmic rays and the
new machines at Berkeley and Brookhaven threw off particles by the dozen:
pions and kaons, then the lambda, the sigma, the xi, the delta, and a
swarm of "resonances" that lived for $10^{-23}$ seconds and were gone. By
1960 the count passed a hundred. None looked more fundamental than any
other. Enrico Fermi told a student that if he could remember all their
names, he would have become a botanist.

That was the problem. A hundred elementary things are not elementary.
Something underneath had to be ordering them — but the roster was pure
list, no pattern anyone could name.

Two men found the pattern in 1961: Murray Gell-Mann and, independently,
Yuval Ne'eman.[^eightfold] Sort the particles by two numbers only —
electric charge and a bookkeeping label called strangeness — and the
chaos snapped into shape. Eight spin-$\tfrac{1}{2}$ baryons fell onto the
corners and center of a hexagon. Eight mesons made another. The charge of
every particle obeyed one rule,

$$
Q = I_3 + \tfrac{1}{2}\,(B + S),
$$

where $I_3$ places the particle left-to-right in its pattern, $B$ is
baryon number, and $S$ is strangeness. Gell-Mann called the scheme the
Eightfold Way.

Then the spin-$\tfrac{3}{2}$ baryons made a triangle — a decuplet, ten
slots. Nine were known. The bottom corner, a particle with strangeness
$-3$, was empty. The rows were evenly spaced in mass, about 150 MeV a
step, so Gell-Mann did what a dead theory can never do: he predicted. The
missing particle, the $\Omega^-$, should weigh near 1685 MeV and should
decay only weakly. In 1964 a bubble chamber at Brookhaven caught it on a
single photograph, at the mass foretold.

<figure>
<figcaption>The baryon decuplet, sorted by strangeness (down the page) and
by <em>I</em>₃ (across it). Nine corners were known in 1961; the empty
bottom slot forced a prediction. The Ω⁻ (accent) was found in 1964 at the
mass the pattern demanded.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="An inverted triangle of ten baryons arranged by strangeness in rows, with the omega-minus alone at the bottom apex">
  <text x="16" y="44" font-size="12" fill="currentColor" font-style="italic">S = 0</text>
  <text x="16" y="89" font-size="12" fill="currentColor" font-style="italic">S = -1</text>
  <text x="16" y="134" font-size="12" fill="currentColor" font-style="italic">S = -2</text>
  <text x="16" y="179" font-size="12" fill="currentColor" font-style="italic">S = -3</text>
  <circle cx="137" cy="40" r="4" fill="currentColor"/>
  <circle cx="179" cy="40" r="4" fill="currentColor"/>
  <circle cx="221" cy="40" r="4" fill="currentColor"/>
  <circle cx="263" cy="40" r="4" fill="currentColor"/>
  <text x="285" y="44" font-size="13" fill="currentColor">Δ</text>
  <circle cx="158" cy="85" r="4" fill="currentColor"/>
  <circle cx="200" cy="85" r="4" fill="currentColor"/>
  <circle cx="242" cy="85" r="4" fill="currentColor"/>
  <text x="264" y="89" font-size="13" fill="currentColor">Σ*</text>
  <circle cx="179" cy="130" r="4" fill="currentColor"/>
  <circle cx="221" cy="130" r="4" fill="currentColor"/>
  <text x="243" y="134" font-size="13" fill="currentColor">Ξ*</text>
  <circle cx="200" cy="175" r="11" fill="none" stroke="currentColor" stroke-width="0.75" stroke-dasharray="3 3"/>
  <circle cx="200" cy="175" r="4.5" fill="var(--accent)"/>
  <text x="216" y="179" font-size="13" fill="currentColor">Ω⁻</text>
</svg>
</figure>

> **Interactive (planned):** measure the Ω⁻ discovery photograph. The
> reader traces the tracks in the Brookhaven 80-inch-chamber image
> (Barnes *et al.*, 1964; provenance and scan to be documented in
> `/data/`), reads off track curvatures and decay angles, and reconstructs
> the mass — arriving at Gell-Mann's number from the picture itself.

But a pattern is not an explanation. What made the hexagons and triangles?
Gell-Mann and, separately, George Zweig answered in 1964: three underlying
particles, which Gell-Mann named quarks.[^quarkname] Up, down, and
strange, carrying fractional charge — $+\tfrac{2}{3}$ for the up,
$-\tfrac{1}{3}$ for the down and strange. A proton is two ups and a down,
$\tfrac{2}{3}+\tfrac{2}{3}-\tfrac{1}{3}=1$; a neutron is up-down-down,
charge zero. Every hadron was a combination of three quarks (a baryon) or
a quark and an antiquark (a meson). The whole garden collapsed into three
seeds.

Gell-Mann half-doubted the seeds were real. No one had seen a fractional
charge; perhaps quarks were only arithmetic. The verdict came from SLAC.

<figure>
<figcaption>Deep inelastic scattering. An electron of short wavelength
strikes not a smeared blob but a hard point inside the proton, and recoils
sharply — the modern echo of Rutherford's alphas bouncing off the
nucleus.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="An electron scattering off a small point inside a large proton and recoiling at a steep angle">
  <circle cx="290" cy="150" r="46" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="278" cy="138" r="3" fill="currentColor"/>
  <circle cx="305" cy="132" r="3" fill="currentColor"/>
  <circle cx="272" cy="168" r="4.5" fill="var(--accent)"/>
  <text x="290" y="212" text-anchor="middle" font-size="13" fill="currentColor">proton</text>
  <line x1="40" y1="60" x2="272" y2="168" stroke="currentColor" stroke-width="1.5"/>
  <line x1="272" y1="168" x2="120" y2="40" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="120,40 132,52 118,54" fill="currentColor"/>
  <text x="48" y="52" font-size="13" fill="currentColor">e⁻</text>
  <text x="104" y="34" font-size="13" fill="currentColor">e⁻</text>
</svg>
</figure>

Fire an electron hard enough at a proton and its wavelength shrinks below
the proton's size; it stops seeing a blur and starts seeing what is
inside. In 1968 the two-mile machine at Stanford measured how sharply
electrons scattered off protons. A soft ball of smeared charge would
deflect them gently. Instead they bounced back at steep angles far more
often than any soft proton allowed — exactly as the alpha particles had
recoiled from [the hard nucleus](the-nucleus.md) half a century before.
The proton had hard points inside.

The clinching fact was a scaling law. The scattering depended not on the
electron's energy and the proton's separately, but only on one
dimensionless combination, $x = Q^2 / (2 M \nu)$. A smeared charge sets a
size and breaks that scaling; only structureless, point-like scatterers
reproduce it. James Bjorken predicted the scaling; Richard Feynman read
the points as real constituents and named them partons.[^slac] They were
Gell-Mann's quarks.

> **Interactive (planned):** plot the SLAC data. Given the published deep
> inelastic cross-sections, the reader graphs the structure function
> against $Q^2$ at fixed $x$, watches the curve lie flat where a soft
> proton demands a slope, and reads point-like constituents straight off
> the plot.

Two puzzles remained, and their answers are the strong force itself. If
quarks scatter as free points inside the proton, why can no experiment
knock one loose and catch it alone? And if they are bound, why do they act
free? In 1973 David Gross, Frank Wilczek, and David Politzer answered both
at once. The strong coupling is not constant. It shrinks at short
distances and grows at long ones,

$$
\alpha_s(Q^2) = \frac{12\pi}{(33 - 2 n_f)\,\ln(Q^2 / \Lambda^2)},
$$

where $n_f$ counts the quark flavors. Because $33 > 2 n_f$, the coupling
falls toward zero as $Q^2 \to \infty$ — asymptotic freedom, the reason
quarks rattle loose when probed hard. Run it the other way, pull two
quarks apart, and the force does not fade with distance like gravity or
electricity. It holds roughly constant, so the stored energy climbs
without limit. Long before a quark comes free, that energy pays for a
fresh quark-antiquark pair, and the bond snaps into two hadrons rather
than one loose quark. This is confinement. You will never hold a quark in
your hand.

## A prediction you can make

The decuplet's rows climb in nearly equal steps of mass, one step per unit
of strangeness. Read the three known steps from Tycho-grade
data:[^masses]

| $S$ | Baryon | Mass (MeV) | step |
|----:|:-------|-----------:|-----:|
|   0 | Δ      |       1232 |    — |
|  −1 | Σ*     |       1385 |  153 |
|  −2 | Ξ*     |       1533 |  148 |
|  −3 | Ω⁻     |      *1672* |  — |

The two steps, 153 and 148 MeV, are equal to within the width of the
table. Extend the ladder one rung to the empty corner:

$$
M_\Omega \approx M_{\Xi^*} + \left(M_{\Xi^*} - M_{\Sigma^*}\right)
= 1533 + 148 = 1681 \text{ MeV}.
$$

The measured mass is 1672 MeV — off by nine, about half a percent. A
pattern of nine particles, drawn on paper, weighed the tenth before anyone
had seen it. That is what it means for physics to be more than botany.

[^eightfold]: Gell-Mann named it after the Buddhist Eightfold Path, half
  as a joke about the recurring eights. He and Ne'eman arrived at the same
  $SU(3)$ organization independently in 1961; this chapter tells it as one
  discovery for the sake of the line, which slightly flattens a two-track
  history.

[^quarkname]: Gell-Mann took the word from James Joyce's *Finnegans Wake*
  — "Three quarks for Muster Mark" — and liked that a proton needed
  exactly three. Zweig, working at CERN at the same time, called the same
  objects "aces" and was largely ignored; the name that stuck was
  Gell-Mann's.

[^slac]: The tidy claim that "SLAC saw the quarks" straightens the real
  story. The 1968 experiments saw point-like scatterers — Feynman's
  partons. Identifying those partons with the three fractionally charged
  quarks of the Eightfold Way took Bjorken and Feynman's interpretation
  and several more years of data (charges, spins, and the missing
  momentum carried by gluons). The insight was inescapable, but not
  instantaneous.

[^masses]: Isospin-averaged masses from the Particle Data Group: the Δ
  quartet near 1232 MeV, Σ*(1385), Ξ*(1533), and the Ω⁻ at 1672.45 MeV.
  These are standard measured values, not draft inventions; the real
  chapter will cite the PDG edition and the discovery papers directly.
