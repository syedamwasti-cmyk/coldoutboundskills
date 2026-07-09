# Tallywise Reels — Batch 4: Pop-Culture (general small business, render-only)

**20 reels.** Each hook rides a recognizable cultural reference (used as parody /
allusion), then lands the same deadpan point: *know your money.* Not industry-specific —
these fit any small business. The joke punches at the money pain, never the owner.

> Render these; don't rewrite the copy. The references only land because the phrasing is
> exact. Design, logo, and CTA are the same shared files as every other batch.

## Separate batch, zero overlap
- Batch 1 = original 6 topics. Batch 2 = 15 themes (`tallywise-reels/`).
- Batch 3 = contractors (`tallywise-reels-contractors/`).
- **Batch 4 (this one)** = `reel-pop-1 … reel-pop-20`. Own ids, own `out/`.

## The 20 references
1. "This is fine" dog — the P&L on fire
2. Gordon Ramsay — your books are RAW
3. Thanos snap — half your profit vanished (it was fees)
4. "We are once again asking" — where the money went
5. Squid Game — subscriptions eliminating your cash one by one
6. Marie Kondo — does this expense spark joy?
7. The Office "find the difference" — bank balance vs profit
8. Groundhog Day — the cash-flow time loop
9. Jaws — you're gonna need a bigger savings account
10. Titanic iceberg — the slow season you ignored
11. Wolf of Wall Street "sell me this pen" — but what's your margin?
12. Monopoly — do not pass go, do not collect a refund
13. Stranger Things — the Upside Down of profit
14. Inception — a charge inside a charge inside a charge
15. Ron Swanson — the mattress money strategy
16. Jerry Maguire — "show me the money" (it's buried in receipts)
17. Game of Thrones — winter (your slow quarter) is coming
18. Apollo 13 — "Houston, we have a problem" on payroll Friday
19. Hunger Games — may the odds be ever in your margin
20. Shrek — costs have layers like ogres

## Install
```bash
cd tallywise-reels-pop
npm install
```

## Confirm all 20
```bash
npx remotion compositions src/Root.tsx     # must list reel-pop-1 .. -20
```

## Render
```bash
npx remotion render src/Root.tsx reel-pop-1 out/reel-pop-1.mp4   # one
bash render-all.sh                                               # all 20
npx remotion studio src/Root.tsx                                 # preview live
```
Headless / sandbox: add
`--browser-executable=/opt/pw-browsers/chromium-1194/chrome-linux/chrome --chrome-mode=chrome-for-testing --ignore-certificate-errors`.

## Specs (identical to the rest of the campaign)
1080×1920, 30fps, Poppins 800, green `#7ED957`, navy `#2A2740`, your real logo end card.
Each reel ≈ 22.9s (18.8s copy + 4.04s logo). Silent — add music in your editor.
CTA: **Free Cash Flow Dashboard** + **Comment TALLY for the link** (shared, already set).

## A note on the references
These are short parody allusions, not verbatim trademarked slogans — standard practice for
organic social. If any single reference makes you nervous for a paid/boosted post, just skip
that one reel; the batch stands on its own without it.
