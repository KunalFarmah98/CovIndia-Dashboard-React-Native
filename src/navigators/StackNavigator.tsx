import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabsNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {HeaderButton, HeaderButtons, Item} from 'react-navigation-header-buttons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import History from '../screens/History';
import { COLORS } from '../theme/Colors';
import Helpline from '../screens/Helpline';

const HomeStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const HelplineStack = createStackNavigator();


const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent = {Ionicons} iconSize={23} {...props}/>
);

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
            initialRouteName="Tabs"
            screenOptions={{
              headerStyle : {backgroundColor: COLORS.primary},
              headerTintColor:'#fff'
            }}>
      <HomeStack.Screen
        name="Tabs"
        options={({route,navigation})=>({
          headerShown: (getFocusedRouteNameFromRoute(route)==='Dashboard'||getFocusedRouteNameFromRoute(route)===undefined)?true:false,
          headerTitle: 'Dashboard',
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item title="Menu" iconName='ios-menu' color = 'white' onPress = {()=>{navigation.toggleDrawer()}}/>
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
    <HistoryStack.Navigator
    screenOptions={{
              headerStyle : {backgroundColor: COLORS.primary},
              headerTintColor:'#fff'
            }}>
      <HistoryStack.Screen
        name="HistoryScreen"
        options={({route,navigation})=>({
          headerShown: true,
          headerTitle: 'History',
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item title="Menu" iconName='ios-menu' color = 'white' onPress = {()=>{navigation.toggleDrawer()}}/>
                </HeaderButtons>
            )
          }

        })}
        component={History}
      />
    </HistoryStack.Navigator>
  );
};

const HelplineStackScreen = () => {
  return (
    <HelplineStack.Navigator
    screenOptions={{
              headerStyle : {backgroundColor: COLORS.primary},
              headerTintColor:'#fff'
            }}>
      <HelplineStack.Screen
        name="HelplineScreen"
        options={({route,navigation})=>({
          headerShown: true,
          headerTitle: 'Helpline',
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item title="Back" iconName='arrow-back' color = 'white' onPress = {()=>{navigation.goBack()}}/>
                </HeaderButtons>
            )
          }

        })}
        component={Helpline}
      />
    </HelplineStack.Navigator>
  );
};

export {HomeStackScreen, HistoryStackScreen, HelplineStackScreen};
