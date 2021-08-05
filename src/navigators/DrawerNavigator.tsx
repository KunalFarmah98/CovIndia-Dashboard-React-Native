import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HelplineStackScreen, HomeStackScreen, WebViewStackScreen} from './StackNavigator';
import { DrawerContent } from '../drawer/DrawerContent';
import { COLORS } from '../theme/Colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator 
    drawerContentOptions={{
          activeTintColor: COLORS.primary,
          activeBackgroundColor: COLORS.primary,
          inactiveTintColor: 'black',
          inactiveBackgroundColor: 'black',
          labelStyle:{
            fontWeight: '500',
            color: 'black'
          }
        }}
    drawerContent = { props => <DrawerContent {...props} /> }
    screenOptions={{
      headerShown: false,
    }}>
      <Drawer.Screen name="Dashboard" component={HomeStackScreen} />
      <Drawer.Screen name="Helpline" component={HelplineStackScreen} />
      <Drawer.Screen name="WebView" component = {WebViewStackScreen}/>

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
