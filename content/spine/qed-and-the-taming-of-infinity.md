---
title: QED and the Taming of Infinity (draft)
chapter: 47
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

When Dirac [married quantum mechanics to relativity](marrying-quanta-and-relativity.md),
his equation paid an unbilled bonus. Ask it how strongly the electron
responds to a magnetic field, and it answers with a pure number: the
electron's magnetic moment is exactly twice what a spinning classical charge
would give. Physicists write that number $g$, and Dirac's theory said

$$
g = 2,
$$

with no adjustment and no apology. Experiment agreed to the accuracy of the
day. It was one of the most beautiful predictions in physics.

Then the theory was asked to do more, and it fell apart. An electron does not
merely sit in an external field; it swims in its own. It emits a photon and
reabsorbs it, borrows energy from the vacuum and repays it, and every one of
these self-interactions shifts its measured mass and charge. Compute the
shift and the answer is infinite. The integral over all the photon's possible
energies simply does not converge. Through the 1930s the best minds in Europe
computed infinity, subtracted it from infinity, and got nonsense. Most looked
away. The war gave them an excuse.[^war]

What broke the stalemate was, as ever in this book, a measurement. In 1947
Willis Lamb and Robert Retherford turned wartime microwave technique on a
beam of hydrogen atoms and looked at two energy levels — labeled $2S_{1/2}$
and $2P_{1/2}$ — that Dirac's equation insisted must sit at exactly the same
energy. They did not. The $S$ level floated about 1000 megahertz above the
$P$ level.[^lamb] The gap was tiny. It was also real, reproducible, and
forbidden.

<figure>
<figcaption>The Lamb shift. Dirac's equation makes the <em>2S</em> and
<em>2P</em> levels of hydrogen exactly degenerate; the measurement of 1947
split them by about 1058 MHz. The gap is the electron's own field made
audible.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Energy level diagram: a single merged level in Dirac theory splits into two levels in QED, separated by 1057 megahertz">
  <text x="90" y="42" text-anchor="middle" font-size="13" fill="currentColor">Dirac</text>
  <text x="265" y="42" text-anchor="middle" font-size="13" fill="currentColor">QED</text>
  <line x1="40" y1="110" x2="140" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <text x="90" y="128" text-anchor="middle" font-size="11" fill="currentColor">2S₁/₂ = 2P₁/₂</text>
  <line x1="140" y1="110" x2="210" y2="92" stroke="currentColor" stroke-width="0.75" stroke-dasharray="3 3" opacity="0.4"/>
  <line x1="140" y1="110" x2="210" y2="128" stroke="currentColor" stroke-width="0.75" stroke-dasharray="3 3" opacity="0.4"/>
  <line x1="210" y1="92" x2="320" y2="92" stroke="currentColor" stroke-width="1.5"/>
  <line x1="210" y1="128" x2="320" y2="128" stroke="currentColor" stroke-width="1.5"/>
  <text x="265" y="84" text-anchor="middle" font-size="11" fill="currentColor">2S₁/₂</text>
  <text x="265" y="146" text-anchor="middle" font-size="11" fill="currentColor">2P₁/₂</text>
  <line x1="332" y1="92" x2="332" y2="128" stroke="currentColor" stroke-width="0.75"/>
  <text x="338" y="114" font-size="11" fill="currentColor">1058 MHz</text>
</svg>
</figure>

That June, at a small inn on Shelter Island off Long Island, the field's best
theorists gathered around the Lamb shift. On the train home Hans Bethe did the
arithmetic. His move was audacious and simple. The self-energy of a free
electron is infinite; the self-energy of an electron bound in hydrogen is also
infinite; but the two infinities are the same infinity, and their difference
is finite. Bethe subtracted, inserted a crude cutoff, and got about 1000
megahertz. He had the answer on the ride from the station.

The trick, made rigorous, is **renormalization**, and it is a confession
before it is a triumph. The mass $m_0$ written in the equations — the "bare"
mass of an electron stripped of its own field — is not a thing anyone can
weigh. What a scale reads is the electron already dressed in its photons.
So absorb the infinity into the difference between the two:

$$
m = m_0 + \delta m,
$$

