/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StatusBar, Platform, AppState} from 'react-native';
if (__DEV__) import('services/Reactotron');
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from 'store';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from 'router/LogInStack';
import LoggedInStack from 'router/LoggedInStack';

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
    // Platform.OS == 'andro id' && StatusBar.setTranslucent(false);
    // Platform.OS == 'android' && StatusBar.setBackgroundColor('#000');

    let {store, persistor} = await configureStore();
    let {isUserSignedIn} = store.getState();
    this.setState({store, persistor});
  }

  render() {
    let {store, persistor} = this.state;
    // const Layout = store ? createRootNavigator(firstTime, signedIn) : null;
    if (store) console.tron.log(store.getState().isUserSignedIn);
    return !store ? null : (
      <View style={{flex: 1}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>{store.isUserSignedIn ? <LoggedInStack /> : <LoginStack />}</NavigationContainer>
          </PersistGate>
        </Provider>
        <DropdownAlert ref={ref => DropDownHolder.setDropDown(ref)} />
      </View>
    );
  }
}
