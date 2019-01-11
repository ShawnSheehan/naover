import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './js/store';

const Naover = () => (
  <Provider store={store}>
    <Router>
      <h1>Test</h1>
    </Router>
  </Provider>
);

ReactDOM.render(<Naover />, document.getElementById('naover'));
