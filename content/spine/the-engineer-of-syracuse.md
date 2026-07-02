---
title: The Engineer of Syracuse (draft)
chapter: 3
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

The Greeks measured the world with geometry. Eratosthenes sized the
Earth from [a shadow and a well](measuring-the-world-with-shadows.md).
But geometry stopped at the surface of things. Matter itself — why the
heavy sinks and the light floats, why a long bar pries up a stone —
belonged to philosophy. Aristotle explained weight by *natural place*:
earth strives downward, fire upward. The explanation named the
phenomenon and predicted nothing. You could not put a number on it.

In Syracuse, in the third century BC, Archimedes put numbers on it. He
treated weight the way Euclid treated lines: state postulates, prove
consequences, compute. His book *On the Equilibrium of Planes* opens
with an assumption nobody could refuse — equal weights at equal
distances from a pivot balance — and builds, by symmetry alone, the
general law of the lever. Two weights balance when weight times
distance matches on the two sides:

$$
W_1 \, d_1 = W_2 \, d_2 .
$$

A small weight far from the pivot holds a great weight near it. The
proof needed one more invention, quiet but permanent: the *center of
gravity*, a single point at which a body's whole weight may be taken to
act. Replace any object, however lumpy, by a point — that move
underwrites half the mechanics in this book. Archimedes trusted the law
completely. Give him a place to stand, he said, and he would move the
Earth.[^pappus]

<figure>
<figcaption>The law of the lever. A weight <em>W</em> at distance
2<em>d</em> balances a weight 2<em>W</em> at distance <em>d</em>:
weight times distance is equal on both sides of the pivot.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A balanced lever: weight W at distance 2d on the left of the fulcrum, weight 2W at distance d on the right">
  <line x1="60" y1="120" x2="340" y2="120" stroke="currentColor" stroke-width="2"/>
  <path d="M 240 120 L 226 160 L 254 160 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="340" y2="180" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <rect x="70" y="126" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <rect x="306" y="126" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="80" y="141" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">W</text>
  <text x="320" y="145" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">2W</text>
  <line x1="80" y1="100" x2="240" y2="100" stroke="currentColor" stroke-width="0.75"/>
  <line x1="80" y1="95" x2="80" y2="105" stroke="currentColor" stroke-width="0.75"/>
  <line x1="240" y1="95" x2="240" y2="105" stroke="currentColor" stroke-width="0.75"/>
  <text x="160" y="92" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">2d</text>
  <line x1="240" y1="100" x2="320" y2="100" stroke="currentColor" stroke-width="0.75"/>
  <line x1="320" y1="95" x2="320" y2="105" stroke="currentColor" stroke-width="0.75"/>
  <text x="280" y="92" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">d</text>
</svg>
</figure>

Then came the problem that would not yield to geometry on paper. King
Hiero II had given a goldsmith a measured mass of gold for a votive
crown. The finished crown weighed exactly what the gold had weighed —
and a rumor said the smith had kept some gold and made up the mass with
silver. Melting the crown down to a measurable brick would settle the
question and destroy the offering. Weight alone could not distinguish
honest work from fraud. What could?

Density could. Silver is lighter than gold, volume for volume: about
$10.5\ \mathrm{g/cm^3}$ against gold's $19.3$.[^densities] An adulterated crown of the
same mass must be *bulkier* than a pure one. The question shrank to a
measurement: what is the volume of an irregular, unmeltable object? The
famous story has Archimedes see the answer in his bath — the water his
body displaced was exactly his submerged volume — and run home naked
shouting *heureka*.[^vitruvius] However he found it, the principle he
later proved in *On Floating Bodies* is sharper than the bathtub
anecdote. A body in a fluid is pushed upward, and the push has a
definite size:

$$
F_{\text{buoyant}} = \text{weight of the displaced fluid}.
$$

That turns a balance into a volume-measuring instrument. Weigh the
crown in air. Weigh it again hanging in water. The difference is the
weight of the displaced water — and since a cubic centimeter of water
weighs one gram, the loss *in grams* is the volume *in cubic
centimeters*. No overflow to catch, no meniscus to squint at. The
balance, which the smith trusted to certify his fraud, convicts him.

Run the numbers for a crown of $1000$ grams.[^densities] Pure gold:

$$
V = \frac{1000\ \mathrm{g}}{19.3\ \mathrm{g/cm^3}} \approx 51.8\ \mathrm{cm^3},
$$

