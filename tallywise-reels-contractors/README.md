# Tallywise Reels — Batch 3: Construction / Contractors (render-only)

**20 reels, built to be funny.** Deadpan, confident, in-group. Every joke punches at
the *pain* — bad math, floated payroll, the glovebox, retainage on someone's couch —
never at the contractor. It's the Manhattan-Mini-Storage voice pointed at a job site.

> Render these; don't rewrite the copy. The wording in `src/campaign.ts` is locked —
> the punchlines only land because the phrasing is exact. Design, logo, and CTA are the
> same shared files as every other batch, so these stay identical to the rest.

## Separate batch, zero overlap
- **Batch 1** = the original 6 topics (cashflow, forecasting, estimating, jobcosting, taxes, payroll).
- **Batch 2** = 15 other themes (`tallywise-reels/`).
- **Batch 3 (this one)** = `reel-contractor-1 … reel-contractor-20`. Different ids, own `out/`.

## The 20 punchlines
1. The driveway change order (a handshake isn't a paper trail)
2. Bookkeeping by glovebox → shoebox at tax time
3. Getting paid for March = an echo, not cash flow
4. Deposits rotating job-to-job ("you're not profitable, you're rotating")
5. Won the bid = won a loss
6. Booked eight weeks out and dead broke
7. Bid the lumber in January, built it in June
8. A bank that framed a house for free (retainage)
9. Job profit as a surprise party
10. Everybody eats Friday except the guy signing checks
11. Quoting by the square foot from memory
12. "I'll do the books this winter"
13. Nine subs, no 1099s
14. The truck/trailer/skid-steer overhead no job "sees"
15. The free trip back for the punch list
16. Revenue doubled, bank account didn't (you grew a treadmill)
17. The accountant called — it's not good news
18. Personal + business = one sad account
19. Saturday math (unpaid overtime on quotes)
20. Checking profit by staring at the bank balance (the mirage)

## Install
```bash
cd tallywise-reels-contractors
npm install
```

## Confirm all 20
```bash
npx remotion compositions src/Root.tsx     # must list reel-contractor-1 .. -20
```

## Render
```bash
npx remotion render src/Root.tsx reel-contractor-1 out/reel-contractor-1.mp4   # one
bash render-all.sh                                                             # all 20
npx remotion studio src/Root.tsx                                               # preview live
```
Headless / sandbox: add
`--browser-executable=/opt/pw-browsers/chromium-1194/chrome-linux/chrome --chrome-mode=chrome-for-testing --ignore-certificate-errors`.

## Specs (identical to the rest of the campaign)
1080×1920, 30fps, Poppins 800, green `#7ED957`, navy `#2A2740`, your real logo end card.
Each reel ≈ 22.9s (18.8s copy + 4.04s logo). Silent — add music in your editor.
CTA: **Free Cash Flow Dashboard** + **Comment TALLY for the link** (already set, shared).
