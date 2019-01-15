import { all, takeLatest, take } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/lib/constants';

import * as ActionTypes from '../utils/ActionTypes';
import {
  initSaga,
  selectDaySaga,
  selectAllSaga,
  selectCamSaga,
  selectInitSaga
} from './naoverSagas';

export default function* rootSaga() {
  yield take(REHYDRATE);
  yield all([
    takeLatest(ActionTypes.ENTITIES_FETCH_REQUEST, initSaga),
    takeLatest(ActionTypes.SELECT_INITIAL_REQUEST, selectInitSaga),
    takeLatest(ActionTypes.SELECT_DAY_REQUEST, selectDaySaga),
    takeLatest(ActionTypes.SELECT_CAMERA_REQUEST, selectCamSaga),
    takeLatest(ActionTypes.SELECT_ALL_REQUEST, selectAllSaga)
  ]);
}
