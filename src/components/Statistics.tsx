import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { COLORS } from "../theme/Colors";


const Statistics = ({name, active, recovered, deceased, format ,isRecent =false})=>{

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
        <View>
            {name.length>0?<Text style= {styles.header}>{name}:</Text>:null}
            <View style = {styles.row}>
                <Text style = {styles.active}>{isRecent?'Cases':'Active'}:{'\n'}{getLocaleNumber(active)}</Text>
                <Text style = {styles.recovered}>Recovered:{'\n'}{getLocaleNumber(recovered)}</Text>
                <Text style = {styles.deceased}>Deceased:{'\n'}{getLocaleNumber(deceased)}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        fontSize:16,
        fontWeight: '500',
        color: COLORS.primary,
        padding: 5,
        marginTop: 10,
        alignSelf: 'center',
    },
    row:{
        marginHorizontal: 20,
        marginTop:5,
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

export default Statistics;