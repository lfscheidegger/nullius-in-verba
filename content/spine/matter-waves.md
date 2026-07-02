---
title: Matter Waves (draft)
chapter: 37
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1924 physics had learned to live with an absurdity. Light, whose
wave nature had been settled for a century, had turned out to be
[grainy after all](light-is-grainy-after-all.md): it arrives in
packets, and each packet carries a momentum tied to its wavelength,

$$
p = \frac{h}{\lambda}.
$$

Interference said wave. The photoelectric effect and Compton's
recoiling electrons said particle. Both experiments were impeccable,
so light was somehow both, and nobody could say what that meant.
Meanwhile [the old quantum theory](the-old-quantum-theory.md) was
running on rules without reasons. Bohr's atom worked — it predicted
hydrogen's spectrum to four decimal places — but its central
commandment, that the electron's angular momentum comes only in whole
multiples of $\hbar$, had been decreed, not derived. Why should an
orbit care about integers?

A doctoral student in Paris asked the question the other way around.
Louis de Broglie had watched the wave–particle scandal unfold and drew
the symmetric conclusion: if waves of light behave like particles,
then particles of matter should behave like waves. Take the photon's
relation and read it in reverse. An electron with momentum $p = mv$
drags along a wave of wavelength

$$
\lambda = \frac{h}{p} = \frac{h}{mv},
$$

and a frequency fixed by its energy, $\nu = E/h$. That was nearly the
whole thesis.[^einstein] It sounds like numerology until you aim it at
Bohr's commandment. A wave confined to a circular orbit must close on
itself — after one lap it has to rejoin its own phase, exactly like
[a standing wave on a string](sound.md) that must fit whole
half-wavelengths between its fixed ends. Closing the loop demands a
whole number of wavelengths around the circumference: $2\pi r =
n\lambda$. Substitute $\lambda = h/mv$ and rearrange:

$$
m v r = n\,\frac{h}{2\pi} = n\hbar.
$$

Bohr's arbitrary rule falls out in one line. The integers in
[the atom](inside-the-atom.md) are the same integers that pick out the
notes of a guitar string: they count the waves that fit. The orbits
Bohr allowed are the ones where the electron's wave interferes
constructively with itself; every other orbit cancels itself out.

<figure>
<figcaption>A de Broglie wave closing on a Bohr orbit. Three whole
wavelengths fit the circumference, so the wave rejoins its own phase:
this orbit is allowed, and its angular momentum is 3ℏ. A wave of any
in-between wavelength would come back mismatched and cancel itself.
Amplitude exaggerated for legibility.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A circle drawn dashed, with a wavy closed curve of three full wavelengths oscillating about it">
  <circle cx="200" cy="110" r="78" fill="none" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 4" opacity="0.5"/>
  <path d="M 278 110 L 281 104 L 283 98 L 284 92 L 285 86 L 285 79 L 283 73 L 281 67 L 278 61 L 274 56 L 269 52 L 264 49 L 258 46 L 252 44 L 245 43 L 239 42 L 233 43 L 227 43 L 222 44 L 216 44 L 211 45 L 207 46 L 202 46 L 198 46 L 193 46 L 189 45 L 184 44 L 178 44 L 173 43 L 167 43 L 161 42 L 155 43 L 148 44 L 142 46 L 136 49 L 131 52 L 126 56 L 122 61 L 119 67 L 117 73 L 115 79 L 115 86 L 116 92 L 117 98 L 119 104 L 122 110 L 125 115 L 128 120 L 132 125 L 135 129 L 138 133 L 141 136 L 143 140 L 146 144 L 148 148 L 150 152 L 151 157 L 153 162 L 155 167 L 158 172 L 161 178 L 165 183 L 169 188 L 173 192 L 179 196 L 184 199 L 190 201 L 197 202 L 203 202 L 210 201 L 216 199 L 221 196 L 227 192 L 231 188 L 235 183 L 239 178 L 242 172 L 245 167 L 247 162 L 249 157 L 250 152 L 252 148 L 254 144 L 257 140 L 259 136 L 262 133 L 265 129 L 268 125 L 272 120 L 275 115 Z"
        fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="200" y="114" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">2&#960;r = 3&#955;</text>
