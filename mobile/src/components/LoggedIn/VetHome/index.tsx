/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {createRef, useEffect, useState, useRef} from 'react';
import {ScrollView, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LocaleConfig, Calendar} from 'react-native-calendars';

let VetHome = () => {
  LocaleConfig.locales['ba'] = {
    monthNames: [
      'Januar',
      'Februar',
      'Mart',
      'April',
      'Maj',
      'Juni',
      'Juli',
      'August',
      'Septembar',
      'Oktobar',
      'Novembar',
      'Decembar',
    ],
    monthNamesShort: ['Jan.', 'Feb.', 'Mart', 'April', 'Maj', 'Juni', 'Juli', 'Aug', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNamesShort: ['Pon', 'Uto', 'Sri', 'Cet', 'Pet', 'Sub', 'Ned'],
    dayNames: ['Ponedeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota', 'Nedelja'],
    today: 'Danas',
  };
  LocaleConfig.defaultLocale = 'ba';
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{height: 56, justifyContent: 'center', paddingHorizontal: 16}}>
        <Icon name="bars" size={24} />
      </View>
      <View style={{paddingHorizontal: 16, marginBottom: 8}}>
        <Text style={{fontFamily: 'Nunito', fontSize: 20, marginBottom: 20}}>Kada ste dostupni za konsultacije?</Text>
      </View>
      <ScrollView scrollEnabled={true} style={{flex: 1}}>
        <Calendar theme={{}} />
      </ScrollView>
    </View>
  );
};

export default VetHome;
