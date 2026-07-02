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

**Linking is backward by default.** Spine chapters lean on vocabulary pages and earlier chapters; a reader moving linearly should never *need* anything not yet given. This is editorial discipline, kept by judgment as we write rather than by tooling — an occasional forward glance ("we will meet this idea again with Noether") is welcome so long as it is never a dependency.

## The spine

Fifty chapters in six acts. This structure is iterative and expected to evolve; the acts are more stable than the chapters within them.

### Act I — The Clockwork Sky

1. **Measuring the World with Shadows.** Thales, Eratosthenes, Aristarchus. A chain of four measurements — shadow → Earth's size → Moon's size and distance → Sun's distance — using nothing but sticks, shadows, and geometry. *Interactive: the reader reproduces each measurement and gets real numbers out.*
2. **The First Law of Nature.** Pythagoras and the monochord: string-length ratios and harmony — the first quantitative law of nature ever found. Plants the waves seed. *Interactive: a playable monochord; discover the ratios by ear and by eye.*
3. **The Engineer of Syracuse.** Archimedes: levers, centers of gravity, buoyancy, the crown problem. Arguably the first real physics — quantitative, experimental, tabletop. *Interactive: a hydrostatics sandbox; the reader solves the crown problem.*
4. **Saving the Appearances.** Ptolemy and epicycles; why geocentrism was genuinely good science. *Interactive: build-your-own epicycle machine that fits real planetary positions — secretly the reader's first Fourier decomposition, cashed in repeatedly later.*
5. **Light in a Dark Room.** Ibn al-Haytham: the camera obscura, vision, reflection and refraction, and the birth of the modern experimental method — six centuries before Newton. *Interactive: a ray-optics sandbox built around the camera obscura.*
6. **The Copernican Gamble.** What heliocentrism bought (natural retrograde motion) and what it cost (still epicycles; the stellar parallax problem). *Interactive: same sky, two models, toggle.*
7. **Galileo's Telescope.** The moons of Jupiter, the phases of Venus — evidence arriving. *Interactive: observe Jupiter night by night as Galileo did; log the moons; the phases of Venus as the Ptolemy-killer.*
8. **Tycho's Data, Kepler's Laws.** The real Mars observations; why circles fail by eight arcminutes and ellipses don't. The project's thesis in one chapter. *Interactive: fit orbits to Tycho's actual data; discover the equal-areas law yourself.*

### Act II — The Mechanical Universe

9. **Galileo's Mechanics.** Inclined planes, falling bodies, pendulum isochronism, inertia. *Interactive: the inclined-plane experiment with a water clock, exactly as he did it.*
10. **Huygens.** Pendulum clocks, the collision laws (momentum conservation before Newton), centripetal force. The bridge between Galileo and Newton. *Interactive: a collision laboratory; discover what quantity survives every crash.*
11. **Newton I: Laws of Motion.** With the calculus needed to state them (vocabulary pages arrive here, historically on cue).
12. **The Spring and the Swing.** Hooke's law; the mass on a spring; F = −kx meets F = ma and produces the reader's first second-order differential equation — solved visually. Pendulums via small angles; resonance. The harmonic oscillator as the hydrogen atom of mechanics: this equation returns in sound, in heat capacity, in quantum mechanics, and finally in quantum fields. *Interactive: mass-spring lab; watch the sinusoid draw itself; drive it to resonance.*
13. **Newton II: Universal Gravitation.** The Moon–apple calculation; all three Kepler laws derived from the inverse square. *Interactive: n-body sandbox seeded with real solar-system data.*
14. **The Planet at the Tip of a Pen.** Uranus misbehaves; Le Verrier computes where the culprit must be; Neptune is found within a degree. Prediction as the highest form of understanding. Then the rhyme: the same man, the same method, applied to Mercury — predicts Vulcan, and fails. The check is cashed in Chapter 32. *Interactive: perturb Uranus's orbit; locate the hidden planet from residuals.*
15. **The Shape of Mechanics: Least Action.** Maupertuis → Lagrange → Hamilton; the Fermat least-time bridge from optics. Plants the seed that flowers in quantum mechanics. *Interactive: perturb paths, watch the action.*
16. **Conservation and Symmetry.** The *vis viva* controversy — is the conserved quantity mv or mv²? — resolved: both, and they are different things. Du Châtelet's championing of mv²; 's Gravesande's brass balls in clay. Then momentum, energy, angular momentum as consequences of symmetry — Noether, anachronistically early, footnote confessing it. A load-bearing wall for Act VI. *Interactive: the clay-penetration experiment; discover the v² scaling yourself.*

### Act III — Light, Heat, and Fields

