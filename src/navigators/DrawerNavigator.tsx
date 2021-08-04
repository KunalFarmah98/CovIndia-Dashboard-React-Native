import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HelplineStackScreen, HomeStackScreen} from './StackNavigator';
import { DrawerContent } from '../drawer/DrawerContent';
import { COLORS } from '../theme/Colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator 
    drawerContent = { props => <DrawerContent {...props} /> }
    screenOptions={{
      headerShown: false,
    }}>
      <Drawer.Screen name="Dashboard" component={HomeStackScreen} />
      <Drawer.Screen name="Helpline" component={HelplineStackScreen} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
