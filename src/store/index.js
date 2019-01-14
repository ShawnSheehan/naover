import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';

const configureStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
    ),
    runSaga: sagaMiddleware.run,
  };
};

export default configureStore;
