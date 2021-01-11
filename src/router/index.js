import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
