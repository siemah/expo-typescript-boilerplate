import React, { useEffect, useReducer, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import * as Sentry from 'sentry-expo';

import { FontDisplay } from '@local/constants/font';
import { globalReducer } from '@local/utils/store/reducers';
import AppLoading from 'expo-app-loading';
import AppAnalytic from '@local/utils/analytics';
import ENV_VARS from '@local/constants/env';
import ErrorBoundary from '@local/libs/error-boundary';
import MainStack from '@local/navigations/main';

Sentry.init({
  dsn: ENV_VARS.sentry.dsn,
  enableInExpoDevelopment: true,
  debug: false,
});

const initialState = {
  errors: {},
  loading: true,
  global: null,
  data: {},
}
export default function App() {
  let _isMounted = true;
  const navigationRef = useRef<any>();
  const routeNameRef = useRef();
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const _onReady = () => {
    (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
  }
  const _onStateChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef?.current?.getCurrentRoute().name;

    if (previousRouteName !== currentRouteName) {
      await AppAnalytic.setCurrentScreen(currentRouteName);
    }

    routeNameRef.current = currentRouteName;
  }

  useEffect(() => {
    const loadAssetsAndInitialData = async () => {
      try {
        await Font.loadAsync({
          [FontDisplay.PoppinsBold]: require('./assets/fonts/Poppins-Bold.ttf'),
          [FontDisplay.PoppinsRegular]: require('./assets/fonts/Poppins-Regular.ttf'),
        });
        // todo: change the current screen depend on user authentication state
        AppAnalytic.setCurrentScreen('home');
        _isMounted && dispatch({
          type: 'SET_LOADING',
          payload: false
        });
      } catch (error) {
        _isMounted && dispatch({
          type: 'SET_LOADING',
          payload: false
        });
      }
    }
    loadAssetsAndInitialData();
    return () => {
      _isMounted = false;
    }
  }, []);

  if (state.loading) {
    return (
      <AppLoading />
    );
  }

  return (
    <ErrorBoundary>
      <NavigationContainer
        ref={navigationRef}
        onReady={_onReady}
        onStateChange={_onStateChange}
      >
        <MainStack />
      </NavigationContainer>
    </ErrorBoundary>
  );
}