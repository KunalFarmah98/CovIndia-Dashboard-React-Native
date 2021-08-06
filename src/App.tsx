import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigators/DrawerNavigator';
import Splash from './components/Splash';
import {useSelector, useDispatch} from 'react-redux';
import { fetchDailyData, getDailyData } from './redux/DailySlice';
import { useEffect } from 'react';
import { fetchHistoryData } from './redux/HistorySlice';

const App = () => {

  const dispatch = useDispatch();
  let dailyStatus = useSelector(state=>state.daily.status);
  let historyStatus = useSelector(state=>state.history.status);

  const getData = async () =>{
    // await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch(fetchDailyData());
    dispatch(fetchHistoryData());
  }

  useEffect(()=>{
    getData();
  },[]);


  return(
    dailyStatus==='loading'||historyStatus==='loading'?
    <Splash/>
    :
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
};

export default App;
