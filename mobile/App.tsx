/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StatusBar, SafeAreaView} from 'react-native';
if (__DEV__) import('services/Reactotron');
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from 'store';
import Router from 'router';

interface AppState {
  store: any;
  persistor: any;
  isUserSignedIn: boolean;
}
import DropdownAlert from 'react-native-dropdownalert';

export class DropDownHolder {
  static dropDown;
  static setDropDown(dropDown) {
    this.dropDown = dropDown;
  }
  static getDropDown() {
    return this.dropDown;
  }
}

export default class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      store: null,
      persistor: null,

      isUserSignedIn: null,
    };
    this;
  }

  async componentDidMount() {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setHidden(false);
    Platform.OS == 'android' && StatusBar.setTranslucent(false);
    Platform.OS == 'android' && StatusBar.setBackgroundColor('#fff');

    let {store, persistor} = await configureStore();

    this.setState({store, persistor});
  }

  render() {
    let {store, persistor} = this.state;

    return !store ? null : (
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
        <DropdownAlert ref={ref => DropDownHolder.setDropDown(ref)} />
      </SafeAreaView>
    );
  }
}
