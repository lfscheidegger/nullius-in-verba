---
title: Huygens (draft)
chapter: 10
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

Galileo died in 1642 with mechanics half-built.
[His science of motion](galileos-mechanics.md) told you how a single body
falls, rolls, or flies — but the world is bodies *meeting*: carts couple,
cannonballs strike walls, billiard balls click. What law governs the
crash? Descartes offered seven rules of collision in 1644, and experiment
upheld roughly one of them. His third rule said a small body can never
budge a larger one at rest, however fast it comes — which any child with
marbles can refute before lunch.[^descartes] Descartes did leave one deep
idea behind: that in every collision *something* is conserved. He merely
guessed the wrong something. His "quantity of motion" was bulk times
speed, with no regard for direction, and it fails the simplest test: two
equal balls meeting head-on and rebounding keep their quantity, but if
they stick and stop, it vanishes.

Mechanics had a second embarrassment: time. Galileo timed his ramps with
water clocks and his own pulse. The best mechanical clocks of 1650
wandered by a quarter hour a day — useless for astronomy, hopeless for
finding longitude at sea. In 1656 Christiaan Huygens, a Dutch diplomat's
son of twenty-seven, hung a pendulum in a clock's escapement, and the
daily error collapsed from minutes to seconds. Then he found the flaw
Galileo had missed: a pendulum on a circular arc is *not* quite
isochronous — wide swings take longer than narrow ones. Huygens hunted
the curve along which every swing, wide or narrow, takes the same time,
and found it: the cycloid, the arch traced by a point on a rolling
wheel's rim. For small swings the ordinary pendulum is close enough, and
its period obeys the law Huygens derived with geometry alone:

$$
T = 2\pi \sqrt{\frac{L}{g}} .
$$

Turn the law around and the pendulum becomes an instrument: count swings,
measure the length, and out comes $g$, the strength of gravity at your
feet, good to four digits. It was the first precision constant of
terrestrial physics.[^dates]

The collision problem yielded to a different weapon: relativity. Galileo
had argued that motion shared by everything on a ship is invisible from
inside it; Huygens turned that observation into a calculating machine.
Start with the one collision symmetry gives you for free: two identical
hard balls approaching at equal speeds $v$ meet and rebound, each with
its speed reversed — nothing else respects the mirror symmetry of the
setup. Now watch that same collision from a canal boat gliding past at
speed $v$. From the boat, one ball sits at rest and the other arrives at
$2v$; after the crash, the mover stands dead and the target departs at
$2v$. No new physics, just a new point of view — and a new result: equal
balls *exchange* their velocities. Every equal-mass collision is the
symmetric one, seen from the right boat.

<figure>
<figcaption>Huygens's boat argument, cashed out: when two identical hard
balls collide, they trade velocities. The moving ball stops dead; the
resting ball leaves with the arrival speed. Viewed from a boat moving at
half the speed, this is just the symmetric head-on collision.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Before and after of an elastic collision between equal balls: before, a moving ball approaches one at rest; after, the first is at rest and the second moves off at the same speed">
  <text x="30" y="42" font-size="13" fill="currentColor">before</text>
  <line x1="30" y1="84" x2="370" y2="84" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <circle cx="120" cy="72" r="11" fill="currentColor"/>
  <line x1="140" y1="72" x2="196" y2="72" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="196,68 196,76 206,72" fill="currentColor"/>
  <text x="170" y="62" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">v</text>
  <circle cx="280" cy="72" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="280" y="50" text-anchor="middle" font-size="13" fill="currentColor">at rest</text>
  <text x="30" y="136" font-size="13" fill="currentColor">after</text>
  <line x1="30" y1="178" x2="370" y2="178" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <circle cx="120" cy="166" r="11" fill="currentColor"/>
  <text x="120" y="144" text-anchor="middle" font-size="13" fill="currentColor">at rest</text>
  <circle cx="280" cy="166" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="300" y1="166" x2="356" y2="166" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="356,162 356,170 366,166" fill="currentColor"/>
  <text x="330" y="156" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">v</text>
</svg>
</figure>

Riding boats past every collision he could construct, Huygens repaired
Descartes. The conserved quantity is bulk times velocity *with its sign*:

$$
m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2 ,
$$

where the $u$'s are velocities before the crash and the $v$'s after, each
carrying a plus or minus for its direction. This is conservation of
momentum, stated a generation before Newton's *Principia*. And Huygens
noticed something more. For hard balls that rebound cleanly, a second sum
survives:

$$
m_1 u_1^2 + m_2 u_2^2 = m_1 v_1^2 + m_2 v_2^2 .
$$

He recorded it as a remarkable fact and gave it no name. It would take a
century and a half for physics to understand what $mv^2$ was trying to
say.[^visviva]

