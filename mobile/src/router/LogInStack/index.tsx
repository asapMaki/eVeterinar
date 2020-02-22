import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Login from 'login';
import LoggedInStack from '../LoggedInStack';

let LogInStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default LogInStack;
