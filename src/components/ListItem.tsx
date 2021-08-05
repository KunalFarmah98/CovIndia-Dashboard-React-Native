import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { COLORS } from "../theme/Colors";
import Statistics from "./Statistics";



const ListItem = (data, format) => {

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
        <View style = {styles.card}>
            <Text style = {styles.header}>{data.name}</Text>
            <Text style = {styles.total}>Total Cases: {getLocaleNumber(data.confirmed)}</Text>
            {data.deltaconfirmed>0 || data.deltarecovered>0 || data.deltadeaths>0 ?
                <View>
                    <Statistics name = "Recently Reported" active = {data.deltaconfirmed} recovered = {data.deltarecovered} deceased = {data.deltadeaths} format={format}/>
                    <Statistics name = "Total Statistics" active = {data.confirmed} recovered = {data.recovered} deceased = {data.deaths} format={format}/>
                </View>
                :
                <Statistics name = "" active = {data.confirmed} recovered = {data.recovered} deceased = {data.deaths} format={format}/>
            }

        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        marginHorizontal:10, 
        marginVertical: 5, 
        borderColor: COLORS.primaryDark,
        borderRadius: 10
    },
    header:{
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        marginTop:5,
        fontWeight: '700',
    },
    total:{
        color: COLORS.primary,
        fontSize: 17,
        textAlign: 'center'
    }
})
export default ListItem;