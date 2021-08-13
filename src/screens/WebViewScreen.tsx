import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {WebView} from 'react-native-webview';
import {BackHandler, ActivityIndicator, StyleSheet, View} from 'react-native'; 
import CookieManager from '@react-native-cookies/cookies';
import {COLORS} from '../theme/Colors'
import { useNavigation } from '@react-navigation/native';


const IndicatorLoadingView = () => {
    return (
      <ActivityIndicator
        color={COLORS.primaryDark}
        size="large"
        style={styles.IndicatorStyle}
      />
    );
  }

  const styles = StyleSheet.create({
  IndicatorStyle: {
    position: "absolute",
    alignItems: "center",
    alignSelf : "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex:1
  }
  });

const WebViewScreen = ({route})=>{
    const url = route.params.link;
    const navigation = useNavigation();
    const webViewRef = useRef(null);
    const [loading,setLoading] = useState(true);
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                CookieManager
                  .clearAll(true)
                  .then((res) => {
                      webViewRef.current.setS
                      console.log('CookieManager.clearAll =>', res)
                      if(route.params.title==='Helpline'){
                        navigation.navigate('Helpline');
                      }
                      else
                        return false;
                  });
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        },[])
    );

    return(
          <View style={{flex:1}}>
            <WebView 
            style = {{flex:1}}
            source = {{uri: url}}
            incognito
            startInLoadingState = {true}
            cacheEnabled={false}
            javaScriptEnabled = {true}
            domStorageEnabled = {false}
            renderLoading = {IndicatorLoadingView}
            ref={webViewRef}
            onNavigationStateChange = {(navState)=>{console.log(navState); setLoading(navState.loading)}}/>

            {loading?<IndicatorLoadingView/>:null}
          </View>
    );


}

export default WebViewScreen;