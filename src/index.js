import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const { store, persistor } = configureStore();

  ReactDOM.render(
    <Root store={store} persistor={persistor} />,
    document.getElementById('root')
  );
});

if (module.hot) {
  module.hot.accept(() => {
    window.location.reload();
  });
}
