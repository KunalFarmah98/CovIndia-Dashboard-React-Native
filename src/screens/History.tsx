import React from 'react';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';

const History = () => {

  const history = useSelector(state=>state.daily.history);
  return (
    <View>
      <Text>History</Text>
      <Text>{JSON.stringify(history)}</Text>
    </View>
  );
};

export default History;
