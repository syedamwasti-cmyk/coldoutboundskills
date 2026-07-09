/**
 * Reel.tsx — reusable Tallywise reel renderer (design/motion only).
 * It renders whatever COPY DATA you hand it. It never writes copy.
 * Pair it with campaign.ts (the locked copy) and Root.tsx (registers one composition per reel).
 */

import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {Logo, LOGO_DUR} from './Logo';

const {fontFamily} = loadFont('normal', {weights: ['600', '700', '800'], subsets: ['latin']});

// ---- Design tokens (sampled from the reference reel) ----
export const NAVY = '#2A2740';
export const GREEN = '#7ED957';
export const WHITE = '#F5F5F7';
export const INK = '#1E1C2E';
export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;
// LOGO_DUR is imported from ./Logo (single source of truth for the sting length)

// ---- Data shapes ----
export type Tok = {t: string; g?: boolean};
export type Card = {
  lines: Tok[][];
  dur: number;
  fontSize?: number;
  allGreen?: boolean;
  cta?: string;
};
export type ReelData = {
  id: string;
  title: string;
  cards: Card[];
  audio?: string; // filename in public/, optional
};

// duration helper used by Root to size each Composition
export const reelDuration = (cards: Card[]) => cards.reduce((a, c) => a + c.dur, 0) + LOGO_DUR;

// ---- Background: navy with subtle green top-center glow ----
const Background: React.FC = () => (
  <AbsoluteFill
    style={{
      background: [
        'radial-gradient(85% 50% at 50% 14%, rgba(126,217,87,0.10), rgba(126,217,87,0) 60%)',
        'radial-gradient(120% 80% at 50% 12%, #34314c 0%, #2b2842 55%, #241f36 100%)',
      ].join(','),
    }}
  />
);

const Wordmark: React.FC = () => (
  <div style={{position: 'absolute', left: 60, bottom: 96, fontFamily, fontWeight: 800, fontSize: 52}}>
    <span style={{color: WHITE}}>Tally</span>
    <span style={{color: GREEN}}>Wise</span>
  </div>
);

const ProgressBar: React.FC<{total: number}> = ({total}) => {
  const frame = useCurrentFrame();
  const w = interpolate(frame, [0, total], [0, WIDTH], {extrapolateRight: 'clamp'});
  return <div style={{position: 'absolute', left: 0, bottom: 0, height: 10, width: w, background: GREEN}} />;
};

// Sub-line under the pill — the same on every reel (the engagement mechanic).
const CTA_SUB = {pre: 'Comment ', hi: 'TALLY', post: ' for the link'};

const CTA: React.FC<{text: string}> = ({text}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({frame: frame - 8, fps, config: {damping: 14, stiffness: 130}});
  const scale = interpolate(s, [0, 1], [0.8, 1]);
  return (
    <div style={{marginTop: 44, transform: `scale(${scale})`, opacity: s, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26}}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 22,
          background: GREEN,
          color: INK,
          fontFamily,
          fontWeight: 800,
          fontSize: 48,
          padding: '28px 56px',
          borderRadius: 999,
        }}
      >
        <span
          style={{
            width: 0,
            height: 0,
            borderTop: '18px solid transparent',
            borderBottom: '18px solid transparent',
            borderLeft: `28px solid ${INK}`,
          }}
        />
        {text}
      </div>
      <div style={{fontFamily, fontWeight: 600, fontSize: 42, color: WHITE}}>
        {CTA_SUB.pre}
        <span style={{color: GREEN, fontWeight: 800}}>{CTA_SUB.hi}</span>
        {CTA_SUB.post}
      </div>
    </div>
  );
};

const CardView: React.FC<{card: Card}> = ({card}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const fs = card.fontSize ?? 108;
  return (
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: '0 80px'}}>
      <div style={{textAlign: 'center', transform: `translateY(${card.cta ? -50 : 0}px)`}}>
        {card.lines.map((line, i) => {
          const s = spring({frame: frame - i * 4, fps, config: {damping: 200}});
          const y = interpolate(s, [0, 1], [28, 0]);
          return (
            <div
              key={i}
              style={{fontFamily, fontWeight: 800, fontSize: fs, lineHeight: 1.12, opacity: s, transform: `translateY(${y}px)`}}
            >
              {line.map((tok, j) => (
                <span key={j} style={{color: tok.g || card.allGreen ? GREEN : WHITE}}>
                  {tok.t}
                </span>
              ))}
            </div>
          );
        })}
        {card.cta ? <CTA text={card.cta} /> : null}
      </div>
    </AbsoluteFill>
  );
};

// The logo sting lives in ./Logo (your real animation). Imported above as <Logo/>.

// ---- The reusable reel. Feed it locked copy data. ----
export const Reel: React.FC<{cards: Card[]; audio?: string}> = ({cards, audio}) => {
  const contentDur = cards.reduce((a, c) => a + c.dur, 0);
  let from = 0;
  const cardSeqs = cards.map((card, idx) => {
    const el = (
      <Sequence key={idx} from={from} durationInFrames={card.dur}>
        <Background />
        <CardView card={card} />
        <Wordmark />
      </Sequence>
    );
    from += card.dur;
    return el;
  });
  return (
    <AbsoluteFill style={{backgroundColor: NAVY}}>
      {audio ? <Audio src={staticFile(audio)} /> : null}
      {cardSeqs}
      <Sequence from={contentDur} durationInFrames={LOGO_DUR}>
        <Logo />
      </Sequence>
      <Sequence from={0} durationInFrames={contentDur}>
        <ProgressBar total={contentDur} />
      </Sequence>
    </AbsoluteFill>
  );
};
