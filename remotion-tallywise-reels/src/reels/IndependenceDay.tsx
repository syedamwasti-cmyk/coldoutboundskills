import React from "react";
import {
  AbsoluteFill,
  interpolate,
  random,
  Sequence,
  useCurrentFrame,
} from "remotion";
import { colors, inter, montserrat } from "../tallywise/theme";
import {
  Backdrop,
  CTAButton,
  EASE_OUT,
  Kicker,
  LogoLockup,
  RiseLine,
  SafeColumn,
  useEnter,
} from "../tallywise/components";

// Warmup / seasonal reel — 4th of July.
// Ties Independence Day to Law 1: if you can't see your numbers, they own you.
// Declare independence from flying blind. Eyes open.

// A muted red for a restrained stars-and-stripes nod; ink + green stay dominant.
const festiveRed = "#e0574e";

const Star: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 1.5l2.9 6.5 7.1.6-5.4 4.7 1.7 6.9L12 17.9 5.7 20.7l1.7-6.9L2 9.1l7.1-.6z" />
  </svg>
);

/** Scattered decorative stars drifting up — purely background, deterministic. */
const StarField: React.FC = () => {
  const frame = useCurrentFrame();
  const stars = new Array(22).fill(0).map((_, i) => {
    const x = random(`x${i}`) * 1080;
    const y = random(`y${i}`) * 1920;
    const size = 10 + random(`s${i}`) * 22;
    const twinkle =
      0.15 +
      0.35 *
        (0.5 + 0.5 * Math.sin((frame / 30) * 2 * Math.PI * 0.5 + i));
    const drift = interpolate(frame, [0, 300], [0, -40]);
    const palette = [colors.green, colors.white, festiveRed];
    const color = palette[i % 3];
    return (
      <div
        key={i}
        style={{
          position: "absolute",
          left: x,
          top: y,
          translate: `0px ${drift * (0.4 + (i % 3) * 0.3)}px`,
          opacity: twinkle,
        }}
      >
        <Star size={size} color={color} />
      </div>
    );
  });
  return <AbsoluteFill>{stars}</AbsoluteFill>;
};

/** Small festive date tag. */
const HolidayTag: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const p = useEnter(delay, 12);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "12px 22px",
        borderRadius: 999,
        backgroundColor: `${colors.white}10`,
        border: `1px solid ${colors.white}1f`,
        opacity: p,
        translate: interpolate(p, [0, 1], ["0px -14px", "0px 0px"]),
        alignSelf: "flex-start",
      }}
    >
      <Star size={22} color={festiveRed} />
      <Star size={22} color={colors.white} />
      <Star size={22} color={colors.green} />
      <span
        style={{
          fontFamily: montserrat,
          fontWeight: 800,
          fontSize: 28,
          letterSpacing: 4,
          color: colors.concreteMute,
          textTransform: "uppercase",
        }}
      >
        July 4 · Independence Day
      </span>
    </div>
  );
};

const HookScene: React.FC = () => (
  <SafeColumn justify="center" align="flex-start" gap={30}>
    <HolidayTag delay={2} />
    <RiseLine delay={12} size={110}>
      This year,
    </RiseLine>
    <RiseLine delay={18} size={110}>
      declare
    </RiseLine>
    <RiseLine delay={24} size={98} color={colors.green}>
      independence
    </RiseLine>
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 22,
        opacity: useEnter(34, 16),
      }}
    >
      <span
        style={{
          fontFamily: montserrat,
          fontWeight: 700,
          fontSize: 60,
          color: colors.concreteMute,
        }}
      >
        from
      </span>
      <span
        style={{
          fontFamily: montserrat,
          fontWeight: 800,
          fontSize: 60,
          color: colors.white,
        }}
      >
        flying blind.
      </span>
    </div>
  </SafeColumn>
);

const TRUTHS = [
  "Money in the bank isn't profit.",
  "Guessing is your most expensive habit.",
  "If you can't see your numbers, they own you.",
];

const TruthRow: React.FC<{ i: number }> = ({ i }) => {
  const p = useEnter(10 + i * 24, 14);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 26,
        opacity: p,
        translate: interpolate(p, [0, 1], ["0px 28px", "0px 0px"]),
      }}
    >
      <div style={{ marginTop: 12 }}>
        <Star size={44} color={colors.green} />
      </div>
      <span
        style={{
          fontFamily: montserrat,
          fontWeight: 800,
          fontSize: 68,
          lineHeight: 1.05,
          color: colors.white,
        }}
      >
        {TRUTHS[i]}
      </span>
    </div>
  );
};

const TruthsScene: React.FC = () => (
  <SafeColumn justify="center" align="flex-start" gap={44}>
    <Kicker delay={0}>We hold these truths to be self-evident</Kicker>
    <div style={{ display: "flex", flexDirection: "column", gap: 46 }}>
      {TRUTHS.map((_, i) => (
        <TruthRow key={i} i={i} />
      ))}
    </div>
  </SafeColumn>
);

const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const logoP = interpolate(frame, [40, 56], [0, 1], {
    easing: EASE_OUT,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <SafeColumn justify="center" align="flex-start" gap={38}>
      <Kicker delay={2}>Eyes open</Kicker>
      <RiseLine delay={8} size={108}>
        Run your business
      </RiseLine>
      <RiseLine delay={14} size={108} color={colors.green}>
        like you own it.
      </RiseLine>
      <div
        style={{
          fontFamily: inter,
          fontWeight: 500,
          fontSize: 40,
          lineHeight: 1.32,
          color: colors.concreteMute,
          maxWidth: 820,
          opacity: useEnter(24, 16),
        }}
      >
        This 4th, trade the guessing for clarity. We'll look at your real numbers
        — you'll leave knowing your next move.
      </div>
      <div style={{ marginTop: 22 }}>
        <CTAButton delay={30} />
      </div>
      <div
        style={{
          marginTop: 38,
          opacity: logoP,
          translate: interpolate(logoP, [0, 1], ["0px 20px", "0px 0px"]),
        }}
      >
        <LogoLockup size={58} />
      </div>
    </SafeColumn>
  );
};

export const IndependenceDay: React.FC = () => {
  return (
    <AbsoluteFill>
      <Backdrop />
      <StarField />
      <Sequence durationInFrames={120}>
        <HookScene />
      </Sequence>
      <Sequence from={120} durationInFrames={220}>
        <TruthsScene />
      </Sequence>
      <Sequence from={340}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};

export const INDEPENDENCE_DAY_DURATION = 340 + 200;
