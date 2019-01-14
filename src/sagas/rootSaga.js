import { all, takeLatest } from 'redux-saga/effects';

import * as ActionTypes from '../utils/ActionTypes';
import { initSaga, selectDaySaga, selectAllSaga } from './naoverSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(ActionTypes.ENTITIES_FETCH_REQUEST, initSaga),
    takeLatest(ActionTypes.SELECT_DAY_REQUEST, selectDaySaga),
    takeLatest(ActionTypes.SELECT_ALL_REQUEST, selectAllSaga)
  ]);
}
