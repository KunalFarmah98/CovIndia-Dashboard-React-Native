import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabsNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {HeaderButton, HeaderButtons, Item} from 'react-navigation-header-buttons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import History from '../screens/History';
import { COLORS } from '../theme/Colors';
import Helpline from '../screens/Helpline';
import WebViewScreen from '../screens/WebViewScreen';
import CookieManager from '@react-native-cookies/cookies';
import OptionsMenu from '../components/OptionsMenu';
import Detail from '../screens/Detail';
import HistoryDetail from '../screens/HistoryDetail';


const HomeStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const HelplineStack = createStackNavigator();
const WebViewStack = createStackNavigator();


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
          },
          headerRight: ()=>{return <OptionsMenu/>}
        })}
        component={BottomTabNavigator}
      />
      <HomeStack.Screen
        name="Detail"
        options={({route,navigation})=>({
          headerShown: true,
          headerTitle: route.params.title,
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item title="Back" iconName='arrow-back' color = 'white' onPress = {()=>{navigation.goBack()}}/>
                </HeaderButtons>
            )
          },
        })}
        component={Detail}/>
        <HomeStack.Screen
        name="HistoryDetail"
        options={({route,navigation})=>({
          headerShown: true,
          headerTitle: route.params.title,
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item title="Back" iconName='arrow-back' color = 'white' onPress = {()=>{navigation.goBack()}}/>
                </HeaderButtons>
            )
          },
        })}
        component={HistoryDetail}/>
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
          },
          headerRight: ()=>{return <OptionsMenu/>}
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

const WebViewStackScreen = () => {
  return (
    <WebViewStack.Navigator
    screenOptions={{
              headerStyle : {backgroundColor: COLORS.primary},
              headerTintColor:'#fff'
            }}>
      <WebViewStack.Screen
        name="WebViewScreen"
        options={({route,navigation})=>({
          headerShown: true,
          headerTitle: route.params.title,
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item title="Back" iconName='arrow-back' color = 'white' onPress = {()=>{
                  CookieManager
                  .clearAll(true)
                  .then((res) => {
                      console.log('CookieManager.clearAll =>', res)
                      if(route.params.title==='Helpline')
                        navigation.navigate('Helpline');
                      else
                        navigation.goBack();
                  });
                }}/>
              </HeaderButtons>
            )
          }

        })}
        component={WebViewScreen}
      />
    </WebViewStack.Navigator>
  );
};

export {HomeStackScreen, HistoryStackScreen, HelplineStackScreen, WebViewStackScreen};
