/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {createRef, useEffect} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';

import {TextField, FilledTextField, OutlinedTextField} from 'react-native-material-textfield';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

let Login = () => {
  let emailRef = createRef();
  let passwordRef = createRef();
  // const Layout = store ? createRootNavigator(firstTime, signedIn) : null;

  useEffect(() => {});

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flex: 1, padding: 16, paddingTop: 72, paddingBottom: 24}}
      scrollEnabled={true}
      keyboardOpeningTime={0}
      resetScrollToCoords={{x: 0, y: 0}}>
      <Image
        style={{position: 'absolute', left: -10}}
        source={require('../../assets/images/doctor.png')}
        resizeMode="contain"
      />
      <View style={{flex: 1, borderRadius: 16}}>
        <View style={{flex: 2, backgroundColor: 'transparent'}}>
          <Image
            style={{width: '100%', height: '100%', borderTopLeftRadius: 16, borderTopRightRadius: 16}}
            source={require('../../assets/images/doctor-header.png')}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            flex: 5,
            backgroundColor: 'white',
            padding: 16,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}>
          <Image
            style={{width: '70%', height: '100%', flex: 2}}
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
          />
          <View style={{flex: 7}}>
            <Text style={{fontFamily: 'Nunito', fontSize: 24, marginBottom: 24}}>Prijavi se</Text>
            <OutlinedTextField
              label="E-mail"
              returnKeyType="next"
              animationDuration={400}
              tintColor={'black'}
              error={''}
              containerStyle={{marginBottom: 16}}
              // formatText={this.formatText}
              onSubmitEditing={() => passwordRef.focus()}
              // inputContainerStyle={{backgroundColor: 'red'}}
              // containerStyle={{backgroundColor: 'orange'}}
              //   ref={ref => (emailRef = ref)}
            />
            <OutlinedTextField
              label="Password"
              returnKeyType="next"
              animationDuration={400}
              tintColor={'grey'}
              error={''}
              onSubmitEditing={() => passwordRef.blur()}
              ref={ref => (passwordRef = ref)}
            />
          </View>

          <View style={{flex: 3, backgroundColor: 'white'}}></View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
