---
title: Newton I: Laws of Motion (draft)
chapter: 11
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By the 1670s mechanics was a heap of correct fragments that did not
speak to one another. [Galileo](galileos-mechanics.md) had measured how
bodies fall: the distance grows as the square of the time, and a ball on
a level plane keeps whatever speed it has. [Huygens](huygens.md) had
timed the pendulum, solved collisions, and shown that a body moving in a
circle of radius $r$ at speed $v$ accelerates toward the center by
$v^2/r$. Above it all sat [Kepler's three laws](tychos-data-keplers-laws.md)
— exact rules for the planets, with no cause attached. Every fragment
was solid. None explained the others.

What blocked a synthesis was not a missing fact but a missing language.
Each fragment is about *change*: speed picking up moment by moment,
direction bending point by point. Geometry, the only rigorous
mathematics anyone possessed, speaks of states — this line, that area —
not of rates. Ask "how fast is the ball moving *right now*?" and the
tools failed. You can compute an average speed over an interval,
$\Delta x / \Delta t$, but the instant itself has $\Delta t = 0$, and
the fraction collapses to $0/0$. Zeno had planted that thorn two
thousand years earlier, and it was still there.

Isaac Newton pulled it out. Cambridge closed for plague in 1665, and he
spent two years at his mother's farm in Woolsthorpe inventing, among
other things, the mathematics of the instant.[^leibniz] The trick is to
stop demanding the forbidden fraction and instead watch the allowed
ones: compute $\Delta x / \Delta t$ over a shrinking interval and see
what value the ratio *closes in on*. For any smooth motion it closes in
on something definite. That limiting value is the velocity now — written
$v = dx/dt$ — and it has a picture: it is the slope of the
position-against-time curve at that point. Do it again and you get the
rate at which velocity itself changes, the acceleration,
$a = dv/dt$. This operation — from a curve to its slope at every
instant — is the **derivative**, and it is the verb the laws of motion
had been waiting for.

<figure>
<figcaption>The calculus in one picture: position against time for a
body under constant force. The curve is Galileo's parabola. Its slope
at any instant is the velocity at that instant; the derivative is the
machine that reads the slope.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A position-versus-time parabola with a tangent line touching it at one point, labeled slope equals velocity">
  <line x1="40" y1="190" x2="370" y2="190" stroke="currentColor" stroke-width="1"/>
  <line x1="40" y1="190" x2="40" y2="20" stroke="currentColor" stroke-width="1"/>
  <path d="M 40 190 Q 190 190 340 40" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="150" y1="186.5" x2="360" y2="39.5" stroke="var(--accent)" stroke-width="1"/>
  <circle cx="250" cy="116.5" r="3.5" fill="currentColor"/>
  <text x="360" y="207" text-anchor="end" font-size="13" fill="currentColor">time</text>
  <text x="48" y="30" text-anchor="start" font-size="13" fill="currentColor">position</text>
  <text x="300" y="150" text-anchor="middle" font-size="13" fill="currentColor">slope = velocity</text>
</svg>
</figure>

With the language in hand, the laws take three sentences. **First:** a
body at rest stays at rest, and a body in motion continues in a straight
line at constant speed, unless a force acts on it. This is the final
overthrow of [the old first law of nature](the-first-law-of-nature.md):
motion needs no cause and no maintainer. Only *change* of motion does.[^first]
**Second:** force is what changes motion, and the exchange rate is mass.
Define the momentum $p = mv$; then

$$
F = \frac{dp}{dt} = m\,\frac{dv}{dt},
$$

the last step holding when the mass stays constant.[^principia] Mass
here is not weight. It is a body's reluctance to be accelerated — push
identically on a cannonball and a cork and the cork leaps — and it would
mean the same thing in empty space, where nothing weighs anything.
Weight is merely one force among many, the pull of the Earth.
**Third:** forces come in pairs. If one body pushes on a second, the
second pushes back on the first, equally and oppositely. Add the second
law to the third and something drops out for free: in any collision, the
momentum one body loses the other gains, so the total never changes.
Huygens' hard-won collision rules stop being rules and become theorems.

The derivative also runs in reverse. If you know the force, you can
climb back up: from acceleration to velocity, from velocity to position.
That reverse operation is the **integral**, and it turns the second law
from a description into a prophecy. Apply a constant force $F$ to a mass
$m$ starting from rest: the velocity grows as $v = (F/m)\,t$, and
integrating once more,

$$
x(t) = \frac{1}{2}\,\frac{F}{m}\,t^2 .
$$

There is Galileo's law of fall — the distance growing as the square of
the time, measured drop by drop on an inclined plane — derived in two
lines. That is what a law of motion buys: yesterday's measurements
become today's theorems, and tomorrow's motions become computable before
they happen.

> **Interactive (planned):** a force sandbox. The reader programs a
> force on a puck — constant, spring-like, or drawn freehand — and the
> sim integrates the second law live, stacking the position, velocity,
> and acceleration curves so each is visibly the slope of the one above.
> A "shrinking secant" mode lets the reader take a derivative by hand:
> drag the interval $\Delta t$ toward zero and watch the ratio settle.

The laws say what force *does*. They are silent on which forces exist —
that is a separate hunt, and it fills the next chapters: the spring, the
pendulum's restoring pull, and then the force that reaches from the
Earth to the Moon.

## A prediction you can make

Newton tested, with pendulums of gold, lead, glass, sand, and wood, that
weight is proportional to mass.[^pendulum] Grant that, and the second
law makes falling universal: the force is $mg$, so the acceleration is
$a = mg/m = g \approx 9.81 \text{ m/s}^2$ — the mass cancels, and
everything falls alike. Integrate twice: a body dropped from height $h$
lands after

$$
t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \times 2.0}{9.81}} \approx 0.64 \text{ s}
$$

for $h = 2.0$ m, arriving at $v = gt \approx 6.3$ m/s. Now check it.
Drop a coin and a hardcover book together from two meters and film the
fall with a phone's slow-motion camera at 240 frames per second: both
should land in the same frame, about 153 frames after release. Air drag
will steal a few milliseconds from the coin — which is itself a
prediction, and the subject of a later chapter's sidenote.

[^leibniz]: Gottfried Leibniz invented the calculus independently about
  a decade later, and his notation — $dx/dt$, the elongated-S integral —
  won so completely that we now state Newton's laws in his rival's
  script. The priority war that followed was long, bitter, and beneath
  both men.

[^first]: The first law is not solely Newton's. Galileo had inertia in
  all but name, though his version hugged the Earth's surface; Descartes
  stated the straight-line form in 1644. Newton's *Principia* credits
  Galileo. The clean three-law package presented here is the textbook
  distillation, not the historical sequence.

[^principia]: An idealization confessed: the *Principia* (1687) states
  the laws in words and proves its results in the style of Greek
  geometry, not in this notation. Newton's second law as he wrote it
  relates force to change of momentum without the explicit $d/dt$; the
  equation-form taught today was consolidated by Euler in the following
  century. The physics is Newton's; the typography is not.

[^pendulum]: *Principia*, Book III: pairs of pendulums with identical
  bobs filled with different materials swung in step to about one part
  in a thousand. This is a real experiment with a real reported
  precision, not a draft invention. Its deeper meaning — why inertial
  mass should track gravitational mass at all — stays open until the
  chapter on general relativity.
