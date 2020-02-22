/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {createRef, useEffect, useState} from 'react';
import {View, Button, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setUser, setUserSignedIn} from 'store/actions';

let Profile = () => {
  let dispatch = useDispatch();

  return (
    <View style={{backgroundColor: 'orange'}}>
      <Button title="aa" onPress={() => dispatch(setUserSignedIn(false))} />
    </View>
  );
};

export default Profile;
