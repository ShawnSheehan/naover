import { all, takeLatest } from 'redux-saga/effects';

import * as ActionTypes from '../shared/types';
import { initSaga, fetchByDaySaga, fetchByAllSaga } from './roverSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(ActionTypes.ENTITIES_LOADING, initSaga),
    takeLatest(ActionTypes.ENTITIES_LOADING, fetchByDaySaga),
    takeLatest(ActionTypes.ENTITIES_LOADING, fetchByAllSaga),
  ]);
}
