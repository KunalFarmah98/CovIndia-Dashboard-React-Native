import React from 'react';
import {Avatar,Drawer,TouchableRipple} from 'react-native-paper';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, Image, StyleSheet} from 'react-native';
import { COLORS } from '../theme/Colors';

export function DrawerContent(props) {

    return(
        <View style={{flex:1, marginTop: -5}}>
            <DrawerContentScrollView {...props}>
                <View style = {styles.navHeader}>
                    <Image source = {require('../assets/app_icon.png')} style={styles.image}/>
                    <Text style = {styles.header}>Welcome to Covid-19 India Dashboard</Text>
                </View>
            </DrawerContentScrollView>
        </View>
    )


}

const styles =  StyleSheet.create({
    navHeader:{
        backgroundColor: COLORS.primaryDark,
        alignItems: 'center',
    },
    image:{
        width: 100,
        height: 100,
        marginTop: 10,
        alignSelf: 'center'
    },
    header:{
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        marginVertical: 5,
        padding: 10
    }
})