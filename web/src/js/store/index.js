import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const persistConfig = {
  timeout: null,
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
  // whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let middleware = [thunk, logger];
export let store = createStore(persistedReducer, compose(applyMiddleware(...middleware)));
export const persistor = persistStore(store);
