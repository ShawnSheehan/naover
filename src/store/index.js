import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';

const configureStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(sagaMiddleware, logger),
    ),
    runSaga: sagaMiddleware.run,
  };
};

export default configureStore;
