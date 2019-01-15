import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import { instanceOf } from 'prop-types';

import App from './app';

import '../css/main.css';

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  store: instanceOf(Object).isRequired,
  persistor: instanceOf(Object).isRequired
};

export default Root;
