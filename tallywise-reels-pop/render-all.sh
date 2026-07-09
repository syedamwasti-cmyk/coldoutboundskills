#!/usr/bin/env bash
# Render all 20 Batch-4 pop-culture reels. Ids: reel-pop-1 .. reel-pop-20.
# Separate batch — no overlap with Batch 1/2/3. Renders into ./out.
set -euo pipefail

mkdir -p out
for n in $(seq 1 20); do
  id="reel-pop-$n"
  echo ">>> rendering $id"
  npx remotion render src/Root.tsx "$id" "out/$id.mp4"
done
echo "Done. 20 files in out/."
