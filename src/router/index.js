import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, TambahKontak, DetailKontak, EditKontak} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Tambah Kontak" component={TambahKontak} />
      <Stack.Screen
        name="Detail Kontak"
        component={DetailKontak}
        options={{title: 'Rincian Kontak'}}
      />
      <Stack.Screen name="Edit Kontak" component={EditKontak} />
    </Stack.Navigator>
  );
};

export default Router;
