import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './js/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
    </Provider>
  );
}

export default App;
