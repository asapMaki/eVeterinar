import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Login from 'login';
import LoggedInStack from '../LoggedInStack';

let LogInStack = props => {
  console.tron.log(props);
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} options={{}} />
    </Stack.Navigator>
  );
};

export default LogInStack;
