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

import {useScrollToTop} from '@react-navigation/native';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: require('../../../assets/images/milka.png'),
    title: 'Krupne životinje',
    numberOfVeterinarianStations: 20,
    numberOfVeterinarians: 90,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    image: require('../../../assets/images/cat.png'),
    title: 'Sitne životinje',
    numberOfVeterinarianStations: 40,
    numberOfVeterinarians: 200,
  },
];

let Home = () => {
  const ref = React.useRef(null);
  useScrollToTop(ref);

  let Item = ({image, title, numberOfVeterinarians, numberOfVeterinarianStations, last}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        flexDirection: 'row',
        height: 170,
        marginVertical: 8,
        marginBottom: last ? 40 : 8,
        marginHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
        elevation: 13,
      }}>
      <View
        style={{
          flex: 2,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 16,
          paddingHorizontal: 8,
        }}>
        <Image source={image} style={{width: '100%'}} resizeMode={'contain'} />
      </View>
      <View style={{flex: 3, borderRadius: 20, paddingLeft: 16}}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text style={{fontFamily: 'Nunito', fontSize: 18, color: '#303030'}}>{title}</Text>
          <Text style={{fontFamily: 'Nunito', fontSize: 12, fontWeight: '600', color: '#a9a9a9', marginTop: 16}}>
            {numberOfVeterinarianStations + ' veterinarskih stanica'}
          </Text>
          <Text style={{fontFamily: 'Nunito', fontSize: 12, color: '#a9a9a9'}}>
            {numberOfVeterinarians + ' veterinara'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <KeyboardAwareScrollView scrollEnabled={false} contentContainerStyle={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{height: 56, justifyContent: 'center', paddingHorizontal: 16}}>
        <Icon name="bars" size={24} />
      </View>
      <View style={{paddingHorizontal: 16, marginBottom: 8}}>
        <Text style={{fontFamily: 'Nunito', fontSize: 20, marginBottom: 20}}>Kako vam možemo pomoci?</Text>
        <View
          style={{
            backgroundColor: '#f8f8f8',
            flexDirection: 'row',
            height: 44,
            alignItems: 'center',
            borderRadius: 20,

            paddingLeft: 16,
          }}>
          <Icon name="search" color="#d2d2d2" size={20} />
          <TextInput
            style={{flex: 1, height: '100%', paddingLeft: 16, color: '#a0a0a0'}}
            placeholder="Potražite željenog veterinara, stanicu itd."
            placeholderTextColor={'#a0a0a0'}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
      </View>

      <FlatList
        style={{flex: 1}}
        ref={ref}
        data={DATA}
        renderItem={({item, index}) => <Item {...{...item, last: index === DATA.length - 1}} />}
        keyExtractor={(item, id) => item.id + id}
        ItemSeparatorComponent={({highlighted}) => <View style={{marginBottom: 0}} />}
      />
    </KeyboardAwareScrollView>
  );
};

export default Home;
