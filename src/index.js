import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';
import Root from './components/root';
import rootSaga from './sagas/rootSaga';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  store.runSaga(rootSaga);

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
