import { call, put, select, all, fork } from 'redux-saga/effects';
import flatMap from 'lodash/flatMap';

import * as ActionTypes from '../shared/types';
import * as selectors from '../utils/selectors';
import services from '../utils/services';

/* Initial Camera Selector */

export function* initCamSortingSaga() {
  const cameras = yield select(selectors.cameras);
  yield put({ type: ActionTypes.ENTITIES_FILTER_CAMERAS, cameras });
}

/* Initial State */

export function* initSaga() {
  /* One Week Via Martian Sol */
  const params = ['2288', '2287', '2286', '2285', '2284', '2283', '2282'];
  const response = yield all([
    params.map(p => call(services.getInitialEntities, p)),
  ]);
  try {
    /* Using Lodash To Flatten Results Into Useable Week */
    const flatten = flatMap(response, o => o).map(o => o.data);
    const entities = flatMap(flatten, o => o.photos);
    yield put({ type: ActionTypes.ENTITIES_FETCH_SUCCESS, entities });
  } catch (error) {
    yield put({ type: ActionTypes.ENTITIES_FETCH_FAILURE, error });
  }
  yield fork(initCamSortingSaga);
}

/* Initial Day Selector */

export function* initialDaySelectorSaga() {
  const days = yield select(selectors.days);
  yield put({ type: ActionTypes.ENTITIES_FILTER_DAYS, days });
}
