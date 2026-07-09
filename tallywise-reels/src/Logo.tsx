/**
 * Logo.tsx — the SHARED logo sting. Every reel ends with THIS, so all reels are identical.
 *
 * Default: plays your real logo animation (public/logo-sting.mp4, extracted from your reference reel).
 * If you'd rather use your own Remotion logo component, replace the body of <Logo/> with it and
 * set LOGO_DUR to its length in frames. Change it in ONE place → all reels update together.
 */

import React from 'react';
import {AbsoluteFill, OffthreadVideo, staticFile} from 'remotion';

// Length of the logo sting in frames (30fps). Your end card is 4.04s -> 121 frames.
export const LOGO_DUR = 121;

export const Logo: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#0f1830'}}>
    <OffthreadVideo src={staticFile('logo-sting.mp4')} muted />
  </AbsoluteFill>
);
