import React from "react";
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from "remotion";
import { colors, inter, montserrat } from "../tallywise/theme";
import {
  AIBadge,
  Backdrop,
  EASE_OUT,
  Kicker,
  RiseLine,
  SafeColumn,
} from "../tallywise/components";
import { Outro } from "../tallywise/Outro";

// Law 11: Your CPA saves you money once a year. We make you money all year.
// The old-way / new-way engine, framed as defense -> offense.

const PAIRS = [
  { old: "Check the bank balance", now: "Check the Monday Number" },
  { old: "Find your margin at year-end", now: "Score every job as you go" },
  { old: "Meet your accountant once a year", now: "In the Boardroom every month" },
  { old: "Bid off your gut", now: "Bid off the number" },
];

const FlipRow: React.FC<{ i: number }> = ({ i }) => {
  const p = PAIRS[i];
  const frame = useCurrentFrame();
  const start = 4 + i * 26;

  const oldIn = interpolate(frame, [start, start + 10], [0, 1], {
    easing: EASE_OUT,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const strike = interpolate(frame, [start + 12, start + 20], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const newIn = interpolate(frame, [start + 16, start + 28], [0, 1], {
    easing: EASE_OUT,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* OLD WAY */}
      <div style={{ position: "relative", opacity: oldIn * (1 - 0.45 * newIn) }}>
        <span
          style={{
            fontFamily: inter,
            fontWeight: 600,
            fontSize: 44,
            color: colors.concreteFaint,
          }}
        >
          {p.old}
        </span>
        <span
          style={{
            position: "absolute",
            left: -4,
            top: "52%",
            height: 5,
            borderRadius: 3,
            backgroundColor: "#f2a1a1",
            width: `${strike}%`,
          }}
        />
      </div>
      {/* NEW WAY */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          opacity: newIn,
          translate: interpolate(newIn, [0, 1], ["40px 0px", "0px 0px"]),
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke={colors.green}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          style={{
            fontFamily: montserrat,
            fontWeight: 800,
            fontSize: 58,
            color: colors.white,
            lineHeight: 1.02,
          }}
        >
          {p.now}
        </span>
      </div>
    </div>
  );
};

const HookScene: React.FC = () => (
  <SafeColumn justify="center" align="flex-start" gap={26}>
    <Kicker delay={2}>Same numbers, different game</Kicker>
    <RiseLine delay={10} size={112} color={colors.concreteMute}>
      Your CPA plays
    </RiseLine>
    <RiseLine delay={16} size={132} color={colors.concreteMute}>
      defense.
    </RiseLine>
    <RiseLine delay={28} size={112}>
      A CFO plays
    </RiseLine>
    <RiseLine delay={34} size={150} color={colors.green}>
      offense.
    </RiseLine>
  </SafeColumn>
);

const FlipScene: React.FC = () => (
  <SafeColumn justify="center" align="flex-start" gap={44}>
    <Kicker delay={0}>Trade the old way for eyes open</Kicker>
    <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>
      {PAIRS.map((_, i) => (
        <FlipRow key={i} i={i} />
      ))}
    </div>
  </SafeColumn>
);

export const OffenseDefense: React.FC = () => {
  return (
    <AbsoluteFill>
      <Backdrop />
      <Sequence durationInFrames={120}>
        <HookScene />
      </Sequence>
      <Sequence from={120} durationInFrames={230}>
        <FlipScene />
      </Sequence>
      <Sequence from={350}>
        <Outro
          line="Your CPA plays defense. We play offense."
          sub="They save you money once a year. We help you make it all year."
        />
      </Sequence>
      <AIBadge />
    </AbsoluteFill>
  );
};

export const OFFENSE_DEFENSE_DURATION = 350 + 200;
