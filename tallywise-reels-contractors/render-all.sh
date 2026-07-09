#!/usr/bin/env bash
# Render all 20 Batch-3 contractor reels. Ids: reel-contractor-1 .. reel-contractor-20.
# Separate batch — no overlap with Batch 1 or Batch 2. Renders into ./out.
set -euo pipefail

mkdir -p out
for n in $(seq 1 20); do
  id="reel-contractor-$n"
  echo ">>> rendering $id"
  npx remotion render src/Root.tsx "$id" "out/$id.mp4"
done
echo "Done. 20 files in out/."
