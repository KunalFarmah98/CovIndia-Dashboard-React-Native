import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigators/DrawerNavigator';
import Splash from './components/Splash';
import store from './Store';
import {useSelector, useDispatch} from 'react-redux';
import { getDailyData } from './redux/DailySlice';
import { useEffect } from 'react';
import daily from './api/daily';
const App = () => {

  // const fetch = async ()=> {
  // const response = await daily.get('/data.json')
  // const data =  response.data.statewise;
  // console.log(data);
  // }

    const dispatch = useDispatch();
     const data = dispatch(getDailyData);
  console.log(data);
  console.log(store.getState());

  useEffect(()=>{
    // fetch();
  // const data = dispatch(getDailyData);
  // console.log(data);
  // console.log(store.getState());
  },[]);



  return(
    store.getState().daily.status==='loading'?
    <Splash/>
    :
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
};

export default App;
