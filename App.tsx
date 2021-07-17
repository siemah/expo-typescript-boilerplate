import React, { useEffect, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';

import MainStack from './src/navigations/main';
import { FontDisplay } from './src/constants/font';
import { globalReducer } from './src/utils/store/reducers';
import AppLoading from 'expo-app-loading';

const initialState = {
  errors: {},
  loading: true,
  global: null,
  data: {},
}
export default function App() {
  let _isMounted = true;
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    const loadAssetsAndInitialData = async () => {
      try {
        await Font.loadAsync({
          [FontDisplay.PoppinsBold]: require('./assets/fonts/Poppins-Bold.ttf'),
          [FontDisplay.PoppinsRegular]: require('./assets/fonts/Poppins-Regular.ttf'),
        });
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
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}