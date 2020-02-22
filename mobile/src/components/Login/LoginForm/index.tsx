/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {createRef, useEffect} from 'react';
import {View, Image, Text} from 'react-native';

import {OutlinedTextField} from 'react-native-material-textfield';

let LoginForm = () => {
  let emailRef = createRef();
  let passwordRef = createRef();
  // const Layout = store ? createRootNavigator(firstTime, signedIn) : null;

  useEffect(() => {});

  return (
    <View style={{backgroundColor: 'transparent'}}>
      <Text style={{fontFamily: 'Nunito', fontSize: 24, marginBottom: 24}}>Prijavi se</Text>

      <OutlinedTextField
        label="E-mail"
        returnKeyType="next"
        animationDuration={400}
        tintColor={'grey'}
        error={''}
        containerStyle={{marginBottom: 8}}
        titleTextStyle={{fontFamily: 'Nunito'}}
        onSubmitEditing={() => passwordRef.focus()}
      />

      <OutlinedTextField
        label="Lozinka"
        returnKeyType="next"
        animationDuration={400}
        tintColor={'grey'}
        error={''}
        onSubmitEditing={() => passwordRef.blur()}
        ref={ref => (passwordRef = ref)}
      />
    </View>
  );
};

export default LoginForm;