17. **Sound.** Vibrating strings, harmonics, standing waves, the speed of sound — the wave vocabulary built in a medium you can hear. Harvests the monochord from Chapter 2. Chladni's dancing sand and Germain's theory of vibrating plates: standing waves in two dimensions. *Interactives: a string you can pluck and bow, decomposed into modes; a Chladni plate — sweep the frequency, watch the sand find the nodes.*
18. **What Is Light? Round One.** Corpuscles vs. waves; Young's double slit; Fresnel and the Poisson spot — predicted as a refutation, confirmed as a triumph. *Interactive: wave interference from first principles.*
19. **Chasing the Speed of Light.** Rømer and Jupiter's moons, Bradley's aberration, then Fizeau's toothed wheel and Foucault's rotating mirror — tabletop at last, and Foucault's water result as the corpuscle-killer. Makes c a character with a biography before Maxwell reveals its identity. *Interactive: the rotating-mirror measurement, to the real precision.*
20. **Spectroscopy.** Fraunhofer's dark lines; Kirchhoff and Bunsen; what the Sun is made of; helium found in the sky before the Earth; Cannon and the Harvard computers classifying a quarter-million stellar spectra by eye. Plants the spectral lines that Acts IV, V, and VI harvest. *Real data: actual solar and elemental spectra; classify real stellar spectra yourself.*
21. **Taking Temperature.** Thermometry as a hard-won concept; Boyle, Charles, Gay-Lussac; the gas laws and the hint of an absolute zero. *Real data: historical gas measurements; extrapolate to −273 yourself.*
22. **Heat Is Motion.** The death of caloric; Rumford's cannon boring; Joule's paddle wheel. *Real data: Joule's actual measurements.*
23. **The Arrow of Time.** Carnot, entropy, the second law. *Interactive: a reversible engine you can run by hand.*
24. **Atoms, Statistically.** Maxwell, Boltzmann, kinetic theory; the ideal gas law from bouncing particles. *Real data: with van der Waals deviations as honest confession. Interactive: pressure emerging from chaos.*
25. **Electricity and Magnetism Meet.** Coulomb's torsion balance, Ørsted's compass, Ampère, Faraday's induction — and Faraday's *fields* as a new ontology. *Interactives: torsion balance (real data); build a motor.*
26. **Maxwell's Synthesis.** The equations, honestly presented (vector-calculus vocabulary pages in support); the displacement current; waves at a speed the reader already knows by name. Light unmasked.
27. **Atoms Are Real.** Dalton's chemical atoms; the long agnosticism (Mach died denying them); Einstein's Brownian-motion paper; Perrin measuring Avogadro's number a dozen independent ways until doubt collapsed. The chapter where invisible things become countable. *Interactive: watch the jiggle; extract Avogadro's number from real Perrin-style data.*

### Act IV — The Two Cliffs

28. **Cracks in Everything.** "Physics is nearly complete" — then X-rays (1895), radioactivity (1896), the electron (1897). Thomson's e/m measurement: the first subatomic particle, on a tabletop. Curie's tons of pitchblende, and her decisive finding that radioactivity is an *atomic* property — untouched by chemistry, temperature, anything — which is what made it a crack in the atom rather than a chemical curiosity. *Interactive: the cathode-ray tube; measure e/m yourself.*
29. **The Ether Crisis.** Michelson–Morley. *Interactive: the interferometer itself; the reader hunts for the fringe shift and finds nothing — which is the point.*
30. **Special Relativity I: Space and Time.** Refuse to privilege any frame; refuse to break Maxwell; be dragged to the death of simultaneity, time dilation, length contraction. *Interactives: light clock; manipulable spacetime diagrams.*
31. **Special Relativity II: Matter and Energy.** Relativistic momentum, the speed limit, E=mc². *Interactive: collisions at relativistic speeds; watch Newtonian bookkeeping fail and the new bookkeeping balance.*
32. **General Relativity.** Equivalence principle → curvature; Mercury's perihelion — the Vulcan check from Chapter 14, cashed (the real 43 arcseconds); Eddington 1919. *Interactive: geodesics on curved surfaces; light bending.*
33. **The Ultraviolet Catastrophe.** Why classical physics predicts infinity; Planck's desperate quantum. *Real data: the actual emission curves Planck fit.*
34. **Light Is Grainy After All.** Photoelectric effect; Einstein 1905; Compton. *Real data: Millikan's photoelectric measurements — taken while trying to prove Einstein wrong.*
35. **Inside the Atom.** Rutherford's gold foil; the nuclear atom; Bohr's model and the Balmer lines from Chapter 20, half-explained. *Real data: Geiger–Marsden scattering counts.*
36. **The Old Quantum Theory.** Bohr–Sommerfeld orbits, the correspondence principle — the awkward adolescence where the rules were half-classical and everyone knew it. Honest portrait of a theory that works too well to discard and too badly to believe.

### Act V — The Quantum World

