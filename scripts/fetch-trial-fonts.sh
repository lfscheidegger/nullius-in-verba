#!/usr/bin/env bash
# Fetches the typeface-trial candidates into design/fonts/trial/ (gitignored;
# the /typeface-trial/ meta page needs them locally). Delete this script and
# the trial page once the body serif is decided.
#
# Provenance:
#   XCharter — Bitstream Charter (Matthew Carter, 1987) extended by Michael
#     Sharpe with true small caps and oldstyle figures. Free Bitstream
#     license (redistribution allowed, notice must stay intact).
#     https://ctan.org/pkg/xcharter
#   Source Serif 4 — Frank Grießhammer for Adobe, SIL Open Font License.
#     https://github.com/adobe-fonts/source-serif
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p design/fonts/trial
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT

# XCharter ships OTF only; convert to woff2 with fonttools.
curl -sL -o "$work/xcharter.zip" https://mirrors.ctan.org/fonts/xcharter.zip
unzip -q "$work/xcharter.zip" -d "$work"
python3 -m venv "$work/venv"
"$work/venv/bin/pip" -q install fonttools brotli
for face in Roman Italic Bold BoldItalic; do
  "$work/venv/bin/fonttools" ttLib.woff2 compress \
    -o "design/fonts/trial/XCharter-$face.woff2" \
    "$work/xcharter/opentype/XCharter-$face.otf"
done

# Source Serif publishes woff2 directly.
curl -sL -o "$work/ss.zip" \
  https://github.com/adobe-fonts/source-serif/releases/download/4.005R/source-serif-4.005_WOFF2.zip
unzip -q "$work/ss.zip" -d "$work"
for face in Regular It Bold BoldIt; do
  cp "$work/source-serif-4.005_WOFF2/OTF/SourceSerif4-$face.otf.woff2" \
     "design/fonts/trial/SourceSerif4-$face.woff2"
done

echo "Trial fonts installed in design/fonts/trial/"
