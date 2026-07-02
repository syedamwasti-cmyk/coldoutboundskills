import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Local variable fonts (bundled in public/fonts) so rendering needs no network.
// Each is a full variable file covering the whole weight axis.
export const montserrat = "Montserrat";
export const inter = "Inter";

loadFont({
  family: montserrat,
  url: staticFile("fonts/Montserrat.woff2"),
  weight: "100 900",
  format: "woff2",
  display: "block",
});

loadFont({
  family: inter,
  url: staticFile("fonts/Inter.woff2"),
  weight: "100 900",
  format: "woff2",
  display: "block",
});

/**
 * TallyWise brand palette.
 * Ink is dominant, Green is a ~10% accent, concrete neutrals carry body copy.
 */
export const colors = {
  ink: "#2b273f",
  inkDeep: "#211d31",
  inkSoft: "#3a3552",
  green: "#7dd856",
  greenDeep: "#5cb838",
  concrete: "#e7e5e4",
  concreteMute: "#a8a4b3",
  concreteFaint: "#6f6a82",
  white: "#ffffff",
} as const;

// 9:16 vertical reel format.
export const VIDEO = {
  width: 1080,
  height: 1920,
  fps: 30,
} as const;

// Safe-area padding per the video-layout rules (>=80px sides for 1080 wide,
// scaled up for the taller vertical frame).
export const SAFE = {
  x: 96,
  top: 140,
  bottom: 160,
} as const;
