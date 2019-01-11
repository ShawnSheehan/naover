import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';

const middleware = applyMiddleware(ReduxThunk, createLogger());

const store = createStore(
  reducers,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

export default store;
