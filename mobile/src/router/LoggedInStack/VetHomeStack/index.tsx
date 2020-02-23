import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import VetHome from 'loggedIn/VetHome';

let VetHomeStack = props => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={VetHome} options={{}} />
    </Stack.Navigator>
  );
};

export default VetHomeStack;
