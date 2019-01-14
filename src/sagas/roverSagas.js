import { call, put, select, all, fork } from 'redux-saga/effects';
import flatMap from 'lodash/flatMap';
import countBy from 'lodash/countBy';
import map from 'lodash/map';

import * as ActionTypes from '../shared/types';
import * as selectors from '../utils/selectors';
import services from '../utils/services';

/* Initial Camera Selector */

export function* initCamSortingSaga() {
  const cameras = yield select(selectors.cameras);
  const camObj = countBy(cameras, 'name');
  const cams = map(camObj, (value, name) => ({ name, value }));
  yield put({ type: ActionTypes.ENTITIES_FILTER_CAMERAS, cameras: cams });
}

/* Initial Day Selector */

export function* initDaySortingSaga() {
  const days = yield select(selectors.days);
  const solObj = countBy(days);
  const sols = map(solObj, (value, name) => ({ name, value }));
  yield put({ type: ActionTypes.ENTITIES_FILTER_DAYS, days: sols });
}

export function* fetchByDaySaga(action) {
  const response = yield call(services.getEntititesBySol, action.sol);
  try {
    yield put({
      type: ActionTypes.ENTITIES_SELECT_DAYS_SUCCESS,
      entities: response.data.photos,
    });
  } catch (error) {
    yield put({ type: ActionTypes.ENTITIES_FAILURE, error });
  }
}

/* Filter By Sol & Cam */

export function* fetchByAllSaga(action) {
  const response = yield call(
    services.getEntititesByAll,
    action.sol,
    action.cam,
  );
  try {
    yield put({
      type: ActionTypes.ENTITIES_SELECT_ALL_SUCCESS,
      entities: response.data.photos,
    });
  } catch (error) {
    yield put({ type: ActionTypes.ENTITIES_FAILURE, error });
  }
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
    yield put({ type: ActionTypes.ENTITIES_FAILURE, error });
  }
  yield fork(initCamSortingSaga);
  yield fork(initDaySortingSaga);
}
