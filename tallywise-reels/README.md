# Tallywise Reels — Batch 2 (render-only)

**75 reels, 15 new themes.** This is Batch 2. It deliberately does **not** contain the
original 6 topics (cashflow, forecasting, estimating, jobcosting, taxes, payroll) — those
are Batch 1 and are already rendering elsewhere. There is **zero overlap**.

> Render these; don't rewrite the copy. Every word in `src/campaign.ts` is locked and
> intentional. The design, logo, and CTA are shared so all reels stay identical.

## Why the reels can't drift
There is exactly ONE of each shared piece — change it once, every reel updates:

| Shared thing | Lives in |
| --- | --- |
| Design + motion (bg, Poppins, green, spring-ins, progress bar, wordmark) | `src/Reel.tsx` |
| Logo end card (your real animation) | `src/Logo.tsx` + `public/logo-sting.mp4` |
| CTA button text (`Free Cash Flow Dashboard`) | `CTA` constant in `src/campaign.ts` |
| CTA sub-line (`Comment TALLY for the link`) | `CTA_SUB` in `src/Reel.tsx` |
| The words for each reel | `src/campaign.ts` (locked data) |

The only thing that differs between reels is the text data. Same component + same logo +
same CTA = they cannot look inconsistent.

## Install
```bash
cd tallywise-reels
npm install
```

## Confirm you have all 75 (not 30)
```bash
npx remotion compositions src/Root.tsx    # must list 75 ids
```
Themes (5 reels each): `subscriptions cardfees classification turnover marketing ownerpay
trades restaurant ecom agency salon dental gym realestate trucking`.

## Render
```bash
npx remotion render src/Root.tsx reel-trades-1 out/reel-trades-1.mp4   # one
bash render-all.sh                                                      # all 75
npx remotion studio src/Root.tsx                                        # preview live
```

### Headless / sandbox render notes
If Chromium can't download, point Remotion at a local Chrome and relax the Google-Fonts TLS:
```bash
npx remotion render src/Root.tsx reel-trades-1 out/reel-trades-1.mp4 \
  --browser-executable=/opt/pw-browsers/chromium-1194/chrome-linux/chrome \
  --chrome-mode=chrome-for-testing \
  --ignore-certificate-errors
```

## Specs (match the reference reel)
1080×1920, 30fps. Poppins 800, green `#7ED957`, navy `#2A2740`, logo = your real end card.
Each reel ≈ 22.9s (18.8s copy + 4.04s logo). Reels render **silent** — add music in your
editor, or set `audio: 'track.m4a'` on a reel (file in `public/`).

## CTA (already set, identical on all 75)
- Pill: **Free Cash Flow Dashboard** → `CTA` in `src/campaign.ts`
- Sub-line: **Comment TALLY for the link** → `CTA_SUB` in `src/Reel.tsx` (TALLY auto-green)
