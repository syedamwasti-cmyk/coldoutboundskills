/**
 * RootBanner.tsx — 33"x80" retractable standing banner (industry-agnostic, evergreen).
 * Aspect 33:80 (0.4125). Proof renders at 1650x4000; scale up for print.
 * Vertical zoning: logo+headline top (eye level), QR in the middle third (reachable),
 * only non-critical tagline near the bottom (blocked by tables/foot traffic).
 */
import React from 'react';
import {AbsoluteFill, Img, staticFile, Composition, registerRoot} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Poppins';
import {NAVY, GREEN, WHITE, INK} from '../Reel';

const {fontFamily} = loadFont('normal', {weights: ['600', '700', '800'], subsets: ['latin']});

export const BW = 1650;
export const BH = 4000;

const Banner: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: NAVY}}>
    {/* brand background: navy with green top glow */}
    <AbsoluteFill
      style={{
        background: [
          'radial-gradient(70% 22% at 50% 8%, rgba(126,217,87,0.16), rgba(126,217,87,0) 60%)',
          'radial-gradient(120% 60% at 50% 6%, #34314c 0%, #2b2842 45%, #201d31 100%)',
        ].join(','),
      }}
    />
    {/* top + bottom green accent rules */}
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 26, background: GREEN}} />
    <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 26, background: GREEN}} />

    {/* ===== TOP ZONE (eye level): wordmark + eyebrow + headline + subhead ===== */}
    <div style={{position: 'absolute', top: 150, left: 0, right: 0, textAlign: 'center', fontFamily, fontWeight: 800, fontSize: 108}}>
      <span style={{color: WHITE}}>Tally</span>
      <span style={{color: GREEN}}>Wise</span>
    </div>

    <div style={{position: 'absolute', top: 360, left: 0, right: 0, textAlign: 'center'}}>
      <span
        style={{
          background: WHITE, color: INK, fontFamily, fontWeight: 800, fontSize: 40,
          letterSpacing: 3, padding: '14px 26px', textTransform: 'uppercase',
        }}
      >
        Accounting + Fractional CFO
      </span>
    </div>

    <div style={{position: 'absolute', top: 560, left: 80, right: 80, textAlign: 'center', fontFamily, fontWeight: 800, lineHeight: 1.0}}>
      <div style={{color: WHITE, fontSize: 190}}>Stop flying</div>
      <div style={{color: GREEN, fontSize: 250, marginTop: 6}}>blind.</div>
    </div>

    <div style={{position: 'absolute', top: 1120, left: 120, right: 120, textAlign: 'center', fontFamily, fontWeight: 700, fontSize: 76, lineHeight: 1.25, color: WHITE}}>
      Know your <span style={{color: GREEN, fontWeight: 800}}>numbers.</span><br />
      Keep more of them.
    </div>

    {/* ===== MIDDLE ZONE (reachable): CTA pill + QR card ===== */}
    <div style={{position: 'absolute', top: 1620, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}>
      <div
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 26, background: GREEN, color: INK,
          fontFamily, fontWeight: 800, fontSize: 62, padding: '30px 60px', borderRadius: 999,
        }}
      >
        <span style={{width: 0, height: 0, borderTop: '22px solid transparent', borderBottom: '22px solid transparent', borderLeft: `34px solid ${INK}`}} />
        Free Cash Flow Dashboard
      </div>
    </div>

    <div
      style={{
        position: 'absolute', top: 1800, left: '50%', transform: 'translateX(-50%)',
        width: 1040, background: WHITE, borderRadius: 48, padding: '70px 60px 56px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
      }}
    >
      <Img src={staticFile('banner/qr.png')} style={{width: 720, height: 720, imageRendering: 'pixelated'}} />
      <div style={{fontFamily, fontWeight: 800, fontSize: 76, color: INK, marginTop: 34, textAlign: 'center', lineHeight: 1.08}}>
        Scan for your free<br />Cash Flow Dashboard
      </div>
      <div style={{fontFamily, fontWeight: 600, fontSize: 46, color: '#5b5872', marginTop: 20}}>
        No email. Yours to keep.
      </div>
    </div>

    {/* ===== BOTTOM ZONE (non-critical, table/traffic height): tagline ===== */}
    <div style={{position: 'absolute', top: 3560, left: 100, right: 100, textAlign: 'center', fontFamily, fontWeight: 700, fontSize: 58, color: 'rgba(245,245,247,0.9)', lineHeight: 1.3}}>
      Real bookkeeping + a CFO in your corner<br />for small businesses.
    </div>
  </AbsoluteFill>
);

