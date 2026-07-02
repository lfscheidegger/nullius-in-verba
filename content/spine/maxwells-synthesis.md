---
title: Maxwell's Synthesis (draft)
chapter: 26
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

By 1860 [electricity and magnetism had met](electricity-and-magnetism-meet.md),
but they had not married. The laboratories owned a heap of laws, each
excellent and none acquainted with the others: Coulomb's for the force
between charges, Ampère's for the magnetism of currents, Faraday's for the
currents made by moving magnets. Faraday himself, no mathematician, saw all
of it as *lines of force* — invisible tendrils filling the space around every
magnet and every wire. Most theorists took the lines for a crutch. James
Clerk Maxwell took them literally and asked what mathematics they obeyed.

The mathematics is vector calculus, and this book has not taught it yet, so
we will take only what this chapter needs. A field assigns an arrow — a
strength and a direction — to every point in space. About any such field you
can ask two local questions. How strongly do its lines *spring from* this
point, the way water springs from a source? Call that the divergence,
written $\nabla \cdot$. And how strongly do they *swirl around* this point,
the way water swirls at a drain? Call that the curl, written
$\nabla \times$. Read the symbols as those two questions and nothing more;
the honest machinery comes later, on its own pages.

In this language, everything the previous chapter assembled becomes four
statements about the electric field $\vec{E}$ and the magnetic field
$\vec{B}$. Electric field lines spring from charges; magnetic field lines
spring from nothing — they only close on themselves:

$$
\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0},
\qquad
\nabla \cdot \vec{B} = 0.
$$

A changing magnetic field makes the electric field swirl — that is Faraday's
induction — and an electric current makes the magnetic field swirl, which is
Ampère's law:

$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t},
\qquad
\nabla \times \vec{B} = \mu_0 \vec{J},
$$

where $\rho$ is charge density, $\vec{J}$ is current density, and
$\varepsilon_0$ and $\mu_0$ are constants measured on laboratory benches
with pith balls, coils, and galvanometers.

Written down together, the four laws contradict one another. A swirl has no
sources — that is a theorem, not physics — so taking the divergence of
Ampère's law forces $\nabla \cdot \vec{J} = 0$: current may never pile up
anywhere. But current piles up constantly. Charge a capacitor: current
flows along the wire, charge accumulates on the plates, and no current at
all crosses the gap. Draw a loop around the wire and ask Ampère's law for
the magnetic field there. The answer depends on which surface you hang on
the loop — a flat disk the wire pierces, or a balloon that slips between
the plates and meets no current anywhere. Two surfaces, one loop, two
answers. A law that cannot make up its mind is not a law.

<figure>
<figcaption>Ampère's law against itself. The same loop bounds surface A,
which the current pierces, and surface B, which bulges through the
capacitor gap and meets no current at all. The law gives a different
answer for each. What surface B does meet is the growing electric field
between the plates — and that is what Maxwell counted.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="A wire feeding a capacitor, with a loop around the wire and two surfaces bounded by it: a flat disk pierced by the wire and a dashed balloon passing between the capacitor plates">
  <line x1="20" y1="110" x2="172" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <line x1="228" y1="110" x2="380" y2="110" stroke="currentColor" stroke-width="1.5"/>
  <line x1="172" y1="82" x2="172" y2="138" stroke="currentColor" stroke-width="3"/>
  <line x1="228" y1="82" x2="228" y2="138" stroke="currentColor" stroke-width="3"/>
  <path d="M 52 106 L 60 110 L 52 114" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="60" y="98" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">I</text>
  <path d="M 312 106 L 320 110 L 312 114" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="320" y="98" text-anchor="middle" font-size="13" fill="currentColor" font-style="italic">I</text>
  <ellipse cx="120" cy="110" rx="9" ry="26" fill="currentColor" opacity="0.12"/>
  <ellipse cx="120" cy="110" rx="9" ry="26" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="120" y="70" text-anchor="middle" font-size="13" fill="currentColor">loop</text>
  <text x="102" y="152" text-anchor="middle" font-size="13" fill="currentColor">A</text>
  <path d="M 120 84 C 170 70, 200 70, 200 110 C 200 150, 170 150, 120 136" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="210" y="114" text-anchor="start" font-size="13" fill="currentColor">B</text>
</svg>
</figure>

Maxwell repaired the law by adding one term.[^history] Between the plates
there is no current, but there is a growing electric field, and he decreed
that a changing electric field makes magnetism exactly as a current does:

$$
\nabla \times \vec{B} = \mu_0 \vec{J}
+ \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}.
$$

