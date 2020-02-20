import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore, persistReducer, autoRehydrate} from 'redux-persist';
import thunk from 'redux-thunk';
import Reactotron from 'src/service/Reactotron';
import AsyncStorage from '@react-native-community/async-storage';
import {rootReducer} from './reducers';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export default function configureStore() {
  return new Promise((resolve, reject) => {
    try {
      const persistConfig = {
        timeout: null,
        key: 'root',
        storage: AsyncStorage,
        stateReconciler: autoMergeLevel2,
        blacklist: ['modalAlert', 'axiosRequestLoader', 'popup', 'showPopup', 'coupons', 'filters'],
        // whitelist: []
      };
      const persistedReducer = persistReducer(persistConfig, rootReducer);
      let middleware = [thunk];
      let store = __DEV__
        ? createStore(persistedReducer, compose(applyMiddleware(...middleware), Reactotron.createEnhancer()))
        : createStore(persistedReducer, compose(applyMiddleware(...middleware)));
      const persistor = persistStore(store, undefined, () => resolve({store, persistor}));
    } catch (e) {
      reject(e);
    }
  });
}

const persistConfig = {
  timeout: null,
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    // 'isBottomUserDialogOpened',
    // 'retailCoupons',
    // 'dateFilters',
    // 'searchQuery',
    // 'creditCards',
    // 'showAdvertisement',
    // 'checkInButtonMessage',
  ],
  // whitelist: []
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let middleware = [thunk];
export let store = __DEV__
  ? createStore(persistedReducer, undefined, compose(applyMiddleware(...middleware), Reactotron.createEnhancer()))
  : createStore(persistedReducer, undefined, compose(applyMiddleware(...middleware)));
export const persistor = persistStore(store);
