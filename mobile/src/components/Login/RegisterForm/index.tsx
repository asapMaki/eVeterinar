/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {createRef} from 'react';
import {View, Text} from 'react-native';
import gt from 'translations';

import {OutlinedTextField} from 'react-native-material-textfield';
import {Dropdown} from 'react-native-material-dropdown';

let RegisterForm = () => {
  let emailRef = createRef();
  let passwordRef = createRef();

  return (
    <View style={{}}>
      <Text style={{fontFamily: 'Nunito', fontSize: 24, marginBottom: 24}}>{gt('login.login', 'ba')}</Text>
      <View>
        <Text
          style={{
            fontFamily: 'Nunito',
            fontSize: 12,
            paddingLeft: 4,
            backgroundColor: 'white',
            left: 8,
            width: '25%',
            color: 'grey',
            top: 8,
            zIndex: 100,
          }}>
          Tip korisnika
        </Text>
        <Dropdown
          inputContainerStyle={{borderBottomColor: 'transparent', justifyContent: 'center'}}
          data={[{value: 'Veterinar'}, {value: 'Klijent'}]}
          value={'Veterinar'}
          dropdownPosition={-3.5}
          containerStyle={{borderRadius: 4, borderWidth: 1, borderColor: 'grey', marginBottom: 16, paddingLeft: 12}}
          pickerStyle={{backgroundColor: '#fff', borderRadius: 4, borderColor: 'grey', marginRight: 16}}
          itemTextStyle={{fontFamily: 'Nunito', fontSize: 24}}
          fontSize={12}
          dropdownOffset={{top: 16, left: 16}}
          itemColor={'#000'}
          // onChangeText={(value, idx, data) => {
          //   if (data[idx].locale != user.locale) {
          //     setSelectedLocale(props.languages[data[idx].locale][idx]);
          //     user.locale = data[idx].locale;
          //     setUser(user);
          //     setChanges(true);
          //   }
          // }}
        />
      </View>

      <OutlinedTextField
        label="Ime i prezime"
        returnKeyType="next"
        animationDuration={400}
        tintColor={'grey'}
        error={''}
        containerStyle={{marginBottom: 8}}
        titleTextStyle={{fontFamily: 'Nunito'}}
        onSubmitEditing={() => emailRef.focus()}
      />
      <OutlinedTextField
        label="E-mail"
        returnKeyType="next"
        animationDuration={400}
        containerStyle={{marginBottom: 8}}
        tintColor={'grey'}
        titleTextStyle={{fontFamily: 'Nunito'}}
        error={''}
        onSubmitEditing={() => passwordRef.focus()}
        ref={ref => (emailRef = ref)}
      />
      <OutlinedTextField
        label="Password"
        returnKeyType="next"
        titleTextStyle={{fontFamily: 'Nunito'}}
        animationDuration={400}
        tintColor={'grey'}
        error={''}
        onSubmitEditing={() => passwordRef.blur()}
        ref={ref => (passwordRef = ref)}
      />
    </View>
  );
};

export default RegisterForm;
