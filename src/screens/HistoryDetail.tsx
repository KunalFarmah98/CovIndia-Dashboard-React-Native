import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import HistoryDetailsHeader from '../components/HistoryDetailsHeader';
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoryDetailsListItem from '../components/HistoryDetailsListItem';
import { ScrollView } from 'react-native-gesture-handler';
import NoHistory from '../components/NoHistory';


const HistoryDetail = ({ route }) => {
  const summary = route.params.summary;
  const date = route.params.date;


  const search = (value) => {
    if (value.length === 0) {
      setList(data);
      return;
    }
    const oldList = [...data];
    let newList = oldList.filter(item => {
      const check = item.loc.toLowerCase();
      return check.startsWith(value.toString().toLowerCase());
    });
    setList(newList);
  }

  const getMonth = (month) => {
    const mnths = {
      "January": '01', "February": '02', "March": '03', "April": '04', "May": '05', "June": '06',
      "July": '07', "August": '08', "September": '09', "October": '10', "November": '11', "December": '12'
    };

    return mnths[month];
  }

  const getDate = (date) => {
    date += ' ';
    let l = date.length;
    let temp = '';
    let fragments = [];
    for (let i = 0; i < l; i++) {
      if (date[i] === ' ') {
        fragments.push(temp);
        temp = '';
        continue;
      }
      temp += date[i];
    }

    let day;
    if (fragments[0].length === 1) {
      day = `0${fragments[0]}`;
    }
    else
      day = fragments[0];

    let year = fragments[2];

    let monthKey = fragments[1];
    let month = getMonth(monthKey);

    return `${year}-${month}-${day}`;
  }

  const comparator = (a, b) => {
    if (Number(a.totalConfirmed) > Number(b.totalConfirmed)) {
      return -1;
    }
    else
      return 1;
  };

  const key = getDate(date);
  let data_ = [], data = [];
  try{
    data_ = useSelector(state => state.history.data[key]);
    data =[...data_];
    data.sort(comparator);
  }
  catch(err){
    console.error("No history available");
  }
  const [list, setList] = useState(data);
  const [isSearching, setIsSearching] = useState(false);


  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <HistoryDetailsHeader date={date} dailyActive={summary.dailyconfirmed} dailyRecovered={summary.dailyrecovered}
          dailyDeceased={summary.dailydeceased} totalActive={summary.totalconfirmed} totalRecovered={summary.totalrecovered}
          totalDeceased={summary.totaldeceased} />
        {list && list.length>0?
        <View style={styles.search}>
          {isSearching ? <SearchBar placeholder='Search for a State' onSearch={search} isSearching={setIsSearching} />
            :
            <Text style={styles.stateWise}>Statewise History:</Text>
          }
          {isSearching ?
            <Icon style={{ alignSelf: 'center', marginStart: 10 }} name="close" size={23} color={'black'} onPress={() => { setIsSearching(false); setList(data); }} />
            :
            <Icon style={{ alignSelf: 'center', marginStart: 10 }} name="magnify" size={23} color={'black'} onPress={() => { setIsSearching(true) }} />
          }
        </View>
        :
        null}
        {(list && list.length>0)?
        <FlatList
          data={list}
          keyExtractor={(item) => item.loc}
          renderItem={data => {
            return (
              <HistoryDetailsListItem name={data.loc} item={data} />);
          }} />
          :
          <NoHistory/>
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    margin: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  stateWise: {
    alignSelf: 'center',
    fontSize: 16,
    marginVertical: 10
  }
})

export default HistoryDetail;
