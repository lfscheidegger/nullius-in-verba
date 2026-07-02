---
title: The Weak Force (draft)
chapter: 48
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1914 the nucleus had a scandal. A radioactive atom that throws off a
beta electron ought, by [the bookkeeping of energy](conservation-and-symmetry.md),
to hand every electron the same sharp energy: the decay looks like a
two-body split, and two-body splits are rigid. James Chadwick measured the
electrons instead of assuming them. Their energies formed a smear — a
continuous band from nearly zero up to a fixed ceiling. Most electrons came
out short. The missing energy went nowhere anyone could find. Niels Bohr,
cornered, offered to let energy conservation fail inside the nucleus. That a
man of his standing would say so is the measure of the crisis.

<figure>
<figcaption>Beta decay's smear. A two-body split would give every electron
the same energy — a single spike at the endpoint (the accent line).
Chadwick found a continuous band instead: most electrons come out short,
their missing energy carried off, invisibly, by a third particle nobody had
yet seen.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A continuous beta spectrum curve rising to a peak and falling to an endpoint, with a single accent line marking where a two-body decay would place every electron">
  <line x1="45" y1="185" x2="380" y2="185" stroke="currentColor" stroke-width="0.75"/>
  <line x1="45" y1="185" x2="45" y2="25" stroke="currentColor" stroke-width="0.75"/>
  <path d="M 45 185 C 70 120, 95 78, 140 74 C 210 68, 285 150, 330 185" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <line x1="330" y1="185" x2="330" y2="58" stroke="var(--accent)" stroke-width="2"/>
  <polygon points="326,66 334,66 330,52" fill="var(--accent)"/>
  <text x="150" y="52" font-size="13" fill="currentColor">the measured smear</text>
  <text x="325" y="46" text-anchor="end" font-size="13" fill="currentColor">a two-body spike</text>
  <text x="212" y="208" text-anchor="middle" font-size="13" fill="currentColor">electron energy</text>
  <text transform="rotate(-90 20 105)" x="20" y="105" text-anchor="middle" font-size="13" fill="currentColor">number of electrons</text>
</svg>
</figure>

Wolfgang Pauli refused. In December 1930 he wrote to a room full of
physicists he could not be bothered to attend[^letter] and proposed a way
out he himself called desperate: a new particle — neutral, light, riding out
of the [nucleus](the-nucleus.md) with the decay and stealing the missing
energy. It interacted so feebly that no instrument had ever noticed it.
Enrico Fermi built the guess into a full theory in 1933 and named the
particle the neutrino, the "little neutral one." In modern symbols the
neutron decays as

$$
n \rightarrow p + e^- + \bar{\nu}.
$$

Three bodies share the released energy, so the electron's portion is free to
vary. The spectrum is a smear because it must be. The books balanced again —
if the neutrino was real.

Pauli had bet a case of champagne that no one would ever catch it. The odds
were his: a neutrino's chance of striking matter is so small that one could
cross light-years of lead untouched. Catching it took a flood, not a better
trap. In 1956 Frederick Reines and Clyde Cowan parked a detector beside a
nuclear reactor at Savannah River, where fission drenched them in some
$10^{13}$ antineutrinos per square centimeter each second, and watched for
the inverse reaction

$$
\bar{\nu} + p \rightarrow n + e^+.
$$

The positron annihilates in a flash of two gamma rays; microseconds later
the neutron is swallowed by a cadmium nucleus and gives a second flash. That
delayed double-flash was a fingerprint nothing else could forge.[^savannah]
They found it, and wired Pauli that the neutrino was real. He paid the
champagne.

The neutrino kept one more secret, and it broke a law nobody had thought to
doubt. Physics was believed to be ambidextrous: run any process in a mirror
and you get another allowed process. This is conservation of parity, and it
held for gravity, for electricity, for [light](qed-and-the-taming-of-infinity.md).
In 1956 Tsung-Dao Lee and Chen-Ning Yang noticed that no one had ever
actually tested it for the weak force. They asked Chien-Shiung Wu to try.

Wu took cobalt-60, a nucleus that beta-decays, and lined up its spins. She
cooled a sample to hundredths of a degree above absolute zero[^wu] and held
it in a magnetic field so that every nuclear spin pointed the same way. Then
she counted the emerging electrons. Were as many going along the spin as
against it? If the world were mirror-symmetric they would match exactly,
because reflecting the apparatus swaps the two counts. They did not match.
The electrons came out preferentially opposite the nuclear spin, and by a
wide margin.

