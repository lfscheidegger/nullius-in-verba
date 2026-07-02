---
title: Two Roads to Quantum Mechanics (draft)
chapter: 38
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1925 the [old quantum theory](the-old-quantum-theory.md) was a
scaffold, not a building. Bohr's rules quantized hydrogen and matched
[the spectroscopists' ledgers](spectroscopy.md) line for line — and then
failed for helium, the very next atom. The rules said which classical
orbits were allowed but never why, and they were silent about the one
thing the ledgers recorded most carefully: how *bright* each spectral
line is. De Broglie had just made [matter itself a wave](matter-waves.md),
which deepened the mystery without resolving it. Physics owned a heap of
quantization recipes and no mechanics. Within eighteen months it had two
complete mechanics — invented independently, from opposite philosophies,
by men who found each other's theories repugnant.

The first road ran through austerity. In June 1925 Werner Heisenberg,
exiled by hay fever to the bare island of Helgoland, resolved to build a
theory out of observable quantities and nothing else.[^history] Nobody
had ever seen an electron's orbit. What experiments actually deliver are
the frequencies and intensities of spectral lines, and each line is
indexed by *two* states — where the jump starts and where it ends. So
Heisenberg replaced the orbit $x(t)$ with the whole square array of
transition quantities $x_{nm}$, one entry per pair of states, and asked
how such arrays must combine. The rule that emerged — multiply rows into
columns — had a shocking property: the order matters. For position and
momentum, the mismatch is not an error term but the entire content of the
theory:

$$
\hat{x}\hat{p} - \hat{p}\hat{x} = i\hbar .
$$

The arrays are *matrices*, the $i$ is the imaginary unit, and both are
tools this book has not needed until now — the vocabulary pages on
complex numbers and on linear algebra enter the spine here, on schedule,
and this chapter leans on them. Where $\hbar$ is concerned, note the
scale: $1.055 \times 10^{-34}$ joule-seconds. The failure of $xp$ to
equal $px$ is real, universal, and thirty-four decimal places too small
to feel.

The second road ran through pictures. In the winter of 1925–26 Erwin
Schrödinger, who wanted physics continuous and visualizable, took
de Broglie at his word: if matter is a wave, there must be a wave
equation. He found it. A complex-valued function $\psi(x,t)$ spreads
through space and evolves by

$$
i\hbar \frac{\partial \psi}{\partial t}
= -\frac{\hbar^2}{2m} \frac{\partial^2 \psi}{\partial x^2}
+ V(x)\,\psi ,
$$

and the stationary vibrations of $\psi$ in an atom reproduce Bohr's
energy levels the way a violin string's overtones reproduce a scale. A
*particle*, in this picture, is a wave packet: a hum of many wavelengths
that cancel everywhere except in one moving lump. The mathematics of
adding waves to build shapes is the same trick we first met as
[epicycles](saving-the-appearances.md) — circles on circles summing to
any motion — grown up into Fourier's theorem.

> **Interactive (planned):** build a wave packet by hand. Sliders add
> plane waves of chosen wavelength and amplitude; the sum forms a lump.
> The reader discovers the tradeoff directly: making the lump narrower
> forces a wider spread of wavelengths, and no cleverness evades it.

<figure>
<figcaption>A wave packet: many wavelengths conspiring to cancel
everywhere but one place. The envelope (dashed) has width Δx; the ripples
inside it have the de Broglie wavelength, and building a finite envelope
requires a spread of them. The shape drawn is a schematic Gaussian
packet, not data.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="An oscillating wave confined under a bell-shaped envelope, with the envelope width labeled delta x">
  <polyline points="20,110 88,110.4 90,109.8 92,109.0 94,108.3 96,107.8 98,107.7 100,108.3 102,109.6 104,111.3 106,113.2 108,114.7 110,115.3 112,114.6 114,112.5 116,109.1 118,105.1 120,101.5 122,99.3 124,99.5 126,102.6 128,108.3 130,115.6 132,123.0 134,128.4 136,130.1 138,126.8 140,118.6 142,106.8 144,93.9 146,83.0 148,77.3 150,79.0 152,88.8 154,105.2 156,125.0 158,143.4 160,155.8 162,158.2 164,149.0 166,129.4 168,103.1 170,76.2 172,55.3 174,46.0 176,51.4 178,71.3 180,101.6 182,135.5 184,165.0 186,182.8 188,184.1 190,167.9 192,137.8 194,100.5 196,64.8 198,39.3 200,30.0 202,39.3 204,64.8 206,100.5 208,137.8 210,167.9 212,184.1 214,182.8 216,165.0 218,135.5 220,101.6 222,71.3 224,51.4 226,46.0 228,55.3 230,76.2 232,103.1 234,129.4 236,149.0 238,158.2 240,155.8 242,143.4 244,125.0 246,105.2 248,88.8 250,79.0 252,77.3 254,83.0 256,93.9 258,106.8 260,118.6 262,126.8 264,130.1 266,128.4 268,123.0 270,115.6 272,108.3 274,102.6 276,99.5 278,99.3 280,101.5 282,105.1 284,109.1 286,112.5 288,114.6 290,115.3 292,114.7 294,113.2 296,111.3 298,109.6 300,108.3 302,107.7 304,107.8 306,108.3 308,109.0 310,109.8 312,110.4 380,110" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <polyline points="20,110 80,109.3 86,108.9 92,108.3 98,107.4 104,106.2 110,104.5 116,102.2 122,99.3 128,95.6 134,91.0 140,85.7 146,79.5 152,72.6 158,65.3 164,57.9 170,50.6 176,43.9 182,38.1 188,33.7 194,30.9 200,30.0 206,30.9 212,33.7 218,38.1 224,43.9 230,50.6 236,57.9 242,65.3 248,72.6 254,79.5 260,85.7 266,91.0 272,95.6 278,99.3 284,102.2 290,104.5 296,106.2 302,107.4 308,108.3 314,108.9 320,109.3 380,110" fill="none" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 3" opacity="0.55"/>
  <polyline points="20,110 80,110.7 86,111.1 92,111.7 98,112.6 104,113.8 110,115.5 116,117.8 122,120.7 128,124.4 134,129.0 140,134.3 146,140.5 152,147.4 158,154.7 164,162.1 170,169.4 176,176.1 182,181.9 188,186.3 194,189.1 200,190.0 206,189.1 212,186.3 218,181.9 224,176.1 230,169.4 236,162.1 242,154.7 248,147.4 254,140.5 260,134.3 266,129.0 272,124.4 278,120.7 284,117.8 290,115.5 296,113.8 302,112.6 308,111.7 314,111.1 320,110.7 380,110" fill="none" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 3" opacity="0.55"/>
  <line x1="145" y1="207" x2="255" y2="207" stroke="currentColor" stroke-width="1"/>
  <line x1="145" y1="202" x2="145" y2="212" stroke="currentColor" stroke-width="1"/>
  <line x1="255" y1="202" x2="255" y2="212" stroke="currentColor" stroke-width="1"/>
  <text x="200" y="203" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">Δx</text>
  <text x="322" y="98" font-size="13" fill="currentColor" opacity="0.7">envelope</text>
</svg>
</figure>

So the field had two theories: one of discrete jumps and abstract
matrices, one of continuous, humming waves. Schrödinger wrote that
Heisenberg's method repelled him; Heisenberg wrote privately that the
more he thought about Schrödinger's pictures, the more disgusting he
found them. Then, in 1926, Schrödinger proved the unbearable thing: the
two theories make identical predictions in every case, because they are
the same theory.[^rigor] A wave function is a vector in an
infinite-dimensional space; Heisenberg's matrices are what the operators
of that space look like written out in components. Neither picture is
the physics. The physics is what both compute — and that lesson,
*the formalism is not the physics*, will matter again when this act
finally asks what any of it means — so mark it now.

Uncertainty, in this light, is not a slogan about clumsy measurement. It
is a theorem. Fourier's mathematics already says that a wave narrow in
position must be broad in wavelength — you have heard this: a short
click has no definite [pitch](sound.md). Since momentum *is* inverse
wavelength times $h$, every state $\psi$ whatsoever obeys

$$
\Delta x \, \Delta p \geq \frac{\hbar}{2} ,
$$

with the bound following directly from $\hat{x}\hat{p} - \hat{p}\hat{x}
= i\hbar$. Nothing about detectors appears in the proof. The electron
does not *have* a sharp position and a sharp momentum that we are too
ham-fisted to read off; no state in the theory holds both.

> **Interactive (planned):** the 1D Schrödinger equation solved before
> the reader's eyes — a wave packet evolving live in a chosen potential
> (free space, a harmonic well), integrated numerically by a split-step
> Fourier method, with the method and its error disclosed in a sidenote.
> Watch a free packet spread; watch a well hold one together; watch
> $|\psi|^2$ carry the probability.

## A prediction you can make

The uncertainty theorem *builds* the hydrogen atom. Confine an electron
within radius $r$ and it cannot sit still: its momentum is at least of
order $\hbar/r$, costing kinetic energy $\hbar^2/2mr^2$, while the
nucleus offers potential energy $-e^2/4\pi\epsilon_0 r$. Total:

$$
E(r) = \frac{\hbar^2}{2mr^2} - \frac{e^2}{4\pi\epsilon_0 r} .
$$

Setting $dE/dr = 0$ gives the size the atom must choose,
$r = 4\pi\epsilon_0\hbar^2 / m e^2$. Put in the constants —
$\hbar = 1.055 \times 10^{-34}$ J·s, $m = 9.11 \times 10^{-31}$ kg,
$e^2/4\pi\epsilon_0 = 2.307 \times 10^{-28}$ J·m — and the minimum falls
at $r \approx 5.3 \times 10^{-11}$ m, with energy $E \approx -2.18
\times 10^{-18}$ J $\approx -13.6$ eV.[^estimate] The measured
ionization energy of hydrogen — the Rydberg limit of the spectral series
in the ledgers — is 13.6 eV. The atom is exactly as small, and exactly
as stubborn, as the theorem demands.

[^history]: The Helgoland epiphany is real but the lone-genius framing
  is ours to confess: Heisenberg did not know what a matrix was. Max
  Born recognized the multiplication rule, and the theory was completed
  in papers by Born and Jordan and by all three together — with Dirac,
  in Cambridge, reaching the same structure independently within weeks.

[^rigor]: Idealized again: Schrödinger's 1926 equivalence paper (with
  parallel work by Pauli and by Eckart) argued the case but left
  mathematical gaps. The airtight version — both theories as one
  abstract structure, Hilbert space — waited for von Neumann in 1932.
  The physicists, reasonably, did not wait.

[^estimate]: An honest qualification: the theorem guarantees only the
  *scale* of this answer. Choosing $p \sim \hbar/r$ rather than
  $\hbar/2r$ is a judgment call, and the fact that the crude minimum
  lands exactly on $-13.6$ eV — the true ground-state energy, solved
  properly in the next chapter — is more luck than the argument has
  earned. Landing within a factor of a few is what it honestly promises.