37. **Matter Waves.** De Broglie's audacity; Davisson–Germer (tabletop!). *Interactive: electron diffraction.*
38. **Two Roads to Quantum Mechanics.** Heisenberg's matrices vs. Schrödinger's waves — invented independently, from opposite philosophies, and proven equivalent. The formalism is not the physics. Uncertainty as theorem, not slogan. Leans on complex-numbers and linear-algebra vocabulary pages and the Fourier seed from Chapter 4. *Interactives: wave packets; the 1D Schrödinger equation solved before the reader's eyes.*
39. **The Hydrogen Atom, Solved.** The Schrödinger equation meets the Coulomb potential; the Balmer integers — planted in Chapter 20, teased in Chapter 35 — finally explained. The biggest payoff in the book. *Interactive: orbitals as standing waves; the spectrum computed and laid over the real one.*
40. **Through the Wall.** Tunneling; Gamow and alpha decay; the scanning tunneling microscope as modern vindication. *Interactive: wave packet meets barrier.*
41. **Spin and Structure.** Stern–Gerlach (tabletop!); Pauli exclusion; why the periodic table has its shape — chemistry explained.
42. **Quantum Statistics.** Bose–Einstein and Fermi–Dirac; why matter is rigid; why white dwarfs don't collapse — and why some do.
43. **What Does It Mean?** Measurement, entanglement, EPR, Bell. *Interactive: run Bell's experiment; violate the inequality yourself with realistic detector statistics.*
44. **Marrying Quanta and Relativity.** Dirac's equation; spin for free; antimatter predicted from pure math and found in cosmic rays. *Primary source: Anderson's actual cloud-chamber photograph.*
45. **The Nucleus.** Radioactivity understood; the Curies; the neutron; the binding-energy curve and its magic numbers — Goeppert Mayer's shell model reads its structure. Fission: Hahn's barium, and Meitner and Frisch's snow-walk calculation — the liquid drop splitting, the ~200 MeV arithmetic, the word "fission" itself. (Footnote: Ida Noddack suggested it in 1934 and was dismissed by everyone, including Fermi.) *Real data: the binding-energy curve; redo Meitner's calculation.*
46. **Why Stars Shine.** First: what stars are *made of* — Payne-Gaposchkin's 1925 thesis, applying Saha's ionization theory to stellar spectra (Chapter 20's harvest) to show the Sun is overwhelmingly hydrogen, against the settled belief and against Russell's advice to doubt her own result. Then Eddington's provocation; Bethe; fusion and stellar nucleosynthesis — you are made of star ash. *Interactives: derive the Sun's composition from real spectra; the proton-proton chain; balance a star.*

### Act VI — The Standard Model

47. **QED and the Taming of Infinity.** The Lamb shift; Shelter Island; renormalization as confession turned triumph; Feynman diagrams as honest bookkeeping; g−2 — the most precisely confirmed prediction in science.
48. **The Weak Force.** Pauli's desperate neutrino letter; Reines–Cowan finding the undetectable; Madame Wu's cobalt-60 experiment and parity violation — the universe is left-handed, and the experiment was nearly tabletop. *Real data: the Wu asymmetry.*
49. **The Strong Force.** The particle zoo; the Eightfold Way; quarks proposed as bookkeeping, confirmed at SLAC; asymptotic freedom and confinement. *Real data: bubble-chamber photographs — measure the tracks, find the Ω⁻; SLAC scattering data — plot it, see the quarks.*
50. **Unification.** Gauge symmetry as generating principle; electroweak unification; the Higgs; the full field content — and the honest ending: what it doesn't explain, led by Rubin's flat galaxy rotation curves. *Real data: plot the rotation velocities; watch the visible mass fail to account for them.*

*Under consideration:* an epilogue on cosmology (Leavitt's Cepheid ruler → Hubble → the CMB, which is *the* blackbody curve echoing Chapter 33 → Bell Burnell's pulsars → Rubin's dark matter); a structural conceit making Einstein's 1905 miracle year visible across Chapters 27, 30–31, and 34. Fluid mechanics, standalone optics beyond the above, and solid state / the transistor are deliberately off-spine; possible future branches.

## Vocabulary pages (first tranche)

Calculus (derivatives; integrals; differential equations — likely three pages), vectors and vector fields, momentum, energy, waves and Fourier analysis, probability, complex numbers, linear algebra, fields (the physics concept), symmetry and groups, curvature. More will announce themselves as the spine is written.

## Inspirations

- *God Created the Integers* (Hawking, ed.) — the linear march through primary breakthroughs, unafraid of detail; but we contextualize with problems, not just biography.
- *The Road to Reality* (Penrose) — the ambition and rigor; but we interleave math with physics rather than front-loading it, and we are interactive.
- Bartosz Ciechanowski (ciechanow.ski) — the standard of craft for each individual article.
- 3Blue1Brown, Veritasium — the standard of approachability.
- *The Elements of Style* — the prose. Tufte — the graphics.
