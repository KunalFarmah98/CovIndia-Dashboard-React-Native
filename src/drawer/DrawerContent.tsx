import React from 'react';
import {Avatar, Drawer, TouchableRipple} from 'react-native-paper';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import {COLORS} from '../theme/Colors';
import Links from '../assets/links';

export function DrawerContent(props) {
  const links = new Links();
  return (
    <View style={{flex: 1, marginTop: -5}}>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={styles.navHeader}>
            <Image
              source={require('../assets/app_icon.png')}
              style={styles.image}
            />
            <Text style={styles.header}>
              Welcome to Covid-19 India Dashboard
            </Text>
          </View>
          <Drawer.Section title="General" style={{marginTop: 8}}>
            <DrawerItem
              focused
              activeTintColor={COLORS.primary}
              icon={({color, size}) => (
                <Icon name="poll" color={color} size={20} />
              )}
              label="Dashboard"
              onPress={() => {
                props.navigation.navigate('Dashboard');
              }}
            />
            <DrawerItem
              activeTintColor={COLORS.primary}
              icon={({color, size}) => (
                <Icon name="help-circle-outline" color={color} size={size} />
              )}
              label="Helpline"
              onPress={() => {
                props.navigation.navigate('Helpline');
              }}
            />
          </Drawer.Section>

          <Drawer.Section title="Vaccination" style={{marginTop: 8}}>
            <DrawerItem
              activeTintColor={COLORS.primary}
              icon={({color, size}) => (
                <Icon name="needle" color={color} size={size} />
              )}
              label="Register for Vaccination"
              onPress={() => {
                props.navigation.navigate('WebView', { screen: 'WebViewScreen', params:{title: "COWIN Vaccine Registration", link: links.VACCINE_REG}});
              }}
            />
            <DrawerItem
              activeTintColor={COLORS.primary}
              icon={({color, size}) => (
                <Icon name="certificate-outline" color={color} size={size} />
              )}
              label="Vaccination Certificate"
              onPress={() => {
                props.navigation.navigate('WebView', { screen: 'WebViewScreen', params:{title: "COWIN Vaccine Certificate", link: links.VACCINE_CERT}});
              }}
            />
            <DrawerItem
              activeTintColor={COLORS.primary}
              icon={({color, size}) => (
                <Icon name="chart-bar" color={color} size={size} />
              )}
              label="Vaccination Statistics"
              onPress={() => {
                props.navigation.navigate('WebView', { screen: 'WebViewScreen', params:{title: "COWIN Vaccination Dashboard", link: links.VACCINE_STATS}});
              }}
            />
          </Drawer.Section>

          <Drawer.Section
            title="Beds, Oxigen, Leads and Posts"
            style={{marginTop: 8}}>
            <DrawerItem
              activeTintColor={COLORS.primary}
              icon={({color, size}) => (
                <Icon name="view-dashboard-outline" color={color} size={size} />
              )}
              label="Sprinklr Dashboard"
              onPress={() => {
                props.navigation.navigate('WebView', { screen: 'WebViewScreen', params:{title: "Sprinklr Dashboard", link: links.SPRINKLR_DASH}});
              }}
            />
            <DrawerItem
              activeTintColor={COLORS.primary}
              icon={({color, size}) => (
                <Icon name="help-network-outline" color={color} size={size} />
              )}
              label="Covid India Resources"
              onPress={() => {
                props.navigation.navigate('WebView', { screen: 'WebViewScreen', params:{title: "Covid India Resources", link: links.COVID_INDIA_RES}});
              }}
            />
            <DrawerItem
              activeTintColor={COLORS.primary}
              icon={({color, size}) => (
                <Icon name="hand-left" color={color} size={size} />
              )}
              label="Covid India Fighters"
              onPress={() => {
                props.navigation.navigate('WebView', { screen: 'WebViewScreen', params:{title: "Covid India Fighters", link: links.COVID_INDIA_FIGHTERS}});
              }}
            />
            <DrawerItem
              activeTintColor={COLORS.primary}
              icon={({color, size}) => (
                <Icon name="map-marker" color={color} size={size} />
              )}
              label="Hospital Locations"
              onPress={() => {
                Linking.openURL(links.HOSPITAL_LOC);
              }}
            />
          </Drawer.Section>

          <Drawer.Section
            title="Delhi/NCR Specific Leads/Resources"
            style={{marginTop: 8}}>
            <DrawerItem
              activeTintColor={COLORS.primary}
              icon={({color, size}) => (
                <Icon name="bullhorn-outline" color={color} size={size} />
              )}
              label="MH Covid Help Desk"
              onPress={() => {
                props.navigation.navigate('WebView', { screen: 'WebViewScreen', params:{title: "MH Covid Help Desk", link: links.MH_COVID_HELP_DESK}});
              }}
            />
            <DrawerItem
              activeTintColor={COLORS.primary}
              icon={({color, size}) => (
                <Icon name="robot" color={color} size={size} />
              )}
              label="Delhi Covid Health Bot"
              onPress={() => {
              Linking.openURL(links.DELHI_COVID_HEALTH_BOT);
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  navHeader: {
    backgroundColor: COLORS.primaryDark,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: 'center',
  },
  header: {
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginVertical: 5,
    padding: 10,
  },
  drawerText: {
    color: 'black',
    fontWeight: '600',
  },
});
