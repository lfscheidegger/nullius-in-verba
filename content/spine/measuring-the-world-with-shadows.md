---
title: Measuring the World with Shadows (draft)
chapter: 1
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

No one has left the ground. No one will for another two and a half
thousand years. Yet by the time this chapter ends, you will know the
size of the Earth, the size and distance of the Moon, and roughly how
far away the Sun is — and you will know them the way the Greeks first
knew them: from sticks, shadows, and geometry.

The story begins with Thales of Miletus, who is said to have measured
the Great Pyramid without climbing it.[^thales] He waited until his own
shadow was as long as he was tall. At that moment, the pyramid's shadow
was as long as the pyramid was tall. Similar triangles: if the Sun makes
one triangle, it makes them all, and a ratio you can measure on the
ground fixes a height you cannot reach. Every measurement in this
chapter is that trick, scaled up.

A word about how this book tells its stories. History is messier than
any chapter; discoveries arrive out of order, half-understood, tangled
in errors. We will walk the *idealized* path — the clean chain of
reasoning that makes each discovery feel inescapable — and wherever the
path bends away from what actually happened, a sidenote in the margin
will confess it. That is the book's standing policy, and this chapter
uses it freely.

Now the first real link in the chain. Eratosthenes, librarian at
Alexandria, learned that at noon on the summer solstice the Sun stood
directly over the town of Syene, far to the south: it shone straight
down a deep well, and a vertical stick cast no shadow. In Alexandria on
the same day, at the same noon, a vertical stick *did* cast a shadow —
one showing the Sun to be $7.2^\circ$ from overhead. The Sun is so far
away that its rays arrive parallel everywhere on Earth. So the
difference between the two shadows is not about the Sun at all. It is
the angle by which the Earth's surface *curves* between the two cities,
seen from the Earth's center. And $7.2^\circ$ is exactly one-fiftieth of
a full circle. The distance from Alexandria to Syene was reckoned at
5{,}000 stadia, so

$$
C = \frac{360^\circ}{7.2^\circ} \times 5{,}000 \text{ stadia}
  = 250{,}000 \text{ stadia}.
$$

How long is a stadion? Honestly: we are not sure.[^stadion] Take the
common value of 185 meters and the circumference comes out to about
46,000 km; the modern figure, pole to pole, is 40,008 km. From a stick,
a well, and a camel route, Eratosthenes got the size of the planet to
within about fifteen percent.

<figure>
<figcaption>Eratosthenes' measurement. Parallel sunlight strikes a
vertical stick head-on at Syene and at an angle at Alexandria. That
angle equals the angle between the two cities at the Earth's center —
here drawn as 20&deg; instead of 7.2&deg; so you can see it.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Two sticks on a curved Earth with parallel sun rays, showing the shadow angle at Alexandria equals the angle at Earth's center">
  <path d="M 22.5 139.4 A 420 420 0 0 1 377.5 139.4" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="200" y1="100" x2="200" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="56.3" y1="125.3" x2="46.1" y2="97.2" stroke="currentColor" stroke-width="2"/>
  <line x1="200" y1="20" x2="200" y2="100" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 3"/>
  <line x1="56.3" y1="25" x2="56.3" y2="125.3" stroke="currentColor" stroke-width="0.75" stroke-dasharray="4 3"/>
  <line x1="200" y1="100" x2="200" y2="215" stroke="currentColor" stroke-width="0.75" opacity="0.45"/>
  <line x1="56.3" y1="125.3" x2="89" y2="215" stroke="currentColor" stroke-width="0.75" opacity="0.45"/>
  <text x="210" y="88" font-size="13" fill="currentColor">Syene</text>
  <text x="20" y="150" font-size="13" fill="currentColor">Alexandria</text>
  <text x="128" y="38" font-size="13" fill="currentColor" text-anchor="middle">noon sun</text>
  <text x="72" y="112" font-size="13" fill="currentColor">&#945;</text>
  <text x="152" y="205" font-size="13" fill="currentColor" text-anchor="middle">to Earth&#8217;s center: same &#945;</text>
</svg>
</figure>

> **Interactive (planned):** reproduce the measurement. Set a stick at
> Alexandria, read off the shadow angle at solstice noon, dial in the
> Alexandria–Syene distance, and get a circumference in stadia — then
> slide the disputed stadion length and watch the answer in kilometers
> move against the modern value.

The second link needs a lunar eclipse. When the Earth passes between
Sun and Moon, its shadow crawls across the Moon's face — and the
shadow's edge is always an arc of a circle, whichever way the Earth
happens to be turned. Only a sphere casts a round shadow in every
orientation; that was Aristotle's argument, and it still holds. Better:
the shadow has a *size*. Timing how long the Moon takes to cross it
shows the shadow to be about 2.7 Moon-widths across. Because the shadow
tapers,[^taper] this makes the Earth about 3.7 times wider than the
Moon. We know the Earth's width from Eratosthenes; now we know the
Moon's — about 3,500 km.

And a known width buys a distance. The full Moon spans about half a
degree of sky. An object spans $0.52^\circ$ when it sits at a distance
of $360^\circ / (2\pi \times 0.52^\circ) \approx 110$ times its own
diameter. So the Moon is about $110 \times 3{,}475$ km $\approx$
382,000 km away. The modern mean distance is 384,400 km — thirty
Earth-diameters, from geometry alone.

