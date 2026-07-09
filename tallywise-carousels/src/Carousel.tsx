/**
 * Carousel.tsx — Tallywise Instagram CAROUSEL renderer (design only, render-only).
 *
 * A carousel = ONE illustrated cover slide + N text slides that match the reels.
 * Slide 0 (cover): full-bleed comic illustration + category chip + green headline box.
 * Slides 1..N (interior): the same navy text-card system as the reels.
 * Rendered as STILL PNGs (one per frame), 1080x1350 (4:5).
 *
 * It renders locked COPY DATA (carousels.ts). It never writes copy.
 */

import React from 'react';
import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {NAVY, GREEN, WHITE, INK, Tok, Card} from '../Reel';

const {fontFamily} = loadFont('normal', {weights: ['600', '700', '800'], subsets: ['latin']});

export const CW = 1080;
export const CH = 1350;

// ---- Data shape ----
export type CarouselData = {
  id: string;
  title: string;
  chip: string;              // top-left category chip on the cover
  cover: {
    image?: string;          // filename in public/covers/ (the illustration). Omit -> placeholder.
    headline: Tok[][];       // green-box headline lines on the cover
  };
  slides: Card[];            // interior text slides (same Card shape as reels)
  coverPrompt?: string;      // documentation: the image-gen prompt for the cover
};

export const slideCount = (d: CarouselData) => d.slides.length + 1; // + cover

// ---- shared bits ----
const Wordmark: React.FC = () => (
  <div style={{position: 'absolute', left: 64, bottom: 66, fontFamily, fontWeight: 800, fontSize: 46}}>
    <span style={{color: WHITE}}>Tally</span>
    <span style={{color: GREEN}}>Wise</span>
  </div>
);

const Dots: React.FC<{total: number; active: number}> = ({total, active}) => (
  <div style={{position: 'absolute', right: 60, bottom: 78, display: 'flex', gap: 12, alignItems: 'center'}}>
    {Array.from({length: total}).map((_, i) => (
      <div
        key={i}
        style={{
          width: i === active ? 34 : 14,
          height: 14,
          borderRadius: 999,
          background: i === active ? GREEN : 'rgba(245,245,247,0.32)',
        }}
      />
    ))}
  </div>
);

const Background: React.FC = () => (
  <AbsoluteFill
    style={{
      background: [
        'radial-gradient(85% 45% at 50% 16%, rgba(126,217,87,0.10), rgba(126,217,87,0) 60%)',
        'radial-gradient(120% 80% at 50% 12%, #34314c 0%, #2b2842 55%, #241f36 100%)',
      ].join(','),
    }}
  />
);

// ---- COVER (slide 0) ----
const CoverArt: React.FC<{image?: string}> = ({image}) => {
  if (image) {
    return <Img src={staticFile(`covers/${image}`)} style={{width: '100%', height: '100%', objectFit: 'cover'}} />;
  }
  // placeholder so the layout is visible before the illustration is dropped in
  return (
    <AbsoluteFill
      style={{
        background: 'radial-gradient(120% 90% at 50% 55%, #3a3654 0%, #262238 60%, #1b1830 100%)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          border: `4px dashed rgba(245,245,247,0.28)`,
          borderRadius: 24,
          padding: '48px 60px',
          color: 'rgba(245,245,247,0.55)',
          fontFamily,
          fontWeight: 700,
          fontSize: 40,
          textAlign: 'center',
          lineHeight: 1.3,
        }}
      >
        [ illustrated cover art
        <br />
        drops in here ]
      </div>
    </AbsoluteFill>
  );
};

