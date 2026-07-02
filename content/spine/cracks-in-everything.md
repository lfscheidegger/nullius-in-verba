---
title: Cracks in Everything (draft)
chapter: 28
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

In 1894 physics looked finished. [Maxwell's equations](maxwells-synthesis.md)
had folded electricity, magnetism, and light into one theory.
Thermodynamics ruled the engines; statistical mechanics explained the
thermodynamics; even the atom — whose very
[reality was still being contested](atoms-are-real.md) — behaved, when you
granted it, like a tidy billiard ball. That year Michelson told an
audience that the grand underlying principles had been firmly
established, and that future discoveries must be looked for in the sixth
place of decimals.[^michelson] Within three years the sixth decimal place
had opened like a trapdoor.

The instrument that opened it was almost embarrassingly common: a sealed
glass tube, pumped nearly empty, with a high voltage across two metal
plates. Physicists had played with these for decades. Something streamed
from the negative plate — the cathode — and made the glass glow where it
struck. They called the something *cathode rays* and argued about it. In
November 1895 Wilhelm Röntgen, working in Würzburg with a tube wrapped in
black cardboard, noticed a coated screen glowing across the darkened
room. Whatever reached it passed through cardboard, through wood, through
flesh. Within weeks he had photographed the bones of his wife's living
hand, and every physicist in Europe wanted a tube.

One of them, Henri Becquerel, guessed that X-rays came from fluorescence
and tested uranium salts, which glow after sunlight. They fogged
photographic plates as expected — and then fogged them just as densely
from a closed drawer, in darkness, with no sunlight, no tube, no voltage.
Uranium radiated all by itself, steadily, apparently forever. Nobody had
asked it to. Nobody could make it stop.

And the cathode rays themselves fell in 1897. J. J. Thomson bent them
with electric and magnetic fields at once. A charge $e$ moving at speed
$v$ feels a force $eE$ from an electric field and $evB$ from a magnetic
field set at right angles to its motion. Arrange the two fields to push
opposite ways and tune them until the beam flies straight; the forces
then balance, and the speed reads off directly:

$$
eE = evB \quad\Rightarrow\quad v = \frac{E}{B}.
$$

Now switch the electric field off. The magnetic force alone bends the
beam into an arc of radius $r$, with $evB = mv^2/r$, so

$$
\frac{e}{m} = \frac{v}{Br} = \frac{E}{B^2 r}.
$$

Two knob readings and a ruler, and the ratio of charge to mass falls out.
Thomson's answer was staggering: about a thousand times larger than the
same ratio for a hydrogen ion, the lightest particle chemistry
knew.[^thomson] Either the cathode-ray particle carried a thousand times
the charge, or it weighed a thousandth as much. Thomson bet on the mass —
and found the same $e/m$ whatever the cathode metal, whatever the gas.
The particle did not belong to any element. It was a universal
constituent, a piece *of* atoms, pried loose on a tabletop. He called it
a corpuscle. We call it the electron.

<figure>
<figcaption>Thomson's tube, schematized. Electrons leave the cathode, are
collimated by the slit anode, pass between charged plates, and strike the
far end of the tube. With the magnetic field off, the electric field
alone bends the beam; the dashed line marks where an undeflected beam
would land.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A cathode-ray tube: cathode at left, slit anode, deflection plates, and a beam curving downward between the plates toward the tube face at right">
  <rect x="28" y="58" width="358" height="104" rx="18" fill="none" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <line x1="55" y1="92" x2="55" y2="128" stroke="currentColor" stroke-width="3"/>
  <line x1="118" y1="66" x2="118" y2="103" stroke="currentColor" stroke-width="2"/>
  <line x1="118" y1="117" x2="118" y2="154" stroke="currentColor" stroke-width="2"/>
  <line x1="180" y1="88" x2="260" y2="88" stroke="currentColor" stroke-width="2.5"/>
  <line x1="180" y1="138" x2="260" y2="138" stroke="currentColor" stroke-width="2.5"/>
  <path d="M 60 110 L 180 110 Q 220 110 260 120 L 370 147.5" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
  <line x1="180" y1="110" x2="370" y2="110" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 3" opacity="0.6"/>
  <circle cx="370" cy="147.5" r="3" fill="var(--accent)"/>
  <text x="55" y="145" text-anchor="middle" font-size="13" fill="currentColor">cathode</text>
  <text x="118" y="176" text-anchor="middle" font-size="13" fill="currentColor">anode slit</text>
  <text x="220" y="80" text-anchor="middle" font-size="13" fill="currentColor">&#8722;</text>
  <text x="220" y="156" text-anchor="middle" font-size="13" fill="currentColor">+</text>
  <text x="330" y="100" text-anchor="middle" font-size="13" fill="currentColor" opacity="0.7">undeflected</text>
</svg>
</figure>

> **Interactive (planned):** Thomson's experiment on your screen. Set the
> plate voltage and the magnetic coil current, straighten the beam to
> find $v$, then kill the electric field and read the deflection to get
> $e/m$ yourself. The tube geometry and field values will follow
> Thomson's 1897 paper, with provenance documented in `/data/`; nothing
> in the sim will be tuned to flatter the answer.

Meanwhile in Paris, Marie Curie asked the disciplined question about
Becquerel's rays: *how much*, exactly, and *what does it depend on?* She
measured the faint ionization currents with a piezoelectric
electrometer — currents of a few picoamps, read by nulling a quartz
crystal's charge against them — and found something stranger than the
rays themselves. The activity of a sample depended only on how much
uranium it contained. Not on the compound. Not on whether it was wet or
dry, solid or dissolved, hot or cold, lit or dark. Chemistry, which can
transform any substance into any other guise, could not touch it.
Radioactivity was a property of the *atom* — and that is what made it a
crack rather than a curiosity. Every energy source physics knew was
chemical or mechanical, a rearrangement of outsides. This energy welled
up from inside the atom itself, from a place the billiard ball did not
have. When her pitchblende ore proved several times more active than its
uranium content allowed, she concluded it must contain undiscovered
elements, far more radioactive than uranium, present in traces. Finding
them meant processing tons of ore residue by hand, boiling and
crystallizing in a leaky shed, to win a tenth of a gram of radium
salt.[^curie] The logic held. Polonium and radium came out of the sludge
exactly as the electrometer had promised.

Three years, three cracks: rays that see through flesh, atoms that spend
energy from nowhere, and a particle smaller than the smallest atom. None
of them fit. The next twenty-five chapters are the story of what poured
through.

## A prediction you can make

Electrolysis experiments give the charge-to-mass ratio of the hydrogen
ion: $e/m_\mathrm{H} \approx 9.6 \times 10^{7}$ C/kg. The modern value
for the electron is $e/m_e = 1.76 \times 10^{11}$ C/kg. If the two carry
the same size of charge — Thomson could not yet prove it, but assume
it — then the hydrogen atom outweighs the electron by

$$
\frac{m_\mathrm{H}}{m_e} = \frac{1.76 \times 10^{11}}{9.6 \times 10^{7}}
\approx 1830.
$$

The modern proton-to-electron mass ratio is 1836.2. And $e/m$ predicts
speeds: accelerate electrons through 300 volts, so that
$eV = \tfrac{1}{2}mv^2$, and they should move at
$v = \sqrt{2 (e/m) V} = \sqrt{2 \times 1.76 \times 10^{11} \times 300}
\approx 1.0 \times 10^{7}$ m/s — three percent of the speed of light,
from a battery stack on a bench. Every cathode-ray tube ever built
agrees.

[^michelson]: The remark is Michelson's, from a 1894 address at the
  University of Chicago; he credited the sentiment to "an eminent
  physicist," often guessed to be Kelvin. It is quoted here for its
  irony, not its accuracy — Michelson himself kept measuring.

[^thomson]: Thomson's own 1897 figure for $e/m$ was roughly
  $8 \times 10^{10}$ C/kg, low by about a factor of two (the modern
  value is $1.76 \times 10^{11}$ C/kg). The conclusion survived the
  error: even his low value put the corpuscle's mass near a thousandth
  of hydrogen's. This chapter's tidy sequence also straightens history a
  little — Wiechert and Kaufmann measured $e/m$ the same year, and
  Becquerel's uranium was handed to the Curies as a thesis topic, not a
  thunderbolt.

[^curie]: The canonical figures: by 1902, about a tenth of a gram of
  radium chloride from roughly a ton of pitchblende residue, processed
  largely by Marie Curie herself. The real chapter will cite her 1898
  notes and thesis directly and document the numbers' provenance; treat
  the picoamp figure above as an order-of-magnitude sketch until then.
