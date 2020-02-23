import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Home from 'loggedIn/Home';

let HomeStack = props => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} options={{}} />
    </Stack.Navigator>
  );
};

export default HomeStack;
