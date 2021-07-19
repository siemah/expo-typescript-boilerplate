import ENV_VARS from "@local/constants/env";
import { LinkingOptions } from "@react-navigation/native";

export const navigationContainerLinking: Pick<LinkingOptions, "config" | "prefixes"> = {
  prefixes: [ENV_VARS.appScheme],
  config: {
    screens: {
      home: 'home',
      signin: 'signin',
    }
  },
};