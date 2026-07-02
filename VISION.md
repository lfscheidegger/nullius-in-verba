# By Candlelight

*Nullius in verba* — take nobody's word for it.

## What this is

An interlinked, book-like series of polished online articles that tell the story of physics from the first quantitative measurements of the ancient world through the Standard Model — each discovery presented as the problem-solving journey that made it inevitable, each grounded in real data, and each paired with interactive simulations that let the reader verify the physics for themselves.

The central claim: every fundamental idea in physics can be understood intuitively, because the people who discovered these ideas were no more human than you. Nearly everything up to the mid-20th century was worked out by people with tabletop apparatus and stubborn questions. If a theory could be proven by candlelight in a 19th-century lab, we can build a simulation that captures exactly the deciding insight — with no conceptual simplifications.

## Principles

**1. Rigor and story are not in tension.** Textbooks present finished products stripped of the thinking that produced them; popular accounts tell stories but retreat into analogy and sacrifice the actual machinery. We do both: establish the status quo of each era, what scientists were wrestling with and why, then follow the problem-solving path until the discovery becomes inescapable. The canonical example: special relativity begins with a stubborn refusal to privilege any inertial frame. Maxwell's electromagnetism threatens that refusal. Refuse to accept the breakage, and you are dragged — protesting — to time dilation and E=mc².

**2. Everything is discoverable and verifiable to the bottom.** Simulations reproduce the deciding experiments or put real primary data in the reader's hands — Tycho's Mars observations, Joule's paddle-wheel measurements, actual blackbody spectra, bubble-chamber photographs. Numerical methods are welcome; lies-to-children are not. Where tabletop reproduction genuinely fails (deep inelastic scattering), the interactive shifts to *analyze the real data yourself*: the reader measures track curvatures, plots scaling, and sees the quarks in the actual evidence. The principle in its true form: **the reader personally verifies, from primary data.**

**3. Respect the reader.** The artifact is highly polished and tasteful: clear writing in the spirit of *The Elements of Style*, visual design in the spirit of Tufte's *The Visual Display of Quantitative Information*. Good typography, real margin notes, interactives designed as carefully as the prose.

**4. Challenge the reader.** Every concept eventually gets its mathematics, placed beside the intuition. We do not hide formulas or avoid calculus, differential equations, complex numbers, or linear algebra — we simply never drop them in unmotivated. Each chapter should end with the reader able to *predict something quantitatively* — compute a number that an experiment then confirms.

**5. Complexity is revealed progressively.** The project reads like a book: a linear spine of chapters in (idealized) historical order. Mathematical machinery is introduced exactly when the physics first demands it — calculus arrives with Newton, who invented it for the purpose.

**6. Lean on the visual cortex.** Wherever possible, understanding is built geometrically and visually. Gradient fields are drawn, not just defined. Spacetime diagrams are manipulable objects. Millions of years of evolution gave humans extraordinary visual machinery; we use it.

**7. The idealized path, honestly footnoted.** We follow the understanding-maximizing route to each discovery, which is sometimes cleaner than real history. Where we bend the historical record for explanatory clarity, footnotes confess it. (The opening chapter states this policy explicitly.)

## Structure

Two classes of pages, both equally polished and interactive:

- **Spine chapters** — the linear narrative of discoveries, meant to be read in sequence.
- **Vocabulary pages** — standalone, evergreen explanations of key concepts (energy, momentum, calculus, complex numbers, Fourier analysis, symmetry, curvature, ...), introduced exactly when the spine first needs them.

**Linking is strictly backward.** Spine chapters link to vocabulary pages and to earlier chapters, never forward. Lateral links are optional depth, never dependencies. A reader moving linearly never needs anything not yet given.

## The spine

### Act I — The Clockwork Sky

1. **Measuring the World with Shadows.** Thales, Eratosthenes, Aristarchus. A chain of four measurements — shadow → Earth's size → Moon's size and distance → Sun's distance — using nothing but sticks, shadows, and geometry. *Interactive: the reader reproduces each measurement and gets real numbers out.*
2. **Saving the Appearances.** Ptolemy and epicycles; why geocentrism was genuinely good science. *Interactive: build-your-own epicycle machine that fits real planetary positions — secretly the reader's first Fourier decomposition, cashed in three times later.*
3. **The Copernican Gamble.** What heliocentrism bought (natural retrograde motion) and what it cost (still epicycles; the stellar parallax problem). *Interactive: same sky, two models, toggle.*
4. **Tycho's Data, Kepler's Laws.** The real Mars observations; why circles fail and ellipses don't. The project's thesis in one chapter. *Interactive: fit orbits to Tycho's actual data; discover the equal-areas law yourself.*
5. **Galileo.** Inclined planes, falling bodies, pendulum isochronism, the telescope, inertia. *Interactive: the inclined-plane experiment with a water clock, exactly as he did it.*

### Act II — The Mechanical Universe

6. **Newton I: Laws of Motion.** With the calculus needed to state them (vocabulary pages arrive here, historically on cue).
7. **Newton II: Universal Gravitation.** The Moon–apple calculation; all three Kepler laws derived from the inverse square. *Interactive: n-body sandbox seeded with real solar-system data.*
8. **The Shape of Mechanics: Least Action.** Maupertuis → Lagrange → Hamilton; the Fermat least-time bridge from optics. Plants the seed that flowers in quantum mechanics. *Interactive: perturb paths, watch the action.*
9. **Conservation and Symmetry.** Momentum, energy, angular momentum as consequences of symmetry — Noether, anachronistically early, footnote confessing it. A load-bearing wall for Act VI.

