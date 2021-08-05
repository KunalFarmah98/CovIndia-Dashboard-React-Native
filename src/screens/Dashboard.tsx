import CookieManager from '@react-native-cookies/cookies';
import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';
import Summary from '../components/Summary';


const Dashboard = () => {

  const data = useSelector(state=>state.daily.data);
  const summary = data[0];

  return (
    <View>
      <Summary total = {summary.confirmed} active = {summary.active} recovered = {summary.recovered} deceased = {summary.deaths}
      currActive = {summary.deltaconfirmed} currRecovered = {summary.deltarecovered} currDeceased = {summary.deltadeaths}/>

      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default Dashboard;
