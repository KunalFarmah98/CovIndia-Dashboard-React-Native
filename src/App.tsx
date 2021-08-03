import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigators/DrawerNavigator';
import Splash from './components/Splash';
import store from './Store';
import {useSelector} from 'react-redux';
import { getDailyData } from './redux/DailySlice';

const App = () => {

  const data = store.dispatch(getDailyData);
  console.log(data);
  console.log(store.getState());


  return(
    <Splash/>
    // <NavigationContainer>
    //   <DrawerNavigator/>
    // </NavigationContainer>
  )
};

export default App;
