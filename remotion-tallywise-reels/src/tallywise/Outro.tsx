import React from "react";
import { interpolate } from "remotion";
import { colors, inter } from "./theme";
import {
  CTAButton,
  Kicker,
  LogoLockup,
  RiseLine,
  SafeColumn,
  useEnter,
} from "./components";

/**
 * Shared closing scene: brand promise -> CTA -> logo lockup.
 * `line` is the reel-specific payoff (a Law or battle cry).
 */
export const Outro: React.FC<{ line: string; sub?: string }> = ({
  line,
  sub = "We'll look at your real numbers — you'll leave knowing your next move.",
}) => {
  const logoP = useEnter(40, 16);
  return (
    <SafeColumn justify="center" align="flex-start" gap={40}>
      <Kicker delay={2}>Same side of the table</Kicker>
      <RiseLine delay={8} size={104}>
        {line}
      </RiseLine>
      <div
        style={{
          fontFamily: inter,
          fontWeight: 500,
          fontSize: 40,
          lineHeight: 1.32,
          color: colors.concreteMute,
          maxWidth: 820,
          opacity: useEnter(22, 16),
        }}
      >
        {sub}
      </div>
      <div style={{ marginTop: 24 }}>
        <CTAButton delay={30} />
      </div>
      <div
        style={{
          marginTop: 40,
          opacity: logoP,
          translate: interpolate(logoP, [0, 1], ["0px 20px", "0px 0px"]),
        }}
      >
        <LogoLockup size={58} />
      </div>
    </SafeColumn>
  );
};
