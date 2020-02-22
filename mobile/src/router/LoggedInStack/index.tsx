import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from 'loggedIn/Home';
import Profile from 'loggedIn/Profile';
import Schedule from 'loggedIn/Schedule';

let LoggedInStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Schedule" component={Schedule} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default LoggedInStack;
