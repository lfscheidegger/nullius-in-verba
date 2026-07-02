---
title: Galileo's Telescope (draft)
chapter: 7
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1609 the argument had gone stale. Copernicus had moved the Earth
([the gamble of the last chapter](the-copernican-gamble.md)), but he had
not proved anything. His system saved the appearances; so did Ptolemy's
([chapter 4](saving-the-appearances.md)). Both matched the naked-eye sky
to within its errors. Astronomers could choose on taste, on theology, on
mathematical elegance — on anything except evidence. The sky offered no
tiebreaker, because every instrument for reading the sky was a human eye.

Then the instrument changed. In the autumn of 1608 a Dutch spectacle-maker
applied for a patent on a tube with two lenses that made distant things
look near.[^lippershey] Galileo heard the description, worked out the
optics for himself — lenses were familiar ground; we bent light through
glass in [chapter 5](light-in-a-dark-room.md) — and ground better ones.
The design is a weak convex objective and a strong concave eyepiece, and
its magnifying power is the ratio of their focal lengths:

$$
M = \frac{f_{\text{objective}}}{f_{\text{eyepiece}}}.
$$

The Dutch tubes magnified three times. By January 1610 Galileo had an
instrument of about twenty. Then he did the one thing no one with a good
instrument had done before: he pointed it up.

What he saw in the first weeks would have been enough for one lifetime.
The Moon had mountains — he measured their heights from the lengths of
their shadows, geometry straight out of
[chapter 1](measuring-the-world-with-shadows.md). The Milky Way dissolved
into uncountable faint stars. And beside Jupiter, on the night of January
7, 1610, stood three small bright points in a straight line.

He took them for fixed stars. But the next night the three points had
moved — and moved the wrong way, all to one side of Jupiter, when
Jupiter's own drift against the stars should have carried it the other
way. Clouds intervened on the ninth. On the tenth, only two points, both
on the eastern side. On the thirteenth, four. Fixed stars do not do this.
Within a week Galileo drew the only conclusion the notebook allowed: the
points were not behind Jupiter but *around* it — four moons, circling the
planet as our Moon circles us.[^figures]

<figure>
<figcaption>Jupiter and its attendant points on four January nights in
1610, redrawn schematically after Galileo's notes in <em>Sidereus
Nuncius</em>. Spacings are illustrative; the configurations — which side,
how many — are his.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Four rows showing Jupiter as a circle with small dots of moons in changing positions on four nights">
  <text x="80" y="22" text-anchor="middle" font-size="13" fill="currentColor">East</text>
  <text x="320" y="22" text-anchor="middle" font-size="13" fill="currentColor">West</text>
  <text x="36" y="59" text-anchor="end" font-size="13" fill="currentColor">Jan 7</text>
  <circle cx="200" cy="55" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="150" cy="55" r="2.5" fill="currentColor"/>
  <circle cx="174" cy="55" r="2.5" fill="currentColor"/>
  <circle cx="238" cy="55" r="2.5" fill="currentColor"/>
  <text x="36" y="104" text-anchor="end" font-size="13" fill="currentColor">Jan 8</text>
  <circle cx="200" cy="100" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="226" cy="100" r="2.5" fill="currentColor"/>
  <circle cx="250" cy="100" r="2.5" fill="currentColor"/>
  <circle cx="276" cy="100" r="2.5" fill="currentColor"/>
  <text x="36" y="149" text-anchor="end" font-size="13" fill="currentColor">Jan 10</text>
  <circle cx="200" cy="145" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="158" cy="145" r="2.5" fill="currentColor"/>
  <circle cx="182" cy="145" r="2.5" fill="currentColor"/>
  <text x="36" y="194" text-anchor="end" font-size="13" fill="currentColor">Jan 13</text>
  <circle cx="200" cy="190" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="146" cy="190" r="2.5" fill="currentColor"/>
  <circle cx="172" cy="190" r="2.5" fill="currentColor"/>
  <circle cx="224" cy="190" r="2.5" fill="currentColor"/>
  <circle cx="252" cy="190" r="2.5" fill="currentColor"/>
</svg>
</figure>

> **Interactive (planned):** observe Jupiter night by night as Galileo
> did. The sim shows the telescope's field for any date in early 1610;
> you log the bright points beside Jupiter, night after night, and try to
> explain your own logbook. The moon positions will be computed from the
> real orbital elements of Io, Europa, Ganymede, and Callisto, and your
> log can be compared against Galileo's actual records from *Sidereus
> Nuncius*.