<figure>
<figcaption>The Wu result, sketched from cobalt-60. With the nuclear spins
aligned upward along the axis J, more electrons leave downward — against the
spin — than along it. Reflect the picture in a mirror and the asymmetry
reverses; nature keeps only one version, so the mirror symmetry is
broken.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A nucleus with its spin axis pointing up, emitting more electron tracks downward against the spin than upward along it">
  <line x1="200" y1="40" x2="200" y2="200" stroke="currentColor" stroke-width="0.75" opacity="0.3" stroke-dasharray="3 4"/>
  <path d="M 130 120 A 70 70 0 0 0 270 120 Z" fill="currentColor" opacity="0.08"/>
  <line x1="200" y1="120" x2="200" y2="55" stroke="currentColor" stroke-width="1.5"/>
  <polygon points="196,63 204,63 200,50" fill="currentColor"/>
  <text x="200" y="42" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">J</text>
  <circle cx="200" cy="120" r="8" fill="currentColor"/>
  <text x="214" y="118" font-size="13" fill="currentColor">cobalt-60</text>
  <line x1="200" y1="120" x2="168" y2="182" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="168" cy="182" r="2.5" fill="currentColor"/>
  <line x1="200" y1="120" x2="200" y2="188" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="200" cy="188" r="2.5" fill="currentColor"/>
  <line x1="200" y1="120" x2="232" y2="182" stroke="currentColor" stroke-width="1.4"/>
  <circle cx="232" cy="182" r="2.5" fill="currentColor"/>
  <line x1="200" y1="120" x2="236" y2="62" stroke="currentColor" stroke-width="1" opacity="0.4"/>
  <circle cx="236" cy="62" r="2.5" fill="currentColor" opacity="0.4"/>
  <text x="200" y="210" text-anchor="middle" font-size="13" fill="currentColor">more electrons, against the spin</text>
  <text x="248" y="58" font-size="13" fill="currentColor" opacity="0.6">fewer</text>
</svg>
</figure>

Write the electron intensity as

$$
W(\theta) = 1 + \alpha\,\frac{v}{c}\cos\theta,
$$

where $\theta$ is the angle between the nuclear spin and the electron's
flight, $v/c$ its speed, and $\alpha$ the asymmetry. A mirror flips momentum
but not spin, sending $\theta \to \pi - \theta$ and $\cos\theta \to
-\cos\theta$. The only way $W$ can survive reflection unchanged is
$\alpha = 0$. Wu measured $\alpha$ large and negative. Parity was not gently
bent; for the weak force it is maximally broken.

The deeper statement is about handedness. Every neutrino ever measured spins
left-handed — its spin points backward along its motion — and every
antineutrino spins right-handed. The weak force reaches only for
left-handed matter. In this one interaction the universe is not
ambidextrous. It has a preferred hand, and the hand is left.

> **Interactive (planned):** replot Wu's actual 1957 counting runs — the
> gamma-ray anisotropy that gauged the polarization, and the beta asymmetry
> that faded as the warming sample lost its alignment. The reader scrubs the
> warm-up and watches the up/down electron counts converge, seeing the
> effect switch off exactly as the spins randomize. The dataset will be the
> published figures; this draft invents no numbers in their place.

## A prediction you can make

How elusive is the neutrino, in a number? Send a reactor antineutrino into
water. Its chance of interacting per centimeter travelled is $n\sigma$, where
$n$ counts target protons per cubic centimeter and $\sigma \approx
10^{-43}\ \text{cm}^2$ is the cross-section.[^sigma] The mean free path is the
reciprocal,

$$
\lambda = \frac{1}{n\,\sigma}.
$$

Water holds about $3.3\times 10^{22}$ molecules per cubic centimeter, hence
$n = 6.7\times 10^{22}$ free protons — two hydrogens each. Then

$$
\lambda = \frac{1}{(6.7\times 10^{22})(10^{-43})} \approx 1.5\times 10^{20}\ \text{cm}.
$$

Divide by the $9.5\times 10^{17}$ cm in a light-year: about **160 light-years
of water**. Reines and Cowan beat those odds not with a better neutrino but
with more of them — a reactor's flood, and a detector patient enough to
catch the one in a mountain's worth that stopped.

[^letter]: Pauli's letter is dated 4 December 1930, addressed to the
  "Radioactive Ladies and Gentlemen" of a conference in Tübingen that he
  skipped for a ball in Zürich. He called his particle a "neutron"; when
  Chadwick found the real, heavy neutral neutron in 1932, Fermi renamed
  Pauli's light one the neutrino to end the confusion.

[^savannah]: The tidy story straightens real history a little. An earlier
  1953 run at the Hanford reactor gave a hint too tangled by background to
  trust; the convincing detection came in 1956 at Savannah River, whose
  shielding and delayed-coincidence logic finally silenced the noise. The
  double-flash signature and the telegram to Pauli are both real.

[^wu]: The experiment ran at the U.S. National Bureau of Standards over the
  winter of 1956–57. Wu polarized the cobalt-60 by adiabatic demagnetization
  to a few hundredths of a kelvin and read the spin alignment from the
  gamma-ray anisotropy. The asymmetry decayed as the crystal warmed and the
  spins randomized — the control that proved the effect was physics, not
  apparatus.

[^sigma]: The inverse-beta cross-section grows with neutrino energy; for the
  few-MeV antineutrinos a reactor makes it is of order $10^{-43}\ \text{cm}^2$,
  so the light-year figure is an order-of-magnitude estimate, not a precise
  one. It lands in the right, staggering, ballpark — which is the whole
  point.
