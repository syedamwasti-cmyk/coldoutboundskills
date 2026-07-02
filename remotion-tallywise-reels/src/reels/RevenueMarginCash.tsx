import React from "react";
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from "remotion";
import { colors, inter, montserrat } from "../tallywise/theme";
import {
  Backdrop,
  Kicker,
  RiseLine,
  SafeColumn,
  useEnter,
} from "../tallywise/components";
import { Outro } from "../tallywise/Outro";

// Law 7: Revenue is vanity. Margin is sanity. Cash is survival.

const TIERS = [
  {
    word: "Revenue",
    tag: "is vanity",
    note: "The number you brag about at dinner.",
    color: colors.concreteMute,
  },
  {
    word: "Margin",
    tag: "is sanity",
    note: "What's actually left after the job is done.",
    color: colors.white,
  },
  {
    word: "Cash",
    tag: "is survival",
    note: "What keeps the doors open on the 1st.",
    color: colors.green,
  },
];

const Tier: React.FC<{ i: number }> = ({ i }) => {
  const t = TIERS[i];
  const p = useEnter(6 + i * 22, 16);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        opacity: p,
        translate: interpolate(p, [0, 1], ["-40px 0px", "0px 0px"]),
        borderLeft: `8px solid ${t.color}`,
        paddingLeft: 34,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 22 }}>
        <span
          style={{
            fontFamily: montserrat,
            fontWeight: 900,
            fontSize: 118,
            color: t.color,
            lineHeight: 1,
          }}
        >
          {t.word}
        </span>
        <span
          style={{
            fontFamily: montserrat,
            fontWeight: 600,
            fontSize: 56,
            color: colors.concreteMute,
          }}
        >
          {t.tag}
        </span>
      </div>
      <span
        style={{
          fontFamily: inter,
          fontWeight: 500,
          fontSize: 36,
          color: colors.concreteFaint,
        }}
      >
        {t.note}
      </span>
    </div>
  );
};

const HookScene: React.FC = () => (
  <SafeColumn justify="center" align="flex-start" gap={34}>
    <Kicker delay={2}>Know your number</Kicker>
    <RiseLine delay={10} size={118}>
      Three words
    </RiseLine>
    <RiseLine delay={18} size={118} color={colors.green}>
      decide if you make it.
    </RiseLine>
    <div
      style={{
        fontFamily: inter,
        fontWeight: 500,
        fontSize: 40,
        color: colors.concreteMute,
        opacity: useEnter(30, 16),
      }}
    >
      Every $1M–$10M owner should be able to recite them.
    </div>
  </SafeColumn>
);

const TiersScene: React.FC = () => {
  const frame = useCurrentFrame();
  const punch = interpolate(frame, [78, 96], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <SafeColumn justify="center" align="flex-start" gap={58}>
      {TIERS.map((_, i) => (
        <Tier key={i} i={i} />
      ))}
      <div
        style={{
          fontFamily: montserrat,
          fontWeight: 700,
          fontSize: 46,
          color: colors.white,
          marginTop: 10,
          opacity: punch,
          translate: `0px ${interpolate(punch, [0, 1], [24, 0])}px`,
        }}
      >
        Money in the bank feels like a win.{" "}
        <span style={{ color: colors.green }}>It isn't the score.</span>
      </div>
    </SafeColumn>
  );
};

export const RevenueMarginCash: React.FC = () => {
  return (
    <AbsoluteFill>
      <Backdrop />
      <Sequence durationInFrames={110}>
        <HookScene />
      </Sequence>
      <Sequence from={110} durationInFrames={230}>
        <TiersScene />
      </Sequence>
      <Sequence from={340}>
        <Outro line="Revenue is vanity. Margin is sanity. Cash is survival." />
      </Sequence>
    </AbsoluteFill>
  );
};

export const REVENUE_MARGIN_CASH_DURATION = 340 + 200;
