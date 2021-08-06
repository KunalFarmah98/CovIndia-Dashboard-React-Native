import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { COLORS } from "../theme/Colors";
import Pie from 'react-native-pie'



const HistoryDetailsHeader = ({date, dailyActive, dailyRecovered, dailyDeceased, totalRecovered, totalActive, totalDeceased})=>{


    console.info('date '+date);

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

    const total = Number(dailyRecovered)+Number(dailyDeceased);
    const recovered_p = getPercentage(dailyRecovered,total.toString());
    const deceased_p = getPercentage(dailyDeceased,total.toString());

    return(
        <View style={styles.card}>
           
            <Text style= {styles.header}>{date}</Text>

            <View style = {{alignSelf: 'center', margin:10}}>
                <Pie
                radius={90}
                innerRadius={50}
                sections={[
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

            <Text style = {styles.title}>Recently Reported:</Text>

            <View style = {styles.row}>
                <Text style = {styles.active}>Cases:{'\n'}{getLocaleNumber(dailyActive)}</Text>
                <Text style = {styles.recovered}>Recovered:{'\n'}{getLocaleNumber(dailyRecovered)}</Text>
                <Text style = {styles.deceased}>Deceased:{'\n'}{getLocaleNumber(dailyDeceased)}</Text>
            </View>

            <Text style = {styles.title}>Total Statistics</Text>
            <View style = {styles.row}>
                <Text style = {styles.active}>Total:{'\n'}{getLocaleNumber(totalActive)}</Text>
                <Text style = {styles.recovered}>Recovered:{'\n'}{getLocaleNumber(totalRecovered)}</Text>
                <Text style = {styles.deceased}>Deceased:{'\n'}{getLocaleNumber(totalDeceased)}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card:{
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: 'white',
        borderColor: COLORS.primaryDark
    },
    title:{
        fontSize:16,
        fontWeight: '500',
        color: COLORS.primary,
        padding: 5,
        alignSelf: 'center',
    },
    header:{
        fontSize:25,
        color: 'black',
        padding: 5,
        fontWeight: '700',
        marginBottom: 5,
        alignSelf: 'center',
    },
    row:{
        marginHorizontal: 20,
        marginTop:5,
        marginBottom:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    active:{
        fontSize: 17,
        color: COLORS.pieBlue,
        textAlign:'center'
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

export default HistoryDetailsHeader;