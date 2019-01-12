import { combineReducers } from 'redux';
import roverReducer from './roverReducer';

const rootReducer = combineReducers({
  rover: roverReducer,
});

export default rootReducer;
