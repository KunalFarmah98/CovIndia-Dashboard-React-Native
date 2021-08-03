import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Dashboard from '../screens/Dashboard';
import { HistoryStackScreen } from './StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../theme/Colors';

const Tabs =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      barStyle={{backgroundColor:'white', borderTopColor : COLORS.primary, borderTopWidth: 0.3}}
      activeColor = {COLORS.primary}
      inactiveColor = ''
      tabBarOptions={
        {
          activeTintColor : COLORS.primary,
          inactiveTintColor : 'grey'
        }
      }>
      <Tabs.Screen name="Dashboard" component={Dashboard} options = {{
        title: 'Dashboard',
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({color,size})=>(
          <Ionicons name = 'home' color = {color} size = {23} />
        ),
      }}/>
      <Tabs.Screen name="History" component={HistoryStackScreen} options = {{
        title: 'History',
        tabBarLabel: 'History',
        tabBarIcon: ({color,size})=>(
          <Ionicons name = 'timer' color = {color} size = {23} />
        ),
      }}/>
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
