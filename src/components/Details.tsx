import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { COLORS } from "../theme/Colors";
import Pie from 'react-native-pie'



const Details = ({active, recovered, deceased, total ,isRecent=false})=>{

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

    let total_;
    if(isRecent){
        total_ = (Number(active)+Number(recovered)+Number(deceased)).toString();
    }
    else{
        total_=total;
    }

    console.log(active);
    console.log(recovered);
    console.log(deceased);
    console.log(total_);

    let active_p = getPercentage(active,total_);
    let recovered_p = getPercentage(recovered,total_);
    let deceased_p = getPercentage(deceased,total_);

    // making sum = 100 in case of wrong roundoff
    recovered_p += (100-(active_p+deceased_p+recovered_p));

    return(
        <View style={styles.card}>
            {total>0?
                <Text style= {styles.header}>Total Cases: {getLocaleNumber(total)}</Text>
                :
                <Text style={styles.header}>Recently Reported: </Text>
            }
            <View style = {{alignSelf: 'center', margin:10}}>
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
            <View style = {styles.row}>
                <Text style = {styles.active}>Active:{'\n'}{getLocaleNumber(active)}</Text>
                <Text style = {styles.recovered}>Recovered:{'\n'}{getLocaleNumber(recovered)}</Text>
                <Text style = {styles.deceased}>Deceased:{'\n'}{getLocaleNumber(deceased)}</Text>
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
    header:{
        fontSize:17,
        color: COLORS.primary,
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
        fontSize: 16,
        color: COLORS.pieBlue,
        textAlign:'center'
    },
    recovered:{
        fontSize: 16,
        color: COLORS.pieGreen,
        textAlign:'center'
    },
    deceased:{
        fontSize: 16,
        color: COLORS.pieRed,
        textAlign:'center'
    }
});

export default Details;