The last link is the boldest, and it is Aristarchus' own. When the Moon
is exactly half lit, the Sun–Moon–Earth angle is a right angle: sunlight
is arriving square-on to our line of sight. Measure the angle $\alpha$
between the Moon and the Sun in our sky at that moment, and the triangle
is solved:

$$
\frac{d_{\text{Sun}}}{d_{\text{Moon}}} = \frac{1}{\cos\alpha}.
$$

Aristarchus measured $\alpha \approx 87^\circ$ and concluded that the
Sun is about 19 times farther than the Moon. He was wrong by a factor
of twenty — the true angle misses a right angle by less than a sixth of
a degree, a difference no naked eye can catch, and the Sun is really
about 389 times farther.[^angle] But look at what even the wrong number
says. The Sun and Moon appear the same size in the sky, so the Sun's
true diameter exceeds the Moon's by that same ratio: at least 19
Moon-widths, several times wider than the Earth itself. Aristarchus
drew the obvious, scandalous conclusion — the big thing does not circle
the small one — and proposed, eighteen centuries before Copernicus,
that the Earth goes around the Sun. Almost no one followed him. That
argument will have to be won again, later in this book, with better
instruments.

<figure>
<figcaption>Aristarchus' triangle, wildly not to scale. At exact
half-moon the angle at the Moon is 90&deg;; measuring &#945; at the
Earth fixes the ratio of the two distances.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Right triangle with Earth, half-lit Moon, and Sun at its vertices; the right angle is at the Moon">
  <line x1="60" y1="190" x2="60" y2="55" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="55" x2="355" y2="55" stroke="currentColor" stroke-width="1"/>
  <line x1="60" y1="190" x2="355" y2="55" stroke="currentColor" stroke-width="1"/>
  <polyline points="60,71 76,71 76,55" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="60" cy="190" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <path d="M 60 43 A 12 12 0 0 1 60 67 Z" fill="currentColor"/>
  <circle cx="60" cy="55" r="12" fill="none" stroke="currentColor" stroke-width="1"/>
  <circle cx="355" cy="55" r="14" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="82" y="196" font-size="13" fill="currentColor">Earth</text>
  <text x="30" y="40" font-size="13" fill="currentColor">Moon</text>
  <text x="343" y="90" font-size="13" fill="currentColor">Sun</text>
  <text x="76" y="162" font-size="13" fill="currentColor" font-style="italic">&#945;</text>
</svg>
</figure>

> **Interactive (planned):** the full chain, end to end. The reader
> times the Moon's passage through the Earth's shadow using contact
> timings from a real, documented lunar eclipse (primary data, with
> provenance, to be sourced), then measures the half-moon angle, and
> watches four numbers assemble themselves: Earth, Moon, distance,
> Sun — each inheriting the errors of the one before.

Notice the shape of what just happened. Four measurements, each
standing on the last: a shadow gave the Earth, the Earth gave the Moon,
the Moon's width gave its distance, and a half-lit Moon reached out to
the Sun. No single step is hard. The chain is the achievement — and
chains of exactly this kind, each link checkable, are how physics will
proceed for the rest of this book.

## A prediction you can make

The chain claims the Moon's distance is about 110 times its diameter.
If that is right, then *any* disk held 110 of its own diameters from
your eye should just cover the full Moon. A 19 mm coin — a US penny —
should do it at $110 \times 19$ mm $\approx 2.1$ meters. Tape the coin
to a window, walk back about two long paces, and check against the next
full Moon. At arm's length the coin will dwarf the Moon, which is
itself worth knowing: the Moon is smaller in the sky than almost
everyone believes.

[^thales]: Said, that is, by writers living many centuries later —
  Diogenes Laertius and Plutarch tell incompatible versions of the
  story. The anecdote is likely legend. The geometry is not, and that
  is the part we keep.

[^stadion]: Ancient sources disagree on the stadion; plausible values
  run from about 157 to 185 meters, putting Eratosthenes' result
  anywhere between roughly 39,000 and 46,000 km. His inputs were
  rounder than the clean story suggests, too: the 5,000 stadia was an
  estimate, and Syene lies neither exactly on the tropic nor exactly
  south of Alexandria. The method survives all of this; the precision
  is partly luck.

[^taper]: The Earth's shadow is a cone, not a cylinder — it narrows by
  about one Moon-width for every Moon-distance, because the Sun and
  Moon subtend nearly the same half-degree. Adding that lost width back
  turns the observed 2.7 into the Earth-to-Moon ratio of about 3.7.
  Aristarchus made a correction of exactly this kind, with rougher
  numbers; the figures given here use modern values so the chain checks
  out cleanly.

[^angle]: The true angle at exact half-moon is about $89.85^\circ$, and
  the Sun is about 389 times more distant than the Moon. Judging the
  precise instant when the Moon is half lit is itself very hard, and
  the error is unforgiving: near $90^\circ$, $\cos\alpha$ is tiny, so a
  small slip in $\alpha$ swings the answer enormously. Aristarchus'
  method was flawless; his instrument was the naked eye.
