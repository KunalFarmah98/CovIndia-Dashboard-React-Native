import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { COLORS } from "../theme/Colors";


const Statistics = ({name, active, recovered, deceased, format})=>{
    console.log({name, active, recovered, deceased, format});
    return(
        <View>
            <Text style= {styles.header}>{name}:</Text>
            <View style = {styles.row}>
                <Text style = {styles.active}>Active:{'\n'}{format(active)}</Text>
                <Text style = {styles.recovered}>Recovered:{'\n'}{format(recovered)}</Text>
                <Text style = {styles.deceased}>Deceased:{'\n'}{format(deceased)}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        fontSize:15,
        fontWeight: '500',
        color: COLORS.primary,
        padding: 5,
        alignSelf: 'center'
    },
    row:{
        marginHorizontal: 20,
        marginBottom:5,
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