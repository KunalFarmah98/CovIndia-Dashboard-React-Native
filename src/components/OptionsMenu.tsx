import React from "react";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {View, Linking} from 'react-native';
import Links from '../assets/links';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";


const OptionsMenu = ()=>{

    const navigation = useNavigation();

    let _menu = null;
    const setMenuRef = ref => {
        _menu = ref;
    };

    const hideMenu = () => {
        _menu.hide();
    };

    const showMenu = () => {
        _menu.show();
    };

const links = new Links();
return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Menu
          ref={setMenuRef}
          button={<Ionicons name='ellipsis-vertical-outline' size={20} color='white' onPress = {showMenu} style = {{marginRight:15}}/>}
          >
          <MenuItem onPress={()=>{
              hideMenu();
              navigation.navigate('WebView', {screen:'WebViewScreen', params:{title: 'Covid-19 Info', link: links.INFO}})
          }}>Covid-19 Info</MenuItem>
          <MenuItem onPress={()=>{
              hideMenu();
              navigation.navigate('WebView', {screen:'WebViewScreen', params:{title: 'Donate', link: links.DONATE}})
          }}>Donate</MenuItem>
          <MenuItem onPress={()=>{
              hideMenu();
              Linking.openURL(links.ME);
          }}>
            About
          </MenuItem>
          <MenuItem onPress={()=>{
              hideMenu();
              Linking.openURL(links.PRIVACY_POLICY);
          }}>Privacy Policy</MenuItem>
        </Menu>
      </View>
    );
  }

  export default OptionsMenu;