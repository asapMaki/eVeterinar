import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from 'loggedIn/Home';
import Profile from 'loggedIn/Profile';
import Calendar from 'loggedIn/Schedule';

import TabBar from './TabBarComponent';

let LoggedInStack = () => (
  <Tab.Navigator tabBar={props => <TabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Calendar-Month" component={Calendar} />
    <Tab.Screen name="Account" component={Profile} />
  </Tab.Navigator>
);

export default LoggedInStack;
