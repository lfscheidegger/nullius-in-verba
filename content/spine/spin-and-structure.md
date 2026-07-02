---
title: Spin and Structure (draft)
chapter: 41
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1922 the atom had a working sketch and a hole in its logic. The
[old quantum theory](the-old-quantum-theory.md) gave each electron three
labels — a principal number $n$ for the shell, an orbital number $l$ for
the shape, a magnetic number $m$ for the tilt — and with them the hydrogen
spectrum fell into line. But the periodic table kept its own counsel.
Chemistry repeated in rows of length 2, 8, 8, 18. Nobody could say why
those numbers, or why any shell should ever close and refuse the next
electron. The table was the most successful pattern in science and the
least explained.

Two experiments and two ideas closed the gap in three years. The first was
small enough to fit on a bench. Otto Stern and Walther Gerlach sent a beam
of silver atoms through a magnet whose field was deliberately lopsided —
strong at one pole, weak at the other — and let the beam strike a cold
glass plate.[^tabletop] A magnetic moment $\vec\mu$ in a field that varies
along $z$ feels a net force,

$$
F_z = \mu_z \, \frac{\partial B_z}{\partial z},
$$

so an atom is nudged up or down by the amount its moment tips along the
field. Classically the moments point every which way, and the beam should
smear into a continuous band. It did not. It split cleanly into two — two
spots, nothing between them.[^silver] Direction itself was quantized. The
atom could say *up* or *down* to the magnet and nothing else.

<figure>
<figcaption>The Stern–Gerlach experiment, tabletop physics at its purest.
An oven boils off silver atoms; a slit collimates them; an uneven magnet
sorts them by the tilt of their magnetic moment. Classical physics predicts
a smear (dashed). The beam splits in two.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A beam of silver atoms from an oven passes through a collimating slit and an inhomogeneous magnet, then splits into two spots on a screen; a dashed line shows the expected classical smear">
  <rect x="12" y="98" width="34" height="24" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="29" y="140" text-anchor="middle" font-size="13" fill="currentColor">oven</text>
  <line x1="46" y1="110" x2="150" y2="110" stroke="currentColor" stroke-width="1"/>
  <line x1="78" y1="96" x2="78" y2="106" stroke="currentColor" stroke-width="1.5"/>
  <line x1="78" y1="114" x2="78" y2="124" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 150 78 L 240 78 L 224 96 L 166 96 Z" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="1"/>
  <rect x="150" y="128" width="90" height="12" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="1"/>
  <text x="195" y="70" text-anchor="middle" font-size="13" fill="currentColor">magnet</text>
  <line x1="240" y1="110" x2="330" y2="86" stroke="currentColor" stroke-width="1"/>
  <line x1="240" y1="110" x2="330" y2="134" stroke="currentColor" stroke-width="1"/>
  <line x1="240" y1="110" x2="340" y2="110" stroke="currentColor" stroke-width="0.75" stroke-dasharray="3 3" opacity="0.5"/>
  <line x1="350" y1="60" x2="350" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="350" cy="86" r="4" fill="currentColor"/>
  <circle cx="350" cy="134" r="4" fill="currentColor"/>
  <text x="378" y="90" text-anchor="middle" font-size="13" fill="currentColor">up</text>
  <text x="378" y="138" text-anchor="middle" font-size="13" fill="currentColor">down</text>
</svg>
</figure>

Two spots was almost the wrong answer. Orbital angular momentum comes in
odd portions — a state of orbital number $l$ splits into $2l+1$ beams, so
one, three, five, never two. A clean doublet demanded something new. In
1925 two young Dutchmen, George Uhlenbeck and Samuel Goudsmit, supplied
it: the electron carries angular momentum of its own, intrinsic, not from
any orbit, with exactly two settings along any axis.[^spin] Call it
**spin**. Its projection takes the smallest nonzero values quantum
mechanics allows,

$$
S_z = \pm\frac{\hbar}{2},
$$

half a unit up or half a unit down. The electron is a two-valued object.
Stern and Gerlach had photographed spin three years before anyone named it.

