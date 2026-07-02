---
title: What Does It Mean? (draft)
chapter: 43
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By the late 1920s the new mechanics worked, and worked terrifyingly well.
It gave the [hydrogen spectrum](the-hydrogen-atom-solved.md), the
[tunneling of particles through walls](through-the-wall.md), the
[structure of the periodic table](spin-and-structure.md). But it paid for
its power in a strange coin. The theory did not predict where an electron
would land. It predicted the *probability*. Run the same experiment on two
identically prepared atoms and they answer differently, and no measurement,
however careful, tells you which answer is coming. The equation evolves
smoothly; the act of measuring shatters that smoothness and picks one
outcome at random.

Most physicists learned to live with this. Einstein could not.[^dice] He
did not doubt the arithmetic. He doubted that the arithmetic was the whole
story. Surely, he argued, the atom already *has* a definite position, and
the probabilities only measure our ignorance of some finer detail the
theory has left out — a hidden variable, carried along inside each
particle, that fixes the outcome in advance.

In 1935, with Boris Podolsky and Nathan Rosen, he built the argument into a
weapon.[^bohm] Prepare two particles together, then let them fly apart —
light-years apart, if you like. Quantum mechanics can lock their properties
together so tightly that measuring one instantly tells you the other, with
certainty. Measure Alice's particle and you can predict Bob's without going
near it. But if you can predict a quantity with certainty *without
disturbing it*, EPR reasoned, then that quantity must have been real all
along. The theory that omits it is incomplete. The alternative — that
Alice's measurement reaches across the gap and sets Bob's outcome — Einstein
dismissed as "spooky action at a distance." The tie between the particles he
called *entanglement*.

$$
|\Psi\rangle = \frac{1}{\sqrt{2}}\left(|H\rangle_A |H\rangle_B + |V\rangle_A |V\rangle_B\right)
$$

That state says: neither photon has a polarization of its own, yet whatever
Alice finds, Bob will match. Bohr answered EPR, densely and famously, and
most people decided the question was philosophy — untestable, a matter of
taste. For thirty years it sat there, a splinter no experiment could reach.

Then, in 1964, John Bell asked the question nobody had thought to make
sharp. *Suppose Einstein is right.* Suppose each particle really does carry
a hidden script, fixed at birth, that decides how it will respond to any
measurement — and suppose, crucially, that Alice's choice of what to measure
cannot affect Bob's distant particle. This is *local realism*, Einstein's
worldview stated as arithmetic. Bell asked what such a theory can possibly
predict, and found that it is boxed in.

<figure>
<figcaption>The experiment Bell made thinkable. A source emits an entangled
pair; Alice and Bob each freely pick an analyzer angle (<em>a</em>,
<em>b</em>) and record pass or block. The correlation between their columns
of results is the whole game.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A central source emitting two photons in opposite directions toward Alice's and Bob's polarizing analyzers and detectors">
  <line x1="200" y1="110" x2="60" y2="110" stroke="currentColor" stroke-width="1"/>
  <line x1="200" y1="110" x2="340" y2="110" stroke="currentColor" stroke-width="1"/>
  <circle cx="200" cy="110" r="6" fill="var(--accent)"/>
  <text x="200" y="136" text-anchor="middle" font-size="13" fill="currentColor">source</text>
  <circle cx="120" cy="110" r="15" fill="none" stroke="currentColor" stroke-width="1"/>
  <line x1="109" y1="121" x2="131" y2="99" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="280" cy="110" r="15" fill="none" stroke="currentColor" stroke-width="1"/>
  <line x1="273" y1="123" x2="287" y2="97" stroke="currentColor" stroke-width="1.5"/>
  <rect x="42" y="100" width="18" height="20" fill="none" stroke="currentColor" stroke-width="1"/>
  <rect x="340" y="100" width="18" height="20" fill="none" stroke="currentColor" stroke-width="1"/>
  <text x="120" y="164" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">Alice (a)</text>
  <text x="280" y="164" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">Bob (b)</text>
</svg>
</figure>

Bell's box has a name and a size. Let each side choose between two analyzer
angles — Alice picks $a$ or $a'$, Bob picks $b$ or $b'$ — and let
$E(a,b)$ be the correlation between their outcomes, ranging from $+1$
(always agree) to $-1$ (always disagree). Form the combination

$$
S = E(a,b) - E(a,b') + E(a',b) + E(a',b').
$$

Any theory in which each particle carries a predetermined answer, and Alice
cannot reach Bob, obeys a hard ceiling:

$$
|S| \le 2.
$$

