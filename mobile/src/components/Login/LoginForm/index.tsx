/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {createRef, useEffect, useState} from 'react';
import {View, Image, Text} from 'react-native';

import {OutlinedTextField, TextField} from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

let LoginForm = ({email, setEmail, password, setPassword}) => {
  let emailRef = createRef();
  let passwordRef = createRef();
  let [secureTextEntry, setSecureTextEntry] = useState(true);
  // const Layout = store ? createRootNavigator(firstTime, signedIn) : null;

  let renderPasswordAccessory = () => {
    let name = secureTextEntry ? 'visibility' : 'visibility-off';

    return (
      <MaterialIcon
        size={24}
        name={name}
        color={TextField.defaultProps.baseColor}
        onPress={() => setSecureTextEntry(!secureTextEntry)}
        suppressHighlighting={true}
      />
    );
  };

  return (
    <View style={{backgroundColor: 'transparent'}}>
      <Text style={{fontFamily: 'Nunito', fontSize: 24, marginBottom: 24}}>Prijavi se</Text>

      <OutlinedTextField
        label="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
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
        value={password}
        secureTextEntry={secureTextEntry}
        type={'password'}
        autoCorrect={false}
        renderRightAccessory={renderPasswordAccessory}
        onChangeText={text => setPassword(text)}
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
