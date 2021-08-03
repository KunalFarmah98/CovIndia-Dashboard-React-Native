import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabsNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HeaderButton, HeaderButtons, Item} from 'react-navigation-header-buttons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import History from '../screens/History';

const HomeStack = createStackNavigator();
const HistoryStack = createStackNavigator();

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent = {Ionicons} iconSize={23} {...props}/>
);

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
            initialRouteName="Tabs">
      <HomeStack.Screen
        name="Tabs"
        options={({route,navigation})=>({
          headerShown: getFocusedRouteNameFromRoute(route)==='Dashboard'?true:false,
          headerTitle: 'Dashboard',
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress = {()=>{navigation.toggleDrawer()}}/>
                </HeaderButtons>
            )
          }

        })}
        component={BottomTabNavigator}
      />
    </HomeStack.Navigator>
  );
};

const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen
        name="History"
        options={({route,navigation})=>({
          headerShown: true,
          headerTitle: 'History',
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress = {()=>{navigation.toggleDrawer()}}/>
                </HeaderButtons>
            )
          }

        })}
        component={History}
      />
    </HistoryStack.Navigator>
  );
};

export {HomeStackScreen, HistoryStackScreen};
