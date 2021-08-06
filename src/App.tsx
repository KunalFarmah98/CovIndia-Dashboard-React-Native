import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigators/DrawerNavigator';
import Splash from './components/Splash';
import {useSelector, useDispatch} from 'react-redux';
import { fetchDailyData, getDailyData } from './redux/DailySlice';
import { useEffect } from 'react';

const App = () => {

  const dispatch = useDispatch();
  let status = useSelector(state=>state.daily.status);

  const getData = async () =>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch(fetchDailyData());
  }

  useEffect(()=>{
    getData();
  },[]);


  return(
    status==='loading'?
    <Splash/>
    :
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
};

export default App;
