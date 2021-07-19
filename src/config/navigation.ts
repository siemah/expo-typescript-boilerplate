import * as Linking from 'expo-linking';
import ENV_VARS from "@local/constants/env";
import { LinkingOptions } from "@react-navigation/native";
import { getInitialURL, subscribe } from '@local/utils/navigation';

const prefix = Linking.createURL("/");
export const navigationContainerLinking: LinkingOptions = {
  prefixes: [prefix, ENV_VARS.appScheme],
  config: {
    screens: {
      home: 'home',
      signin: 'signin',
    }
  },
  getInitialURL,
  subscribe,
};