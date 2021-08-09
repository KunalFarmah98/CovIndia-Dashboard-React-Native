import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import Summary from '../components/Summary';
import { COLORS } from '../theme/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ListItem from '../components/ListItem';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import Links from '../assets/links';


const Dashboard = () => {

  const navigation = useNavigation();

  const data = useSelector(state=>state.daily.activeStateList);
  const summary = useSelector(state=>state.daily.summary);

  const [list, setList] = useState(data);
  const [isSearching,setIsSearching] = useState(false);
  const links = new Links();

  const search = (value) => {
    if(value.length===0){
      setList(data);
      return;
    }
    const oldList = [...data];
    let newList = oldList.filter(item=>{
      const check = item.state.toLowerCase();
      return check.startsWith(value.toString().toLowerCase());
    });
    console.info(newList);
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
      <View style = {{backgroundColor: '#FFFFFF'}}>
        <Summary/>
        <Text style = {styles.refreshed}>Last Refreshed: {summary.lastupdatedtime}</Text>
        <View style = {styles.buttons}>
          <Text style = {styles.actionVaccination} onPress = {()=>{navigation.navigate('WebView', { screen: 'WebViewScreen', params:{title: "COWIN Vaccine Registration", link: links.VACCINE_REG}})}}>Are you 18+?  Get Vaccinated</Text>
          <Text style = {styles.actionHelp} onPress = {()=>{navigation.navigate('Helpline')}}>Seek Help</Text>
        </View>
        <View style={styles.search}>
          {isSearching?<SearchBar placeholder = 'Search for a State' onSearch = {search} isSearching = {setIsSearching}/>
          :
          <Text style = {styles.stateWise}>Statewise Statistics:</Text>
          }
          {isSearching?
              <Icon style = {{alignSelf:'center', marginStart: 10}} name = "close" size={23} color = {'black'} onPress={()=>{setIsSearching(false); setList(data);}}/>
            :
              <Icon style = {{alignSelf:'center', marginStart: 10}} name = "magnify" size={23} color = {'black'} onPress={()=>{setIsSearching(true)}}/>
          }
        </View>

        <FlatList
          data = {list}
          keyExtractor = {(item)=>{let id = item.state; id+=item.statecode; return id;}}
          renderItem = {data=> <ListItem item = {data} format = {getLocaleNumber}/>
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
  },
  search:{
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  stateWise:{
    alignSelf:'center', 
    fontSize: 16, 
    marginVertical: 10
    }
})

export default Dashboard;
