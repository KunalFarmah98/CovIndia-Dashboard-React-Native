import React from 'react';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';


const Dashboard = () => {

  const data = useSelector(state=>state.daily.data);

  return (
    <View>
      <Text>Dashboard</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default Dashboard;
