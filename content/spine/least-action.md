---
title: The Shape of Mechanics: Least Action (draft)
chapter: 15
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By the middle of the eighteenth century, mechanics worked. Newton's
[three laws](newton-laws-of-motion.md) and his
[law of gravitation](universal-gravitation.md) had swallowed the solar
system whole; a century later they would locate
[a planet nobody had seen](the-planet-at-the-tip-of-a-pen.md). The recipe
was clear: find every force on every body, write $F = ma$, and grind.
But the grinding could be brutal. Hang [a pendulum](the-spring-and-the-swing.md)
from another pendulum, or thread a bead on a curved wire, and the forces
multiply: the wire pushes on the bead with whatever force it takes to keep
the bead on the wire, and you must solve for that force before you can use
it. Mechanics had the right answers and the wrong shape. The bookkeeping
was fighting the physics.

The way out came from light, and it was already a century old. In 1662
Fermat explained refraction with a strange economy: of all the routes a
ray could take from a point in air to a point in water, light takes the
one of *least time*. A straight line is not it — light can save time by
traveling farther in the fast medium and less far in the slow one, the way
a lifeguard runs along the beach before swimming. Work out the
time-minimizing route and Snell's law of
[refraction](light-in-a-dark-room.md) falls out exactly:
$\sin\theta_1 / \sin\theta_2 = v_1 / v_2$, with light slower in water — as
[Huygens's wave picture](huygens.md) also demanded. One principle, no
forces, no mechanism: state what the whole path must optimize, and the
path follows.

Could mechanics be like that? In 1744 Maupertuis said yes: nature is
frugal, and what she economizes in motion is a quantity he called
*action*.[^maupertuis] Euler made the idea precise; Lagrange, in a 1788
book famously containing not a single diagram, rebuilt all of mechanics
on it; Hamilton, in the 1830s, gave it the form we still use. Here it is.
Take a particle that leaves a given point at a given time and must arrive
at another given point at a later given time. Consider *every* path it
might take between them — the true one and all the false ones. To each
path assign a number, the action: at every instant, take the kinetic
energy, subtract the potential energy, and add the results up along the
path,

$$
S = \int_{t_1}^{t_2} \left( \tfrac{1}{2}mv^2 - V \right) dt .
$$

The claim: the path nature actually takes is the one for which $S$ is
stationary — nudge the true path anywhere, by any small amount, and the
action does not change to first order.[^stationary] That single sentence
is all of mechanics. Demanding that $S$ be stationary for every small
nudge forces the path to obey, at every instant, the Euler–Lagrange
equation

$$
\frac{d}{dt}\!\left(\frac{\partial L}{\partial \dot q}\right)
- \frac{\partial L}{\partial q} = 0 ,
$$

where $L$ is the kinetic-minus-potential quantity above and $q$ is any
coordinate you like — an angle, an arc length along the wire, anything
that locates the system. For a free particle it says $m\dot v = 0$:
Newton's first law. Add gravity and it says $m\dot v = -mg$: Newton's
second. But because $q$ can be *any* coordinate, the wire and its
constraint force never enter. Choose the coordinate that respects the
constraint and the constraint disappears from the problem. The double
pendulum that took pages of force diagrams takes four lines.

<figure>
<figcaption>A ball thrown straight up, plotted as height against time.
The solid parabola is the true path. The dashed tent is a rival that
reaches the same height at constant speed. Both connect the same
endpoints; the true path's action is lower. Drawn to scale for the
two-second toss computed below.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Height versus time for a thrown ball: a solid parabolic arc and a dashed triangular rival path sharing the same start and end points">
  <line x1="40" y1="180" x2="370" y2="180" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <line x1="40" y1="180" x2="40" y2="25" stroke="currentColor" stroke-width="0.75" opacity="0.4"/>
  <path d="M 40 180 Q 200 -100 360 180" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 40 180 L 200 40 L 360 180" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="40" cy="180" r="3" fill="currentColor"/>
  <circle cx="360" cy="180" r="3" fill="currentColor"/>
  <text x="200" y="28" text-anchor="middle" font-size="13" fill="currentColor">true path</text>
  <text x="118" y="130" text-anchor="end" font-size="13" fill="currentColor">rival</text>
  <text x="365" y="196" text-anchor="end" font-size="13" fill="currentColor">time</text>
  <text x="52" y="36" font-size="13" fill="currentColor">height</text>
</svg>
</figure>

Why kinetic *minus* potential? Look at the thrown ball. The action rewards
a path for spending time at height (large $V$ lowers $S$) and punishes it
for speed (large $v$ raises $S$). The two pull against each other: to get
high, you must move fast. The parabola is the exact compromise — and the
compromise, worked out, is uniform gravitational acceleration.

> **Interactive (planned):** perturb the path yourself. The ball's true
> trajectory is drawn in the time–height plane; the reader grabs it and
> bends it — add a bulge, flatten the top, make it a tent — while a meter
> shows the action of the deformed path recomputed live. Every deformation
> raises the number. Releasing the path relaxes it back to the parabola,
> descending the action as it goes.

One question the chapter leaves deliberately open: the principle is
stated as if the ball *surveys* every path before choosing. How can it?
A thrown ball knows only where it is, not where it is going. For now the
honest answer is that the action principle and Newton's laws are exactly
equivalent, and the surveying is a manner of speaking. But hold the
question. Two centuries from this chapter's date, it will turn out that
the manner of speaking is the truth — that everything really does try
every path — and the mathematics on this page will be waiting, unchanged,
at the foundation of quantum mechanics.

## A prediction you can make

Throw a ball straight up so that it lands back in your hand $T = 2$
seconds later. The action of the true path works out to a closed
form[^numbers]

$$
S_{\text{true}} = -\frac{m g^2 T^3}{24}
= -\frac{0.145 \times 9.8^2 \times 2^3}{24} \approx -4.64 \ \text{J·s}
$$

for a 0.145 kg baseball. The principle predicts that *every* rival path
scores higher. Check two. The do-nothing path (the ball sits in your hand
for two seconds) has $v = 0$ and $y = 0$ throughout, so $S = 0$ — higher.
The tent path in the figure (constant speed 4.9 m/s up to the true peak
of 4.9 m, then constant speed down) gives
$S = m\,(24.0 - 48.0) \approx -3.48$ J·s — lower than zero, but still
above $-4.64$. Invent any third path you like, integrate, and watch it
lose. The parabola is not one good path among many. It is the bottom of
the valley.

[^maupertuis]: The tidiness is ours. Maupertuis's 1744 statement was
  vague — his "action" was mass times speed times distance, his argument
  half theology: a wise Creator would waste nothing. Euler had a sharper
  version in the same year and graciously let Maupertuis keep the credit,
  which Maupertuis then defended in an ugly priority war (Voltaire took
  the other side). The clean "stationary $\int L\,dt$" stated here is
  Hamilton's, from the 1830s.

[^stationary]: "Least" action is the traditional name and usually the
  truth for short paths, but the honest word is *stationary*: for long
  enough trajectories the true path can be a saddle point of $S$ —
  higher than some neighbors, lower than others. Nothing in the
  derivation of the equations of motion cares which; only the
  first-order change must vanish.

[^numbers]: The toss is an idealized example, not a measurement: we take
  $g = 9.8$ m/s² and ignore air resistance, and the baseball's mass is
  the regulation value. The closed form comes from integrating
  $\tfrac{1}{2}mv^2 - mgy$ along $y(t) = \tfrac{1}{2}gt(T - t)$: the
  kinetic integral gives $+mg^2T^3/24$, the potential integral
  $mg^2T^3/12$, and the difference is $-mg^2T^3/24$.