// ===== OUTCOMES-FIRST VARIANT =====
const Tick: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 30, marginTop: 34}}>
    <div style={{width: 74, height: 74, borderRadius: 999, background: GREEN, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{width: 30, height: 16, borderLeft: `9px solid ${INK}`, borderBottom: `9px solid ${INK}`, transform: 'rotate(-45deg) translate(2px,-4px)'}} />
    </div>
    <div style={{fontFamily, fontWeight: 700, fontSize: 66, color: WHITE}}>{children}</div>
  </div>
);

const BannerOutcomes: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: NAVY}}>
    <AbsoluteFill
      style={{
        background: [
          'radial-gradient(70% 22% at 50% 8%, rgba(126,217,87,0.16), rgba(126,217,87,0) 60%)',
          'radial-gradient(120% 60% at 50% 6%, #34314c 0%, #2b2842 45%, #201d31 100%)',
        ].join(','),
      }}
    />
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 26, background: GREEN}} />
    <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 26, background: GREEN}} />

    {/* TOP: wordmark + chip + outcome headline */}
    <div style={{position: 'absolute', top: 150, left: 0, right: 0, textAlign: 'center', fontFamily, fontWeight: 800, fontSize: 108}}>
      <span style={{color: WHITE}}>Tally</span><span style={{color: GREEN}}>Wise</span>
    </div>
    <div style={{position: 'absolute', top: 360, left: 0, right: 0, textAlign: 'center'}}>
      <span style={{background: WHITE, color: INK, fontFamily, fontWeight: 800, fontSize: 40, letterSpacing: 3, padding: '14px 26px', textTransform: 'uppercase'}}>
        Accounting + Fractional CFO
      </span>
    </div>
    <div style={{position: 'absolute', top: 560, left: 80, right: 80, textAlign: 'center', fontFamily, fontWeight: 800, lineHeight: 1.0}}>
      <div style={{color: WHITE, fontSize: 200}}>Keep more</div>
      <div style={{color: WHITE, fontSize: 200, marginTop: 4}}>of what you</div>
      <div style={{color: GREEN, fontSize: 236, marginTop: 4}}>earn.</div>
    </div>

    {/* outcomes list */}
    <div style={{position: 'absolute', top: 1360, left: 300, right: 120}}>
      <Tick>Know your real profit</Tick>
      <Tick>Get paid faster</Tick>
      <Tick>Pay yourself first</Tick>
      <Tick>No April tax surprises</Tick>
    </div>

    {/* MIDDLE: pill + QR */}
    <div style={{position: 'absolute', top: 2020, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}>
      <div style={{display: 'inline-flex', alignItems: 'center', gap: 26, background: GREEN, color: INK, fontFamily, fontWeight: 800, fontSize: 60, padding: '30px 58px', borderRadius: 999}}>
        <span style={{width: 0, height: 0, borderTop: '22px solid transparent', borderBottom: '22px solid transparent', borderLeft: `34px solid ${INK}`}} />
        Start free in 60 seconds
      </div>
    </div>
    <div style={{position: 'absolute', top: 2200, left: '50%', transform: 'translateX(-50%)', width: 1040, background: WHITE, borderRadius: 48, padding: '70px 60px 56px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 30px 80px rgba(0,0,0,0.35)'}}>
      <Img src={staticFile('banner/qr.png')} style={{width: 700, height: 700, imageRendering: 'pixelated'}} />
      <div style={{fontFamily, fontWeight: 800, fontSize: 74, color: INK, marginTop: 32, textAlign: 'center', lineHeight: 1.08}}>
        Scan for your free<br />Cash Flow Dashboard
      </div>
      <div style={{fontFamily, fontWeight: 600, fontSize: 46, color: '#5b5872', marginTop: 18}}>See where you stand — today.</div>
    </div>

    {/* BOTTOM: tagline */}
    <div style={{position: 'absolute', top: 3620, left: 100, right: 100, textAlign: 'center', fontFamily, fontWeight: 700, fontSize: 58, color: 'rgba(245,245,247,0.9)', lineHeight: 1.3}}>
      Real bookkeeping + a CFO in your corner.
    </div>
  </AbsoluteFill>
);

