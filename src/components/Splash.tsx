import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';


const Splash = ()=>{
    return(
    <View style = {styles.main}>
        <Image style = {styles.image} source={require('../assets/app_icon.png')}/>
        <Text style = {styles.text}>COVID-19 India Information, Dashboard, Vaccination</Text>
    </View>
    );
}

const styles = StyleSheet.create({

    main:{
        backgroundColor: '#3700B3',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width:200,
        height:200,
        alignSelf:'center'
    },
    text:{
        fontWeight: '700',
        color: 'white',
        padding: 5,
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20
    }
});

export default Splash;