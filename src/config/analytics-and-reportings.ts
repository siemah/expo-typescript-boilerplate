import ENV_VARS from "@local/constants/env";

export const sentryConfig = {
  dsn: ENV_VARS.sentry.dsn,
  enableInExpoDevelopment: true,
  debug: false,
};