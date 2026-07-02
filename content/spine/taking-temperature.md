---
title: Taking Temperature (draft)
chapter: 21
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By the late 1600s natural philosophy could
[time a swing to a fraction of a second](huygens.md) and fix a planet's
position to [two minutes of arc](tychos-data-keplers-laws.md). It could
not say how hot anything was. Hot and cold were qualities, like bitter
and sweet. Physicians ranked drugs by "degrees of heat," meaning how they
felt on the tongue. A smith judged his iron by its color, a brewer her
wort by her elbow. There was no number.

The first instruments only sharpened the embarrassment. Galileo's circle
in Padua built thermoscopes around 1600: a glass bulb of air over a
column of water, the air swelling when warmed and pushing the water down.
It showed *change*, vividly — and also responded to the weather, because
an open column feels the atmosphere's push as much as the bulb's heat.
Sealed liquid thermometers fixed that, and Fahrenheit's mercury (1714)
and Celsius's centigrade scale (1742) fixed the arbitrariness of the
markings: pin the scale to two reproducible events, melting ice and
boiling water, and divide the interval evenly.

Divide *what* evenly? There is the trap. A mercury thermometer defines
one degree as one-hundredth of mercury's expansion between ice and steam.
An alcohol thermometer defines it by alcohol's expansion. Calibrate both
at the fixed points and they agree there by construction — and disagree
in between, because the two liquids do not expand in proportion to each
other.[^fluids] Which one is *right*? The question had no answer, because
temperature had no meaning apart from the instrument that measured it.
Each fluid told its own private truth. Thermometry needed a substance
with no personality.

It found one, slowly, in air. Robert Boyle had shown in 1662, with a
J-shaped tube and a column of mercury, that squeezing a trapped parcel of
air at a fixed temperature raises its pressure in exact inverse
proportion to its volume:

$$
PV = \text{const} \qquad (T \text{ fixed}).
$$

Double the pressure, halve the volume — a law simple enough to memorize
and, more importantly, indifferent to which gas you trap. Forty years
later Guillaume Amontons found the other half: heat a gas at fixed volume
and its pressure climbs steadily, the same march for every sample of air
he tried. He noticed where the march was headed, too — some extreme cold
at which the pressure would give out entirely — and then the observation
sat, mostly ignored, for a century.[^history]

Gay-Lussac closed the case in 1802. He took air, oxygen, nitrogen,
hydrogen, and carbon dioxide — gases as chemically unlike as he could
find — and measured their expansion from ice to steam. Every one of them
expanded by the same fraction of its volume per degree. Liquids each have
a private coefficient; gases, near enough, share one. Writing $t$ for the
Celsius temperature and $V_0$ for the volume at $0^\circ$,

$$
V = V_0\,(1 + \alpha t),
$$

with one $\alpha$ for all of them. Gay-Lussac measured
$\alpha \approx 1/267$ per degree; the modern value is $1/273.15$.[^alpha]
This is the miracle the chapter turns on. A thermometer built on any one
substance inherits that substance's quirks. A law obeyed by *every* gas
is not a quirk. The gas thermometer was the first thermometer with a
claim to be measuring something in the world rather than in the glass.

And the law contains a dare. A straight line, followed leftward, hits
zero.

<figure>
<figcaption>Gas volume against temperature. Between the fixed points
every gas traces the same straight line; extended, the line reaches zero
volume near −273 °C. No gas keeps the appointment — all liquefy first —
but every gas's line points at the same spot.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A graph of gas volume versus temperature: a straight line measured between 0 and 100 degrees Celsius, extrapolated as a dashed line down to zero volume at minus 273 degrees">
  <line x1="30" y1="190" x2="385" y2="190" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
  <line x1="52.5" y1="190" x2="52.5" y2="195" stroke="currentColor" stroke-width="0.75"/>
  <line x1="280" y1="190" x2="280" y2="195" stroke="currentColor" stroke-width="0.75"/>
  <line x1="363.3" y1="190" x2="363.3" y2="195" stroke="currentColor" stroke-width="0.75"/>
  <text x="52.5" y="209" text-anchor="middle" font-size="13" fill="currentColor">&#8722;273&#176;</text>
  <text x="280" y="209" text-anchor="middle" font-size="13" fill="currentColor">0&#176;</text>
  <text x="363.3" y="209" text-anchor="middle" font-size="13" fill="currentColor">100&#176;</text>
  <line x1="52.5" y1="190" x2="280" y2="74" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="280" y1="74" x2="363.3" y2="31.5" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="52.5" cy="190" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="322" y="38" text-anchor="end" font-size="13" fill="currentColor">measured</text>
  <text x="150" y="118" text-anchor="middle" font-size="13" fill="currentColor">extrapolated</text>
  <text x="385" y="176" text-anchor="end" font-size="13" fill="currentColor" font-style="italic">t</text>
