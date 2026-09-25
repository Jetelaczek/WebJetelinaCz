#!/usr/bin/env bash
# Regenerates both CV PDFs from the CV templates (which render js/career-data.js) using headless Chrome.
# Manual alternative: open each template in Chrome, Print → Save as PDF, with "Headers and footers" off.
set -euo pipefail

cd "$(dirname "$0")/.."
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

build() {
  "$chrome" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=5000 \
    --print-to-pdf="$PWD/$2" "file://$PWD/$1" 2>/dev/null
  echo "Wrote $2"
}

build assets/cv/src/cv-en.html assets/cv/Tomas_Jetelina_CV_EN.pdf
build assets/cv/src/cv-cz.html assets/cv/Tomas_Jetelina_CV_CZ.pdf
