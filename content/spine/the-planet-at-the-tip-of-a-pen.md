---
title: The Planet at the Tip of a Pen (draft)
chapter: 14
---

> **Draft.** A placeholder facsimile, written to give the book its full shape. The real chapter — prose, data, and interactives — will be co-written and will replace this page.

In 1781 William Herschel, sweeping the sky with
[a telescope](galileos-telescope.md) of his own grinding, found a
"star" that moved. It was a planet — the first ever *discovered* — and
the solar system doubled in radius overnight. Uranus circles the Sun at
19.2 AU, once every 84 years. Better still, astronomers digging through
old catalogs found that others had seen it before and mistaken it for a
star: Flamsteed had catalogued it as the "star" 34 Tauri back in 1690.
So by the 1820s the
new planet came with more than a century of positions, and Alexis
Bouvard sat down to compute its orbit from
[Newton's law of gravitation](universal-gravitation.md).

He could not make it fit. The old observations and the new ones refused
to lie on one Keplerian [ellipse](../vocab/ellipse.md), even after
Bouvard charged Jupiter and Saturn for every tug they were owed. He
published tables based on the modern data alone, muttered in the preface
about the old observers, and hoped. Within a decade his tables were
failing too. By 1845 Uranus was adrift from prediction by about two
arcminutes — small to the eye, enormous to anyone who had absorbed
[the lesson of the eight arcminutes](tychos-data-keplers-laws.md). The
error bar is a promise. Something was pulling on Uranus.

Notice what the residuals *say*, not just that they exist. Before about
1822 Uranus ran ahead of its tables; afterward it lagged. An unseen
outer planet does exactly that. While it lies ahead of Uranus along the
orbit it drags Uranus forward; Uranus overtakes it — the inner planet
moves faster — and then the same pull holds Uranus back. The sign flip
in the residuals is the conjunction, timestamped. The misbehavior was
not noise. It was a message in Newton's own language.

<figure>
<figcaption>The geometry of the complaint. Near their 1821–22
conjunction, Neptune's pull (arrow) first drags Uranus forward along its
orbit, then — after faster-moving Uranus overtakes it — holds it back.
Orbits drawn to scale (19.2 and 30.1 AU) and nearly circular, as both
truly are.</figcaption>
<svg viewBox="0 0 400 220" role="img" aria-label="Two concentric near-circular orbits with the Sun at center; Uranus on the inner orbit, Neptune ahead of it on the outer orbit, and an arrow from Uranus toward Neptune showing the perturbing pull">
  <circle cx="200" cy="110" r="61" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="200" cy="110" r="95" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="200" cy="110" r="3.5" fill="var(--accent)"/>
  <text x="200" y="130" text-anchor="middle" font-size="13" fill="currentColor">Sun</text>
  <circle cx="261" cy="110" r="3" fill="currentColor"/>
  <text x="262" y="128" text-anchor="middle" font-size="13" fill="currentColor">Uranus</text>
  <circle cx="282.3" cy="62.5" r="3" fill="currentColor"/>
  <text x="316" y="52" text-anchor="middle" font-size="13" fill="currentColor">Neptune</text>
  <line x1="262.5" y1="106.6" x2="277" y2="74.3" stroke="currentColor" stroke-width="1"/>
  <path d="M 280.6 66.3 L 272.5 74.9 L 281.5 78.9 Z" fill="currentColor"/>
  <path d="M 254 51 A 80 80 0 0 1 268 61" fill="none" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
  <path d="M 268 61 L 260.5 59.5 L 265 52.5 Z" fill="currentColor" opacity="0.5"/>
</svg>
</figure>

Reading the message took a decade and one relentless man. Urbain Le
Verrier, at the Paris Observatory, inverted the problem. Ordinarily you
know the planets and compute the perturbations; he knew the
perturbations and computed the planet.[^adams] Assume an unseen body
beyond Uranus; write its pull as a small correction to Uranus's
Keplerian motion; grind through the perturbation series; and demand that
the unknown mass, distance, and position reproduce sixty-five years of
residuals at once. The perturbation is genuinely small —

$$
\frac{F_{\text{Neptune}}}{F_{\text{Sun}}}
= \frac{M_{\text{N}}}{M_{\odot}} \left(\frac{r}{d}\right)^{2}
\approx \frac{1}{19{,}400} \times \left(\frac{19.2}{10.9}\right)^{2}
\approx \frac{1}{6{,}300},
$$

even at closest approach — but a small tug applied for decades
accumulates in the orbital longitude, and longitude was exactly what
Tycho's heirs measured best. In August 1846 Le Verrier announced where
the culprit must stand. On 23 September his letter reached Johann Galle
in Berlin. Galle found the planet that same night, within one degree of
the computed place.[^onedegree] Nobody had ever seen Neptune knowingly;
a man at a desk had located it at the tip of a pen. Prediction — *look
there, tonight* — is the highest form of understanding, and this is its
cleanest specimen in the whole story of physics.

> **Interactive (planned):** be Le Verrier. The sim integrates Uranus's
> orbit and shows its longitude residuals against a two-planet solar
> system you control: drag the hidden perturber's mass, distance, and
> starting position, and watch the residual curve respond. The target
> curve will be computed from the real historical residuals of Bouvard's
> tables (provenance to be documented in `/data/`); this draft fakes no
> numbers in its place.

Now the rhyme, and the reason this chapter matters twice. The same man
turned the same method inward. Mercury's perihelion — the point of its
orbit nearest the Sun — slowly precesses, swinging around once every
quarter-million years or so. Newtonian tugs from Venus, Earth, Jupiter
and the rest account for almost all of it. In 1859 Le Verrier balanced
the books and found they did not close:

$$
\underbrace{574''}_{\text{observed}} \;-\;
\underbrace{531''}_{\text{planets, via Newton}} \;\approx\;
43'' \text{ per century.}
$$

Forty-three arcseconds per century.[^leverrier-number] Mercury makes 415
orbits in a century, so the unexplained advance is about $0.1''$ per
orbit — and Le Verrier resolved it anyway. He did what had just worked:
he predicted a planet. *Vulcan*, inside Mercury's orbit, hiding in the
Sun's glare. Astronomers hunted it at every eclipse for half a
century.[^vulcan] It is not there. The method was right both times; the
inference was right once. Uranus's residuals were a fact about matter.
Mercury's are a fact about gravity itself, and the check Le Verrier
wrote in 1859 will not be cashed until the General Relativity chapter —
by a theory that predicts $43''$ with nothing left over.

## A prediction you can make

Le Verrier fixed Neptune's place; Kepler's third law then hands you its
calendar. With $a = 30.07$ AU,

$$
T = \sqrt{a^{3}} = \sqrt{30.07^{3}} = \sqrt{27{,}189} \approx 164.9 \text{ yr},
$$

against a measured period of 164.8 years. So a planet discovered on
23 September 1846 first returns to the place of its discovery around
$1846.7 + 164.8 = 2011.5$ — and indeed Neptune completed its first full
observed orbit in July 2011. And Mercury's ledger: at $43''$ per
century, the anomaly needs $3600/43 \approx 84$ centuries to add up to a
single degree. That is the size of the crack that will bring down
Newtonian gravity.

[^adams]: Idealized history, confessed: John Couch Adams in Cambridge
  solved the same inverse problem independently and slightly earlier,
  but his results were not pursued to the telescope in time, and a
  bitter priority fight followed. Both men, needing an assumption to
  start the iteration, took the perturber's distance from the
  Titius–Bode rule (near 38 AU) — too far out, which skewed their masses and
  eccentricities. The *direction* they got right, and the direction
  is what Galle needed.

[^onedegree]: 52 arcminutes from Le Verrier's predicted longitude, found
  by Galle and his student Heinrich d'Arrest in under an hour — because
  Berlin had a fresh star chart of that field, and a planet is the dot
  that is not on the chart.

[^leverrier-number]: The figures shown are the modern ones. Le Verrier's
  own 1859 value for the discrepancy was $38''$ per century; refined
  observations raised it to about $43''$, where it stands. The observed
  $574''$ is quoted relative to the fixed stars, after removing the
  precession of Earth's own equinoxes.

[^vulcan]: And "found" it, repeatedly. A country doctor named
  Lescarbault reported a transit in 1859, and Le Verrier believed him to
  his death; eclipse expeditions claimed sightings into the 1900s. None
  ever repeated. It is a standing lesson in how badly one wants the
  method that just worked to work again.
