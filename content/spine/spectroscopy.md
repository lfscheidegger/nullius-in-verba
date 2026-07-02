---
title: Spectroscopy (draft)
chapter: 20
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

In 1814 the best optician in Europe was testing glass. Joseph Fraunhofer,
an orphaned apprentice once dug alive out of a collapsed workshop, needed
light of a single pure color to measure how strongly his prisms bent it.
So he sent sunlight through a narrow slit, then through the finest prism
ever ground, and looked at the spectrum with a small telescope. Newton's
rainbow — the one from
[the interference chapter](what-is-light-round-one.md) — was supposed to
be a smooth ramp of color. It was not. It was crossed by hundreds of fine
dark lines, fixed in place, sharp as engravings.[^wollaston] Fraunhofer
mapped 574 of them and labeled the strongest with letters: A and B in the
deep red, C, then the unmistakable double line D in the yellow, E, F, G,
and H and K crowding the violet edge.

<figure>
<figcaption>The strongest of Fraunhofer's dark lines, drawn at their
measured wavelengths. He assigned the letters decades before anyone knew
what the lines were. C and F belong to hydrogen, D to sodium, b to
magnesium, H and K to calcium — identifications this chapter earns
below.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A horizontal band representing the solar spectrum from 390 to 760 nanometers, crossed by vertical dark lines labeled K, H, G, F, b, D, and C, with a wavelength axis beneath">
  <rect x="20" y="60" width="360" height="80" fill="currentColor" opacity="0.08"/>
  <rect x="20" y="60" width="360" height="80" fill="none" stroke="currentColor" stroke-width="0.75"/>
  <line x1="23.3" y1="60" x2="23.3" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <line x1="26.6" y1="60" x2="26.6" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <line x1="59.7" y1="60" x2="59.7" y2="140" stroke="currentColor" stroke-width="1.25"/>
  <line x1="113.5" y1="60" x2="113.5" y2="140" stroke="currentColor" stroke-width="1.25"/>
  <line x1="143.9" y1="60" x2="143.9" y2="140" stroke="currentColor" stroke-width="1"/>
  <line x1="213.9" y1="60" x2="213.9" y2="140" stroke="currentColor" stroke-width="1.5"/>
  <line x1="279.1" y1="60" x2="279.1" y2="140" stroke="currentColor" stroke-width="1.25"/>
  <text x="25" y="50" text-anchor="middle" font-size="13" fill="currentColor">K H</text>
  <text x="59.7" y="50" text-anchor="middle" font-size="13" fill="currentColor">G</text>
  <text x="113.5" y="50" text-anchor="middle" font-size="13" fill="currentColor">F</text>
  <text x="143.9" y="50" text-anchor="middle" font-size="13" fill="currentColor">b</text>
  <text x="213.9" y="50" text-anchor="middle" font-size="13" fill="currentColor">D</text>
  <text x="279.1" y="50" text-anchor="middle" font-size="13" fill="currentColor">C</text>
  <line x1="20" y1="160" x2="380" y2="160" stroke="currentColor" stroke-width="0.75"/>
  <line x1="29.7" y1="160" x2="29.7" y2="166" stroke="currentColor" stroke-width="0.75"/>
  <line x1="127.0" y1="160" x2="127.0" y2="166" stroke="currentColor" stroke-width="0.75"/>
  <line x1="224.3" y1="160" x2="224.3" y2="166" stroke="currentColor" stroke-width="0.75"/>
  <line x1="321.6" y1="160" x2="321.6" y2="166" stroke="currentColor" stroke-width="0.75"/>
  <text x="29.7" y="182" text-anchor="middle" font-size="13" fill="currentColor">400</text>
  <text x="127.0" y="182" text-anchor="middle" font-size="13" fill="currentColor">500</text>
  <text x="224.3" y="182" text-anchor="middle" font-size="13" fill="currentColor">600</text>
  <text x="321.6" y="182" text-anchor="middle" font-size="13" fill="currentColor">700</text>
  <text x="200" y="207" text-anchor="middle" font-size="13" fill="currentColor">wavelength (nm)</text>
</svg>
</figure>

He did more than map them. Young's fringes had given light a wavelength;
Fraunhofer invented the tool that measures it outright — the diffraction
grating, hundreds of fine parallel wires, later lines ruled on glass. A
grating with spacing $d$ throws light of wavelength $\lambda$ into bright
directions $\theta$ satisfying

$$
d \sin\theta = m\lambda, \qquad m = 1, 2, 3, \ldots
$$

so each dark line acquired a number, good to about a part in a thousand
against modern values. The lines were fixed: the same in direct sunlight,
in moonlight, in the light of Venus — all recycled sunshine — but
*different* in the spectrum of Sirius. Whatever the lines were, they were
a property of the star. Fraunhofer died at thirty-nine without knowing
what he had catalogued. The philosopher Auguste Comte, surveying the
limits of knowledge in 1835, chose his example with famous bad luck: the
chemical composition of the stars, he wrote, is knowledge forever denied
us.[^comte]