</svg>
</figure>

Beautiful — and untested. The wavelength of an electron accelerated
through a modest voltage comes out near $10^{-10}$ meters, an
angstrom, thousands of times shorter than visible light. No
manufactured slit or grating could resolve it. But nature
manufactures gratings at exactly that scale: crystals, whose regularly
spaced atomic planes had been diffracting X-rays since 1912. If de
Broglie was right, a crystal should diffract electrons too.

The test came from a pair of engineers who were not looking for it.
Clinton Davisson and Lester Germer, at Bell's laboratories in New
York, were firing slow electrons at nickel to study how vacuum-tube
surfaces scatter them — industrial work. In 1925 an accident
intervened: a flask of liquid air burst and oxidized their hot nickel
target, and the long bake they used to clean it fused the metal's
many tiny crystal grains into a few large ones.[^accident] The
scattering pattern changed character overnight. Where a jumble of
grains had scattered electrons smoothly in all directions, the big
crystals threw them into sharp preferred beams. By January 1927 the
measurements were clean: electrons accelerated through 54 volts,
striking the crystal face head-on, bounced off with a strong peak at
50 degrees from the incoming beam. Rows of nickel atoms, spaced
$d = 2.15\,\text{Å}$ apart at the surface, were acting as a
diffraction grating,[^surface] reinforcing scattered waves at angles
where neighboring rows' contributions arrive in step:

$$
d\sin\theta = n\lambda.
$$

<figure>
<figcaption>The Davisson–Germer geometry. Electrons strike the nickel
face head-on; waves scattered by neighboring surface atoms, a distance
<em>d</em> apart, reinforce where the extra path <em>d</em> sin <em>θ</em>
is a whole wavelength. At 54 eV the peak sits at <em>θ</em> = 50°.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A row of atoms with an electron beam arriving vertically and scattered rays leaving at 50 degrees, the path difference d sine theta marked between two adjacent rays">
  <circle cx="70" cy="170" r="4" fill="currentColor"/>
  <circle cx="160" cy="170" r="4" fill="currentColor"/>
  <circle cx="250" cy="170" r="4" fill="currentColor"/>
  <circle cx="340" cy="170" r="4" fill="currentColor"/>
  <text x="60" y="198" font-size="13" fill="currentColor">nickel surface</text>
  <line x1="250" y1="192" x2="340" y2="192" stroke="currentColor" stroke-width="0.75"/>
  <line x1="250" y1="188" x2="250" y2="196" stroke="currentColor" stroke-width="0.75"/>
  <line x1="340" y1="188" x2="340" y2="196" stroke="currentColor" stroke-width="0.75"/>
  <text x="295" y="209" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">d</text>
  <line x1="250" y1="40" x2="250" y2="158" stroke="currentColor" stroke-width="1.25"/>
  <polygon points="246,150 254,150 250,160" fill="currentColor"/>
  <text x="250" y="25" text-anchor="middle" font-size="13" fill="currentColor">electron beam, 54 eV</text>
  <line x1="160" y1="170" x2="260" y2="86" stroke="currentColor" stroke-width="1.25"/>
  <polygon points="260,86 255,95 250,89" fill="currentColor"/>
  <line x1="250" y1="170" x2="350" y2="86" stroke="currentColor" stroke-width="1.25"/>
  <polygon points="350,86 345,95 340,89" fill="currentColor"/>
  <line x1="250" y1="170" x2="213" y2="126" stroke="currentColor" stroke-width="0.75" stroke-dasharray="3 3"/>
  <line x1="160" y1="170" x2="213" y2="126" stroke="var(--accent)" stroke-width="2.5"/>
  <text x="146" y="140" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">d sin &#952;</text>
  <line x1="152" y1="143" x2="180" y2="150" stroke="currentColor" stroke-width="0.5" opacity="0.6"/>
  <path d="M 250 125 A 45 45 0 0 1 284 141" fill="none" stroke="currentColor" stroke-width="0.75"/>
  <text x="280" y="122" font-size="13" fill="currentColor" font-style="italic">&#952; = 50&#176;</text>
