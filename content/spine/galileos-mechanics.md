---
title: Galileo's Mechanics (draft)
chapter: 9
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

For two thousand years, motion answered to Aristotle. His rules read
like common sense. A cart moves while the ox pulls and stops when the
ox stops: motion needs a mover. A stone falls because earth seeks
earth, and a heavier stone, having more earth in it, seeks harder:
heavy bodies fall faster, in proportion to their weight. Drop a leaf
and a pebble together and the world seems to agree. The doctrine
survived twenty centuries because no one put numbers to it.

Galileo had made a career of putting instruments where doctrine used
to be. The [telescope](galileos-telescope.md) had shown him mountains
on the Moon and moons around Jupiter. But his deepest work concerned a
humbler question, one he had carried since his Padua years: how does a
body fall?

He began by breaking Aristotle with Aristotle's own logic. Tie a heavy
stone to a light one and drop the pair. The light stone, falling more
slowly, should drag on the heavy one and retard it. Yet the pair
together outweighs the heavy stone alone, and so should fall faster.
One assumption, two contradictory conclusions. The assumption is
wrong: apart from what the air does, all bodies fall alike.[^tower]

Alike — but by what rule? Free fall would not say. A stone dropped
from a rooftop lands inside a second, and in 1600 no clock on Earth
could split a second; the best timer to hand was a human pulse. His
insight was to dilute gravity. A bronze ball rolling down a
gentle incline is still falling, just slowly enough to time. Steepen
the tilt and it falls harder; stand the plane upright and rolling
becomes free fall. Whatever law governs the slow fall should govern
the fast one.[^rolling]

So he built the experiment. A long wooden beam, a straight groove cut
along it and lined with smooth parchment, a hard bronze ball. For a
clock, a tall vessel of water with a thin pipe at the bottom: while
the ball rolled, water ran out into a cup, and he weighed the water on
a fine balance. The weight of water *was* the time. He ran the ball
down full lengths and half lengths and quarter lengths, "a full
hundred times," and the same pattern kept surfacing. In the first beat
of time the ball covers one unit of distance; in the second beat,
three units; in the third, five; in the fourth, seven. The running
totals are the perfect squares:

$$
d_1 : d_2 : d_3 : d_4 \;=\; 1 : 4 : 9 : 16,
\qquad \frac{d}{t^2} = \text{the same, for every run.}
$$

<figure>
<figcaption>The odd-number rule. A ball on an incline, marked at equal
beats of the water clock. Each beat adds an odd number of distance
units — 1, then 3, then 5, then 7 — so the totals grow as the perfect
squares 1, 4, 9, 16.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A ball rolling down an inclined plane, drawn at five equally spaced instants, with the gaps between positions growing as 1, 3, 5, 7">
  <line x1="40" y1="60" x2="370" y2="190" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="41.8" cy="55.3" r="5" fill="currentColor"/>
  <circle cx="62.4" cy="63.5" r="5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="124.3" cy="87.9" r="5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="227.4" cy="128.5" r="5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="371.8" cy="185.3" r="5" fill="none" stroke="currentColor" stroke-width="1.2"/>
  <text x="41.8" y="40" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">t = 0</text>
  <text x="66" y="49" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">1</text>
  <text x="128" y="73" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">2</text>
  <text x="231" y="114" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">3</text>
  <text x="371" y="170" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">4</text>
  <text x="49" y="82" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.7">1</text>
  <text x="89" y="98" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.7">3</text>
  <text x="171" y="130" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.7">5</text>
  <text x="295" y="179" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.7">7</text>
</svg>
</figure>

Distance grows as the square of time. Behind the squares hides a
simpler statement: speed grows in step with time. A body that speeds
up uniformly from rest moves, on average, at half its final speed, so
in time $t$ it covers $d = \frac{1}{2} v t$ — and if $v$ itself grows
in proportion to $t$, the distance must grow as $t^2$. On a steeper
plane everything happens faster, but the *ratios* never change; the
square law is the same on every tilt, and so, Galileo argued, in free
fall itself, where a dropped stone covers $d = \frac{1}{2} g t^2$ with
$g \approx 9.8~\text{m/s}^2$.

> **Interactive (planned):** run the inclined-plane experiment exactly
> as Galileo ran it. Release the bronze ball from marks along the
> groove, catch the water, weigh it; discover the square law from your
> own weighings, scatter and all. The reference data will be Galileo's
> actual working notes — the folio 107v records from his Padua
> manuscripts, as transcribed and analyzed by Stillman Drake — not a
> simulation dressed up as history.

