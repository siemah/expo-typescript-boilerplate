import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '@local/screens/signin';
import Home from '@local/screens/home';
import { MainStackNavigatorParamsType } from '@local/types/navigations';

const Stack = createStackNavigator<MainStackNavigatorParamsType>();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='signin' component={Signin} />
    </Stack.Navigator>
  );
}