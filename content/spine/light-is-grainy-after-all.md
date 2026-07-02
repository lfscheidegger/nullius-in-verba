---
title: Light Is Grainy After All (draft)
chapter: 34
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1900 the wave theory of light looked finished. Young's two slits had
settled [the first round](what-is-light-round-one.md) of the argument;
[Maxwell had derived](maxwells-synthesis.md) light from electricity and
magnetism; Hertz had made the waves in a laboratory and measured their
speed. No result in physics stood on firmer ground. Then came
[the ultraviolet catastrophe](the-ultraviolet-catastrophe.md), and Planck's
strange cure: matter exchanges radiant energy in lumps of size $h\nu$.
Everyone, Planck included, read the lumps as a quirk of matter — of the
oscillators in the glowing wall. The light itself, surely, was still a
wave.

One experiment refused to cooperate. Hertz himself had noticed it, in the
very apparatus that confirmed Maxwell: ultraviolet light falling on metal
made sparks jump more easily.[^hertz] By 1902 Philipp Lenard had cleaned
the effect up. Light ejects electrons from a metal surface, and the
electrons come out with energies that ignore the light's brightness.
Turn the lamp up tenfold and you get ten times as many electrons — each
with exactly the same energy as before. Change the light's *color* toward
the blue, and every electron comes out faster. Redden it past a threshold
and the electrons stop entirely, however blinding the lamp. Wave theory
could explain none of this. A wave spreads its energy over the whole
wavefront; an electron sitting in a faint wave should soak up energy
slowly and escape only after minutes or hours. The electrons leave
instantly, even in light so dim the arithmetic says they should wait a
year.

In 1905 Einstein proposed the reckless thing: take the lumps out of the
wall and put them in the light. Light of frequency $\nu$ travels as grains
of energy $E = h\nu$ — all-or-nothing packets that a single electron
absorbs whole.[^history] The bookkeeping of an escape is then one line
long. The grain delivers $h\nu$; the metal charges an exit toll $W$, its
*work function*; the electron keeps the difference. Measure that remainder
by the stopping voltage $V_0$ — the reverse voltage that just barely turns
the fastest electrons back — and

$$
eV_0 = h\nu - W .
$$

Everything unexplainable becomes obvious. Brightness counts grains, so it
sets the number of electrons, never their energy. Color sets the size of
each grain, so it alone sets the energy. Below $\nu_0 = W/h$ a grain
cannot pay the toll, and nothing escapes. And the equation makes a naked
quantitative promise: plot $V_0$ against $\nu$ for any metal and you get a
straight line whose slope is $h/e$ — the same slope for sodium, for
lithium, for anything — with Planck's constant, extracted from glowing
cavities, waiting at the end of the arithmetic.

<figure>
<figcaption>Einstein's promise, drawn schematically. Stopping voltage
against frequency is a straight line: slope <em>h/e</em>, universal for
all metals; intercept <em>ν</em>&#8320; = <em>W/h</em>, the metal's own
threshold. The real chapter plots Millikan's measured points on these
axes.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Schematic graph of stopping voltage versus light frequency: a straight line rising from a threshold frequency on the horizontal axis">
  <line x1="50" y1="190" x2="370" y2="190" stroke="currentColor" stroke-width="1"/>
  <line x1="50" y1="190" x2="50" y2="25" stroke="currentColor" stroke-width="1"/>
  <line x1="150" y1="190" x2="350" y2="45" stroke="currentColor" stroke-width="1.5"/>
  <line x1="150" y1="186" x2="150" y2="194" stroke="currentColor" stroke-width="1"/>
  <text x="150" y="208" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">&#957;&#8320; = W/h</text>
  <text x="365" y="208" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">&#957;</text>
  <text x="38" y="32" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">V&#8320;</text>
  <text x="215" y="120" font-size="13" fill="currentColor">slope = h/e</text>
</svg>
</figure>

Robert Millikan set out to break that promise. He thought the light-grain
hypothesis absurd — interference was wave behavior, and no grain
interferes with itself — and he judged, correctly, that nobody's data was
clean enough to test the line. Metal surfaces oxidize in minutes and their
work functions drift. So he spent a decade building what he called a
machine shop in a vacuum: sodium and lithium cylinders inside the
evacuated tube, with a remotely operated knife that shaved each surface
fresh, in vacuum, moments before every run. In 1916 he published the
verdict he had not wanted. The line is straight. The slope is the same for
both metals. It yields $h = 6.57 \times 10^{-34}$ J·s, within about one
percent of Planck's blackbody value — and, in the same paper, Millikan
declared the theory behind the equation untenable.[^millikan] The data
outvoted its own author. That is the whole scientific method in one
sentence.

> **Interactive (planned):** Millikan's actual stopping-potential
> measurements for sodium and lithium, digitized from his 1916 *Physical
> Review* paper (provenance to be documented in `/data/`). The reader
> plots $V_0$ against $\nu$, fits the line, and reads off $h/e$ and each
> metal's work function — extracting Planck's constant from the very data
> taken to disprove Einstein. This draft fakes no numbers in its place.

