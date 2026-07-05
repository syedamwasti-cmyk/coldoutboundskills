import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, inter, montserrat, SAFE } from "./theme";

// Standard entrance curve (crisp UI ease-out) reused across reels.
export const EASE_OUT = Easing.bezier(0.16, 1, 0.3, 1);

/** Normalized 0->1 entrance progress over a frame window. */
export const useEnter = (start: number, duration = 14) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [start, start + duration], [0, 1], {
    easing: EASE_OUT,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};

/** Ink background with a subtle radial glow + concrete grid for depth. */
export const Backdrop: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.ink }}>
      {/* soft green glow, top-left, low opacity so ink stays dominant */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(1100px 1100px at 18% 8%, ${colors.green}22, transparent 60%)`,
        }}
      />
      {/* deep ink vignette, bottom */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(1400px 1000px at 82% 108%, ${colors.inkDeep}, transparent 55%)`,
        }}
      />
      {/* faint blueprint grid */}
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${colors.white}0a 1px, transparent 1px), linear-gradient(90deg, ${colors.white}0a 1px, transparent 1px)`,
          backgroundSize: "90px 90px",
          maskImage:
            "radial-gradient(circle at 50% 40%, black, transparent 78%)",
        }}
      />
      {children}
    </AbsoluteFill>
  );
};

/** Main content column with brand-safe padding. */
export const SafeColumn: React.FC<{
  children: React.ReactNode;
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
  gap?: number;
}> = ({ children, justify = "center", align = "flex-start", gap = 0 }) => {
  return (
    <AbsoluteFill
      style={{
        paddingLeft: SAFE.x,
        paddingRight: SAFE.x,
        paddingTop: SAFE.top,
        paddingBottom: SAFE.bottom,
        display: "flex",
        flexDirection: "column",
        justifyContent: justify,
        alignItems: align,
        gap,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

/** Green-ticked eyebrow / kicker label. */
export const Kicker: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const p = useEnter(delay, 12);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18,
        opacity: p,
        translate: interpolate(p, [0, 1], ["0px -18px", "0px 0px"]),
      }}
    >
      <span
        style={{
          width: 46,
          height: 8,
          borderRadius: 4,
          backgroundColor: colors.green,
        }}
      />
      <span
        style={{
          fontFamily: montserrat,
          fontWeight: 800,
          fontSize: 34,
          letterSpacing: 5,
          textTransform: "uppercase",
          color: colors.concreteMute,
        }}
      >
        {children}
      </span>
    </div>
  );
};

/** Official TallyWise lockup: lightbulb-$ mark + wordmark + tagline. */
export const LogoLockup: React.FC<{ size?: number }> = ({ size = 54 }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: size * 0.42 }}>
      <TallyWiseMark height={size * 1.95} bg={colors.ink} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: montserrat,
            fontWeight: 800,
            fontSize: size,
            color: colors.white,
            letterSpacing: -0.5,
          }}
        >
          TallyWise
        </span>
        <span
          style={{
            fontFamily: montserrat,
            fontWeight: 700,
            fontSize: size * 0.3,
            color: colors.green,
            letterSpacing: size * 0.09,
            textTransform: "uppercase",
            marginTop: size * 0.18,
          }}
        >
          Balancing Success
        </span>
      </div>
    </div>
  );
};

/**
 * TallyWise brand mark — a rayed lightbulb enclosing a $ coin.
 * `bg` fills the knockout areas (the glass interior + the $) so the mark
 * reads correctly on whatever background it sits on.
 */
export const TallyWiseMark: React.FC<{ height?: number; bg?: string }> = ({
  height = 120,
  bg = colors.ink,
}) => {
  const cx = 60;
  const cy = 52;
  const rays = [-100, -75, -50, -25, 0, 25, 50, 75, 100].map((deg) => {
    const a = (deg * Math.PI) / 180;
    const dx = Math.sin(a);
    const dy = -Math.cos(a);
    return {
      x1: cx + dx * 37,
      y1: cy + dy * 37,
      x2: cx + dx * 50,
      y2: cy + dy * 50,
    };
  });
  return (
    <svg
      height={height}
      width={height * (120 / 140)}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* rays */}
      {rays.map((r, i) => (
        <line
          key={i}
          x1={r.x1}
          y1={r.y1}
          x2={r.x2}
          y2={r.y2}
          stroke={colors.green}
          strokeWidth={7}
          strokeLinecap="round"
        />
      ))}
      {/* glass (open outline) */}
      <circle cx={cx} cy={cy} r={30} stroke={colors.green} strokeWidth={9} />
      {/* base */}
      <path d="M47 79 L73 79 L68 92 L52 92 Z" fill={colors.green} />
      <rect x={49} y={92} width={22} height={8} rx={4} fill={colors.green} />
      <rect x={52} y={103} width={16} height={8} rx={4} fill={colors.green} />
      <path
        d="M55 114 L65 114 L63 123 Q60 126 57 123 Z"
        fill={colors.green}
      />
      {/* $ coin: green disc with knockout dollar sign */}
      <circle cx={cx} cy={49} r={17} fill={colors.green} />
      <text
        x={cx}
        y={50}
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily={montserrat}
        fontWeight={800}
        fontSize={26}
        fill={bg}
      >
        $
      </text>
    </svg>
  );
};

/** Small mandatory AI-generated disclosure chip (brand rule: label every AI post). */
export const AIBadge: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 44,
        right: 44,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 18px",
        borderRadius: 999,
        backgroundColor: `${colors.white}12`,
        border: `1px solid ${colors.white}1f`,
      }}
    >
      <span
        style={{
          width: 12,
          height: 12,
          borderRadius: 999,
          backgroundColor: colors.green,
        }}
      />
      <span
        style={{
          fontFamily: inter,
          fontWeight: 600,
          fontSize: 22,
          letterSpacing: 1.5,
          color: colors.concreteMute,
          textTransform: "uppercase",
        }}
      >
        AI-generated
      </span>
    </div>
  );
};

/** Closing call-to-action block. */
export const CTAButton: React.FC<{ label?: string; delay?: number }> = ({
  label = "Book a Clarity Session",
  delay = 0,
}) => {
  const p = useEnter(delay, 16);
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  // gentle breathing pulse
  const pulse =
    1 + 0.02 * Math.sin((frame / fps) * Math.PI * 2 * 0.6) * (p > 0.9 ? 1 : 0);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        padding: "30px 52px",
        borderRadius: 999,
        backgroundColor: colors.green,
        opacity: p,
        scale: String(interpolate(p, [0, 1], [0.9, 1]) * pulse),
        boxShadow: `0 26px 70px ${colors.green}44`,
      }}
    >
      <span
        style={{
          fontFamily: montserrat,
          fontWeight: 800,
          fontSize: 40,
          color: colors.ink,
          letterSpacing: 0.2,
        }}
      >
        {label}
      </span>
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke={colors.ink}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

/**
 * Reusable big headline word/line that fades + rises into its layout slot.
 * Kept inline-interpolated so it stays editable in Studio.
 */
export const RiseLine: React.FC<{
  children: React.ReactNode;
  delay?: number;
  size?: number;
  color?: string;
  weight?: number;
  style?: React.CSSProperties;
}> = ({
  children,
  delay = 0,
  size = 96,
  color = colors.white,
  weight = 800,
  style,
}) => {
  const p = useEnter(delay, 16);
  return (
    <div
      style={{
        fontFamily: montserrat,
        fontWeight: weight,
        fontSize: size,
        lineHeight: 1.02,
        color,
        opacity: p,
        translate: interpolate(p, [0, 1], ["0px 34px", "0px 0px"]),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/** Highlighter-pen sweep behind a word (word-highlight pattern). */
export const Highlight: React.FC<{
  children: React.ReactNode;
  delay: number;
  color?: string;
  textColor?: string;
}> = ({ children, delay, color = colors.green, textColor = colors.ink }) => {
  const frame = useCurrentFrame();
  const w = interpolate(frame, [delay, delay + 12], [0, 100], {
    easing: EASE_OUT,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const filled = w > 6;
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        style={{
          position: "absolute",
          left: -14,
          right: -14,
          top: "8%",
          bottom: "6%",
          width: `calc(${w}% + 28px)`,
          backgroundColor: color,
          borderRadius: 8,
          zIndex: 0,
        }}
      />
      <span
        style={{
          position: "relative",
          zIndex: 1,
          color: filled ? textColor : "inherit",
          transition: "none",
        }}
      >
        {children}
      </span>
    </span>
  );
};
