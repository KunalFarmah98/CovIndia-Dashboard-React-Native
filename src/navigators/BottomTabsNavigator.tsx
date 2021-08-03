import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Dashboard from '../screens/Dashboard';
import History from '../screens/History';
import { HistoryStackScreen } from './StackNavigator';

const Tabs =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      barStyle={{backgroundColor:'white', borderTopColor : 'purple', borderTopWidth: 0.3}}
      activeColor = 'purple'
      inactiveColor = ''
      tabBarOptions={
        {
          activeTintColor : 'purple',
          inactiveTintColor : 'grey'
        }
      }>
      <Tabs.Screen name="Dashboard" component={Dashboard} />
      <Tabs.Screen name="History" component={HistoryStackScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