### Act III — Light, Heat, and Fields

10. **What Is Light? Round One.** Corpuscles vs. waves; Young's double slit; Fresnel and the Poisson spot — predicted as a refutation, confirmed as a triumph. *Interactive: wave interference from first principles.*
11. **Heat Is Motion.** The death of caloric; Rumford; Joule's paddle wheel. *Real data: Joule's actual measurements.*
12. **The Arrow of Time.** Carnot, entropy, the second law. *Interactive: a reversible engine you can run by hand.*
13. **Atoms, Statistically.** Maxwell, Boltzmann, kinetic theory; the ideal gas law from bouncing particles. *Real data: actual gas measurements, with van der Waals deviations as honest confession. Interactive: pressure emerging from chaos.*
14. **Electricity and Magnetism Meet.** Coulomb's torsion balance, Ørsted's compass, Ampère, Faraday's induction — and Faraday's *fields* as a new ontology. *Interactives: torsion balance (real data); build a motor.*
15. **Maxwell's Synthesis.** The equations, honestly presented (vector-calculus vocabulary pages in support); the displacement current; waves at a speed that turns out to be *c*. Light unmasked.

### Act IV — The Two Cliffs

16. **The Ether Crisis.** Michelson–Morley. *Interactive: the interferometer itself; the reader hunts for the fringe shift and finds nothing — which is the point.*
17. **Special Relativity.** Refuse to privilege any frame; refuse to break Maxwell; be dragged to the death of simultaneity, time dilation, E=mc². *Interactives: light clock; manipulable spacetime diagrams.*
18. **General Relativity.** Equivalence principle → curvature; Mercury's perihelion (the real 43 arcseconds); Eddington 1919. *Interactive: geodesics on curved surfaces; light bending.*
19. **The Ultraviolet Catastrophe.** Why classical physics predicts infinity; Planck's desperate quantum. *Real data: the actual emission curves Planck fit.*
20. **Light Is Grainy After All.** Photoelectric effect; Einstein 1905; Compton. *Real data: Millikan's photoelectric measurements — taken while trying to prove Einstein wrong.*
21. **Inside the Atom.** Rutherford's gold foil; Bohr; the Balmer series. *Real data: hydrogen spectral lines and the eerie integer formula that fit them decades early.*

### Act V — The Quantum World

22. **Matter Waves.** De Broglie's audacity; Davisson–Germer (tabletop!). *Interactive: electron diffraction.*
23. **The Machinery of Quantum Mechanics.** Heisenberg and Schrödinger; the wave function; uncertainty as theorem, not slogan. Leans on complex-numbers and linear-algebra vocabulary pages and the Fourier seed from Chapter 2. *Interactives: wave packets; the 1D Schrödinger equation solved before the reader's eyes.*
24. **Spin and Structure.** Stern–Gerlach (tabletop!); Pauli exclusion; why the periodic table has its shape — chemistry explained.
25. **What Does It Mean?** Measurement, entanglement, EPR, Bell. *Interactive: run Bell's experiment; violate the inequality yourself with realistic detector statistics.*
26. **Marrying Quanta and Relativity.** Dirac's equation; spin for free; antimatter predicted from pure math and found in cosmic rays. *Primary source: Anderson's actual cloud-chamber photograph.*
27. **The Nucleus.** Radioactivity, the Curies, the neutron, binding energy, fission and fusion — why stars shine.

### Act VI — The Standard Model

28. **Fields All the Way Down.** QED; the electron as a field excitation; Feynman diagrams as honest bookkeeping; the Lamb shift and g−2 — the most precisely confirmed prediction in science.
29. **The Particle Zoo and the Hidden Order.** The chaos of the 1950s–60s; symmetry flowering (Noether's seed); the Eightfold Way; quarks proposed as bookkeeping, confirmed at SLAC. *Real data: bubble-chamber photographs — measure the tracks, find the Ω⁻; SLAC scattering data — plot it, see the quarks.*
30. **The Standard Model.** Gauge symmetry as generating principle; electroweak unification; the Higgs; the full field content — and the honest ending: what it doesn't explain.

*Under consideration:* an epilogue or 31st chapter on cosmology (Hubble, the CMB — which is *the* blackbody curve, echoing Chapter 19). Fluid mechanics and standalone optics are deliberately off-spine; possible future branches.

## Vocabulary pages (first tranche)

Calculus (derivatives; integrals; differential equations — likely three pages), vectors and vector fields, momentum, energy, waves and Fourier analysis, probability, complex numbers, linear algebra, fields (the physics concept), symmetry and groups, curvature. More will announce themselves as the spine is written.

## Inspirations

- *God Created the Integers* (Hawking, ed.) — the linear march through primary breakthroughs, unafraid of detail; but we contextualize with problems, not just biography.
- *The Road to Reality* (Penrose) — the ambition and rigor; but we interleave math with physics rather than front-loading it, and we are interactive.
- Bartosz Ciechanowski (ciechanow.ski) — the standard of craft for each individual article.
- 3Blue1Brown, Veritasium — the standard of approachability.
- *The Elements of Style* — the prose. Tufte — the graphics.
