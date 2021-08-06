import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { COLORS } from "../theme/Colors";


const HistoryDetailsListItem = ({name,item})=>{

    const data = item.item;
    console.log('props: '+data);
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

    return(
            <View style = {styles.card} >
                <Text style= {styles.date}>{data.loc}</Text>            
                <Text style = {styles.header}>Total Cases: {getLocaleNumber(data.totalConfirmed)}</Text>
                <View style = {styles.row}>
                    <Text style = {styles.recovered}>Recovered:{'\n'}{getLocaleNumber(data.discharged)}</Text>
                    <Text style = {styles.deceased}>Deceased:{'\n'}{getLocaleNumber(data.deaths)}</Text>
                </View>
            </View>
    )
};

const styles = StyleSheet.create({
    card:{
        borderColor: COLORS.primaryDark,
        borderWidth: 2,
        marginVertical: 10,
        marginHorizontal:15,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    date:{
        fontSize:20,
        fontWeight:'700',
        color: 'black',
        marginVertical:5,
        alignSelf: 'center'
    },
    header:{
        fontSize:18,
        fontWeight: '700',
        color: COLORS.primaryDark,
        padding: 5,
        alignSelf: 'center',
    },
    row:{
        marginHorizontal: 20,
        marginTop:5,
        marginBottom:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    recovered:{
        fontSize: 17,
        color: COLORS.pieGreen,
        textAlign:'center'
    },
    deceased:{
        fontSize: 17,
        color: COLORS.pieRed,
        textAlign:'center'
    }
});

export default HistoryDetailsListItem;