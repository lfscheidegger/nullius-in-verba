---
title: Saving the Appearances (draft)
chapter: 4
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

Watch Mars for a year and you will catch it misbehaving. Night after
night it drifts eastward against the fixed stars, keeping rough pace
with the zodiac. Then it slows. It stops. For about ten weeks it runs
*backward*, westward against the stars, before pausing again and
resuming its eastward march. Astronomers call this retrograde motion;
by the second century CE it had been a scandal for five hundred years.

Greek astronomy brought two commitments to the scandal. The first was
geometrical: the heavens should move in circles, traversed at uniform
speed. Tradition says Plato posed it as a challenge — find the uniform
circular motions that reproduce, that *save*, the appearances.[^phrase]
The second was physical: the Earth stands still. This was not
stubbornness. The same civilization that had
[measured the world with a stick and a shadow](measuring-the-world-with-shadows.md)
reasoned carefully here too. If the Earth sailed around some great
orbit, the nearer stars should shift against the farther ones over the
year; no one had ever seen them shift. A stone dropped from a tower
lands at its foot, not behind it. On the evidence available, a moving
Earth was the extravagant hypothesis.

Hold both commitments and the problem becomes sharp. A planet on a
single circle around a stationary Earth moves one way around the sky,
always. It cannot stop, and it cannot back up. Mars does both, on
schedule.

The way out is two circles. Let a point — not the planet, just a point
— ride a large circle, the deferent, around the Earth. Then let the
planet ride a small circle around the moving point: the epicycle. Both
motions are uniform. Neither ever reverses. But their
sum does.

<figure>
<figcaption>The machine: a point rides the deferent around the Earth
while the planet rides the epicycle around the point. Two uniform
circular motions, one wandering planet.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A large deferent circle centered on the Earth, carrying a smaller epicycle circle on which the planet rides">
  <circle cx="170" cy="120" r="85" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="235.1" cy="65.4" r="36" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="170" y1="120" x2="235.1" y2="65.4" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.6"/>
  <line x1="235.1" y1="65.4" x2="268.9" y2="53.1" stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <circle cx="170" cy="120" r="3.5" fill="currentColor"/>
  <circle cx="235.1" cy="65.4" r="2.5" fill="currentColor"/>
  <circle cx="268.9" cy="53.1" r="3.5" fill="var(--accent)"/>
  <text x="170" y="140" text-anchor="middle" font-size="13" fill="currentColor">Earth</text>
  <text x="103" y="190" text-anchor="middle" font-size="13" fill="currentColor">deferent</text>
  <text x="235" y="116" text-anchor="middle" font-size="13" fill="currentColor">epicycle</text>
  <text x="278" y="48" font-size="13" fill="currentColor">planet</text>
</svg>
</figure>

The machine yields to trigonometry. Put the Earth at the origin. Let
the deferent have radius $R$ and period $T_d$, and the epicycle radius
$r$ and period $T_e$. After a time $t$ the planet sits at

$$
x = R\cos\frac{2\pi t}{T_d} + r\cos\frac{2\pi t}{T_e},
\qquad
y = R\sin\frac{2\pi t}{T_d} + r\sin\frac{2\pi t}{T_e}.
$$

The planet circles the epicycle at speed $2\pi r / T_e$; the epicycle's
center circles the Earth at speed $2\pi R / T_d$. When the planet
rounds the inside of its epicycle — the point nearest the Earth — its
epicyclic motion opposes the deferent's. If it is faster there, that
is, if $r\,T_d > R\,T_e$, the sum reverses: from the Earth the planet
seems to stop and slide backward until the epicycle carries it around
again.

<figure>
<figcaption>The path the two circles trace, seen from the Earth.
Drawn for an epicycle that turns three times per deferent revolution,
with an oversized radius, so the loops are visible; Mars's real loops
are smaller and rarer. The geometry of the curve is exact.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A looping curve traced around a central Earth by a planet on an epicycle, with two retrograde loops pointing inward">
  <path d="M 295.0 110.0 L 294.7 116.8 L 293.7 123.4 L 292.2 130.0 L 290.0 136.3 L 287.3 142.3 L 284.0 148.0 L 280.3 153.3 L 276.1 158.2 L 271.5 162.6 L 266.7 166.4 L 261.6 169.8 L 256.3 172.5 L 250.9 174.7 L 245.5 176.3 L 240.1 177.3 L 234.8 177.8 L 229.7 177.7 L 224.7 177.2 L 220.1 176.2 L 215.8 174.8 L 211.9 173.0 L 208.3 171.0 L 205.2 168.7 L 202.5 166.3 L 200.3 163.7 L 198.5 161.1 L 197.2 158.6 L 196.3 156.1 L 195.7 153.7 L 195.6 151.6 L 195.8 149.7 L 196.3 148.0 L 197.0 146.7 L 197.9 145.8 L 198.9 145.2 L 200.0 145.0 L 201.1 145.2 L 202.1 145.8 L 203.0 146.7 L 203.7 148.0 L 204.2 149.7 L 204.4 151.6 L 204.3 153.7 L 203.7 156.1 L 202.8 158.6 L 201.5 161.1 L 199.7 163.7 L 197.5 166.3 L 194.8 168.7 L 191.7 171.0 L 188.1 173.0 L 184.2 174.8 L 179.9 176.2 L 175.3 177.2 L 170.3 177.7 L 165.2 177.8 L 159.9 177.3 L 154.5 176.3 L 149.1 174.7 L 143.7 172.5 L 138.4 169.8 L 133.3 166.4 L 128.5 162.6 L 123.9 158.2 L 119.7 153.3 L 116.0 148.0 L 112.7 142.3 L 110.0 136.3 L 107.8 130.0 L 106.3 123.4 L 105.3 116.8 L 105.0 110.0 L 105.3 103.2 L 106.3 96.6 L 107.8 90.0 L 110.0 83.7 L 112.7 77.7 L 116.0 72.0 L 119.7 66.7 L 123.9 61.8 L 128.5 57.4 L 133.3 53.6 L 138.4 50.2 L 143.7 47.5 L 149.1 45.3 L 154.5 43.7 L 159.9 42.7 L 165.2 42.2 L 170.3 42.3 L 175.3 42.8 L 179.9 43.8 L 184.2 45.2 L 188.1 47.0 L 191.7 49.0 L 194.8 51.3 L 197.5 53.7 L 199.7 56.3 L 201.5 58.9 L 202.8 61.4 L 203.7 63.9 L 204.3 66.3 L 204.4 68.4 L 204.2 70.3 L 203.7 72.0 L 203.0 73.3 L 202.1 74.2 L 201.1 74.8 L 200.0 75.0 L 198.9 74.8 L 197.9 74.2 L 197.0 73.3 L 196.3 72.0 L 195.8 70.3 L 195.6 68.4 L 195.7 66.3 L 196.3 63.9 L 197.2 61.4 L 198.5 58.9 L 200.3 56.3 L 202.5 53.7 L 205.2 51.3 L 208.3 49.0 L 211.9 47.0 L 215.8 45.2 L 220.1 43.8 L 224.7 42.8 L 229.7 42.3 L 234.8 42.2 L 240.1 42.7 L 245.5 43.7 L 250.9 45.3 L 256.3 47.5 L 261.6 50.2 L 266.7 53.6 L 271.5 57.4 L 276.1 61.8 L 280.3 66.7 L 284.0 72.0 L 287.3 77.7 L 290.0 83.7 L 292.2 90.0 L 293.7 96.6 L 294.7 103.2 L 295.0 110.0 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="200" cy="110" r="3.5" fill="currentColor"/>
  <text x="200" y="130" text-anchor="middle" font-size="13" fill="currentColor">Earth</text>
