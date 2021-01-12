import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, TambahKontak} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Tambah Kontak" component={TambahKontak} />
    </Stack.Navigator>
  );
};

export default Router;
