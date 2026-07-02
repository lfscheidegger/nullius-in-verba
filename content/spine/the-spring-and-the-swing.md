---
title: The Spring and the Swing (draft)
chapter: 12
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

[Newton's second law](newton-laws-of-motion.md) is a machine: feed it a
force, and it returns a motion. But so far the machine has only been fed
constant forces. Gravity near the ground pulls the same at every height,
and the result is [Galileo's parabola](galileos-mechanics.md). The
interesting forces of the world are not constant. And one old puzzle was
waiting for exactly this machine. Galileo had noticed that a pendulum
keeps time — wide swings and narrow swings take the same duration — and
[Huygens had built clocks on that fact](huygens.md). But Huygens's
explanation was geometry. Nobody could say, from the forces alone, *why*
a pendulum should be isochronous. To answer that, physics first had to
measure a spring.

Robert Hooke did, around 1660, by hanging weights from springs and wires.
The rule he found is the simplest one imaginable: stretch is proportional
to force. Double the load, double the extension. *Ut tensio, sic vis* —
as the stretch, so the force.[^anagram] Written for the force the spring
exerts back,

$$
F = -kx,
$$

where $x$ is the displacement from the spring's natural length and $k$
measures its stiffness. The minus sign is the law's whole personality:
displace the mass either way and the force points *home*.

Now feed this force to Newton's machine. With $F = ma$, and acceleration
as the second derivative of position,

$$
m\,\frac{d^2x}{dt^2} = -kx.
$$

Stop and look at what kind of statement this is. Its unknown is not a
number but a *function* — the entire history $x(t)$, all at once. And it
does not hand you that function; it only constrains its shape,
everywhere: the curve must bend toward the axis, and bend harder the
farther from the axis it is.[^notation] This is the reader's first
second-order differential equation, and we will solve it by looking.

What curve bends toward its axis in proportion to its distance from it?
You already know one. Take a point moving at constant speed around a
circle of radius $A$, and watch its shadow on a line through the center.
At the edges the shadow slows, stops, and turns; through the middle it
runs fastest. Work out the geometry and the shadow's acceleration is
proportional to minus its displacement — exactly our equation. The shadow
of uniform circular motion *is* the motion of a mass on a spring, and its
graph against time is the cosine:

$$
x(t) = A\cos\!\left(\sqrt{\tfrac{k}{m}}\;t\right).
$$

<figure>
<figcaption>The visual solution. A point runs around the circle at a
steady rate; its shadow on the vertical line oscillates, fast through the
middle and slow at the turnaround. The shadow obeys the spring equation
exactly.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A point on a circle with its horizontal projection onto a vertical line, showing that the shadow of uniform circular motion is an oscillation">
  <circle cx="120" cy="110" r="80" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="120" y1="110" x2="171.4" y2="48.7" stroke="currentColor" stroke-width="1"/>
  <circle cx="171.4" cy="48.7" r="3.5" fill="currentColor"/>
  <line x1="171.4" y1="48.7" x2="300" y2="48.7" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 3" opacity="0.6"/>
  <line x1="300" y1="30" x2="300" y2="190" stroke="currentColor" stroke-width="1"/>
  <circle cx="300" cy="48.7" r="3.5" fill="var(--accent)"/>
  <text x="152" y="104" font-size="13" fill="currentColor" font-style="italic">&#969;t</text>
  <text x="310" y="53" font-size="13" fill="currentColor">shadow</text>
  <text x="310" y="188" font-size="13" fill="currentColor" font-style="italic">x</text>
</svg>
</figure>

The circle's steady rate is $\omega = \sqrt{k/m}$, and one full lap is one
full oscillation, so the period is

$$
T = 2\pi\sqrt{\frac{m}{k}}.
$$

Read that formula slowly: it contains Galileo's puzzle and its answer.
The amplitude $A$ is not in it. Pull the mass twice as far and it has
twice as far to travel — but the force is twice as strong at every point,
and the two effects cancel exactly. Isochronism is not a coincidence of
pendulums. It is the signature of any force proportional to displacement.

And the pendulum? For a bob on a string of length $L$, displaced along
its arc by $x$, the restoring force is $mg\sin\theta$, and for small
angles $\sin\theta \approx \theta = x/L$.[^small] That is
$F \approx -(mg/L)\,x$ — Hooke's law in disguise, with $k = mg/L$. Same
equation, same solution, period $T = 2\pi\sqrt{L/g}$. The mass cancels,
just as Galileo saw when he swung lead and cork together.

<figure>
<figcaption>The sinusoid draws itself. A mass hangs from a spring at the
left; released from below equilibrium, its height traces a cosine in time.
Two full periods shown.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A mass hanging from a spring beside a graph of its height against time, tracing two periods of a cosine curve">
  <line x1="30" y1="20" x2="90" y2="20" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 60 20 L 60 35 L 48 42 L 72 52 L 48 62 L 72 72 L 48 82 L 72 92 L 48 102 L 72 112 L 48 122 L 72 132 L 60 140 L 60 152" fill="none" stroke="currentColor" stroke-width="1.25"/>
  <rect x="44" y="152" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="60" y="173" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">m</text>
  <line x1="40" y1="110" x2="390" y2="110" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 3" opacity="0.5"/>
  <path d="M 90 170 C 123 170, 132 50, 165 50 S 207 170, 240 170 S 282 50, 315 50 S 357 170, 390 170" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="90" y1="105" x2="90" y2="115" stroke="currentColor" stroke-width="1"/>
  <line x1="240" y1="105" x2="240" y2="115" stroke="currentColor" stroke-width="1"/>
  <text x="165" y="100" text-anchor="middle" font-size="13" fill="currentColor">one period <tspan font-style="italic">T</tspan></text>
  <text x="382" y="102" font-size="13" fill="currentColor" font-style="italic">t</text>
</svg>
</figure>

> **Interactive (planned):** a mass-spring lab. Set $m$ and $k$, pull,
> release, and watch the sinusoid draw itself beside the moving mass,
> reference circle running alongside. Then switch on a periodic drive and
> sweep its frequency: far from $\sqrt{k/m}$ the response is feeble; at
> it, the amplitude grows swing by swing — resonance, felt in the hand
> before it is named.

Push the mass periodically and timing is everything. At an arbitrary
rhythm you fight the motion half the time. At the oscillator's own
frequency — $\sqrt{k/m}$, the rate it wants — every push arrives in step,
and the amplitude climbs until friction eats energy as fast as you feed
it. Every child pumping a swing knows the technique; the equation says
why only that rhythm works.

Here is why this chapter matters beyond clocks. Almost nothing in nature
is exactly a Hooke spring — even real springs give up the law when
stretched too far.[^real] But almost everything is *approximately* one.
Nudge any system resting at equilibrium: the restoring force is zero at
the resting point, and for small nudges the simplest behavior available —
the one nature almost always takes — is proportional to displacement.
Near the bottom, every valley looks like this one. So this equation will
return, with different letters: in the air of a sound wave, in the
jiggling atoms of a hot solid, in the hydrogen atom's quantum cousin, and
at the end of this book, in the fields whose quanta are particles. The
harmonic oscillator is the hydrogen atom of mechanics — the solvable case
everything else is measured against. Learn it once, and you have paid the
entrance fee to half of physics.

## A prediction you can make

The pendulum formula runs on two numbers you can get yourself. Tie a small
weight to a string exactly one meter long, from pivot to the weight's
center. With $g = 9.81\ \text{m/s}^2$,

$$
T = 2\pi\sqrt{\frac{L}{g}} = 2\pi\sqrt{\frac{1.000}{9.81}} \approx 2.006\ \text{s}.
$$

Time twenty full swings — over and *back* counts as one — with a phone
stopwatch, keeping the swings small, ten degrees or less. The prediction
is $20 \times 2.006 \approx 40.1$ seconds, and the formula says the
weight does not matter: swap a steel nut for a rubber eraser and the time
holds. Run it backward, too: a period of exactly two seconds demands
$L = g/\pi^2 \approx 0.994$ m. That is the "seconds pendulum," and it is
why a longcase clock's pendulum is almost exactly a meter long.

[^anagram]: Hooke first published the law in 1676 as the anagram
  *ceiiinosssttuv*, decoded two years later as *ut tensio, sic vis* — a
  trick of the era for claiming priority without disclosing the result.
  The measurements were real; so were his priority feuds.

[^notation]: A confession of anachronism: neither Hooke nor Newton wrote
  the equation in this form. The $d^2x/dt^2$ notation and the systematic
  study of differential equations came in the following century, above
  all from Euler. The physics is theirs; the packaging is later.

[^small]: The chapter's one disclosed approximation. For amplitude
  $\theta_0$, the true period exceeds $2\pi\sqrt{L/g}$ by a factor of
  roughly $1 + \theta_0^2/16$: about 0.2 percent at $\theta_0 = 10^\circ$,
  5 percent at $50^\circ$. Keep the swings small and the idealization is
  better than your stopwatch thumb.

[^real]: Stretch a spring far enough and the force law bends, then the
  metal yields and the spring never comes home at all. Hooke's law is the
  small-displacement truth about springs, which is exactly the role it
  plays everywhere else in physics.