He called the new term the *displacement current*. With it, the two
surfaces agree, charge is conserved, and the four equations close into a
system. Notice the symmetry the repair created: a changing $\vec{B}$ makes
$\vec{E}$ swirl, and now a changing $\vec{E}$ makes $\vec{B}$ swirl.

> **Interactive (planned):** charge a capacitor and probe the magnetic
> field with a movable loop. Hang either surface on the loop and watch
> Ampère's original law give two answers — then switch on the displacement
> term and watch them agree.

That symmetry is loaded. In empty space — no charges, no currents — the two
curl equations feed each other: a changing electric field begets a swirling
magnetic field, whose change begets a swirling electric field, and the
disturbance chases itself outward. Chase the algebra and each field
component obeys

$$
\frac{\partial^2 E}{\partial x^2}
= \mu_0 \varepsilon_0 \frac{\partial^2 E}{\partial t^2},
$$

which is the same equation, to the letter, that governed a pressure pulse
in [a column of air](sound.md) — a wave equation, with speed
$v = 1/\sqrt{\mu_0 \varepsilon_0}$. Maxwell put in the two bench-top
constants and got about $3.1 \times 10^8$ m/s.[^wk] The reader has
[chased that number across chapters](chasing-the-speed-of-light.md): it is
the speed of light. Maxwell wrote that he could scarcely avoid the
inference that light consists in the transverse undulations of the same
medium that carries electric and magnetic actions. Two sciences collapsed
into one. Light — the subject since a
[dark room in Cairo](light-in-a-dark-room.md), the puzzle
[fought over as particle against wave](what-is-light-round-one.md) — is an
electromagnetic wave. The waves even come out transverse automatically,
which is exactly what polarization had demanded and no mechanical ether
had gracefully supplied.

And the equations set no scale. Nothing in them prefers one frequency;
visible light occupies less than one octave of an unbounded keyboard.
There should exist electromagnetic waves of every wavelength, made
whenever charge is shaken. Producing and catching them is a later
chapter's story. Predicting them took four equations and one repaired term.

> **Interactive (planned):** shake a charge and watch the kink in its
> field lines propagate outward. Measure the kink's speed against the
> sim's ruler and clock, and change the shaking frequency to see the
> wavelength change while the speed refuses to.

## A prediction you can make

Take the two constants of the electric workbench:
$\mu_0 \approx 1.257 \times 10^{-6}$ in SI units, from the force between
current-carrying wires, and $\varepsilon_0 \approx 8.854 \times 10^{-12}$,
from the force between static charges. Neither involves light. Then

$$
c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}
= \frac{1}{\sqrt{(1.257 \times 10^{-6}) \times (8.854 \times 10^{-12})}}
\approx 3.00 \times 10^8 \ \text{m/s},
$$

against Foucault's 1862 measurement of $2.98 \times 10^8$ m/s.[^si] And
once light is a wave with this speed, wavelengths follow from frequencies:
an FM station near 100 MHz broadcasts waves
$3.00 \times 10^8 / 10^8 = 3.0$ m long. A quarter of that is 75 cm —
measure a car's whip antenna.

[^history]: The clean logic told here — spot the inconsistency, add the
  term that fixes it — is a modern tidying. Maxwell reached the
  displacement current in 1861–62 through an elaborate mechanical model of
  the ether, all spinning vortices and idle wheels, and only later
  (1865) let the equations stand without the scaffolding. His own
  formulation ran to twenty equations; the four compact vector equations
  are Oliver Heaviside's 1880s distillation, and the notation on this
  page is his and Gibbs's, not Maxwell's.

[^wk]: In 1856 Wilhelm Weber and Rudolf Kohlrausch measured the ratio of
  the electrostatic to the electromagnetic unit of charge by discharging a
  Leyden jar. As Maxwell used it, the ratio came to $3.107 \times 10^8$
  m/s; Fizeau's 1849 value for the speed of light was $3.15 \times 10^8$
  m/s. Maxwell did the comparison in 1861, by candlelight of a sort: he
  was at his family estate without the reference books and had to wait
  months to check the numbers in London.

[^si]: A confession about modern units: since 1983 the SI has *defined*
  the speed of light, and today's values of $\mu_0$ and $\varepsilon_0$
  are pinned to it, so redoing this calculation with textbook constants is
  quietly circular. In 1861 it was not. The two constants came from
  independent electrical measurements, the speed of light from astronomy
  and spinning mirrors, and their agreement was genuine, astonishing news.
