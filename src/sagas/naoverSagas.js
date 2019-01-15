import { call, put, select, all, fork } from 'redux-saga/effects';
import flatMap from 'lodash/flatMap';

import * as ActionTypes from '../utils/ActionTypes';
import * as selectors from '../utils/selectors';
import services from '../utils/services';

/* Init Camera  */
export function* initCamSaga() {
  const cameras = yield select(selectors.cameras);
  yield put({ type: ActionTypes.FILTER_CAMERA_SUCCESS, cameras });
}

/* Init Day */
export function* initDaySaga() {
  const sols = yield select(selectors.sols);
  yield put({ type: ActionTypes.FILTER_DAY_SUCCESS, sols });
}

/* Initial Selection */
export function* selectInitSaga() {
  const selected = yield select(selectors.entities);
  try {
    yield put({
      type: ActionTypes.SELECT_INITIAL_SUCCESS,
      selected
    });
  } catch (error) {
    yield put({ type: ActionTypes.SELECT_INITIAL_FAILURE, error });
  }
}

/* Select By Sol (Day) */
export function* selectDaySaga(action) {
  const selected = yield select(selectors.getSol(action.sol));

  try {
    yield put({
      type: ActionTypes.SELECT_DAY_SUCCESS,
      selected
    });
  } catch (error) {
    yield put({ type: ActionTypes.SELECT_DAY_FAILURE, error });
  }
}

/* Select By Camera */
export function* selectCamSaga(action) {
  const selected = yield select(selectors.getCamera(action.cam));

  try {
    yield put({
      type: ActionTypes.SELECT_CAMERA_SUCCESS,
      selected
    });
  } catch (error) {
    yield put({ type: ActionTypes.SELECT_CAMERA_FAILURE, error });
  }
}

/* Filter By Sol & Cam */
export function* selectAllSaga(action) {
  const selected = yield select(selectors.getAll(action.sol, action.cam));

  try {
    yield put({
      type: ActionTypes.SELECT_ALL_SUCCESS,
      selected
    });
  } catch (error) {
    yield put({ type: ActionTypes.SELECT_ALL_FAILURE, error });
  }
}

/* Init API && State */
export function* initSaga() {
  /* One Week Via Martian Sol */
  const params = ['2288', '2287', '2286', '2285', '2284', '2283', '2282'];
  const response = yield all([
    params.map(p => call(services.getInitialEntities, p))
  ]);
  try {
    /* Using Lodash To Flatten Results Into Useable Week */
    const entities = flatMap(
      flatMap(response, r => r).map(m => m.data),
      e => e.photos
    );

    yield put({ type: ActionTypes.ENTITIES_FETCH_SUCCESS, entities });
  } catch (error) {
    yield put({ type: ActionTypes.ENTITIES_FETCH_FAILURE, error });
  }
  yield fork(initCamSaga);
  yield fork(initDaySaga);
  yield fork(selectInitSaga);
}
