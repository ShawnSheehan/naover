import { combineReducers } from 'redux';
import naoverReducer from './naoverReducer';

const rootReducer = combineReducers({
  naover: naoverReducer
});

export default rootReducer;
