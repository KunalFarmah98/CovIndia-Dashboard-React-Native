import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeStackScreen} from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator screenOptions={{
      headerShown: false
    }}>
      <Drawer.Screen name="Dashboard" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
