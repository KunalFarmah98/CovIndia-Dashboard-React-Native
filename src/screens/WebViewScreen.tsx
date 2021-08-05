import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {WebView} from 'react-native-webview';
import {BackHandler, ActivityIndicator, StyleSheet} from 'react-native'; 
import CookieManager from '@react-native-cookies/cookies';


const IndicatorLoadingView = () => {
    return (
      <ActivityIndicator
        color="#3235fd"
        size="large"
        style={styles.IndicatorStyle}
      />
    );
  }

  const styles = StyleSheet.create({
  IndicatorStyle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
  });

const WebViewScreen = ({route})=>{
    const url = route.params.link;
    console.log(url);

    const [currUrl,setCurrUrl] = useState(url);
    const [canGoBack,setCanGoBack] = useState(false);


    const handleNavigation = (navState)=>{

        console.log(navState);
        setCurrUrl(navState.url);

    }

    const webViewRef = useRef(null);
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                CookieManager
                  .clearAll(true)
                  .then((res) => {
                      console.log('CookieManager.clearAll =>', res)
                      return false;
                  });
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        },[])
    );



    return(
        <WebView source = {{uri: url}}
        startInLoadingState = {true}
        cacheEnabled={false}
        javaScriptEnabled = {true}
        renderLoading = {IndicatorLoadingView}
        ref={webViewRef}
        onNavigationStateChange = {(navState)=>{handleNavigation(navState)}}/>
    );


}

export default WebViewScreen;