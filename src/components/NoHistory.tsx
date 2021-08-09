import React from "react";

import {View, Text, StyleSheet} from "react-native";

const NoHistory = () => {
    return <View style = {styles.view}>
        <Text style = {styles.msg1}>No History Available</Text>
        <Text style = {styles.msg2}>Please Try again later</Text>
    </View>
}


const styles = StyleSheet.create({
    view:{
        marginTop: 50,
        alignItems:'center',
        justifyContent:'center'
    },
    msg1:{
        fontSize: 16,
        color: 'red',
        marginVertical: 10,
        padding:5,
        textAlign:'center',
        alignSelf:'center'
        },
    msg2:{
        fontSize: 14,
        color: 'black',
        padding:5,
        textAlign:'center',
        alignSelf:'center'
    }
})
export default NoHistory;