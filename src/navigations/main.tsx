import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../screens/signin';
import Home from '../screens/home';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='sigin' component={Signin} />
    </Stack.Navigator>
  );
}