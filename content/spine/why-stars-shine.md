---
title: Why Stars Shine (draft)
chapter: 46
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By the 1920s physics could explain the Sun's light but not its fire. The
Sun's spectrum had been mapped line by line — that was the harvest of
[spectroscopy](spectroscopy.md). Two questions stayed open: what the Sun is
made of, and where its heat comes from. The second was a scandal. Kelvin
and Helmholtz had shown that a star slowly contracting under its own weight
would glow — but only for some tens of millions of years. Meanwhile the
newly radioactive-dated rocks underfoot were billions of years old. The Sun
was older than any energy source anyone could name.

The first question had a settled, confident, wrong answer. The solar
spectrum is crowded with the dark lines of iron, calcium, and sodium — the
very metals that build the Earth. The natural reading, endorsed by Henry
Norris Russell, the most powerful astronomer of the age, was that the Sun
is a hot ball of roughly Earthly stuff.

Cecilia Payne broke it. In her 1925 Harvard thesis she turned Meghnad
Saha's ionization equation loose on stellar spectra.[^saha] Saha's insight
was that a line's darkness measures not just how many atoms are present but
what state they are in. Heat strips electrons off atoms and lifts the
survivors between energy levels. A hydrogen atom prints a Balmer line only
from its first excited state: too cool and none are excited, too hot and
the hydrogen is fully ionized and silent. The line strength is a resonance
in temperature, not a census.

$$
\frac{n_{i+1}\, n_e}{n_i}
= \frac{2\, g_{i+1}}{g_i}\left(\frac{2\pi m_e k T}{h^2}\right)^{3/2}
e^{-\chi / kT}
$$

Run that correction and the imposing metal lines shrink to a trace, while
the modest hydrogen lines betray a staggering abundance. Payne found that
hydrogen and helium outnumber every other element by a factor of roughly a
million. The Sun is not Earthly. It is almost pure hydrogen.

<figure>
<figcaption>Why strong lines lie. A Balmer line is darkest at an
intermediate temperature — cooler stars have too few excited atoms, hotter
stars have ionized the hydrogen away. Abundance and line strength are not
the same quantity; Saha's equation converts one to the other.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A hump-shaped curve of Balmer line strength against temperature, peaking near ten thousand kelvin">
  <line x1="45" y1="182" x2="372" y2="182" stroke="currentColor" stroke-width="0.75"/>
  <line x1="45" y1="20" x2="45" y2="182" stroke="currentColor" stroke-width="0.75"/>
  <path d="M 48 179 C 120 176, 160 46, 198 44 S 300 156, 370 174" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="198" y1="44" x2="198" y2="182" stroke="currentColor" stroke-width="0.75" stroke-dasharray="3 3" opacity="0.5"/>
  <text x="198" y="200" text-anchor="middle" font-size="13" fill="currentColor">~10,000 K</text>
  <text x="360" y="200" text-anchor="end" font-size="13" fill="currentColor">temperature</text>
  <text x="150" y="34" text-anchor="middle" font-size="13" fill="currentColor">Balmer strength</text>
</svg>
</figure>

The result stood so far from consensus that Russell warned her it was
"almost certainly not real." She wrote it up hedged.[^russell] Four years
later Russell reached the same conclusion by his own route, and hydrogen
Sun became the truth we teach.

> **Interactive (planned):** derive the Sun's composition yourself. Start
> from a real solar spectrum, read off line depths, and dial the
> temperature into Saha's equation to strip the ionization bias out. Watch
> iron collapse and hydrogen swell to its true, overwhelming share. The
> spectrum will be primary data, catalogued in `/data/`.

Now the fuel was known, and Arthur Eddington had already named the fire. In
1920 he pointed at Francis Aston's precise atomic weights: four hydrogen
nuclei weigh slightly *more* than one helium nucleus. Bind four into one
and the missing mass — about seven parts in a thousand — has to go
somewhere. Einstein had said where — [mass is energy](special-relativity-matter-and-energy.md). "What is
possible in the Cavendish Laboratory," Eddington wrote, "may not be too
difficult in the Sun."

$$
4\,{}^{1}\text{H} \rightarrow {}^{4}\text{He} + 2e^{+} + 2\nu,
\qquad \Delta m\, c^2 \approx 26.7~\text{MeV}
$$

One barrier remained, and it was quantum. Two protons repel. To fuse they
must nearly touch, and the Sun's core, at fifteen million kelvin, gives
them nowhere near the energy to climb the electrical hill between them.
Classically the Sun cannot burn. It burns anyway, because a proton is a
wave, and a wave leaks through a wall it cannot climb — the tunnelling of
[Through the Wall](through-the-wall.md). In 1938 Hans Bethe and Charles
Critchfield folded that leak into reaction rates and wrote down the
proton–proton chain that lights stars like ours. Its slowest step is the
first, where the weak force must turn a proton into a neutron; that
sluggishness is exactly why the Sun smoulders for aeons instead of
detonating.

