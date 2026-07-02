# Tycho Brahe's Mars oppositions, as published by Kepler (1609)

## What this is

The two Mars-opposition tables from Kepler's *Astronomia Nova* (1609) — the
dataset on which the first two laws of planetary motion were founded, and the
primary data for the spine chapter *Tycho's Data, Kepler's Laws*.

- `oppositions-mean-sun.csv` — **Chapter 8** (original p. 56): ten
  oppositions of Mars to the *mean* sun, 1580–1600, as observed at Uraniborg
  by Tycho Brahe and his staff, with the mean solar longitude, Mars's
  observed ecliptic longitude, and their difference, as printed.
- `oppositions-true-sun.csv` — **Chapter 15** (original p. 90): twelve
  oppositions of Mars to the *true* (apparent) sun, 1580–1604 — Kepler's
  conversion and extension of the Chapter 8 data, adding his own 1602
  observation ("using the Tychonic instruments") and David Fabricius's of
  1604. Gives Mars's longitude, latitude (with direction), and Kepler's
  derived mean longitude.

## Source

- Primary source: Johannes Kepler, *Astronomia Nova ΑΙΤΙΟΛΟΓΗΤΟΣ, seu
  physica coelestis, tradita commentariis de motibus stellae Martis, ex
  observationibus G. V. Tychonis Brahe* (Heidelberg: Voegelinus, 1609).
  Chapter 8 table: p. 56; Chapter 15 table: p. 90.
- Obtained from: the Smithsonian Libraries scan,
  https://library.si.edu/digital-library/book/astronomianovaa00kepl
  (DOI 10.5479/sil.126675.39088002685477), via its Internet Archive mirror
  https://archive.org/details/Astronomianovaa00Kepl (PDF pages 99 and 133).
  Accessed 2026-07-01.
- License / terms: the Smithsonian releases the scan under **CC0 1.0**; the
  Internet Archive mirror is marked "Not in copyright". The 1609 text is
  public domain by age. Page images of both tables are kept in `scans/`.

## Provenance chain

1. Observations at Uraniborg (Hven) by Tycho Brahe and assistants,
   1580–1600; the tabulated opposition entries are **interpolated data
   products**, not raw sightings — Mars was never caught at the exact moment
   of opposition (see caveats). The 1602 entry is Kepler's own observation;
   1604 is David Fabricius's.
2. Tabulated in *Astronomia Nova* (1609): the Chapter 8 table was
   constructed by Tycho or his staff; the Chapter 15 table is Kepler's
   reduction of it to the true sun.
3. Transcribed 2026-07-01 by Claude (working with Luiz Scheidegger) directly
   from 400-dpi renderings of the 1609 scan pages, each cell read twice at
   increasing magnification; disputed cells re-read at 600 dpi. William
   Donahue's translation (*New Astronomy*, Cambridge, 1992, pp. 186, 248 —
   in copyright) guided interpretation of the table layout only; all numbers
   were transcribed from the 1609 Latin original.
4. Cross-checked against the independent transcription at
   keplersdiscovery.com/twelveObservations.html, which disagrees in four
   places; in every case the 1609 print supports our reading (see Known
   issues).

## Format and units

Both CSVs hold the printed cells verbatim, plus derived decimal columns
(`*_deg`) that are pure arithmetic on the printed cells (re-derived and
checked by `verify.ts`; no judgment involved).

- **Calendar: Julian** ("Stylo veteri", old style — stated by the Chapter 15
  column header and confirmed by ephemeris comparison; a Gregorian reading
  would be off by several degrees).
- **Time**: hours and minutes counted from the **preceding noon** (the
  pre-1925 astronomical day) at the **meridian of Uraniborg** (12°41′48″ E);
  e.g. row IX's "13 Decembr. 15:54" is 3:54 am civil time on 14 December.
  Whether the hours are apparent or mean solar time is not stated; the
  difference (≤ ±16 min) moves Mars by under 0.25′, below Tycho's noise.
- **Longitudes**: zodiacal sign + degrees/arcmin/arcsec within sign,
  ecliptic and equinox of date. `lambda_deg` counts from Aries 0°.
  In the Chapter 8 table the print gives Mars's observed place as
  arcmin/arcsec only, the degrees being those of the point opposite the
  mean sun; `mars_lambda_deg` reconstructs the full longitude (the printed
  Differentia column checks this reconstruction row by row).
- **Latitudes** (Chapter 15 only): degrees/arcmin with direction
  B (*borealis*, north, +) or M (*meridionalis*, south, −). Three entries
  have fractional arcminutes (⅙, ¾, ⅚), kept exactly in
  `lat_arcmin_fraction`.
- **Mean longitude** (Chapter 15): Kepler's derived uniform-motion angle
  (sign/deg/min/sec), transcribed verbatim; it is a model quantity, not an
  observation, and unused by our fits.

## Reductions applied

By the original authors, not us: the positions are reduced geocentric
ecliptic places (Tycho corrected for refraction and his — overestimated —
solar parallax; the opposition entries are interpolated between nearby
observations). We apply no corrections; the CSVs are the printed numbers.

## Verification

`npm run verify:data` (= `tsx data/tycho-mars/verify.ts`):

1. Chapter 8 internal consistency: observed − mean-opposite must equal the
   printed Differentia, sign included — all 10 rows check.
2. Derived decimal columns re-derived from the verbatim cells — all rows check.
3. Every row against **JPL Horizons** (DE441, Mars system barycenter,
   geocentric apparent ecliptic-of-date lon/lat, quantity 31), at the
   tabulated instants converted as described above. Residuals, 2026-07-01:
   - Chapter 15 longitudes: mean −1.1′, max |Δλ| 4.3′
   - Chapter 8 longitudes: mean −1.1′, max |Δλ| 3.3′
   - Chapter 15 latitudes: mean +1.8′, max |Δβ| 8.2′

   Longitude residuals sit at Tycho's documented ~1–2′ accuracy — which is
   the chapter's point: the 8′ failure of the bisected-eccentricity circle
   was genuinely resolvable by this data. Latitudes are 2–4× worse, as
   expected historically (latitude reduction suffered from Tycho's parallax
   and refraction treatment). The small negative mean Δλ is consistent with
   known sub-arcminute systematics of Tycho's reference frame and our
   unmodelled equation of time; we did not tune anything to remove it.

## Known issues / errata

- keplersdiscovery.com's transcription of the Chapter 15 table differs from
  the 1609 print in four places; the print supports our reading in all four
  (600-dpi re-reads): row IX time **15:54** (not 15:44), row III mean
  longitude seconds **19** (not 9), row VII mean longitude seconds **4**
  (not 31), and the fractional arcminutes in rows III/V/X latitudes
  (4°32⅙′, 1°12¾′, 4°30⅚′), which they drop.
- The 1609 print numbers row 8 "IIX" (sic, for VIII).
- Carman (*Historia Mathematica*, Dec 2025) presents statistical evidence
  that the pre-1595 Chapter 8 entries were adjusted by Tycho's staff toward
  Tycho's own Mars model. Single unreplicated analysis; disclosed here and
  in the chapter, not asserted.
- The 1597 entry carries the same longitude (Cancer 2°28′0″) in both tables
  even though the tabulated instants differ by 2h19m, during which Mars
  moves about 2′. Verified against the print — it is Kepler's carry-over,
  not our transcription error.
