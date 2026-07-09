import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {Carousel, slideCount, CW, CH} from './Carousel';
import {CAROUSELS} from './carousels';

const RemotionRoot: React.FC = () => (
  <>
    {CAROUSELS.map((c) => (
      <Composition
        key={c.id}
        id={c.id}
        component={Carousel}
        durationInFrames={slideCount(c)}
        fps={1}
        width={CW}
        height={CH}
        defaultProps={{data: c}}
      />
    ))}
  </>
);

registerRoot(RemotionRoot);
