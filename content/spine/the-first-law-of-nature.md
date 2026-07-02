---
title: The First Law of Nature (draft)
chapter: 2
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

In the last chapter we [measured the world with shadows](measuring-the-world-with-shadows.md). That was geometry applied to the Earth — number describing *size*. The Greeks of the sixth century BCE would not have found that shocking. Surveyors had paced fields for millennia. What no one suspected was that number might govern *quality*: that something as unmeasurable as beauty could obey arithmetic.

Consider the problem as a Greek musician knew it. Some pairs of notes, sounded together, fuse into a single sweet sensation. Others clash. Every lyre player could hear the difference; none could say why. Consonance looked like taste — a fact about ears, not about the world. Facts about ears do not yield to measurement. There was nothing to measure.

The Pythagoreans found something to measure.[^legend] Their instrument was the monochord: one string, stretched over a resonating box between two fixed bridges, with a third bridge that slides. The movable bridge divides the string into two segments; press it down and each segment sounds its own note. The string's tension never changes — only the lengths do. And lengths can be measured with a ruler.

Slide the bridge to the exact middle, and the half-string sounds the octave above the whole string — the interval so consonant the two notes almost lose their separate identities. The ratio of lengths is $1:2$. Slide the bridge so that one segment is two thirds of the whole, and that segment sounds the fifth — the next-sweetest interval. The ratio is $2:3$. Three quarters of the string gives the fourth: $3:4$. The three consonances that anchored all Greek music come from the first four counting numbers, and from nowhere else. Move the bridge to a length like $0.61$ of the string, and the interval sours.

<figure>
<figcaption>The monochord's consonances. Each string sounds against the whole; the solid segment is the sounding length, the bridge position drawn to scale. Octave, fifth, and fourth — the first four integers, and nothing else.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Four strings showing the whole string and the sounding lengths for octave, fifth, and fourth">
  <text x="40" y="32" font-size="13" fill="currentColor">1 : 1 — the whole string</text>
  <line x1="40" y1="45" x2="360" y2="45" stroke="currentColor" stroke-width="2"/>
  <text x="40" y="77" font-size="13" fill="currentColor">1 : 2 — the octave</text>
  <line x1="40" y1="90" x2="200" y2="90" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="90" x2="360" y2="90" stroke="currentColor" stroke-width="1" opacity="0.3"/>
  <line x1="200" y1="82" x2="200" y2="98" stroke="currentColor" stroke-width="1.5"/>
  <text x="40" y="122" font-size="13" fill="currentColor">2 : 3 — the fifth</text>
  <line x1="40" y1="135" x2="253.3" y2="135" stroke="currentColor" stroke-width="2"/>
  <line x1="253.3" y1="135" x2="360" y2="135" stroke="currentColor" stroke-width="1" opacity="0.3"/>
  <line x1="253.3" y1="127" x2="253.3" y2="143" stroke="currentColor" stroke-width="1.5"/>
  <text x="40" y="167" font-size="13" fill="currentColor">3 : 4 — the fourth</text>
  <line x1="40" y1="180" x2="280" y2="180" stroke="currentColor" stroke-width="2"/>
  <line x1="280" y1="180" x2="360" y2="180" stroke="currentColor" stroke-width="1" opacity="0.3"/>
  <line x1="280" y1="172" x2="280" y2="188" stroke="currentColor" stroke-width="1.5"/>
</svg>
</figure>

> **Interactive (planned):** a playable monochord. Drag the bridge along a real vibrating string (synthesized honestly — a plucked-string model, not a canned sample) and hunt for the consonances by ear. Then flip on the ruler and discover that your ears found $1{:}2$, $2{:}3$, and $3{:}4$ without being told. A second mode plays two segments together and plots their ratio, so the eye and the ear converge on the same law.

This is a law, and it composes like one. Musicians knew by ear that a fourth stacked on a fifth makes an octave. On the monochord that becomes multiplication:

$$
\frac{3}{2} \times \frac{4}{3} = \frac{2}{1}.
$$

Stacking intervals multiplies ratios. Arithmetic on paper predicts what the ear will report. For the first time, a calculation *forecast a sensation* — and it never missed.

What is the string doing? A plucked string trembles, and the ear somehow reads the trembling's quickness as pitch. The Greeks lacked that idea; they had ratios of lengths and nothing behind them.[^frequency] In modern terms: at fixed tension, a string's vibration rate is inversely proportional to its length. Halve the string and it trembles twice as fast. For two segments of the same string,

$$
\frac{f_2}{f_1} = \frac{L_1}{L_2},
$$

where $f$ is the number of vibrations per second and $L$ the sounding length. Consonance is a fact about *ratios of vibration rates* — a fact about motion. Hold that thought; it will not resurface fully until the string returns as a wave, many chapters from now. This chapter plants the seed.

The law has one crack, and the Pythagoreans found it themselves. Climb by fifths — multiply by $\tfrac{3}{2}$ twelve times — and you land almost, but not exactly, where seven octave doublings land:

$$
\left(\frac{3}{2}\right)^{12} = \frac{531441}{4096} \approx 129.75,
\qquad 2^7 = 128.
$$

The mismatch, $531441/524288 \approx 1.0136$, is the *Pythagorean comma* — about 1.4 percent, and plainly audible.[^comma] No stack of pure fifths ever closes into a circle of octaves; $3^n$ is never a power of $2$. The first quantitative law of nature came with the first quantitative anomaly, and Western tuning has been negotiating with it ever since.

## A prediction you can make

Find a guitar. Modern frets embody a compromise tuning, but the octave in that tuning is still an exact $2:1$ — so the monochord law makes a prediction: **the twelfth fret sits at exactly half the string.** Measure the sounding length from nut to saddle. On a common classical guitar it is $650\ \text{mm}$, so the law puts the twelfth fret at $325\ \text{mm}$ from the nut. Check with a ruler; it will agree to within a millimeter.

Then look for the comma. A pure fifth would put a fret at one third of the string: $650/3 \approx 216.7\ \text{mm}$. The actual seventh fret sits at $650 \times \left(1 - 2^{-7/12}\right) \approx 216.2\ \text{mm}$ — about half a millimeter shy. That half millimeter is the ghost of the Pythagorean comma, shaved off every fifth so that twelve of them close the octave. A twenty-five-century-old anomaly, visible on a ruler.

[^legend]: The famous origin story — Pythagoras hearing consonant hammers in a smithy and weighing them — is a legend, first written down centuries later, and its physics is wrong: a hammer's pitch does not scale with its weight the way the tale requires, and hanging weights from strings fails too, since a string's pitch grows only as the *square root* of its tension (Vincenzo Galilei, Galileo's father, checked in the 1580s). The monochord experiment itself is real and endlessly reproducible; whether Pythagoras personally performed it, no contemporary source survives to say. This chapter follows the tradition and confesses the doubt here.

[^frequency]: "Vibrations per second" is our language, not theirs. The identification of pitch with vibration rate firmed up only in the seventeenth century, with Galileo and Mersenne. The Greeks measured lengths; the law stated here in terms of $f$ is the modern restatement of what their ruler showed.

[^comma]: Interval sizes multiply rather than add, so "1.4 percent of what?" is a fair question — the honest comparison is that the comma is roughly a quarter of the smallest step (the semitone) in the modern scale. A trained ear hears two sustained notes a comma apart beat against each other unmistakably.