</svg>
</figure>

Set $V = 0$ in the law and solve: $t = -1/\alpha$. With Gay-Lussac's own
coefficient that is about $-267^\circ$; with Regnault's careful 1847
remeasurement, $-273^\circ$. Cool a gas degree by degree and its volume ticks
down by equal steps toward a floor — a coldest cold, written into
measurements made between the comfortable temperatures of ice and steam.

> **Interactive (planned):** extrapolate to −273 yourself. The chapter
> will carry the historical gas-expansion measurements — Gay-Lussac's
> 1802 runs and Regnault's 1847 refinements, digitized with provenance
> documented in `/data/` — plotted as points. The reader fits a straight
> line by hand, slides it, reads off the intercept, and sees how far the
> data must be trusted beyond its range. The dataset will be real; this
> draft fakes nothing in its place.

Honesty about the dare: no gas reaches the floor. Air liquefies near
$-190\,^\circ\mathrm{C}$, and the straight line abandons its subject well
before the destination. The extrapolation describes an *idealized* gas —
the common behavior all real gases approach when dilute. But that is
exactly why the intercept is believable: it does not belong to air or
hydrogen or carbon dioxide, since each departs from the line in its own
way at its own temperature, and yet every one of their lines aims at the
same point. A point that every substance agrees on belongs to the world.
So we shift the zero to where the world put it. Define $T = t + 273$;
then Boyle, Charles, and Gay-Lussac collapse into one statement for a
fixed parcel of gas:

$$
\frac{PV}{T} = \text{const}.
$$

What this $T$ *is* — why a gas should care about it, what is running out
as $T \to 0$ — thermometry cannot say. We have learned to measure
temperature without knowing what it measures. The answer is one chapter
away, and it is motion.

## A prediction you can make

Blow up a balloon to $3.0$ liters in a room at $22\,^\circ\mathrm{C}$, tie it
off, and put it in a freezer at $-18\,^\circ\mathrm{C}$. The pressure inside
stays near atmospheric (the rubber's squeeze is small), so volume tracks
absolute temperature: $T_1 = 295\,\mathrm{K}$, $T_2 = 255\,\mathrm{K}$,
and

$$
V_2 = V_1 \times \frac{T_2}{T_1} = 3.0 \times \frac{255}{295} \approx 2.6 \text{ L}
$$

— a shrinkage of about 14 percent, easily visible against a felt-pen
outline traced before the freezer. Notice what you may not do: compute
$-18/22$ and predict the balloon collapses to nothing. Ratios of
temperature only mean something on the scale whose zero the gases chose.

[^fluids]: The disagreement is real and was measured with care in the
  eighteenth century: alcohol's expansion accelerates with warmth much
  more than mercury's, so a spirit thermometer calibrated at the fixed
  points lags a mercury one through the middle of the scale. This draft
  keeps the size of the gap qualitative; the real chapter will cite the
  historical comparisons.

[^history]: The narrative here is straightened. Amontons published his
  pressure observations and the hint of an extreme cold in 1702–03;
  Jacques Charles found the equal-expansion law around 1787 and never
  published it; Gay-Lussac published in 1802 and credited Charles, while
  Dalton found much the same independently a year earlier. The tidy
  Boyle–Charles–Gay-Lussac relay is textbook convention, and we confess
  it.

[^alpha]: Gay-Lussac reported an expansion of $1/266.66$ of the $0^\circ$
  volume per degree; Victor Regnault's 1847 measurements gave very nearly
  $1/273$, and the accepted modern coefficient is $1/273.15$. These are
  the historical published values, not draft inventions.