// ===== BLENDED VARIANT: pain hook -> outcome payoff -> proof =====
const BannerBlend: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: NAVY}}>
    <AbsoluteFill
      style={{
        background: [
          'radial-gradient(70% 22% at 50% 8%, rgba(126,217,87,0.16), rgba(126,217,87,0) 60%)',
          'radial-gradient(120% 60% at 50% 6%, #34314c 0%, #2b2842 45%, #201d31 100%)',
        ].join(','),
      }}
    />
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 26, background: GREEN}} />
    <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 26, background: GREEN}} />

    <div style={{position: 'absolute', top: 150, left: 0, right: 0, textAlign: 'center', fontFamily, fontWeight: 800, fontSize: 108}}>
      <span style={{color: WHITE}}>Tally</span><span style={{color: GREEN}}>Wise</span>
    </div>
    <div style={{position: 'absolute', top: 360, left: 0, right: 0, textAlign: 'center'}}>
      <span style={{background: WHITE, color: INK, fontFamily, fontWeight: 800, fontSize: 40, letterSpacing: 3, padding: '14px 26px', textTransform: 'uppercase'}}>
        Accounting + Fractional CFO
      </span>
    </div>

    {/* eyebrow (deadpan pain) */}
    <div style={{position: 'absolute', top: 540, left: 0, right: 0, textAlign: 'center', fontFamily, fontWeight: 800, fontSize: 44, letterSpacing: 4, color: GREEN, textTransform: 'uppercase'}}>
      Still running on a gut feeling?
    </div>
    {/* pain headline */}
    <div style={{position: 'absolute', top: 640, left: 80, right: 80, textAlign: 'center', fontFamily, fontWeight: 800, lineHeight: 0.98}}>
      <div style={{color: WHITE, fontSize: 172}}>Stop flying</div>
      <div style={{color: GREEN, fontSize: 210, marginTop: 2}}>blind.</div>
    </div>
    {/* outcome payoff */}
    <div style={{position: 'absolute', top: 1160, left: 110, right: 110, textAlign: 'center', fontFamily, fontWeight: 800, fontSize: 92, lineHeight: 1.12, color: WHITE}}>
      Keep more of what<br />you <span style={{color: GREEN}}>earn.</span>
    </div>

    {/* proof ticks */}
    <div style={{position: 'absolute', top: 1560, left: 330, right: 120}}>
      <Tick>Know your real profit</Tick>
      <Tick>Get paid faster</Tick>
      <Tick>No April tax surprises</Tick>
    </div>

    {/* pill + QR */}
    <div style={{position: 'absolute', top: 2040, left: 0, right: 0, display: 'flex', justifyContent: 'center'}}>
      <div style={{display: 'inline-flex', alignItems: 'center', gap: 26, background: GREEN, color: INK, fontFamily, fontWeight: 800, fontSize: 60, padding: '30px 58px', borderRadius: 999}}>
        <span style={{width: 0, height: 0, borderTop: '22px solid transparent', borderBottom: '22px solid transparent', borderLeft: `34px solid ${INK}`}} />
        Start free in 60 seconds
      </div>
    </div>
    <div style={{position: 'absolute', top: 2220, left: '50%', transform: 'translateX(-50%)', width: 1040, background: WHITE, borderRadius: 48, padding: '70px 60px 56px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 30px 80px rgba(0,0,0,0.35)'}}>
      <Img src={staticFile('banner/qr.png')} style={{width: 700, height: 700, imageRendering: 'pixelated'}} />
      <div style={{fontFamily, fontWeight: 800, fontSize: 74, color: INK, marginTop: 32, textAlign: 'center', lineHeight: 1.08}}>
        Scan for your free<br />Cash Flow Dashboard
      </div>
      <div style={{fontFamily, fontWeight: 600, fontSize: 46, color: '#5b5872', marginTop: 18}}>See where you stand — today.</div>
    </div>

    <div style={{position: 'absolute', top: 3640, left: 100, right: 100, textAlign: 'center', fontFamily, fontWeight: 700, fontSize: 58, color: 'rgba(245,245,247,0.9)', lineHeight: 1.3}}>
      Real bookkeeping + a CFO in your corner.
    </div>
  </AbsoluteFill>
);

const RemotionRoot: React.FC = () => (
  <>
    <Composition id="banner" component={Banner} durationInFrames={1} fps={1} width={BW} height={BH} />
    <Composition id="banner-outcomes" component={BannerOutcomes} durationInFrames={1} fps={1} width={BW} height={BH} />
    <Composition id="banner-blend" component={BannerBlend} durationInFrames={1} fps={1} width={BW} height={BH} />
  </>
);

registerRoot(RemotionRoot);
