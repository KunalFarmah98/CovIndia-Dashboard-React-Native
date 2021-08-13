import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { COLORS } from "../theme/Colors";

const ContactsListItem = ({item, onCall}) => {
    
    return(
        <View style = {styles.card} >
            <View style = {styles.row}>
                <Text style = {styles.key}>{item.item.loc}</Text>
                <TouchableOpacity onPress={()=>{onCall(item.item.number)}}>
                    <Text style = {styles.number}>{item.item.number}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderColor: COLORS.primaryDark,
        borderWidth: 3,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        padding: 15
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    key:{
        color: 'black',
        fontSize: 14,
        textAlign:'left'
    },
    number:{
        color:COLORS.primary,
        fontSize: 14,
        textAlign: 'right',
        textDecorationLine : 'underline'
    },
});

export default ContactsListItem;