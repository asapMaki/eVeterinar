/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {createRef, useState} from 'react';
import {View, Text} from 'react-native';
import gt from 'translations';

import {OutlinedTextField, TextField} from 'react-native-material-textfield';
import {Dropdown} from 'react-native-material-dropdown';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

let RegisterForm = ({
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
}) => {
  let lastNameRef = createRef();
  let emailRef = createRef();
  let passwordRef = createRef();
  let [secureTextEntry, setSecureTextEntry] = useState(true);
  let [types, setTypes] = useState([
    {value: 'Veterinar', key: 'vet'},
    {value: 'Klijent', key: 'user'},
  ]);

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
    <View style={{}}>
      <Text style={{fontFamily: 'Nunito', fontSize: 24, marginBottom: 24}}>Registruj se</Text>
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
          data={types}
          value={'Veterinar'}
          dropdownPosition={-3.5}
          containerStyle={{borderRadius: 4, borderWidth: 1, borderColor: 'grey', marginBottom: 16, paddingLeft: 12}}
          pickerStyle={{backgroundColor: '#fff', borderRadius: 4, borderColor: 'grey', marginRight: 16}}
          itemTextStyle={{fontFamily: 'Nunito', fontSize: 24}}
          fontSize={12}
          dropdownOffset={{top: 16, left: 16}}
          itemColor={'#000'}
          onChangeText={(value, idx, data) => {
            setRole(data[idx].key);
          }}
        />
      </View>

      <OutlinedTextField
        label="Ime"
        returnKeyType="next"
        value={first_name}
        onChangeText={text => setFirstName(text)}
        autoCorrect={false}
        animationDuration={400}
        tintColor={'grey'}
        error={''}
        containerStyle={{marginBottom: 8}}
        titleTextStyle={{fontFamily: 'Nunito'}}
        onSubmitEditing={() => lastNameRef.focus()}
      />
      <OutlinedTextField
        label="Prezime"
        returnKeyType="next"
        value={last_name}
        onChangeText={text => setLastName(text)}
        autoCorrect={false}
        animationDuration={400}
        tintColor={'grey'}
        error={''}
        containerStyle={{marginBottom: 8}}
        titleTextStyle={{fontFamily: 'Nunito'}}
        onSubmitEditing={() => emailRef.focus()}
        ref={ref => (lastNameRef = ref)}
      />
      <OutlinedTextField
        label="E-mail"
        returnKeyType="next"
        animationDuration={400}
        value={email}
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        containerStyle={{marginBottom: 8}}
        tintColor={'grey'}
        titleTextStyle={{fontFamily: 'Nunito'}}
        autoCorrect={false}
        error={''}
        onSubmitEditing={() => passwordRef.focus()}
        ref={ref => (emailRef = ref)}
      />
      <OutlinedTextField
        label="Lozinka"
        returnKeyType="done"
        value={password}
        onChangeText={text => setPassword(text)}
        titleTextStyle={{fontFamily: 'Nunito'}}
        animationDuration={400}
        secureTextEntry={secureTextEntry}
        tintColor={'grey'}
        autoCorrect={false}
        error={''}
        renderRightAccessory={renderPasswordAccessory}
        onSubmitEditing={() => passwordRef.blur()}
        ref={ref => (passwordRef = ref)}
      />
    </View>
  );
};

export default RegisterForm;
