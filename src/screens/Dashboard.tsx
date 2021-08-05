import CookieManager from '@react-native-cookies/cookies';
import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import Summary from '../components/Summary';
import { COLORS } from '../theme/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ListItem from '../components/ListItem';


const Dashboard = () => {

  const data = useSelector(state=>state.daily.data);
  const summary = data[0];
  const [list, setList] = useState(data.slice(1));
  console.log('........................'+list);
  const [isSearching,setIsSearching] = useState(false);
  const [query, setQuery] = useState('');

  const search = (value) => {
    const newList = [...list].filter(item=>item.state.statsWith(value));
    setList(newList);
  }

  const getLocaleNumber = (val:String)=>{
    if(val===undefined)
      return 0;
    val=  val.toString();
    var lastThree = val.substring(val.length-3);
    var otherNumbers = val.substring(0,val.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
}

  return (
    <ScrollView>
      <View>
        <Summary/>
        <Text style = {styles.refreshed}>Last Refreshed: {summary.lastupdatedtime}</Text>


        <View style = {styles.buttons}>
          <Text style = {styles.actionVaccination}>Are you 18+? Get Vaccinated</Text>
          <Text style = {styles.actionHelp}>Seek Help</Text>
        </View>
        <View style={[styles.buttons,{justifyContent:'space-around'}]}>
          {isSearching?<TextInput
          value = {query}
          onChange = {value => {setQuery(value); search(value);}}
          onSubmit = {value => {setQuery(value); search(value);}}/>
          :
          <Text style = {{alignSelf:'center', fontSize: 16}}>Statewise Statistics:</Text>
          }
          {isSearching?
              <Icon style = {{alignSelg:'center'}} name = "close" size={23} color = {'black'} onPress={()=>{setIsSearching(false); setList(data.slice(1));}}/>
            :
              <Icon style = {{alignSelg:'center'}} name = "magnify" size={23} color = {'black'} onPress={()=>{setIsSearching(true)}}/>
          }
        </View>

        <FlatList
          data = {list}
          keyExtractor = {(item)=>item.name}
          renderItem = {data=> <ListItem data = {list} format = {getLocaleNumber}/>
          }/>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  refreshed:{
    marginRight: 10,
    alignSelf: 'flex-end',
    fontSize: 9,
    color: 'grey'
  },
  buttons:{
    flexDirection: 'row',
    margin: 10,
  },
  actionVaccination:{
    padding:8,
    color: 'white',
    fontSize: 14,
    flex:2,
    textAlign: 'center',
    marginRight:10,
    backgroundColor: COLORS.primary,
    borderRadius: 10
  },
  actionHelp:{
    padding:8,
    color: 'white',
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 10
  }
})

export default Dashboard;
