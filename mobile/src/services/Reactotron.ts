import Reactotron, {trackGlobalErrors} from 'reactotron-react-native';
// import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

let reactotron = null;
if (__DEV__) {
  reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      host: '192.168.0.12',
      name: 'React Native Demo',
    })
    // .use(reactotronRedux()) // except actions you would not like to see
    .useReactNative(trackGlobalErrors({})) // add all built-in react native plugins
    .connect(); // let's connect!
  reactotron.clear();
  console.tron = Reactotron;
}

export default reactotron;
