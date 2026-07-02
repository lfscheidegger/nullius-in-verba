# XCharter — the body serif

Bitstream Charter, designed by Matthew Carter (1987) to survive low-resolution
rendering, extended by Michael Sharpe as **XCharter** with true small caps
(`smcp`, used by our chapter numbers and site header) and a full set of
figure styles (`lnum`/`onum`/`tnum` — tables use `tabular-nums`).

Chosen 2026-07-01 after a side-by-side trial against Georgia and
Source Serif 4 (which lacks true small caps).

## Provenance

- Source: https://ctan.org/pkg/xcharter, version 1.26 (2024-06-18)
- Files: `opentype/XCharter-{Roman,Italic,Bold,BoldItalic}.otf` from the CTAN
  package, converted losslessly to woff2 with
  `fonttools ttLib.woff2 compress` (fonttools 4.x). No subsetting: the files
  are small already (~60–77 KB each), the full glyph set keeps occasional
  Greek and phonetic characters available in prose, and shipping unmodified
  upstream fonts keeps the license notice question trivial.
- License: free Bitstream license (use, modify, redistribute permitted;
  notice must remain intact) — see `LICENSE`, which is the upstream README
  reproduced verbatim. BITSTREAM CHARTER is a registered trademark of
  Bitstream Inc.
