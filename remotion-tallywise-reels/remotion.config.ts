/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// Use the Chromium that ships with this environment instead of downloading
// Remotion's own build (the download host is not in the egress allowlist).
const browserExecutable =
  process.env.REMOTION_BROWSER_EXECUTABLE ??
  "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell";
Config.setBrowserExecutable(browserExecutable);
Config.setChromiumOpenGlRenderer("angle");
// Local fonts occasionally need more than the 28s default to resolve under
// render concurrency in this environment.
Config.setDelayRenderTimeoutInMilliseconds(120000);
