#!/usr/bin/env bash
# Render all 75 Batch-2 reels. Ids follow reel-<theme>-<1..5>.
# These are the 15 NEW themes only — the original 6 (cashflow forecasting
# estimating jobcosting taxes payroll) are Batch 1 and are NOT in this package.
set -euo pipefail

THEMES="subscriptions cardfees classification turnover marketing ownerpay trades restaurant ecom agency salon dental gym realestate trucking"

mkdir -p out
for t in $THEMES; do
  for n in 1 2 3 4 5; do
    id="reel-$t-$n"
    echo ">>> rendering $id"
    npx remotion render src/Root.tsx "$id" "out/$id.mp4"
  done
done
echo "Done. 75 files in out/."
