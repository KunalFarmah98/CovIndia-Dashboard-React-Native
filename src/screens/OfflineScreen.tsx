import React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";
import {Card} from 'react-native-paper';
import { COLORS } from "../theme/Colors";

const OfflineScreen = ({refresh}) => {

    return(
        <View style = {styles.view}>
            <Card mode="elevated" elevation={5} style={{borderColor:COLORS.primary, borderRadius:10, borderWidth:2}}>
                <Card.Content>
                    <Text style = {styles.header}>You are Offline, no data found in local storage</Text>
                    <Text style = {styles.subHeader}>Please Connect to the internet to get latest data and get the same data on offline launches in the future</Text>
                </Card.Content>
            </Card>
            <TouchableOpacity onPress = {()=>{refresh}}>
                <Text style = {styles.refresh} >Refresh</Text>
            </TouchableOpacity>
        </View>
    )


}
const styles = StyleSheet.create({
    view:{
        flex:1, 
        justifyContent: 'center',
        margin: 10
    },
    header:{
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        marginBottom: 20,
        alignSelf: 'center'
    },
    subHeader:{
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        alignSelf: 'center',
    },
    refresh:{
        color: COLORS.primary,
        fontWeight: '700',
        fontSize: 22,
        alignSelf: 'center',
        marginTop: 50
    }
})
export default OfflineScreen;