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

// Laws 1 & 4: If you can't see your numbers, you don't own your business.
// Clarity beats hustle. — scaling-strategy angle for $1M–$10M owners.

const NUMBERS = [
  { n: "Cash on hand + 13-week runway", why: "Can you survive a slow quarter?" },
  { n: "Gross margin by line", why: "Which work actually pays?" },
  { n: "Monthly overhead", why: "The number you must beat to break even." },
  { n: "AR & AP", why: "Who owes you — and who you owe." },
  { n: "The Monday Number", why: "Ahead or behind, at a glance." },
];

const Check: React.FC = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill={colors.green} />
    <path
      d="M7 12.5l3.2 3.2L17 9"
      stroke={colors.ink}
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NumberRow: React.FC<{ i: number }> = ({ i }) => {
  const item = NUMBERS[i];
  const p = useEnter(4 + i * 18, 12);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 26,
        opacity: p,
        translate: interpolate(p, [0, 1], ["0px 26px", "0px 0px"]),
      }}
    >
      <div style={{ marginTop: 6 }}>
        <Check />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span
          style={{
            fontFamily: montserrat,
            fontWeight: 800,
            fontSize: 56,
            color: colors.white,
            lineHeight: 1.05,
          }}
        >
          {item.n}
        </span>
        <span
          style={{
            fontFamily: inter,
            fontWeight: 500,
            fontSize: 34,
            color: colors.concreteFaint,
          }}
        >
          {item.why}
        </span>
      </div>
    </div>
  );
};

const HookScene: React.FC = () => (
  <SafeColumn justify="center" align="flex-start" gap={30}>
    <Kicker delay={2}>Clarity beats hustle</Kicker>
    <RiseLine delay={10} size={104}>
      You crossed $1M
    </RiseLine>
    <RiseLine delay={16} size={104} color={colors.concreteMute}>
      on hustle.
    </RiseLine>
    <RiseLine delay={26} size={104} color={colors.green}>
      You won't cross $10M
    </RiseLine>
    <RiseLine delay={32} size={104} color={colors.green}>
      the same way.
    </RiseLine>
    <div
      style={{
        fontFamily: inter,
        fontWeight: 500,
        fontSize: 40,
        color: colors.concreteMute,
        opacity: useEnter(46, 16),
        marginTop: 10,
      }}
    >
      You can't out-work numbers you can't see.
    </div>
  </SafeColumn>
);

const ListScene: React.FC = () => (
  <SafeColumn justify="center" align="flex-start" gap={40}>
    <Kicker delay={0}>The 5 numbers on your Monday dashboard</Kicker>
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      {NUMBERS.map((_, i) => (
        <NumberRow key={i} i={i} />
      ))}
    </div>
  </SafeColumn>
);

export const FlyingBlind: React.FC = () => {
  return (
    <AbsoluteFill>
      <Backdrop />
      <Sequence durationInFrames={120}>
        <HookScene />
      </Sequence>
      <Sequence from={120} durationInFrames={230}>
        <ListScene />
      </Sequence>
      <Sequence from={350}>
        <Outro
          line="You can't scale what you can't see."
          sub="Get the one-page Cash Flow Dashboard we build for owners. Eyes open."
        />
      </Sequence>
      <AIBadge />
    </AbsoluteFill>
  );
};

export const FLYING_BLIND_DURATION = 350 + 200;
