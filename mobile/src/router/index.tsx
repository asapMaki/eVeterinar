import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogInStack from './LogInStack';
import LoggedInStack from './LoggedInStack';
const Stack = createStackNavigator();

let rootStack = () => (
  <NavigationContainer>
    <LogInStack />
  </NavigationContainer>
);

export default rootStack;
