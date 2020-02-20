import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore, persistReducer, autoRehydrate} from 'redux-persist';
import thunk from 'redux-thunk';
import Reactotron from 'services/Reactotron';
import AsyncStorage from '@react-native-community/async-storage';
import {rootReducer} from './reducers';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export default configureStore = () =>
  new Promise((resolve, reject) => {
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