</svg>
</figure>

Read the grating equation backward and the experiment measures the
wavelength: $\lambda = 2.15 \times \sin 50^\circ = 1.65$ Å. Note the
scale of the apparatus. No accelerator, no observatory: an electron
gun, a nickel crystal, a movable detector, a vacuum pump. A tabletop
told matter what it was. The same year, G. P. Thomson fired faster
electrons through thin metal foils and photographed diffraction rings,
confirming the wave in an entirely different regime. He shared the
Nobel Prize with Davisson for showing the electron is a wave; his
father, J. J. Thomson, had won it for showing the electron is a
particle. Both were right.

> **Interactive (planned):** an electron-diffraction bench. Set the
> accelerating voltage and sweep the detector around the crystal; the
> sim plots scattered intensity against angle and lets you watch the
> 50° peak grow, sharpen, and migrate as the voltage changes — then
> asks you to extract $\lambda$ from each peak and plot it against
> $1/\sqrt{V}$. The intensity curves will be digitized from Davisson
> and Germer's 1927 *Physical Review* paper (provenance to be
> documented in `/data/`); this draft fakes nothing in their place.

Matter waves are not a peculiarity of electrons. Helium atoms
diffract. Neutrons diffract — crystallographers now use them daily.
Whole molecules diffract. The wave is universal; only its wavelength
hides it. Because $h$ is so small, anything heavy moving at any
ordinary speed has a wavelength absurdly below any grating nature
could offer: a thrown baseball's is around $10^{-34}$ meters. The
world looks classical for the same reason it looks flat — we are too
big to notice the curvature. What kind of wave this is, what is
waving, and what equation governs it: that question has no honest
answer yet on this page. It gets one in the next chapter, and the
answer will demand new mathematics.

## A prediction you can make

De Broglie's relation is quantitative, so check it. An electron
accelerated through $V = 54$ volts acquires kinetic energy
$E = 54\,\text{eV} = 8.65 \times 10^{-18}$ J, far too little to need
relativity, so $E = p^2/2m$ and

$$
\lambda = \frac{h}{\sqrt{2mE}}
= \frac{6.63 \times 10^{-34}}
       {\sqrt{2 \times 9.11 \times 10^{-31} \times 8.65 \times 10^{-18}}}
\approx 1.67 \times 10^{-10}\ \text{m}.
$$

The crystal, which knows nothing of Planck's constant, said
$\lambda = d\sin\theta = 2.15\,\text{Å} \times 0.766 = 1.65$ Å. The
two numbers agree to about one percent[^refraction] — and every term
in the prediction was fixed before Davisson and Germer ever baked
their nickel.

[^einstein]: De Broglie's 1924 Paris thesis committee could find no
  error but hesitated to endorse the idea; Paul Langevin sent a copy
  to Einstein, who replied that de Broglie had "lifted a corner of the
  great veil." The thesis passed. Einstein then used matter waves in
  his own work on quantum gases, which is where Schrödinger first met
  the idea.

[^accident]: The accident is real, but this telling is straightened:
  Davisson had been scattering electrons off metals since 1921 for
  reasons rooted in vacuum-tube patent disputes, and he connected his
  odd post-accident data to de Broglie's theory only after a 1926 trip
  to Oxford, where he found European physicists discussing his own
  published curves as possible diffraction. The targeted search that
  followed produced the 1927 result.

[^surface]: Slow electrons barely penetrate the crystal, so the
  operative grating is the two-dimensional net of atoms at the
  surface, and the right condition is the plane-grating law
  $d\sin\theta = n\lambda$ with $d = 2.15$ Å the row spacing on
  nickel's densest face — not Bragg's bulk law $2d\sin\theta =
  n\lambda$, which governs X-rays and fast electrons that sample many
  atomic planes.

[^refraction]: The residual disagreement is physics, not sloppiness:
  the electron speeds up as it enters the crystal's interior
  potential, so its wavelength inside is slightly shorter and the beam
  refracts at the surface. Davisson and Germer analyzed exactly this
  in their 1927 paper. The numbers here are the standard published
  values, not draft inventions.
