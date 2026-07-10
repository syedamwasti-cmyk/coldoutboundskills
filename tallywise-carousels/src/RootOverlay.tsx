/**
 * RootOverlay.tsx — renders the cover BRANDING as a transparent overlay per carousel.
 * Chip + green headline + wordmark + swipe-dots + legibility scrim, on transparent bg.
 * Drop your illustration BEHIND this overlay in any editor -> matches the reference cover.
 */
import React from 'react';
import {AbsoluteFill, Composition, registerRoot} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {GREEN, WHITE, INK} from '../Reel';
import {CarouselData, CW, CH, slideCount} from './Carousel';
import {CAROUSELS} from './carousels';

const {fontFamily} = loadFont('normal', {weights: ['600', '700', '800'], subsets: ['latin']});

const Overlay: React.FC<{data: CarouselData}> = ({data}) => (
  <AbsoluteFill>
    {/* legibility scrim: dark at top and bottom, transparent middle */}
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
          }}
        >
          {line.map((t, j) => (
            <span key={j}>{t.t}</span>
          ))}
        </span>
      ))}
    </div>
    {/* wordmark */}
    <div style={{position: 'absolute', left: 64, bottom: 66, fontFamily, fontWeight: 800, fontSize: 46}}>
      <span style={{color: WHITE}}>Tally</span>
      <span style={{color: GREEN}}>Wise</span>
    </div>
    {/* swipe dots (first active) */}
    <div style={{position: 'absolute', right: 60, bottom: 78, display: 'flex', gap: 12, alignItems: 'center'}}>
      {Array.from({length: slideCount(data)}).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === 0 ? 34 : 14,
            height: 14,
            borderRadius: 999,
            background: i === 0 ? GREEN : 'rgba(245,245,247,0.55)',
          }}
        />
      ))}
    </div>
  </AbsoluteFill>
);

const RemotionRoot: React.FC = () => (
  <>
    {CAROUSELS.map((c) => (
      <Composition
        key={c.id}
        id={`overlay-${c.id.replace('carousel-', '')}`}
        component={Overlay}
        durationInFrames={1}
        fps={1}
        width={CW}
        height={CH}
        defaultProps={{data: c}}
      />
    ))}
  </>
);

registerRoot(RemotionRoot);