const Cover: React.FC<{data: CarouselData}> = ({data}) => (
  <AbsoluteFill style={{backgroundColor: NAVY}}>
    <CoverArt image={data.cover.image} />
    {/* legibility scrim: dark at top and bottom */}
    <AbsoluteFill
      style={{
        background:
          'linear-gradient(180deg, rgba(20,17,34,0.88) 0%, rgba(20,17,34,0.35) 26%, rgba(20,17,34,0) 44%, rgba(20,17,34,0) 66%, rgba(20,17,34,0.82) 100%)',
      }}
    />
    {/* category chip */}
    <div style={{position: 'absolute', top: 74, left: 64}}>
      <span
        style={{
          background: WHITE,
          color: INK,
          fontFamily,
          fontWeight: 800,
          fontSize: 30,
          letterSpacing: 2.5,
          padding: '12px 20px',
          textTransform: 'uppercase',
          display: 'inline-block',
        }}
      >
        {data.chip}
      </span>
    </div>
    {/* green headline boxes */}
    <div
      style={{
        position: 'absolute',
        top: 140,
        left: 64,
        right: 64,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,
      }}
    >
      {data.cover.headline.map((line, i) => (
        <span
          key={i}
          style={{
            background: GREEN,
            color: WHITE,
            fontFamily,
            fontWeight: 800,
            fontSize: 92,
            lineHeight: 1.02,
            padding: '4px 18px',
            boxDecorationBreak: 'clone',
          }}
        >
          {line.map((t, j) => (
            <span key={j}>{t.t}</span>
          ))}
        </span>
      ))}
    </div>
    <Wordmark />
    <Dots total={slideCount(data)} active={0} />
  </AbsoluteFill>
);

// ---- CTA block (matches the reels) ----
const CTA_SUB = {pre: 'Comment ', hi: 'TALLY', post: ' for the link'};
const CTABlock: React.FC<{text: string}> = ({text}) => (
  <div style={{marginTop: 44, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26}}>
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 22,
        background: GREEN,
        color: INK,
        fontFamily,
        fontWeight: 800,
        fontSize: 46,
        padding: '26px 52px',
        borderRadius: 999,
      }}
    >
      <span
        style={{
          width: 0,
          height: 0,
          borderTop: '17px solid transparent',
          borderBottom: '17px solid transparent',
          borderLeft: `26px solid ${INK}`,
        }}
      />
      {text}
    </div>
    <div style={{fontFamily, fontWeight: 600, fontSize: 40, color: WHITE}}>
      {CTA_SUB.pre}
      <span style={{color: GREEN, fontWeight: 800}}>{CTA_SUB.hi}</span>
      {CTA_SUB.post}
    </div>
  </div>
);

// ---- INTERIOR text slide (static, full-visible for stills) ----
const InteriorSlide: React.FC<{card: Card; total: number; active: number}> = ({card, total, active}) => {
  const fs = card.fontSize ?? 100;
  return (
    <AbsoluteFill style={{backgroundColor: NAVY}}>
      <Background />
      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: '0 80px'}}>
        <div style={{textAlign: 'center', transform: `translateY(${card.cta ? -40 : 0}px)`}}>
          {card.lines.map((line, i) => (
            <div key={i} style={{fontFamily, fontWeight: 800, fontSize: fs, lineHeight: 1.12}}>
              {line.map((tok, j) => (
                <span key={j} style={{color: tok.g || card.allGreen ? GREEN : WHITE}}>
                  {tok.t}
                </span>
              ))}
            </div>
          ))}
          {card.cta ? <CTABlock text={card.cta} /> : null}
        </div>
      </AbsoluteFill>
      <Wordmark />
      <Dots total={total} active={active} />
    </AbsoluteFill>
  );
};

// ---- The carousel: frame 0 = cover, frame k = interior slide k-1 ----
export const Carousel: React.FC<{data: CarouselData}> = ({data}) => {
  const frame = useCurrentFrame();
  const total = slideCount(data);
  if (frame <= 0) return <Cover data={data} />;
  const idx = Math.min(frame - 1, data.slides.length - 1);
  return <InteriorSlide card={data.slides[idx]} total={total} active={frame} />;
};
