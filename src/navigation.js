import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './components/home/home';
import Settings from './components/settings/settings';
import Leaderboard from './components/leaderboard/leaderboard';

class Nav extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}

const RootStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={24} />
      ),
    },
  },
  Leaderboard: {
    screen: Leaderboard,
    navigationOptions: {
      tabBarLabel: 'Leaderboard',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="assessment" size={24} />
      ),
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="settings" size={24} />
      ),
    },
  },
});

const Navigator = createAppContainer(RootStack);

export default Nav;
