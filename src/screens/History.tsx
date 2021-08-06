import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList , Keyboard} from 'react-native';
import {useSelector} from 'react-redux';
import HistoryListItem from '../components/HistoryListItem';
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const History = () => {

  const history = useSelector(state=>state.daily.history);
  const [list, setList] = useState(history);
  const [isSearching,setIsSearching] = useState(false); 

  const search = (value) => {
    const oldList = [...history];
    let newList = oldList.filter(item=>{
      const check = item.date.toLowerCase();
      return check.includes(value.toString().toLowerCase());
    });
    console.info(newList); 
    setList(newList);
  }

  return (
    <View style = {{flex: 1, backgroundColor: 'white'}}>
      <Text style = {styles.header}>Select a Date to get State-Wise Data</Text>
      {isSearching?
      <View style = {styles.row}>
        <SearchBar placeholder='Search for a Date in words (DD/MM/YYY)' onSearch = {search} isSearching = {setIsSearching}/>
              <Icon style = {{alignSelf:'center', marginStart: 10}} name = "close" size={23} color = {'black'} onPress={()=>{setIsSearching(false); setList(history); Keyboard.dismiss()}}/>
            </View>
            :
                  <View style = {styles.row}>

                    <SearchBar placeholder='Search for a Date in words (DD/MM/YYY)' onSearch = {search} isSearching = {setIsSearching} isEmpty={true}/>

              <Icon style = {{alignSelf:'center', marginStart: 10}} name = "magnify" size={23} color = {'black'} onPress={()=>{setIsSearching(true)}}/>
          </View>
          }
      <FlatList
          data = {list}
          keyExtractor = {(item)=>item.date}
          renderItem = {data=> <HistoryListItem item = {data}/>
      }/>
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginTop: 10,
    marginHorizontal: 10,
  },
  row:{
    flexDirection: 'row',
    marginHorizontal: 10,
    alignSelf: 'center'
  }
})

export default History;