The incline gave him the law of falling. A swinging weight gave him a
clock better than water. Set a pendulum going and watch it die down:
the arcs shrink, yet each swing takes the same time as the one
before.[^isochronism] Swap a lead bob for cork: the same time again.
Only the length of the string matters, and it matters as the square
root:

$$
\frac{T_1}{T_2} = \sqrt{\frac{L_1}{L_2}}.
$$

Quadruple the length and the period merely doubles. *Why* the square
root — and why length is the whole story — waits for the next
chapter, where Huygens turns this observation into the finest clock
the world had seen.

One question remained, the deepest one. Aristotle said motion needs a
mover. Galileo answered with ramps. A ball released on one incline
rolls down and climbs an opposing incline to very nearly its release
height, no matter how shallow the second slope — it just rolls farther
to get there. Now flatten the second slope completely. The ball can
never regain its height, so nothing in it is spent: it rolls on,
unchanging, as far as the plane extends. Motion needs no mover.
*Change* of motion does.[^circular]

<figure>
<figcaption>Galileo's ramp argument. The ball climbs to its release
height however shallow the far ramp. Flattened completely, the ramp
offers no height to regain — and the ball rolls on forever. Inertia,
by geometry.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A ball released on a left ramp, with two right ramps of different slopes reaching the same height, and a flat track along which the ball rolls on indefinitely">
  <line x1="25" y1="58" x2="395" y2="58" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 4" opacity="0.5"/>
  <line x1="40" y1="58" x2="155" y2="185" stroke="currentColor" stroke-width="1.5"/>
  <line x1="155" y1="185" x2="270" y2="58" stroke="currentColor" stroke-width="1.5"/>
  <line x1="155" y1="185" x2="385" y2="58" stroke="currentColor" stroke-width="1.5" opacity="0.55"/>
  <line x1="155" y1="185" x2="382" y2="185" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="382,180 392,185 382,190" fill="currentColor"/>
  <circle cx="55.2" cy="67.3" r="5" fill="currentColor"/>
  <text x="30" y="44" text-anchor="start" font-size="13" fill="currentColor">release height</text>
  <text x="330" y="44" text-anchor="middle" font-size="13" fill="currentColor">same height</text>
  <text x="268" y="207" text-anchor="middle" font-size="13" fill="currentColor">flat: it never stops</text>
</svg>
</figure>

Put the two laws together and a cannonball's flight assembles itself.
Horizontally it keeps whatever motion it was given, covering equal
distances in equal beats. Vertically it falls, dropping 1, 3, 5, 7.
The compound curve is a parabola — the first honest trajectory in the
history of gunnery, and a preview of a method: split a motion into
parts, law each part separately, recombine. Where
[Kepler](tychos-data-keplers-laws.md) found the shapes of the
heavens' motion, Galileo found the rules of motion here below. It
would take Newton to notice they were the same rules.

## A prediction you can make

Hang a weight from a string so that the length from the pivot to the
center of the weight is $1.00~\text{m}$. Start it swinging through a
small arc and time thirty full swings — over and back is one swing —
with a phone stopwatch. You should find close to $60$ seconds: about
$2.0$ s per swing.

Now use Galileo's square-root law to predict before you measure.
Shorten the string to a quarter of its length, $0.25~\text{m}$:

$$
T_2 = T_1 \sqrt{\frac{0.25}{1.00}} = \frac{T_1}{2} \approx 1.0~\text{s}.
$$

Thirty swings of the short pendulum should take about $30$ seconds —
half the time, on your own stopwatch, from a law you can check to
within a second in a doorway.

[^tower]: The story that he proved it by dropping weights from the
  Leaning Tower of Pisa rests on one secondhand account and probably
  never happened. The tied-stones argument, which appears in his *Two
  New Sciences* (1638), needs no tower — and no permission.

[^rolling]: One honest wrinkle Galileo could not have known: a ball
  that *rolls* spends part of its fall spinning itself up, so it
  accelerates at only $\frac{5}{7}$ of $g \sin\theta$, the rate for
  frictionless sliding at tilt $\theta$. The times-squared *ratios*
  survive untouched — which is exactly what he measured — but anyone
  extracting $g$ from a rolled ball will come out low by that factor.

[^isochronism]: Very nearly. Isochronism is exact only in the limit of
  small swings; a pendulum released at $20^\circ$ runs slow by roughly
  $0.8\%$. Galileo believed it exact for all arcs — one of his few
  overclaims. Huygens found the correction, and a curve that fixes it.

[^circular]: A confession of straightened history: Galileo's inertia
  was subtly circular — "horizontal" to him meant level with the
  Earth's surface, so unforced motion endured *around* the globe.
  Descartes straightened the line, and Newton made it the first law.
  For ramps and cannonballs the difference is invisible.