where $\delta m$ is infinite but $m$ is finite and measured. Do the same for
charge. Re-express every prediction in terms of the measured $m$ and $e$, and
the infinities cancel in lockstep, leaving finite, checkable numbers. Dirac
called it sweeping the difficulties under the rug and never accepted it.[^dirac]
He was right that it was ugly. He was wrong that it was wrong.

Feynman gave the bookkeeping its pictures. Every process is a sum over
diagrams: solid lines for electrons, wavy or dashed lines for photons, a
vertex wherever they meet. Each vertex costs one factor of the coupling, so
each added loop costs a further power of the fine-structure constant
$\alpha \approx 1/137$. The series converges fast because $\alpha$ is small.
A diagram is not a picture of what "really happens" — it is one honest term
in an expansion, and you add as many as your patience and your precision
demand.

<figure>
<figcaption>One term in the series. The electron (solid, moving right in time)
emits and reabsorbs a virtual photon (dashed). Taken alone the loop diverges;
renormalization renders it finite. Each added loop multiplies the result by a
further power of <em>α</em>.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A Feynman diagram: a horizontal electron line emitting and reabsorbing a virtual photon that arcs above it">
  <line x1="40" y1="160" x2="360" y2="160" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="196,154 210,160 196,166" fill="currentColor"/>
  <path d="M 150 160 A 50 50 0 0 1 250 160" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="150" cy="160" r="3.5" fill="currentColor"/>
  <circle cx="250" cy="160" r="3.5" fill="currentColor"/>
  <text x="200" y="95" text-anchor="middle" font-size="13" fill="currentColor">virtual photon</text>
  <text x="60" y="182" font-size="13" fill="currentColor">electron</text>
</svg>
</figure>

Now return to $g$. Dirac's $g = 2$ is only the first diagram, the bare vertex.
Let the electron emit and reabsorb one virtual photon while it feels the
magnetic field, and the moment shifts. In 1948 Julian Schwinger computed that
one loop and got a result clean enough to be carved on his headstone. Writing
the anomaly as $a = (g-2)/2$,

$$
a = \frac{\alpha}{2\pi}.
$$

> **Interactive (planned):** build the QED prediction of $g$ diagram by
> diagram. Start at Dirac's $g = 2$; add Schwinger's one-loop term, then the
> two-, three-, four-, and five-loop coefficients (real, published values),
> watching each correction shrink by roughly a factor of $\alpha$ and the
> running total march digit by digit toward the measured number.

## A prediction you can make

Take Schwinger's single term and nothing else. With
$\alpha = 1/137.036$,

$$
a = \frac{\alpha}{2\pi} = \frac{1}{137.036 \times 2\pi} \approx 0.0011614,
$$

so the electron's magnetic moment should be

$$
g = 2(1 + a) \approx 2 \times 1.0011614 = 2.0023228.
$$

The measured value is $g = 2.00231930$.[^value] One loop, one afternoon's
algebra, and the prediction is already right to five digits. The remaining
disagreement — in the sixth — is not error but the diagrams Schwinger did
not draw; add them and theory and experiment agree to about twelve decimal
places. It is the most precisely confirmed prediction in the history of
science, and it began as an infinity nobody could tame.

[^war]: The idealization here is gentle but real. Renormalization did not
  wait quietly for peace: Sin-Itiro Tomonaga worked out an equivalent theory
  in Japan during and just after the war, in near-total isolation from the
  West. The tidy "Shelter Island started it" story is an American one; the
  physics was being born in three places at once.

[^lamb]: The modern value of the $2S_{1/2}$–$2P_{1/2}$ splitting in hydrogen
  is about 1057.8 MHz. Lamb received the 1955 Nobel Prize for the
  measurement; the figure above rounds to 1058 MHz.

[^dirac]: Dirac's objection was lifelong and quotable: "I might have thought
  the new ideas were correct if they had not been so ugly." Renormalization
  works, and later work (the renormalization group) explained *why* it works
  rather than merely that it does — but Dirac's discomfort pointed at a real
  question, not a mere aesthetic complaint.

[^value]: CODATA gives the electron $g$-factor as $g = 2.00231930436$ and the
  fine-structure constant as $\alpha = 1/137.035999$. The one-loop number
  worked out above, $2.0023228$, uses only Schwinger's term; the full QED
  series reproduces every digit of the measurement now known.
