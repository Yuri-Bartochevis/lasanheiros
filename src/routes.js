import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { MaterialIcons } from '@expo/vector-icons'

import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native'


import EventSearch from './pages/EventSearch'
import EventDetail from './pages/EventDetail'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Profile from './pages/Profile'



const FeedStack = createStackNavigator(
    {
      Feed: {
        screen: Feed,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: 'Feed',
            headerLeft: () => (
              <MaterialIcons style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="menu" size={30} />
            )
          };
        }
      },
      EventDetail: {
        screen: EventDetail
      }
    },
    {
      defaultNavigationOptions: {
        gestureEnabled: false
      }
    }
  );

  const ProfileStack = createStackNavigator(
    {
      Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: 'Perfil',
            headerLeft: () => (
              <MaterialIcons style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="menu" size={30} />
            )
          };
        }
      },
    },
    {
      defaultNavigationOptions: {
        gestureEnabled: false
      }
    }
  );

  const EventSearchStack = createStackNavigator(
    {
        EventSearch: {
        screen: EventSearch,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: 'Buscar Eventos',
            headerLeft: () => (
              <MaterialIcons style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="menu" size={30} />
            )
          };
        }
      },
    },
    {
      defaultNavigationOptions: {
        gestureEnabled: false
      }
    }
  );




const bottomNavigator = createBottomTabNavigator(
    {
        FeedStack: { screen: FeedStack,
            navigationOptions: ({navigation}) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                return {
                    title: routeName,
                }
            } 
        },
        ProfileStack: { screen: ProfileStack,
            navigationOptions: ({navigation}) => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                return {
                    title: routeName,
                }
            } 
        },
        EventSearchStack : { screen: EventSearchStack,
            navigationOptions: ({navigation}) => {
                console.log(navigation);
                const { routeName } = navigation.state.routes[navigation.state.index];
                return {
                    title: routeName,
                }
            } 
        },
    },
    {
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
          headerShown: false,
          headerTitle: routeName
        };
      }
    }
  );

const stackNavigator = createStackNavigator({
    bottomNavigator: bottomNavigator
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: () => <MaterialIcons style={{ paddingLeft: 10 }} name="menu" size={30} onPress={() => navigation.openDrawer()} />
        }
    }
});

const DrawerNavigator = createDrawerNavigator({
    Feed: { screen: stackNavigator }
});

const AppSwitchNavigator = createSwitchNavigator({
    login: { screen: Login },
    Feed: { screen: DrawerNavigator },
});

const Routes = createAppContainer(AppSwitchNavigator);

module.exports = Routes;