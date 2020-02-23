/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState, createRef} from 'react';
import {View, Image, Text, TouchableOpacity, ActivityIndicator, ImageBackground} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import gt from 'translations';
import {useSelector, useDispatch} from 'react-redux';
import {DropDownHolder} from '../../../App';
import dataService from 'services/Data';
import {setUser, setUserSignedIn} from 'store/actions';

let Button = ({active = false, type, pressed, onPress, loading}) => (
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
      {loading && pressed ? (
        <ActivityIndicator size={16} color={'#fff'} />
      ) : (
        <Text style={{color: pressed ? '#fff' : '#6D9773', fontFamily: 'Nunito', fontSize: 14}}>
          {gt('login.' + type, 'ba')}
        </Text>
      )}
    </TouchableOpacity>
  </View>
);

let Login = props => {
  let [loading, setLoading] = useState(false);
  let [loginPressed, setLoginPressed] = useState(true);

  let [role, setRole] = useState('vet');
  let [first_name, setFirstName] = useState('');
  let [last_name, setLastName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  let dispatch = useDispatch();
  return (
    <View>
      <Image
        style={{position: 'absolute', top: 0, left: -10, right: 0, bottom: 0}}
        source={require('../../assets/images/doctor.png')}
        resizeMode="contain"
      />
      <KeyboardAwareScrollView
        contentContainerStyle={{}}
        scrollEnabled={true}
        keyboardOpeningTime={0}
        showsVerticalScrollIndicator={false}>
        <View style={{borderRadius: 16, width: '100%', height: '100%', padding: 16, paddingTop: 72, paddingBottom: 24}}>
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

            {loginPressed ? (
              <LoginForm {...{email, setEmail, password, setPassword}} />
            ) : (
              <RegisterForm
                {...{
                  email,
                  setEmail,
                  password,
                  setPassword,
                  first_name,
                  setFirstName,
                  last_name,
                  setLastName,
                  role,
                  setRole,
                }}
              />
            )}

            <View style={{backgroundColor: 'white'}}>
              <View style={{flexDirection: 'row', marginVertical: 8}}>
                <Button
                  active
                  type="login"
                  pressed={loginPressed}
                  loading={loading}
                  onPress={() => {
                    if (loginPressed) {
                      setLoading(true);

                      dataService('POST', 'eVeterinarApi', 'users/login', {}, {email, password})
                        .then(({data}) => {
                          setLoading(false);
                          dispatch(setUser(data));
                          dispatch(setUserSignedIn(true));
                        })
                        .catch(error => {
                          setLoading(false);
                          DropDownHolder.dropDown.alertWithType('error', '', 'Email ili lozinka su neispravni');
                        });
                    } else {
                      setPassword('');
                      setLoginPressed(true);
                    }
                  }}
                />
                <Button
                  type="register"
                  pressed={!loginPressed}
                  loading={loading}
                  onPress={() => {
                    if (!loginPressed) {
                      setLoading(true);

                      dataService(
                        'POST',
                        'eVeterinarApi',
                        'users',
                        {},
                        {
                          first_name,
                          last_name,
                          email,
                          password,
                          role,
                          is_online: true,
                        },
                      )
                        .then(({data}) => {
                          setLoading(false);
                          DropDownHolder.dropDown.alertWithType('success', '', 'Uspjesna registracija');
                          setLoginPressed(true);
                        })
                        .catch(error => {
                          setLoading(false);
                          DropDownHolder.dropDown.alertWithType('error', '', 'Neki od podataka nisu ispravni');
                        });
                    } else {
                      setPassword('');
                      setLoginPressed(false);
                    }
                  }}
                />
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
    </View>
  );
};

export default Login;
