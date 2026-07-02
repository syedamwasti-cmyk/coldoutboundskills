# TallyWise — Education Reels (Remotion)

Short-form vertical education reels for **TallyWise** ("Balancing Success"),
built with [Remotion](https://remotion.dev) using the
[remotion-dev/skills](https://github.com/remotion-dev/skills) best-practices skill.

**Audience:** owner-led small businesses at roughly **$1M–$10M in revenue** who
need clarity on their accounting and a plan to scale. Industry-agnostic — no
construction-specific framing — so the set works across the whole ICP.

**Format:** 1080 × 1920 (9:16 vertical), 30 fps, ~18s each. Ink-dominant palette
with a green accent, Montserrat headers, Inter body — straight from the TallyWise
brand voice guide.

## The five reels

Each reel ties back to one of the "13 Laws" / the old-way→eyes-open contrast and
lands on `Book a Clarity Session`.

| # | Composition ID | Hook → payoff | Law |
|---|----------------|---------------|-----|
| 01 | `RevenueMarginCash` | "Three words decide if you make it" → **Revenue is vanity. Margin is sanity. Cash is survival.** | 7 |
| 02 | `MoneyInBank` | A $284k balance, minus what it's already promised to → **Money in the bank isn't profit.** | 10 |
| 03 | `FlyingBlind` | "You crossed $1M on hustle — you won't cross $10M the same way" → the 5-number Monday dashboard → **You can't scale what you can't see.** | 1, 4 |
| 04 | `ProfitIsADecision` | Most owners meet their profit in March → decide it, price to it, check it weekly → **Profit is a decision, not a year-end surprise.** | 6 |
| 05 | `OffenseDefense` | Old way → eyes open, four flips → **Your CPA plays defense. We play offense.** | 11 |

> Reel 02 uses an **illustrative** example (labelled on-screen). Per the TallyWise
> hard rule, no real client or specific result is invented.

## Rendered files

Pre-rendered MP4s live in [`renders/`](./renders). Re-render any time from source.

## Develop / preview

```bash
npm install
npm run dev            # opens Remotion Studio
```

## Render

```bash
# one reel
npx remotion render RevenueMarginCash out/RevenueMarginCash.mp4
# a still to sanity-check a frame
npx remotion still FlyingBlind out/frame.png --frame=300
```

## Project layout

```
src/
  Root.tsx                 # registers the 5 compositions (1080x1920 @ 30fps)
  reels/                   # one file per reel
  tallywise/
    theme.ts               # brand colors + local font loading
    components.tsx         # Backdrop, Kicker, LogoLockup, CTAButton, AIBadge, ...
    Outro.tsx              # shared closing scene (payoff + CTA + logo)
public/fonts/              # Montserrat + Inter (bundled, variable woff2)
```

## Environment notes

`remotion.config.ts` points Chromium at the environment's pre-installed
`headless_shell` and bundles fonts locally so rendering needs no network at
render time. Override the browser with `REMOTION_BROWSER_EXECUTABLE` if needed.
