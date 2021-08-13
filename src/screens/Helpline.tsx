import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Linking} from 'react-native';
import { COLORS } from '../theme/Colors';
import { useNavigation } from '@react-navigation/native';
import contacts  from '../api/contacts';
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactsListItem from '../components/ContactsListItem';


const Helpline = () => {

  const [contactsList,setContactsList] = useState([]);
  const [data, setData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const call = (num) =>{
      Linking.openURL(`tel:${num}`);
  }

  const search = (value) => {
    if(value.length===0){
      setContactsList(data);
      return;
    }
    const oldList = [...contactsList];
    let newList = oldList.filter(item=>{
      const check = item.loc.toLowerCase();
      return check.startsWith(value.toString().toLowerCase());
    });
    console.info(newList);
    setContactsList(newList);
  }

  const getContacts = async ()=>{
    const resp = await contacts.get('contacts');
    console.log(resp.data.data.contacts.regional);
    setData(resp.data.data.contacts.regional);
    setContactsList(resp.data.data.contacts.regional);

  }
  useEffect(() =>{
    getContacts();
  },[])

  const navigation = useNavigation();
  return (
    <View style = {{flex: 1, backgroundColor: "white"}}>
      <View style = {styles.card}>
          <View style={styles.row}>
            <Text style = {styles.key}>India Covid-19{"\n"}Helpline Number:</Text>
            <TouchableOpacity onPress={()=>{call('1075')}}>
              <Text style = {styles.number}>1075</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <Text style = {styles.key}>Ministry of Health {"\n"}Website:</Text>
              <TouchableOpacity onPress={()=>{navigation.navigate('WebView',{screen:'WebViewScreen',params:{title: "Helpline", link: 'https://www.mohfw.gov.in'}})}}>
                <Text style = {styles.number}>https://www.mohfw.gov.in</Text>
              </TouchableOpacity>
            </View>
      </View>
      <View style={styles.search}>
            {isSearching?<SearchBar placeholder = 'Search for a State' onSearch = {search} isSearching = {setIsSearching}/>
            :
            <Text style = {styles.stateWise}>Regionwise Helpline Numbers:</Text>
            }
            {isSearching?
                <Icon style = {{alignSelf:'center', marginStart: 10}} name = "close" size={23} color = {'black'} onPress={()=>{setIsSearching(false); setContactsList(data);}}/>
              :
                <Icon style = {{alignSelf:'center', marginStart: 10}} name = "magnify" size={23} color = {'black'} onPress={()=>{setIsSearching(true)}}/>
            }
      </View>

      <FlatList
            data = {contactsList}
            keyExtractor = {(item)=>{item.loc}}
            renderItem = {data=> <ContactsListItem item = {data} onCall = {call}/>
            }/>
    </View>
  );
};

const styles = StyleSheet.create({
    card:{
        borderColor: COLORS.primaryDark,
        borderWidth: 3,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 10
    },
    key:{
      color: 'black',
      fontSize: 14,
      textAlign:'left'
    },
    number:{
      color:COLORS.primary,
      fontSize: 14,
      textAlign: 'right',
      textDecorationLine : 'underline'
    },
    row:{
      flexDirection: "row", 
      justifyContent: 'space-between',
      marginHorizontal: 15,
      marginVertical: 10,
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
      color: 'black',
      marginVertical: 10
      }
});

export default Helpline;