<figure>
<figcaption>The proton–proton chain. Two protons make a deuteron (the hard,
slow step); the deuteron catches a third proton to build helium-3; two
helium-3 nuclei merge into helium-4 and hand back two protons. Net: four
hydrogen nuclei become one helium.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Three reactions of the proton-proton chain stacked vertically, ending in helium-4">
  <text x="30" y="44" font-size="14" fill="currentColor">p + p</text>
  <line x1="120" y1="40" x2="196" y2="40" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="188,35 196,40 188,45" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="206" y="44" font-size="14" fill="currentColor">&#178;H + e&#8314; + &#957;</text>
  <text x="30" y="114" font-size="14" fill="currentColor">&#178;H + p</text>
  <line x1="120" y1="110" x2="196" y2="110" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="188,105 196,110 188,115" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="206" y="114" font-size="14" fill="currentColor">&#179;He + &#947;</text>
  <text x="30" y="184" font-size="14" fill="currentColor">&#179;He + &#179;He</text>
  <line x1="150" y1="180" x2="226" y2="180" stroke="currentColor" stroke-width="1.2"/>
  <polyline points="218,175 226,180 218,185" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="236" y="184" font-size="14" fill="currentColor">&#8308;He + p + p</text>
</svg>
</figure>

> **Interactive (planned):** run the proton–proton chain. Fire protons at a
> Coulomb barrier and see how often quantum tunnelling lets them through at
> core temperatures; tally deuterons, helium-3, and helium-4; read the
> released energy against the neutrino losses[^neutrino] and watch the star
> keep its books.

A star is a truce. Gravity pulls every layer inward; the fusion-heated gas
pushes back out. The star settles where the outward drop in pressure across
a shell exactly carries the weight of the gas above it — hydrostatic
equilibrium:

$$
\frac{dP}{dr} = -\frac{G\, m(r)\, \rho(r)}{r^2}
$$

Turn the fire up and the star swells and cools until balance returns; turn
it down and the star contracts and reheats. The Sun is not burning out of
control. It is holding still, and has held still for billions of years.

> **Interactive (planned):** balance a star. Set a mass, and let
> gravity, pressure, and the temperature-hungry fusion rate negotiate a
> stable radius and luminosity. Push the sliders and watch a red dwarf
> sip its hydrogen for a trillion years while a blue giant burns through in
> a few million.

The helium Payne found in the Sun was made there, from hydrogen, by this
chain. Heavier stars press on — carbon, oxygen, all the way to iron — and
scatter the ash when they die. You are made of that ash: the calcium in
your bones and the iron in your blood were assembled in stellar cores and
flung out to be gathered again. Stars shine by turning hydrogen into us.

## A prediction you can make

Every kilogram of helium the Sun forges is lighter than the hydrogen that
made it by seven parts in a thousand, and that lost mass leaves as light.
The Sun's luminosity is measured — the sunlight crossing one square metre
at Earth, times the area of a sphere one astronomical unit in radius. So
the Sun must be shedding mass at[^numbers]

$$
\frac{dm}{dt} = \frac{L_\odot}{c^2}
= \frac{3.83 \times 10^{26}~\text{W}}{(3.00 \times 10^{8}~\text{m/s})^2}
\approx 4.3 \times 10^{9}~\text{kg/s}
$$

Four billion kilograms a second — over four million tonnes — vanishing into
starlight. Because only $0.71\%$ of the fuel's mass converts, the Sun burns
about $6 \times 10^{11}$ kg of hydrogen every second, yet it is so vast this
barely dents it. Allow that the core, roughly a tenth of the Sun's
$2.0 \times 10^{30}$ kg, is available fuel, and the reserve lasts

$$
t \approx \frac{0.0071 \times 0.1 \times M_\odot\, c^2}{L_\odot}
\approx 3.3 \times 10^{17}~\text{s} \approx 1 \times 10^{10}~\text{yr}.
$$

Ten billion years — against Kelvin's gravitational thirty million. Fusion
does not merely beat the old estimate; it overshoots it by a factor of
three hundred, which is exactly what the billion-year-old rocks demanded.
The Sun is about halfway through.

[^saha]: Saha's ionization equation (1920) comes from the same statistical
  mechanics that governs any chemical equilibrium; $\chi$ is the ionization
  energy, the $g$'s are statistical weights, and $n_e$ is the electron
  density. The [spectroscopy](spectroscopy.md) chapter earns the atomic
  energy levels this equation spends.

[^russell]: The hedge is historically real and worth honouring rather than
  smoothing over. Payne's thesis called the derived hydrogen and helium
  abundances "improbably high" and "almost certainly not real" — Russell's
  phrasing, adopted under his pressure. She was right and the caution was
  wrong; the episode is a standing lesson about deferring to authority over
  one's own analysis.

[^neutrino]: The full $26.7$ MeV per helium nucleus includes the energy of
  the two positrons annihilating with electrons. About $2\%$ of it,
  roughly $0.6$ MeV, is carried off by the two neutrinos, which stream out
  of the Sun almost unimpeded and never heat it. The luminosity we see is
  the remaining $\approx 26.1$ MeV per helium, delayed by the hundred
  thousand years it takes a photon to random-walk out of the core.

[^numbers]: Standard solar values, not draft inventions:
  $L_\odot = 3.828 \times 10^{26}$ W, $M_\odot = 1.989 \times 10^{30}$ kg,
  core temperature about $1.5 \times 10^{7}$ K. The mass fraction released,
  $0.71\%$, follows from Aston's atomic masses:
  $4 \times 1.00783 - 4.00260 = 0.0287$ u out of $4.031$ u.
