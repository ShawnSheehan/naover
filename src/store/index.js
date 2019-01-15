import { persistStore, persistReducer } from 'redux-persist';
import persistStorage from 'redux-persist/es/storage';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: persistStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
