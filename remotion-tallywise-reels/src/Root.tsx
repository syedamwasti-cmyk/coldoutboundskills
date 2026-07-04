import "./index.css";
import React from "react";
import { Composition } from "remotion";
import { VIDEO } from "./tallywise/theme";
import {
  RevenueMarginCash,
  REVENUE_MARGIN_CASH_DURATION,
} from "./reels/RevenueMarginCash";
import { MoneyInBank, MONEY_IN_BANK_DURATION } from "./reels/MoneyInBank";
import { FlyingBlind, FLYING_BLIND_DURATION } from "./reels/FlyingBlind";
import {
  ProfitIsADecision,
  PROFIT_IS_A_DECISION_DURATION,
} from "./reels/ProfitIsADecision";
import {
  OffenseDefense,
  OFFENSE_DEFENSE_DURATION,
} from "./reels/OffenseDefense";
import {
  IndependenceDay,
  INDEPENDENCE_DAY_DURATION,
} from "./reels/IndependenceDay";

// TallyWise education reels — vertical 1080x1920 @ 30fps.
// Audience: owner-led SMBs, ~$1M–$10M revenue, needing accounting + scaling clarity.
export const RemotionRoot: React.FC = () => {
  const common = {
    fps: VIDEO.fps,
    width: VIDEO.width,
    height: VIDEO.height,
  };
  return (
    <>
      <Composition
        id="RevenueMarginCash"
        component={RevenueMarginCash}
        durationInFrames={REVENUE_MARGIN_CASH_DURATION}
        {...common}
      />
      <Composition
        id="MoneyInBank"
        component={MoneyInBank}
        durationInFrames={MONEY_IN_BANK_DURATION}
        {...common}
      />
      <Composition
        id="FlyingBlind"
        component={FlyingBlind}
        durationInFrames={FLYING_BLIND_DURATION}
        {...common}
      />
      <Composition
        id="ProfitIsADecision"
        component={ProfitIsADecision}
        durationInFrames={PROFIT_IS_A_DECISION_DURATION}
        {...common}
      />
      <Composition
        id="OffenseDefense"
        component={OffenseDefense}
        durationInFrames={OFFENSE_DEFENSE_DURATION}
        {...common}
      />
      <Composition
        id="IndependenceDay"
        component={IndependenceDay}
        durationInFrames={INDEPENDENCE_DAY_DURATION}
        {...common}
      />
    </>
  );
};
