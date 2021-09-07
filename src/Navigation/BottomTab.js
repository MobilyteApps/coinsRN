import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from "react-navigation";
import TabBarComponent from '../Navigation/TabBarComponent';
import Home from '../components/Home.js';
import News from '../components/News.js';
import Profile from '../components/Profile.js';
import Saved from '../components/Saved.js';

const BottomTab = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
          header: null,
        }
      },
      News: {
        screen: News,
        navigationOptions: {
          header: null,
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          header: null,
        }
      },
      Saved: {
        screen: Saved,
        navigationOptions: {
          header: null,
        }
      }
  }, {
    tabBarComponent: TabBarComponent,
    initialRouteName: '',
    tabBarOptions: {
      
    },
    lazy: true
  });
  
  export default createAppContainer(BottomTab);