Why did this matter so much? Because the sharpest objection to Copernicus
had always been the Moon. If the Earth flies around the Sun, how does the
Moon keep up? Everything, said the critics, must orbit the one true
center. Jupiter answered them. Here were four bodies orbiting a center
that was itself plainly moving, and nothing got left behind. The Earth
could carry a moon because Jupiter carried four.

The moons made Copernicus *possible*. Venus made Ptolemy *impossible*.
In Ptolemy's system Venus rides an epicycle whose center is pinned to the
Earth–Sun line, always below the Sun. Pinned there, Venus always stands
roughly between us and the Sun, so we may only ever see its night side
and slivers of its day side: crescents, forever. But if Venus circles the
Sun, we should see the full lunar repertoire — crescent when it passes
near us, gibbous and nearly full when it rounds the far side. And the two
predictions differ in size as well as shape. Venus's distance from Earth
swings between $1 - 0.723 = 0.277$ astronomical units and
$1 + 0.723 = 1.723$, so the full Venus should look tiny and the crescent
Venus enormous. Through the winter of 1610–11 Galileo watched Venus run
exactly that sequence: gibbous and small, then swelling as it thinned to
a huge crescent. The illuminated fraction of the disk even
follows a clean rule of trigonometry — if $\alpha$ is the angle at Venus
between the Sun and the Earth, the lit fraction we see is

$$
k = \frac{1 + \cos\alpha}{2},
$$

which runs from $1$ (full, $\alpha = 0$) to $0$ (new, $\alpha = 180^\circ$).
Ptolemy's geometry caps $\alpha$ well away from zero: no full Venus,
ever. One winter of observations closed a fourteen-hundred-year-old
book.

> **Interactive (planned):** the phases of Venus as the Ptolemy-killer.
> Drag Venus around its orbit in a heliocentric model and around its
> epicycle in Ptolemy's; the telescope view shows the phase and apparent
> size each geometry predicts. One of them cannot make a full Venus. Then
> compare with Galileo's reported sequence of phases.

The telescope did not settle everything. It did not prove the Earth
moves, and careful opponents knew it.[^tycho] But after 1610 the sky was
no longer a closed text. Evidence could arrive. What astronomy needed
next was precision — and precision was sitting in Prague, in the ledgers
of a dead Danish nobleman, waiting for Kepler.

## A prediction you can make

If Venus circles the Sun at $0.723$ AU while we circle at $1$, its
apparent diameter should vary by the ratio of its extreme distances:

$$
\frac{\theta_{\text{near}}}{\theta_{\text{far}}}
= \frac{1 + 0.723}{1 - 0.723}
= \frac{1.723}{0.277} \approx 6.2.
$$

Check it with real numbers. Venus's diameter is $12{,}104$ km, and one AU
is $1.496 \times 10^8$ km. At $1.723$ AU the disk subtends about $9.7$
seconds of arc; at $0.277$ AU, about $60$ — a factor of $6.2$, in a
crescent phase, just as the heliocentric geometry demands.[^eccentric]
Any planetarium app, or a small telescope pointed at Venus a few months
apart, will show you the swing. Ptolemy's Venus, riding an epicycle much
smaller than its distance from Earth, could never change size that much.

[^lippershey]: Hans Lippershey of Middelburg, October 1608. Galileo did
  not invent the telescope, and never claimed to; his contribution was to
  improve it beyond anyone else's and to aim it at questions. The patent,
  incidentally, was denied — too many other Dutchmen had one already.

[^figures]: The figure is schematic: the sides and counts on each night
  follow Galileo's published records, but the spacings here are drawn for
  clarity, not digitized from his diagrams. The real chapter's interactive
  will use his actual logs and computed moon positions.

[^tycho]: An honest bend to flag: the phases of Venus rule out Ptolemy,
  but not Tycho Brahe's compromise system, in which the planets orbit the
  Sun while the Sun orbits a stationary Earth. That model predicts the
  same phases and survived Galileo's telescope. What finally buried it
  was not one observation but the physics of the next few chapters.

[^eccentric]: The arithmetic assumes circular orbits. The real orbits are
  slightly eccentric, so the observed extremes stretch a bit further —
  Venus can reach about $66''$ near inferior conjunction. The prediction
  is good to a few percent, which is more than enough to kill an epicycle.
