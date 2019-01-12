import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';

const configureStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware, logger);
  return {
    ...createStore(
      rootReducer,
      preloadedState,
      compose(
        middleware,
        window.devToolsExtension ? window.devToolsExtension() : f => f,
      ),
    ),
    runSaga: sagaMiddleware.run,
  };
};

export default configureStore;