so in water it reads about $948$ grams. Now let the smith keep $300$
grams of gold and substitute silver. The alloy's volume is the sum of
its parts: $700/19.3 + 300/10.5 \approx 36.3 + 28.6 = 64.8\ \mathrm{cm^3}$. In
water that crown reads about $935$ grams — thirteen grams shy of the
honest reading. A balance good to a gram catches the theft outright.

<figure>
<figcaption>The hydrostatic balance. A pure gold lump and an equal-mass
crown balance in air. Submerged, the bulkier alloyed crown displaces
more water, feels a larger upward push, and rises: the balance tips
toward the gold.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A balance with a gold lump and a crown hanging in a tank of water; the beam tips down on the gold side">
  <path d="M 200 44 L 192 62 L 208 62 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="70" y1="60" x2="330" y2="28" stroke="currentColor" stroke-width="2"/>
  <line x1="70" y1="60" x2="70" y2="150" stroke="currentColor" stroke-width="0.75"/>
  <line x1="330" y1="28" x2="330" y2="130" stroke="currentColor" stroke-width="0.75"/>
  <rect x="40" y="100" width="320" height="100" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="40" y1="112" x2="360" y2="112" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
  <rect x="58" y="150" width="24" height="20" fill="currentColor" opacity="0.7"/>
  <path d="M 310 150 L 350 150 L 344 130 L 337 144 L 330 128 L 323 144 L 316 130 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="70" y="188" text-anchor="middle" font-size="13" fill="currentColor">pure gold</text>
  <text x="300" y="188" text-anchor="middle" font-size="13" fill="currentColor">crown (gold + silver)</text>
  <text x="352" y="109" text-anchor="end" font-size="13" fill="currentColor" opacity="0.7">water</text>
</svg>
</figure>

> **Interactive (planned):** a hydrostatics sandbox. You get a balance,
> a tank of water, a supply of metals with real densities, and Hiero's
> crown. Weigh things in air and in water, work out volumes, and decide
> for yourself — quantitatively — whether the smith cheated, and by how
> many grams. The metal densities will come from a documented modern
> reference table in `/data/`, not from numbers typed into the sim.

Notice what happened, because it is the shape of everything to come.
A vague suspicion became a number ($13$ grams). A qualitative principle
(heavy things sink) became an equation with a testable magnitude. And
the whole experiment fits on a table: no heavens required, no
[shadows cast across a continent](measuring-the-world-with-shadows.md).
Archimedes did physics the way we still do it — isolate a question,
find the quantity that answers it, and measure. It took eighteen
centuries for anyone to pick up where he left off.

## A prediction you can make

Ice is less dense than the water it came from: $0.917\ \mathrm{g/cm^3}$
against about $0.998$ for water at room temperature.[^ice] A floating
cube settles until it displaces its own weight of water, so the
submerged fraction of its volume is the ratio of the densities:

$$
\frac{V_{\text{under}}}{V_{\text{total}}} = \frac{0.917}{0.998} \approx 0.92 .
$$

Prediction: about $92\%$ of an ice cube floats below the waterline and
$8\%$ above — for a cube $2$ centimeters tall, a lid roughly $1.6$
millimeters thick. Float one in a still glass, sight across the surface,
and check Archimedes with a ruler.

[^pappus]: The boast survives through Pappus of Alexandria, writing six
  centuries later. Like most of what we "know" about Archimedes the man,
  it is secondhand; the mathematics, unlike the anecdotes, survives in
  his own words.

[^densities]: Densities are modern reference values at room temperature:
  gold $19.3\ \mathrm{g/cm^3}$, silver $10.5\ \mathrm{g/cm^3}$, water
  $\approx 1.00\ \mathrm{g/cm^3}$. The crown's mass and the $30\%$
  substitution are illustrative — the ancient sources record the
  accusation but no figures.

[^vitruvius]: The bathtub story comes from Vitruvius, writing about two
  centuries after the fact, and it describes crude overflow measurement
  rather than the balance method. Galileo, in a youthful essay called
  *La Bilancetta*, argued that overflow is too imprecise for the job and
  that Archimedes must have weighed the crown in water — the
  reconstruction this chapter follows.

[^ice]: The $0.917$ is for bubble-free ice at $0\,^\circ\mathrm{C}$.
  Home ice cubes trap air and often float a little higher; clear glacier
  ice or carefully boiled-then-frozen water comes closer to the book
  value.
