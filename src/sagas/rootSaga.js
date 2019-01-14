import { all, takeLatest } from 'redux-saga/effects';

import * as ActionTypes from '../shared/types';
import { initSaga } from './roverSagas';

export default function* rootSaga() {
  yield all([takeLatest(ActionTypes.ENTITIES_LOADING, initSaga)]);
}
