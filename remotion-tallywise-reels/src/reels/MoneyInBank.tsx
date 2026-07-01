import React from "react";
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from "remotion";
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

// Law 10: Money in the bank isn't profit.

const money = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US");

const CLAIMS = [
  { label: "Sales tax & payroll tax you already owe", amount: 61000 },
  { label: "Payroll hitting on Friday", amount: 88000 },
  { label: "Vendor invoices due this month", amount: 96000 },
];

const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const count = interpolate(frame, [8, 40], [0, 284000], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const strike = interpolate(frame, [64, 78], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <SafeColumn justify="center" align="flex-start" gap={30}>
      <Kicker delay={2}>The bank balance trap</Kicker>
      <div style={{ position: "relative" }}>
        <span
          style={{
            fontFamily: montserrat,
            fontWeight: 900,
            fontSize: 180,
            color: colors.white,
            lineHeight: 1,
            opacity: useEnter(6, 10),
          }}
        >
          {money(count)}
        </span>
        <span
          style={{
            position: "absolute",
            left: -6,
            right: 0,
            top: "52%",
            height: 12,
            borderRadius: 6,
            backgroundColor: colors.green,
            width: `${strike}%`,
          }}
        />
      </div>
      <RiseLine delay={20} size={70} color={colors.concreteMute}>
        “We’re good this month.”
      </RiseLine>
      <div
        style={{
          fontFamily: montserrat,
          fontWeight: 800,
          fontSize: 58,
          color: colors.green,
          opacity: useEnter(80, 14),
        }}
      >
        Are you though?
      </div>
    </SafeColumn>
  );
};

const ClaimRow: React.FC<{ i: number; running: number }> = ({ i, running }) => {
  const c = CLAIMS[i];
  const p = useEnter(6 + i * 26, 14);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 30,
        opacity: p,
        translate: interpolate(p, [0, 1], ["44px 0px", "0px 0px"]),
        borderBottom: `2px solid ${colors.inkSoft}`,
        paddingBottom: 24,
      }}
    >
      <span
        style={{
          fontFamily: inter,
          fontWeight: 600,
          fontSize: 40,
          color: colors.concrete,
          maxWidth: 620,
        }}
      >
        {c.label}
      </span>
      <span
        style={{
          fontFamily: montserrat,
          fontWeight: 800,
          fontSize: 52,
          color: "#f2a1a1",
          whiteSpace: "nowrap",
        }}
      >
        −{money(c.amount)}
      </span>
    </div>
  );
};

const MathScene: React.FC = () => {
  const frame = useCurrentFrame();
  const total = CLAIMS.reduce((a, c) => a + c.amount, 0);
  const real = 284000 - total; // 39,000
  const reveal = interpolate(frame, [96, 116], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <SafeColumn justify="center" align="stretch" gap={34}>
      <Kicker delay={0}>What that cash is already promised to</Kicker>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {CLAIMS.map((_, i) => (
          <ClaimRow key={i} i={i} running={0} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginTop: 12,
          opacity: reveal,
          translate: `0px ${interpolate(reveal, [0, 1], [24, 0])}px`,
        }}
      >
        <span
          style={{
            fontFamily: montserrat,
            fontWeight: 800,
            fontSize: 52,
            color: colors.white,
          }}
        >
          Actually yours:
        </span>
        <span
          style={{
            fontFamily: montserrat,
            fontWeight: 900,
            fontSize: 96,
            color: colors.green,
          }}
        >
          {money(real)}
        </span>
      </div>
      <span
        style={{
          fontFamily: inter,
          fontSize: 26,
          color: colors.concreteFaint,
          opacity: reveal,
        }}
      >
        Illustrative example — not a specific client.
      </span>
    </SafeColumn>
  );
};

export const MoneyInBank: React.FC = () => {
  return (
    <AbsoluteFill>
      <Backdrop />
      <Sequence durationInFrames={110}>
        <HookScene />
      </Sequence>
      <Sequence from={110} durationInFrames={230}>
        <MathScene />
      </Sequence>
      <Sequence from={340}>
        <Outro
          line="Money in the bank isn't profit."
          sub="Confusing the two is how good businesses go broke — quietly. Let's find your real number."
        />
      </Sequence>
      <AIBadge />
    </AbsoluteFill>
  );
};

export const MONEY_IN_BANK_DURATION = 340 + 200;
