/**
 * Root.tsx — registers one Remotion Composition per reel in campaign.ts.
 * The other session renders these by id; it does not touch the copy.
 *
 *   npx remotion render src/Root.tsx reel-job-costing  out/job-costing.mp4
 *   npx remotion render src/Root.tsx reel-cash-flow    out/cash-flow.mp4
 *   ...one command per reel id (see campaign.ts).
 *
 * To render ALL of them, loop the ids in your shell.
 */

import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {Reel, reelDuration, FPS, WIDTH, HEIGHT} from './Reel';
import {CAMPAIGN} from './campaign';

const RemotionRoot: React.FC = () => (
  <>
    {CAMPAIGN.map((reel) => (
      <Composition
        key={reel.id}
        id={reel.id}
        component={Reel}
        durationInFrames={reelDuration(reel.cards)}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{cards: reel.cards, audio: reel.audio}}
      />
    ))}
  </>
);

registerRoot(RemotionRoot);