The answer came from a burner. In Heidelberg, Robert Bunsen had built a
gas flame that burned nearly colorless, so that a pinch of salt held in
it showed the salt's own light. Every element, it turned out, glows in
its own set of sharp bright lines: sodium a double line in the yellow,
lithium a red, potassium a violet. A fingerprint. In 1859 Gustav
Kirchhoff aimed the spectroscope at the flame *with the Sun behind it*,
expecting sodium's bright yellow to fill in the dark D lines. The lines
got darker. A gas, Kirchhoff realized, absorbs exactly the wavelengths it
emits; a cool gas in front of a hotter source cuts its signature *out* of
the light.[^kirchhoff] The Sun snapped into focus: a glowing surface
wrapped in a cooler atmosphere, and the Fraunhofer lines are that
atmosphere's fingerprints. D is sodium. C and F are hydrogen. H and K are
calcium; the swarm in the green and blue is iron. Within two years
Kirchhoff had read some thirty terrestrial elements in the Sun. Comte had
been dead two years when the impossible knowledge arrived.

> **Interactive (planned):** read the Sun yourself. Pan and zoom a real
> high-resolution solar spectrum (a digitized reference atlas; provenance
> to be documented in `/data/`), and overlay real laboratory emission
> wavelengths for hydrogen, sodium, calcium, and iron from the NIST
> atomic line database. Match the fingerprints; identify Fraunhofer's
> letters yourself. The dataset will be real — this draft fakes nothing
> in its place.

The method promptly found something chemistry had not. During the
eclipse of August 1868, observers saw a bright yellow line in the Sun's
outer edge, close to D but matching no known element. Norman Lockyer
named the hypothetical substance *helium*, from the Greek for Sun. For
twenty-seven years it existed only in the sky; in 1895 William Ramsay
found the same line in gas baked out of a uranium mineral. An element was
discovered ninety-three million miles away before anyone touched it.

Then the fingerprints scaled. At Harvard, Edward Pickering photographed
stellar spectra wholesale — a prism over the telescope's objective turned
every star on the plate into a tiny spectrum — and hired women as
"computers" to read the plates. Williamina Fleming, Antonia Maury, and
above all Annie Jump Cannon turned a cabinet of glass into a taxonomy.
Cannon, classifying by eye at a spectrum every few seconds, reordered the
alphabet soup of earlier schemes into the sequence O B A F G K M, in
which the line patterns morph continuously from one class to the
next. The Henry Draper Catalogue she built lists 225,300 stars — a
quarter of a million spectra, sorted by their absorption lines alone, by
eye. Why that sequence exists — what single physical dial turns
an O spectrum into an M — is a question this book must bank for two more
acts.

> **Interactive (planned):** classify real stellar spectra yourself.
> Digitized spectra of actual stars (from the Harvard plate collection
> or a modern survey; provenance in `/data/`), presented in random order
> beside Cannon's type exemplars. Sort them, then compare your calls to
> the catalog's.

One more pattern, the most consequential in the book. In 1885 Johann
Balmer, a Basel schoolteacher of sixty, stared at the four measured
wavelengths of hydrogen's visible lines until they confessed. All four
fit one formula:

$$
\lambda = B \,\frac{n^2}{n^2 - 4}, \qquad n = 3, 4, 5, 6,
$$

with the single constant $B = 364.6$ nm.[^balmer] Integers — small whole
numbers — sit inside the light of the commonest atom in the universe,
and in 1885 nobody could say why. The lines of this chapter are a
message in a language no one alive could read. Learning to read it will
take three more acts.

## A prediction you can make

Take Balmer's formula and the constant $B = 364.6$ nm. For $n = 3$:
$\lambda = 364.6 \times \frac{9}{5} = 656.3$ nm — Fraunhofer's C line,
hydrogen's red H$\alpha$, measured at 656.28 nm. For $n = 4$:
$364.6 \times \frac{16}{12} = 486.1$ nm — the F line, measured at
486.13 nm. Now predict a line: $n = 5$ gives
$364.6 \times \frac{25}{21} \approx 434.0$ nm, in the violet. Look up
H$\gamma$: 434.05 nm. A schoolteacher's arithmetic, good to one part in
ten thousand — and no one on Earth knew the reason.

[^wollaston]: Idealized history, mildly. William Wollaston saw a handful
  of the dark lines in 1802 and took them for natural boundaries between
  the colors. Fraunhofer found them independently, and it was his
  precision, maps, and letters that made them into an instrument.

[^comte]: *Cours de philosophie positive* (1835), on the stars: "we shall
  never be able by any means to study their chemical composition." He
  chose the example precisely because it seemed safely beyond reach.

[^kirchhoff]: Kirchhoff pushed the observation to a law: at a given
  temperature and wavelength, the ratio of any body's emission to its
  absorption is one universal function, the same for all materials. What
  that function *is* he could not compute. The attempt to compute it
  detonates in a later chapter, and the debris becomes the quantum.

[^balmer]: Balmer's own constant was 364.56 nm; the value 364.6 nm used
  here reproduces the modern air wavelengths of H$\alpha$, H$\beta$, and
  H$\gamma$ (656.28, 486.13, 434.05 nm) to the precision shown. These
  are standard measured values, not draft inventions.
