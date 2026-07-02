# /data/ — primary datasets

Real data is sacred (VISION.md, principle 2). Every dataset directory in here
follows the same contract:

```
/data/<slug>/
  README.md      # the provenance record — see template below
  <files>        # the data itself, in a plain-text, future-proof format
                 # (CSV or JSON; no binary formats, no spreadsheets)
```

A dataset does not ship — and no sim may load it — until its README answers
all of the template's questions. When data is digitized from a historical
source, the digitization itself is part of the provenance: who read which
scan, what was transcribed vs. computed, and how it was checked.

## README template

```markdown
# <Dataset name>

## What this is
One paragraph: what was measured, by whom, when, with what instrument.

## Source
- Primary source: <the original publication/manuscript, with edition and page/table numbers>
- Obtained from: <exact URL of the scan/file used, and the date accessed>
- License / terms: <public domain, CC-BY-..., or the argument for why we may use it>

## Provenance chain
Every hop between the original observation and the file in this directory,
including any modern transcription we adopted (who made it, from what) or
our own digitization (who transcribed, from which scan, single- or
double-entered).

## Format and units
Column-by-column: name, unit, coordinate frame/epoch, calendar and time
reference for dates, stated precision.

## Reductions applied
What the recorded numbers already include (e.g. refraction or parallax
corrections applied by the original observer) and anything we computed
rather than transcribed. Raw is better than convenient.

## Verification
How this transcription was checked (e.g. cross-check against a modern
ephemeris; residual statistics), with the script or method named so it can
be re-run.

## Known issues / errata
Anything wrong or suspicious, kept honestly.
```
