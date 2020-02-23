/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {createRef, useEffect, useState, useRef} from 'react';
import {TextInput, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';

let VetHome = () => {
  return (
    <KeyboardAwareScrollView scrollEnabled={false} contentContainerStyle={{flex: 1, backgroundColor: 'orange'}}>
      <View style={{height: 56, justifyContent: 'center', paddingHorizontal: 16}}>
        <Icon name="bars" size={24} />
      </View>
      <View style={{paddingHorizontal: 16, marginBottom: 8}}>
        <Text style={{fontFamily: 'Nunito', fontSize: 20, marginBottom: 20}}>Kada ste dostupni za konsultacije?</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default VetHome;
