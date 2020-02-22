/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import gt from 'translations';
import {useSelector, useDispatch} from 'react-redux';

let Button = ({active = false, type, pressed, onPress}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 8}}>
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: pressed ? '#6D9773' : '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 116,
        height: 43,
        borderRadius: 24,
      }}>
      <Text style={{color: pressed ? '#fff' : '#6D9773', fontFamily: 'Nunito', fontSize: 14}}>
        {gt('login.' + type, 'ba')}
      </Text>
    </TouchableOpacity>
  </View>
);

let Login = () => {
  let [loginPressed, setLoginPressed] = useState(true);

  useEffect(() => {});

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{padding: 16, paddingTop: 72, paddingBottom: 24}}
      scrollEnabled={true}
      keyboardOpeningTime={0}
      automaticallyAdjustContentInsets={true}>
      <Image
        style={{position: 'absolute', left: -10}}
        source={require('../../assets/images/doctor.png')}
        resizeMode="contain"
      />
      <View style={{borderRadius: 16, width: '100%'}}>
        <View style={{backgroundColor: 'transparent'}}>
          <Image
            style={{height: 150, width: '100%', borderTopLeftRadius: 16, borderTopRightRadius: 16}}
            source={require('../../assets/images/doctor-header.png')}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}>
          <Image
            style={{height: 52, width: 220}}
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
          />

          {loginPressed ? <LoginForm /> : <RegisterForm />}

          <View style={{backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row', marginVertical: 8}}>
              <Button active type="login" pressed={loginPressed} onPress={() => setLoginPressed(true)} />
              <Button type="register" pressed={!loginPressed} onPress={() => setLoginPressed(false)} />
            </View>

            {loginPressed && (
              <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', marginVertical: 8}}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',

                    alignItems: 'center',
                    borderRadius: 24,
                  }}>
                  <Text style={{color: '#000', fontFamily: 'Nunito', fontSize: 16}}>
                    {gt('login.forgotPassword', 'ba')}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
