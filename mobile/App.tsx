/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar, Platform, AppState} from 'react-native';
if (__DEV__) import('services/Reactotron');
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from 'store';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from 'router/LogInStack';

interface AppState {
  store: any;
  persistor: any;
  firstTime: boolean;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      store: null,
      persistor: null,
      firstTime: null,
    };
  }

  async componentDidMount() {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setHidden(false);
    // Platform.OS == 'android' && StatusBar.setTranslucent(false);
    // Platform.OS == 'android' && StatusBar.setBackgroundColor('#000');

    let {store, persistor} = await configureStore();
    let {isUserSignedIn} = store.getState();
    this.setState({store, persistor});
  }

  render() {
    let {store, persistor, firstTime} = this.state;
    // const Layout = store ? createRootNavigator(firstTime, signedIn) : null;

    return !store ? null : (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <LoginStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