</svg>
</figure>

Ptolemy, in Alexandria around 150 CE, turned the idea into an
instrument. For Mars he set the deferent's period to 687 days
— the average time Mars takes to lap the zodiac — and locked the
epicycle to the Sun: the arm from the epicycle's center to the planet
always points parallel to the direction from the Earth to the Sun, so
the epicycle completes a turn once per 780 days.[^simplified] With the
radii tuned to observation, the machine predicted where Mars would
stand, decades ahead, to within the errors of naked-eye astronomy. It
did the same for the other planets, for fourteen centuries. This is
why geocentrism deserves to be called good science.
It was quantitative. It made risky predictions. It was checked against
the sky and corrected when it missed. It was wrong, but it was not
sloppy — and telling those apart is most of the work of this book.

There is a confession hiding in its success. Circles riding circles
can imitate *any* repeating motion. If two wheels leave a residual
error, a third wheel absorbs it; a fourth polishes what the third
missed. Eighteen centuries later mathematicians proved the intuition
and named the method; we will meet it again in heat, in sound, in
light, in the quantum. Ptolemy built the first machine for decomposing
a motion into rotations — the wrong cosmology, the right
mathematics. A scheme that can fit anything is hard to refute by fit
alone; beating it will take a different kind of argument, two chapters
from now.

> **Interactive (planned):** build your own epicycle machine. Start
> with one wheel around the Earth; set its radius and period. Add an
> epicycle, then another, and tune the machine until it tracks real
> recorded positions of Mars — the finished chapter will use a
> geocentric ephemeris dataset with documented provenance. Watch the
> loops appear as your fit improves. You
> will be doing Fourier analysis without the name; the book cashes
> this in repeatedly later.

## A prediction you can make

In Ptolemy's machine, Mars runs backward only near the inside of its
epicycle — and because the epicycle is locked to the Sun, that happens
exactly when Mars stands opposite the Sun. So retrogrades recur each
time the Sun laps Mars around the zodiac. The Sun circles
the zodiac in $365.25$ days, Mars in $687$; each day the Sun gains
$\frac{360°}{365.25} - \frac{360°}{687}$ of angle on Mars, and a full
lap is $360°$. The interval $S$ between retrogrades therefore obeys

$$
\frac{1}{S} = \frac{1}{365.25\ \text{days}} - \frac{1}{687\ \text{days}},
\qquad
S \approx 780\ \text{days},
$$

about two years and seven weeks. Check it against the modern record.
Mars stood at opposition on 2003 August 28 and again on 2025 January
16, with nine oppositions in between — ten intervals spanning
$7{,}812$ days. That is $781$ days per retrograde, within a quarter of
a percent of the prediction.[^variance] Two numbers read off the sky,
one subtraction, and you know when Mars will next turn around.

[^phrase]: The slogan "saving the appearances" reaches us secondhand:
  Simplicius, writing some nine centuries after Plato, attributes the
  challenge to him. The program is real; the tidy origin story is
  probably a later gloss — as, in places, is this chapter's.

[^simplified]: A simplification, confessed: Ptolemy's full Mars model
  also shifts the deferent's center off the Earth and makes the motion
  uniform about a third point, the *equant*; without these the errors
  reach several degrees. The legend of medieval astronomers piling
  epicycle upon epicycle is mostly myth — the Almagest's devices
  served, essentially unmodified, for fourteen centuries.

[^variance]: Individual intervals range from about 764 to 811 days:
  neither the Sun's nor Mars's zodiacal motion is truly uniform — the
  defect the equant papered over, and the thread Kepler will finally
  pull. The uniform circles predict the *mean*, and the mean is what
  checks out.