A confirmed equation can still be argued around; a collision cannot. In
1923 Arthur Compton closed the argument. If a grain of light carries
energy $E = h\nu$, then [relativity](special-relativity-matter-and-energy.md)
assigns it momentum too: for anything massless, $p = E/c$, which for light
reads $p = h/\lambda$. So an X-ray meeting a loosely bound electron is a
game of billiards. Write down conservation of energy and momentum for the
collision and the scattered grain must emerge with less energy — a longer
wavelength — by an amount fixed purely by the scattering angle $\theta$:

$$
\Delta\lambda = \frac{h}{m_e c}\left(1 - \cos\theta\right).
$$

The constant out front, $h/m_e c = 2.43 \times 10^{-12}$ m, involves
nothing about the target material and nothing about the X-ray used.
Compton scattered molybdenum X-rays from graphite, put the scattered rays
through a crystal spectrometer, and found the shifted line at exactly the
predicted displacement, angle after angle. A wave washing over an electron
cannot do this. A particle striking one can do nothing else.

<figure>
<figcaption>Compton's billiards. A grain of light strikes an electron at
rest; the grain recoils at angle <em>θ</em> with a longer wavelength, and
the electron carries off the difference in energy and momentum.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Compton scattering diagram: an incoming photon strikes an electron at rest; the scattered photon leaves at an angle theta and the electron recoils downward">
  <line x1="40" y1="110" x2="188" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="197,110 187,105 187,115" fill="currentColor"/>
  <circle cx="205" cy="110" r="4" fill="currentColor"/>
  <line x1="205" y1="110" x2="336" y2="49" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="345,45 334,44 338,54" fill="currentColor"/>
  <line x1="205" y1="110" x2="312" y2="175" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="320,180 309,178 315,169" fill="currentColor"/>
  <path d="M 240 110 A 35 35 0 0 0 236.7 95.3" fill="none" stroke="currentColor" stroke-width="0.75"/>
  <text x="252" y="98" font-size="13" fill="currentColor" font-style="italic">&#952;</text>
  <text x="110" y="98" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">photon, &#955;</text>
  <text x="205" y="132" text-anchor="middle" font-size="13" fill="currentColor">electron at rest</text>
  <text x="300" y="34" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">&#955;&#8242; = &#955; + &#916;&#955;</text>
  <text x="330" y="200" text-anchor="middle" font-size="13" fill="currentColor">recoil electron</text>
</svg>
</figure>

So light is grainy after all. And light is a wave — Young's fringes did
not vanish in 1923, and no grain theory explains them. Both verdicts stand
on data too good to dismiss, and they contradict each other. This book
will not resolve the contradiction in this chapter, because physics did
not: the tension between the grain and the wave is one of the two cliffs
this act is named for, and we will be climbing it for some time.

## A prediction you can make

Einstein's equation lets you predict a voltage before touching the
apparatus — and the metal's unknown work function cancels if you compare
two colors. A mercury lamp emits a green line at $\lambda = 546.1$ nm and
an ultraviolet line at $\lambda = 253.7$ nm, two of the lines Millikan
used. Subtracting Einstein's equation for the two frequencies,

$$
\Delta V_0 = \frac{hc}{e}\left(\frac{1}{253.7\ \text{nm}} -
\frac{1}{546.1\ \text{nm}}\right) \approx 1240\ \text{V·nm} \times
0.00211\ \text{nm}^{-1} \approx 2.62\ \text{V},
$$

whatever the metal.[^numbers] Measure the stopping voltage under the green
line, switch to the ultraviolet, and the voltage must rise by 2.62 volts —
for sodium, for lithium, for a metal nobody has tried. Millikan's 1916
lines pass this test to within his stated half-percent. If light were a
wave, no experiment of this kind would return the same number twice.

[^hertz]: A clean irony: the photoelectric effect was discovered in 1887,
  as a nuisance, inside the experiment that proved light is an
  electromagnetic wave. Hertz noted it carefully and moved on. He died in
  1894, before either of his discoveries showed its full teeth.

[^history]: The narrative is straightened here. Einstein's 1905 paper was
  titled a "heuristic point of view"; its central argument ran through the
  entropy of radiation, with the photoelectric effect as one of three
  applications, and it went well beyond Planck, who resisted light quanta
  for years. The word *photon* arrived only in 1926, coined by the chemist
  G. N. Lewis, so this chapter says "grain" until the name is earned.

[^millikan]: Millikan, *Physical Review* **7**, 355 (1916): the
  "semi-corpuscular theory," he wrote, seemed "wholly untenable" even as
  his data confirmed its equation to half a percent. His measured
  $h = 6.57 \times 10^{-34}$ J·s sits about one percent below the modern
  value, $6.626 \times 10^{-34}$ J·s — which since 2019 is *exact*, fixed
  by definition to define the kilogram. This chapter's dataset will be his
  published stopping-potential tables, digitized with provenance.

[^numbers]: Real numbers throughout: 546.1 nm and 253.7 nm are standard
  mercury emission lines, $hc \approx 1240$ eV·nm is the usual shortcut
  (1239.8 to four figures), and the Compton constant
  $h/m_e c = 2.426 \times 10^{-12}$ m follows from CODATA values of $h$,
  $m_e$, and $c$. Nothing in this section is a draft invention.
