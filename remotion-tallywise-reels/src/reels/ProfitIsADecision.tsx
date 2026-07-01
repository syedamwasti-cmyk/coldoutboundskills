import React from "react";
import { AbsoluteFill, interpolate, Sequence } from "remotion";
import { colors, inter, montserrat } from "../tallywise/theme";
import {
  AIBadge,
  Backdrop,
  Kicker,
  RiseLine,
  SafeColumn,
  useEnter,
} from "../tallywise/components";
import { Outro } from "../tallywise/Outro";

// Law 6: Profit is a decision, not a year-end surprise.

const STEPS = [
  {
    k: "01",
    t: "Decide the profit",
    d: "Pick the margin you want — say 15% — before the work starts.",
  },
  {
    k: "02",
    t: "Price to protect it",
    d: "Build that margin into every quote and budget, not your gut.",
  },
  {
    k: "03",
    t: "Check it weekly",
    d: "Score the number on Monday — not in March from your tax return.",
  },
];

const StepRow: React.FC<{ i: number }> = ({ i }) => {
  const s = STEPS[i];
  const p = useEnter(6 + i * 24, 14);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 30,
        opacity: p,
        translate: interpolate(p, [0, 1], ["0px 30px", "0px 0px"]),
      }}
    >
      <span
        style={{
          fontFamily: montserrat,
          fontWeight: 900,
          fontSize: 84,
          color: colors.green,
          lineHeight: 1,
          minWidth: 130,
        }}
      >
        {s.k}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span
          style={{
            fontFamily: montserrat,
            fontWeight: 800,
            fontSize: 60,
            color: colors.white,
            lineHeight: 1.02,
          }}
        >
          {s.t}
        </span>
        <span
          style={{
            fontFamily: inter,
            fontWeight: 500,
            fontSize: 38,
            color: colors.concreteMute,
            maxWidth: 640,
          }}
        >
          {s.d}
        </span>
      </div>
    </div>
  );
};

const HookScene: React.FC = () => (
  <SafeColumn justify="center" align="flex-start" gap={30}>
    <Kicker delay={2}>The year-end surprise</Kicker>
    <RiseLine delay={10} size={100}>
      Most owners meet
    </RiseLine>
    <RiseLine delay={16} size={100}>
      their profit
    </RiseLine>
    <RiseLine delay={26} size={100} color={colors.green}>
      in March.
    </RiseLine>
    <div
      style={{
        fontFamily: inter,
        fontWeight: 500,
        fontSize: 42,
        color: colors.concreteMute,
        opacity: useEnter(40, 16),
        marginTop: 10,
        maxWidth: 800,
      }}
    >
      On a tax return. Whatever's left is a shrug, not a plan.
    </div>
  </SafeColumn>
);

const StepsScene: React.FC = () => (
  <SafeColumn justify="center" align="flex-start" gap={54}>
    <Kicker delay={0}>Run it the other way</Kicker>
    <div style={{ display: "flex", flexDirection: "column", gap: 52 }}>
      {STEPS.map((_, i) => (
        <StepRow key={i} i={i} />
      ))}
    </div>
  </SafeColumn>
);

export const ProfitIsADecision: React.FC = () => {
  return (
    <AbsoluteFill>
      <Backdrop />
      <Sequence durationInFrames={115}>
        <HookScene />
      </Sequence>
      <Sequence from={115} durationInFrames={225}>
        <StepsScene />
      </Sequence>
      <Sequence from={340}>
        <Outro
          line="Profit is a decision, not a year-end surprise."
          sub="Set the number first. We'll build the plan that hits it."
        />
      </Sequence>
      <AIBadge />
    </AbsoluteFill>
  );
};

export const PROFIT_IS_A_DECISION_DURATION = 340 + 200;
