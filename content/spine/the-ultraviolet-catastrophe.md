---
title: The Ultraviolet Catastrophe (draft)
chapter: 33
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

Relativity was the cliff you could see coming. The
[ether crisis](the-ether-crisis.md) announced itself with a null result and
a decade of argument. The other cliff hid in plain sight, inside the most
ordinary fact in the world: hot things glow. A poker in the fire goes dull
red, then orange, then white. By 1900 physics could explain almost
everything about light and heat separately —
[Maxwell's equations](maxwells-synthesis.md) for the one,
[statistical mechanics](atoms-statistically.md) for the other — and could
not explain the poker.

The problem had a precise form, and it came from
[spectroscopy](spectroscopy.md). In 1859 Kirchhoff proved that a perfect
absorber — a *black body*, best realized as a small hole in a hot cavity —
must emit a spectrum that depends on temperature alone. Not on the
material, not on the shape: one universal curve per temperature, as much a
constant of nature as gravity. Finding that curve became a standing
challenge, and by the 1890s it was also an industrial one: Berlin's
Physikalisch-Technische Reichsanstalt was asked to rate electric lamps,
and its physicists built the finest cavities ever made and measured the
glow, wavelength by wavelength, across two orders of magnitude in
temperature.[^ptr] We noted this loose thread among the
[cracks in everything](cracks-in-everything.md). Now we pull it.

Classical physics makes a firm prediction, and it is a disaster. The
recipe uses only tools this book has already built. Electromagnetic waves
in a cavity form standing-wave modes, like
[the harmonics of an organ pipe](sound.md); counting them is geometry, and
the count grows as the square of the frequency — there are vastly more
ways to fit short waves into a box than long ones. Then equipartition,
the theorem that ran through [the kinetic theory](heat-is-motion.md),
assigns every mode the same average energy $k_B T$, exactly as it gives
every gas molecule the same average energy per degree of freedom. The
result is the Rayleigh–Jeans law for the energy per unit volume per unit
frequency:

$$
u(\nu, T) = \frac{8\pi \nu^2}{c^3} \, k_B T .
$$

Read it and wince. The energy grows without bound as the frequency rises.
Integrate over all frequencies and the cavity holds infinite energy; open
your oven and it should vaporize you with ultraviolet light and X-rays.
Later physicists called this the *ultraviolet catastrophe*.[^name] It is
not a subtle error to be patched with a better model of the walls.
Equipartition plus Maxwell — two of the previous act's proudest theorems —
jointly predict an absurdity.

The data, meanwhile, behaved beautifully. The measured curves rise from
zero, peak, and fall back to zero at high frequency — finite total energy,
as sanity requires. Wien had guessed a formula in 1896, an exponential
cutoff that matched the visible and near infrared well. Then in the summer
and autumn of 1900 Rubens and Kurlbaum pushed the measurements deep into
the far infrared, out past 30 μm, and Wien's formula failed there: at long
wavelengths the measured intensity grew in simple proportion to $T$,
exactly as the classical law demanded. Each formula owned half the curve.

<figure>
<figcaption>The two laws against the shape of the measured spectrum, at
one fixed temperature. Rayleigh–Jeans hugs the data at long wavelengths
and diverges at short ones; Planck's curve follows the data everywhere.
The curves here are a freehand sketch of the correct qualitative
shapes, not a plot of data; the real chapter draws them through the
actual 1900 data points.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Spectral energy density versus wavelength: the Planck curve rises to a peak and falls, while the classical Rayleigh-Jeans curve agrees at long wavelengths but diverges toward infinity at short wavelengths">
  <line x1="40" y1="190" x2="380" y2="190" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="190" x2="40" y2="20" stroke="currentColor" stroke-width="1"/>
  <path d="M 112 20 C 122 45, 138 85, 165 120 C 200 160, 280 178, 380 173" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 52 189 C 70 186, 82 165, 96 115 C 108 72, 118 52, 132 52 C 150 52, 175 85, 210 120 C 255 158, 320 172, 380 174" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="150" y="35" font-size="13" fill="currentColor">Rayleigh–Jeans</text>
  <text x="185" y="105" font-size="13" fill="var(--accent)">Planck</text>
  <text x="290" y="207" font-size="13" fill="currentColor">wavelength →</text>
  <text x="52" y="32" font-size="13" fill="currentColor">energy density</text>
</svg>
</figure>

Max Planck had spent six years on this problem, working, characteristically,
through entropy — [the second law](the-arrow-of-time.md) was his life's
devotion. On the evening of 7 October 1900, Rubens told him over tea that
the far infrared went as $T$. That night Planck interpolated: he built the
simplest expression whose entropy behaved like Wien's at high frequency and
like the classical law at low, and read off the radiation formula it
implied,

$$
u(\nu, T) = \frac{8\pi h \nu^3}{c^3} \,
\frac{1}{e^{h\nu / k_B T} - 1} .
$$

It fit everything. Not approximately — within the errors of the best
measurements ever made of anything glowing, at every wavelength and every
temperature. But a formula that merely fits is numerology, and Planck spent
the next eight weeks in what he later called an act of desperation, seeking
what it meant.[^desperate] The answer he found, announced on 14 December
1900: the derivation only works if the oscillators in the cavity walls
exchange energy with the field in whole packets, each of size

$$
\varepsilon = h\nu ,
$$

where $h$ is a new constant of nature. Energy, which every theory since
[Galileo](galileos-mechanics.md) had treated as a continuous fluid, came in
grains. Take $h \to 0$ and the grains vanish, equipartition returns, and
the catastrophe with it. Keep $h$ finite and the high-frequency modes are
priced out of the market: a mode needing a first installment of
$h\nu \gg k_B T$ almost never collects one, and the spectrum falls to zero
where the mode count explodes.

From the fit to the Berlin data Planck extracted
$h = 6.55 \times 10^{-34}$ J·s — within 1.2 percent of today's
$6.626 \times 10^{-34}$ — and, as a bonus, the sharpest values yet known of
Boltzmann's constant and Avogadro's number, from a glow in a box. He did
not believe the grains were real. He hoped for years that quantization was
a bookkeeping trick confined to the emission process. The next chapter is
about the young patent clerk who took the grains literally.

> **Interactive (planned):** fit the catastrophe yourself. The real
> Berlin measurements — Lummer–Pringsheim isotherms and the
> Rubens–Kurlbaum far-infrared runs, digitized from the 1899–1901 papers
> with provenance in `/data/` — plotted as points. Lay the Wien,
> Rayleigh–Jeans, and Planck formulas over them; slide $h$ and watch one
> value, and only one, thread every point at every temperature. The
> dataset will be real; this draft fakes nothing in its place.

## A prediction you can make

Set the derivative of Planck's law (per unit wavelength) to zero and a
one-line calculation gives Wien's displacement law: the spectrum peaks at

$$
\lambda_{\text{max}} \, T = \frac{hc}{4.965\, k_B}
\approx 2.898 \times 10^{-3} \ \text{m·K} .
$$

The Sun's surface is at $5772$ K, so its spectrum should peak at
$2.898 \times 10^{-3} / 5772 \approx 5.02 \times 10^{-7}$ m — 502 nm,
blue-green light, which any plotted solar spectrum will confirm. Your own
skin, at about 310 K, peaks at $9.3$ μm, deep in the infrared — which is
why thermal cameras watch the 8–14 μm band, and why you glow in the dark
after all, at wavelengths the catastrophe said should be the least of it.

[^ptr]: The Physikalisch-Technische Reichsanstalt measurements: Lummer and
  Pringsheim mapped cavity spectra from 1899 on; Rubens and Kurlbaum
  reached wavelengths past 50 μm in 1900 using "residual rays" reflected
  from crystal surfaces. These are the actual curves Planck fit, and the
  real chapter's dataset — provenance will be documented in `/data/`.

[^name]: The name is a back-formation. Ehrenfest coined "ultraviolet
  catastrophe" in 1911, and Planck in 1900 was not fleeing the
  Rayleigh–Jeans law at all — Rayleigh's mode-counting note appeared only
  in June 1900, and the full classical argument was assembled after
  Planck's formula, not before. Planck was rescuing Wien's law from the
  infrared data. This chapter presents the logic in its inescapable order;
  history took the scenic route.

[^desperate]: "An act of desperation... a theoretical interpretation had
  to be found at any cost, no matter how high" — Planck, recalling 1900 in
  a 1931 letter to the American physicist R. W. Wood.
