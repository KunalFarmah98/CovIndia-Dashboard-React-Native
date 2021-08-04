import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeStackScreen} from './StackNavigator';
import { DrawerContent } from '../drawer/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator drawerContent = { props => <DrawerContent {...props} /> }
    screenOptions={{
      headerShown: false
    }}>
      <Drawer.Screen name="Dashboard" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
