import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../screens/signin';
import Home from '../screens/home';
import { MainStackNavigatorParamsType } from '../types/navigations';

const Stack = createStackNavigator<MainStackNavigatorParamsType>();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='signin' component={Signin} />
    </Stack.Navigator>
  );
}