> **Interactive (planned):** a collision laboratory. Set two masses and
> two velocities on a frictionless track; choose hard, soft, or sticky
> collisions; crash them. The sim tallies candidate quantities — total
> speed, $m|v|$, $mv$, $mv^2$ — across every run, and the reader's job is
> to discover which column never changes, and which survives only the
> clean rebounds. A "ride the boat" button shifts the whole scene to a
> moving frame, to show the conservation laws don't care.

One more thread. In 1659 Huygens asked how hard a whirling stone pulls on
its string. Geometry answers. In a short time $t$ the stone would travel
a distance $vt$ along the straight tangent; the circle falls away from
that tangent line by $(vt)^2/2r$ — a fact about circles, provable with
the Pythagorean theorem. Compare Galileo: a dropped stone falls
$\frac{1}{2}gt^2$. The forms match. Circular motion *is* falling — a
perpetual falling toward the center that never gets closer, with
acceleration

$$
a = \frac{v^2}{r} .
$$

<figure>
<figcaption>Huygens's circle theorem. The stone's velocity points along
the tangent; the string forces a continual falling toward the center with
acceleration <em>v</em>²/<em>r</em>. Double the speed and the pull
quadruples.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A circle with a stone at the top: its velocity arrow points along the tangent and its acceleration arrow points toward the center">
  <circle cx="170" cy="120" r="80" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="170" cy="120" r="2.5" fill="currentColor"/>
  <line x1="170" y1="120" x2="250" y2="120" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
  <text x="210" y="112" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">r</text>
  <circle cx="170" cy="40" r="4" fill="currentColor"/>
  <line x1="180" y1="40" x2="246" y2="40" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="246,36 246,44 256,40" fill="currentColor"/>
  <text x="240" y="28" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">v</text>
  <line x1="170" y1="50" x2="170" y2="92" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="166,92 174,92 170,102" fill="currentColor"/>
  <text x="180" y="78" font-size="13" fill="currentColor">v²/r</text>
</svg>
</figure>

Stand back and count what Huygens held by 1673: inertia, sharpened from
Galileo's version; the conservation of momentum; the law of the circle,
$v^2/r$; and a clock that measured $g$ to four figures. Kepler's
[planets sweeping their equal areas](tychos-data-keplers-laws.md) hung in
the sky, waiting to be recognized as stones on invisible strings. Every
ingredient of the great synthesis sat on one man's desk, and he did not
combine them — he distrusted forces reaching across empty space, and the
step from a whirling stone to a falling Moon required exactly that
audacity. The next chapter is about the man who took it.

## A prediction you can make

Huygens's pendulum law runs on algebra you already own. Tie a weight to a
string so that the distance from the pivot to the weight's center is
$1.000$ m, and take $g = 9.81\ \text{m/s}^2$:[^gvaries]

$$
T = 2\pi\sqrt{\frac{1.000}{9.81}} = 2\pi \times 0.3193 \approx 2.01\ \text{s}.
$$

Time twenty full swings (out *and* back is one swing) with a phone
stopwatch, keeping the swing narrow: predicted, $20 \times 2.01 \approx
40.1$ seconds. Run it again with the string shortened to $0.25$ m — a
quarter of the length — and the square root promises exactly half the
period: about $1.00$ s per swing. If your numbers land within a percent
of these, you have reproduced the foundation of two centuries of
timekeeping with a shoelace.

[^descartes]: Descartes ranked his conservation principle — motion, once
  created, is never lost, because God sustains it — above the testimony
  of marbles, and said so: the rules held for perfectly hard bodies in a
  void, and nature's failure to comply was nature's problem. The instinct
  that something is conserved was profound; the bookkeeping was wrong.

[^dates]: The chronology here is straightened. Huygens built the clock in
  1656, solved collisions around 1656 too (in *De motu corporum ex
  percussione*, circulated privately and published only in 1703, after
  his death), derived the circle theorems in 1659, and published the
  pendulum theory in *Horologium Oscillatorium* in 1673. His collision
  results reached the world mainly through a 1669 report to the Royal
  Society, which had posed the problem to Huygens, John Wallis, and
  Christopher Wren — all three answered, and their answers agreed.

[^visviva]: Leibniz later fought a whole war over $mv^2$, calling it
  *vis viva*, the living force. With a factor of one half it is kinetic
  energy, and the reason it survives clean rebounds but not sticky ones —
  the missing quantity hides as heat — is a story this book reaches in
  Act III. Collisions that conserve it are called *elastic*.

[^gvaries]: $g$ is not one number: it runs from about $9.78\ \text{m/s}^2$
  at the equator to $9.83$ at the poles, and Huygens's clocks found this
  out the hard way. In 1672 Jean Richer carried a pendulum clock from
  Paris to Cayenne, near the equator, and it lost about two and a half
  minutes a day; the seconds pendulum had to be shortened. A swinging
  weight had detected the shape of the Earth.
