import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { instanceOf } from 'prop-types';

import App from './app';

import '../css/main.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: instanceOf(Object).isRequired,
};

export default Root;
