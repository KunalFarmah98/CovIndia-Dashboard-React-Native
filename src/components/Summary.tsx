import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { COLORS } from "../theme/Colors";
import Statistics from "./Statistics";
import Pie from 'react-native-pie'



const Summary = ({total, active, recovered, deceased, currActive, currRecovered, currDeceased})=>{

    const getPercentage = (val:String ,total:String) => {
    return (Number(val)/Number(total))*100
    }

    const chart_wh = 250
    const series = [Number(active), Number(recovered), Number(deceased)]
    const sliceColor = [COLORS.pieBlue, COLORS.pieGreen, COLORS.pieRed];
    return (
        <View style = {styles.card}>

            <View style = {styles.header1}>
                <Text style = {styles.india}>India</Text>
                <Text style = {styles.totalCases}>Total Cases:{'\n'}{getLocaleNumber(total)}</Text>
            </View>
            <View style = {{alignItems:'center', marginVertical:10}}>
            <Pie
              radius={80}
              sections={[
                {
                  percentage: getPercentage(active,total),
                  color: COLORS.pieBlue,
                },
                {
                  percentage: getPercentage(recovered,total),
                  color: COLORS.pieGreen,
                },
                {
                  percentage: getPercentage(deceased,total),
                  color: COLORS.pieRed,
                },
              ]}
              strokeCap={'butt'}
            />
            </View>

            {currActive>0 || currRecovered>0 || currDeceased>0?
                <Statistics name=  "Recent Statistics" active = {currActive} recovered = {currRecovered} deceased = {currDeceased} format = {getLocaleNumber}/>
                :
                null
            }

            <Statistics name= "Total Statistics" active ={active} recovered={recovered} deceased=  {deceased} format = {getLocaleNumber}/>

        </View>
    );
}

const getLocaleNumber = (val:String)=>{
    val=  val.toString();
    var lastThree = val.substring(val.length-3);
    var otherNumbers = val.substring(0,val.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
}

const styles = StyleSheet.create({
    card:{
        borderColor: COLORS.primaryDark,
        borderWidth: 2,
        margin: 10,
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