Now the fourth label existed, and Wolfgang Pauli saw what to do with it. He
had been hunting the closing of shells and had convinced himself that the
whole atom was governed by one austere rule: **no two electrons in an atom
share all four quantum numbers**. Give the numbers $n$, $l$, $m$, and the
spin, and at most one electron may hold that address. This is the exclusion
principle, and it is the reason matter has structure at all. Without it
every electron would tumble into the lowest state and all atoms would look
alike. With it, each new electron must climb to the lowest *vacant* address,
and the atom builds outward in layers.

Count the addresses and the periodic table appears. For a given shell $n$,
the orbital number runs $l = 0, 1, \dots, n-1$; each $l$ offers $2l+1$
tilts; each tilt holds two spins. The shell's capacity is therefore

$$
2\sum_{l=0}^{n-1} (2l+1) = 2n^2,
$$

which gives 2, 8, 18, 32 as $n$ climbs. A shell fills, closes, and the next
electron has nowhere to go but the next layer out — a fresh outermost
electron, a fresh column of the table, an element that behaves like the one
a row above. Sodium reprises lithium because each begins a shell with a
single lonely $s$ electron; helium and neon and argon are inert because
each ends one with nothing left unfilled.[^madelung] Chemistry — valence,
the columns, the whole repeating music of the elements — is bookkeeping
over Pauli's rule.

## A prediction you can make

The inert gases sit where a shell's outermost subshells run out of room.
Fill the subshells in the order their energies actually stack — $s$ holds
2, $p$ holds 6, $d$ holds 10, $f$ holds 14 — and read off the length of
each period: 2, then 8, 8, then 18, 18, then 32.[^madelung] Add them up as
you go and you predict the atomic numbers of the noble gases with no
chemistry, only counting:

$$
2,\; 2{+}8 = 10,\; 10{+}8 = 18,\; 18{+}18 = 36,\; 36{+}18 = 54,\; 54{+}32 = 86.
$$

Those are helium, neon, argon, krypton, xenon, and radon — $Z = 2, 10, 18,
36, 54, 86$, exactly the six unreactive gases at the right edge of the
table. The staircase of chemistry, derived from one prohibition and a count
of seats.

[^tabletop]: The whole apparatus — oven, slit, magnet, plate — spanned a
  benchtop, and the deflection was a fraction of a millimeter. The story
  goes that the silver spots developed only when Stern's cheap cigar smoke,
  rich in sulfur, blackened the plate into silver sulfide. Charming, and
  widely retold; treat it as folklore, not documented provenance.

[^silver]: Silver was a shrewd choice, though for a reason Stern and Gerlach
  did not yet know. Its lone outer electron sits in an $s$ state with zero
  orbital angular momentum, so the atom's entire magnetic moment is the
  electron's spin. In 1922 the experiment was read as proof of *orbital*
  "space quantization." It was right about quantization and wrong about the
  cause — a genuine bend in the historical road, straightened here only
  after the fact.

[^spin]: Pauli at first resisted, having warned against a "classically
  indescribable two-valuedness," and the picture of a literally spinning
  ball is a lie a careful reader should not believe — its surface would
  outrun light. Spin is intrinsic angular momentum with no moving parts. The
  magnitude is $\sqrt{s(s+1)}\,\hbar = \tfrac{\sqrt3}{2}\hbar$ with
  $s = \tfrac12$; only its projection is $\pm\hbar/2$.

[^madelung]: The filling order (the Madelung, or $n+l$, rule) is an
  excellent empirical pattern, not a theorem, and real atoms break it —
  chromium and copper borrow from their $s$ shells, and the heavy elements
  bend it further. The period *lengths* 2, 8, 8, 18, 18, 32 are exactly
  right regardless; the noble-gas count below does not depend on the handful
  of exceptions.

> **Interactive (planned):** a build-your-own-table sim. Add electrons one
> at a time; each drops into the lowest open address permitted by Pauli's
> rule, and the growing atom lights up its place on a live periodic table.
> Toggle exclusion *off* to watch every electron collapse into the ground
> state and the table dissolve into a single featureless column — the
> universe chemistry would have without spin.
