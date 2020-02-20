/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
if (__DEV__) import('services/Reactotron');
import dataService from 'services/Data';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'orange', flex: 1}}>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default App;
