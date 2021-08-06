import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { COLORS } from "../theme/Colors";
import Statistics from "./Statistics";
import Pie from 'react-native-pie'
import { useSelector } from "react-redux";



const Summary = ()=>{

      const data = useSelector(state=>state.daily.summary);
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

    const getPercentage = (val:String ,total:String) => {
            let num_ = parseInt(val.toString());
            let dem_ = parseInt(total.toString());
            let fraction = num_/dem_;
            return parseInt(Math.round(fraction*100).toString());
    }

    const active_p = getPercentage(data.active,data.confirmed);
    let recovered_p = getPercentage(data.recovered,data.confirmed);
    const deceased_p = getPercentage(data.deaths,data.confirmed);

    // making sum = 100 in case of wrong roundoff
    recovered_p += (100-(active_p+deceased_p+recovered_p));

    return (
        <View style = {styles.card}>
            <View style = {styles.header1}>
                <Text style = {styles.india}>India</Text>
                <Text style = {styles.totalCases}>Total Cases:{'\n'}{getLocaleNumber(data.confirmed)}</Text>
            </View>
            <View style = {{alignItems:'center', marginBottom:10}}>
            <Pie
              radius={90}
              innerRadius={50}
              sections={[
                {
                  percentage: active_p,
                  color: COLORS.pieBlue,
                },
                {
                  percentage: recovered_p,
                  color: COLORS.pieGreen,
                },
                {
                  percentage: deceased_p,
                  color: COLORS.pieRed,
                },
              ]}
              strokeCap={'round'}
            />
            </View>

            {data.deltaconfirmed>0 || data.deltarecovered>0 || data.deltadeceased>0?
                <Statistics name=  "Recent Statistics" active = {data.data.deltaconfirmed} recovered = {data.deltarecovered} deceased = {data.deltadeaths} format = {getLocaleNumber}/>
                :
                null
            }

            <Statistics name= "Total Statistics" active ={data.active} recovered={data.recovered} deceased=  {data.deaths} format = {getLocaleNumber}/>

        </View>
    );
}



const styles = StyleSheet.create({
    card:{
        borderColor: COLORS.primaryDark,
        borderWidth: 2,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    header1:{
        margin: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    india:{
        color: 'black',
        fontSize: 30,
        fontWeight: '700',
        textAlign:'center'
    },
    totalCases:{
        color: COLORS.primaryDark,
        fontSize: 18,
        fontWeight: '700',
        textAlign:'center'
    }
});

export default Summary;