The proof is a page of algebra with no physics in it — just the assumption
that the answers exist before they are asked for. Quantum mechanics ignores
the ceiling. For the entangled pair above the correlation is
$E(a,b) = \cos 2(\theta_a - \theta_b)$, and with the right four angles $S$
climbs to $2\sqrt{2} \approx 2.83$ — Tsirelson's bound, the quantum
maximum.[^tsirelson] The two worldviews no longer merely differ in
interpretation. They predict different *numbers* for the same experiment.

<figure>
<figcaption>Why the ceiling breaks. The quantum correlation (curve) bows
above the straightest line any local-realistic model can draw between the
same endpoints (dashed). That gap, summed over four settings, is the
violation.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A cosine correlation curve rising above a dashed straight line, showing quantum correlations exceeding the local bound">
  <line x1="40" y1="20" x2="40" y2="200" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <line x1="40" y1="110" x2="360" y2="110" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <line x1="40" y1="20" x2="360" y2="200" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <polyline points="40,20 93,32 147,65 200,110 253,155 307,188 360,200" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="34" y="24" text-anchor="end" font-size="12" fill="currentColor">+1</text>
  <text x="34" y="204" text-anchor="end" font-size="12" fill="currentColor">&#8722;1</text>
  <text x="40" y="216" text-anchor="middle" font-size="12" fill="currentColor">0&#176;</text>
  <text x="360" y="216" text-anchor="middle" font-size="12" fill="currentColor">90&#176;</text>
  <text x="150" y="44" font-size="13" fill="currentColor">quantum</text>
  <text x="250" y="150" font-size="13" fill="currentColor">local limit</text>
</svg>
</figure>

The verdict was not quick. It took a generation to build sources bright
enough and detectors fast enough to close the loopholes — to switch Alice's
and Bob's settings so late that no signal at light-speed could carry the
news between them. When the experiments finally ran, they answered
cleanly.[^aspect] $S$ exceeds 2. Nature violates Bell's inequality. Einstein's
splinter had a truth in it, but not the one he wanted: the world is not
locally real. Either outcomes are genuinely undetermined until measured, or
distant things are more connected than any signal can explain. There is no
hidden script.

> **Interactive (planned):** run the experiment yourself. Emit entangled
> pairs, choose Alice's and Bob's angles freely, and let real detector
> statistics — finite efficiency, accidental coincidences, Poisson counting
> noise — accumulate. Watch the running estimate of $S$ climb past 2 and
> settle toward $2\sqrt{2}$, with an error bar that shrinks as $1/\sqrt{N}$.
> The dataset behind the "measured" mode will be drawn from a published
> loophole-free run, provenance in `/data/`; the draft fabricates no counts.

## A prediction you can make

Take the four angles that push hardest against the ceiling: Alice at
$0^\circ$ or $45^\circ$, Bob at $22.5^\circ$ or $67.5^\circ$. With
$E(\theta_a, \theta_b) = \cos 2(\theta_a - \theta_b)$,

$$
E(0, 22.5) = \cos 45^\circ \approx 0.707, \qquad E(0, 67.5) = \cos 135^\circ \approx -0.707,
$$

and both $a'$ terms give $\cos 45^\circ \approx 0.707$. Then

$$
S = 0.707 - (-0.707) + 0.707 + 0.707 = 2.828 \approx 2\sqrt{2}.
$$

A local-realistic universe cannot exceed $2$. Ours reaches $2.828$. Point a
polarized-photon Bell setup at those four angles and the meter will read
past the wall Einstein believed could not be crossed — and no amount of
hidden bookkeeping will pull it back.

[^dice]: "God does not play dice with the universe," the line usually runs;
  Einstein's actual 1926 letter to Max Born says God "does not throw dice."
  His objection was never to the theory's success, only to its claim to be
  the final word.

[^bohm]: The 1935 paper used position and momentum, not polarization. David
  Bohm recast it in 1951 with two-valued spins, and Bell built on Bohm's
  version; this chapter uses photon polarization, the form Aspect and later
  experimenters actually measured. The straightening is ours; the logic is
  EPR's.

[^tsirelson]: That $2\sqrt{2}$ is the ceiling for quantum mechanics itself —
  proven by Boris Tsirelson in 1980 — is a second surprise. Nature violates
  Bell's bound, but not without limit. Why the quantum maximum sits exactly
  there, and not at the algebraic maximum of $4$, is still an open question.

[^aspect]: Alain Aspect, Jean Dalibard, and Gérard Roger reported
  $S = 2.697 \pm 0.015$ in 1982 — a violation by dozens of standard
  deviations. The switching and detection loopholes were closed together
  only in 2015, by groups in Delft, Vienna, and Boulder. These are real,
  published results, not draft placeholders.
