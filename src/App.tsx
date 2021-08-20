import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigators/DrawerNavigator';
import Splash from './components/Splash';
import {useSelector, useDispatch} from 'react-redux';
import { fetchDailyData, getDailyData } from './redux/DailySlice';
import { useEffect, useState} from 'react';
import NetInfo from "@react-native-community/netinfo";
import { fetchHistoryData, getHistoryData } from './redux/HistorySlice';
import OfflineScreen from './screens/OfflineScreen';

const App = () => {

  const dispatch = useDispatch();
  let dailyStatus = useSelector(state=>state.daily.status);
  let historyStatus = useSelector(state=>state.history.status);
  let dailyData = useSelector(state=>state.daily.data);
  let dailyHistory = useSelector(state=>state.daily.history)
  const [isConnected, setIsConnected] = useState(false);

  const getData = async () =>{
    if(isConnected){
      dispatch(fetchDailyData());
      dispatch(fetchHistoryData());
    }
    else{
      dispatch(getDailyData());
      dispatch(getHistoryData());
    }
  }

  useEffect(()=>{
    checkConnection();
  },[]);

  const checkConnection = async ()=>{
    const resp = await NetInfo.fetch();
    setIsConnected(resp.isConnected && resp.isInternetReachable);
    getData();
  }


  return(
    dailyStatus==='loading'||historyStatus==='loading'?
    <Splash/>
    :
    (null===dailyData && null===dailyHistory)?
    <OfflineScreen refresh = {checkConnection}/>
    :
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
};

export default App;
