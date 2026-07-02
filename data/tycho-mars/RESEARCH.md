# Tycho's Mars observations — source research

Research record for the primary dataset of the spine chapter *Tycho's Data,
Kepler's Laws* (readers fit circles/ellipses to real Mars oppositions and
rediscover the first two laws, including the 8′ failure of the best circular
fit). Deep-research pass run 2026-07-01: 19 sources fetched, top 25 claims
adversarially verified (19 confirmed, 6 refuted). This file records what we
found; the dataset README will record what we ship.

## Recommendation (acquisition plan)

**Transcribe the tables ourselves from the Smithsonian Libraries' CC0 scan of
*Astronomia Nova* (1609)**, and treat every existing digitization as a
cross-check only. No machine-readable version with a clean provenance chain
and a usable license exists.

The two tables to transcribe:

1. **Ch. 8 table — 10 oppositions, 1580–1600, referred to the MEAN sun.**
   Constructed by Tycho or his staff (not Kepler). Donahue 1992 translation
   p. 186 locates it ("Tycho Brahe's table of observed and computed
   oppositions of Mars to the line of the sun's mean motion").
2. **Ch. 15 table — 12 oppositions, 1580–1604, referred to the TRUE sun.**
   Kepler's conversion of (1), extended with his own 1602 observation
   ("using the Tychonic instruments") and David Fabricius's 1604 one.
   Donahue 1992 p. 248 (rotated 12-row table, numbered I–XII).

Page references are to the 1992 Cambridge edition of Donahue's translation
(the 2015 Green Lion revision paginates differently). The Donahue
translation is **in copyright**: it may guide our reading of the 1609 Latin
tables, but we transcribe the Latin original's numbers, not his text.

## Sources, ranked

### 1. Astronomia Nova, 1609 scan — Smithsonian Libraries (ADOPT)
- https://library.si.edu/digital-library/book/astronomianovaa00kepl
- DOI 10.5479/sil.126675.39088002685477, ~388 images, full-PDF download.
- License: **CC0 1.0** (verbatim rights statement on record; Smithsonian
  Open Access FAQ confirms no permission/attribution needed). The 1609 text
  is public domain by age regardless. Page images can appear in the chapter.
- Verified 3–0, unanimous, by direct fetch.

### 2. Tychonis Brahe Dani Opera Omnia, ed. Dreyer (raw logs — deeper layer)
- Copenhagen (Gyldendal), 1913–1929, 15 volumes bound in 17.
- The raw dated/timed Mars observations behind the tables live in
  **vols 10–13** (vol 10 = observations through 1585; scholarly citations of
  the Mars work reference TBOO 10, 12, 13). Useful if we ever want readers
  to drill from a table row to the underlying sightings.
- **Warning:** archive.org item `operaomniaedidit02brahuoft` is vol 2, the
  *Progymnasmata* — the wrong volume. Claims that its scan is
  marked public-domain, and that HathiTrust has no full-view copies, were
  BOTH refuted; full-view scans of vols 10–13 likely exist but were not
  located and license-verified in this pass. Dreyer's 1913–29 editorial
  apparatus also raises jurisdiction-dependent copyright questions. Open item.

### 3. Existing digitizations (CROSS-CHECK ONLY — none adoptable)
- **keplersdiscovery.com** (Ch. 15 table): a 540×200 raster image only, no
  machine-readable data, no provenance for the image, expired TLS cert.
- **UCA PHYS 3110 lab PDF** (faculty.uca.edu/saustin/3110/mars.pdf): 10
  observations in 5 pairs separated by ~687 d (1583–1595), date +
  heliocentric longitude of Earth + geocentric longitude of Mars — but the
  Earth longitudes are Kepler-derived quantities, the citation is a bare
  "J. Kepler, Astronomia Nova (1609)", and there is no calendar/time/license
  statement. (It is a pseudonymous sample lab report, author "N. Copernicus".)
- **pafko.com/tycho** ("The Mars Project", mars.xls, 800+ observations):
  "Copyright 2000, Wayne Pafko", no license, no source edition stated on the
  data page (checked directly 2026-07-01). Potentially valuable as a bulk
  cross-check; unusable as a shipped source.
- **Krisciunas arXiv:1610.05750**: the dataset there is the author's own
  2015–2018 cross-staff observations (±11′), not Tycho data.

## Conventions we must handle (verified)

- **Times count from the previous noon** (the pre-1925 astronomical day) at
  the **meridian of Uraniborg**. E.g. "24 July 1593, at 13:40 h" =
  1:40 am on 25 July civil reckoning. (Carman 2025, note 22; 3–0.)
- **The tabulated oppositions are computed data products, not raw
  sightings**: Tycho never caught Mars at the exact moment of opposition;
  the tabulated positions were interpolated from observations before and
  after (3–0). Our chapter must say so — it is also a nice pedagogical
  point about what a "data point" is.
- **Possible theory contamination (disclose in a sidenote, don't assert):**
  Carman, *Historia Mathematica* (Dec 2025), argues entries up to 1593
  appear adjusted toward Tycho's own (non-bisected) Mars model. Verified
  only 2–1, single unreplicated paper — and the companion claim that the
  post-1595 entries are clean was itself refuted (1–2). Treat the table's
  processing history as uncertain in detail.
- **Calendar per entry (Julian vs Gregorian across the 1582 reform) is NOT
  settled** — must be resolved during transcription, entry by entry, before
  any ephemeris comparison. Open item.
- Whether positions are raw or already reduced for refraction/parallax:
  not settled by this pass. Open item.

## The 8′ story, told precisely (for the chapter)

Kepler fit the **vicarious hypothesis** to 4 of the 12 true-sun oppositions;
it reproduced the other 8 to ~2′ in longitude. The famous **8′ discrepancy
belongs to the eccentric circle with bisected eccentricity** (adopted to
satisfy the latitudes), which fails by up to 8′ **at the octants** (~45°/135°
from the apsides) — *Astronomia Nova* chs. 18–21, with the "these eight
minutes… reform of the whole of Astronomy" passage. The loose telling ("the
best circle failed by 8′") is a fair summary — Gingerich uses it — but the
chapter should keep the two models distinct. (One source, Krisciunas,
attributes the 8′ to the later ovoid model; flagged as a framing to avoid.)
Also worth a sidenote: Kepler's book-order narrative is itself a rhetorical
reconstruction of his research path (Voelkel) — squarely our "idealized
path, honestly footnoted" policy.

## Verification plan

Cross-check every transcribed opposition against **JPL Horizons** (geocentric
apparent ecliptic longitude/latitude of Mars at the tabulated Uraniborg
times, converted to UT). Expected residuals: **~1–2′** (Tycho's real
accuracy: Gingerich "typical observational errors were 2′ or less"; Høg
arXiv:1707.01020 on the tenfold jump over predecessors; Wesley 1978 on
instrument accuracy; ~15% of Tycho catalogue entries carry >10′ blunders, so
occasional outliers are expected and honest). Anything off by tens of
arcminutes is a transcription/reduction error, not Tycho. This residual
scale is also the chapter's punchline: 8′ was genuinely resolvable.

## Open questions carried forward

1. Locate license-verified full-view scans of Opera Omnia vols 10–13.
2. Settle the calendar of each table entry across the 1582 reform.
3. Determine whether a scholarly machine-readable transcription exists in
   Carman 2025's supplementary materials, Gingerich's papers, or the Koot
   thesis appendices (Utrecht, 2014) — adoption with attribution would still
   need per-value verification but could save transcription errors.
4. Pedagogy: how to present the possibly-adjusted pre-1595 entries —
   exclude, flag in the interactive, or teach data provenance with them.

## Key citations

- Kepler, *Astronomia Nova* (1609), Smithsonian scan (CC0): library.si.edu/digital-library/book/astronomianovaa00kepl
- Donahue, W. (trans.), *New Astronomy*, Cambridge UP, 1992 (tables at pp. 186, 248; in copyright).
- Dreyer, J.L.E. (ed.), *Tychonis Brahe Dani Opera Omnia*, 15 vols in 17, Copenhagen 1913–29 (Mars logs: vols 10–13).
- Carman, C., "Did Tycho (or his assistants) manipulate his observations?…", *Historia Mathematica*, Dec 2025. sciencedirect.com/science/article/abs/pii/S0315086025000722
- Carman, C., *Arch. Hist. Exact Sci.* 79 (2025). link.springer.com/article/10.1007/s00407-024-00344-2 (time conventions, TBOO citations)
- Gingerich, O., "The great Martian catastrophe and how Kepler fixed it", *Physics Today* 64/9 (2011).
- Koot, R., *Kepler's battle with the Mars orbit* (MSc thesis, Utrecht, 2014).
- Høg, E., arXiv:1707.01020 (Tycho's accuracy in context).
