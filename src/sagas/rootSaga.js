import { takeLatest, select, put, all } from 'redux-saga/effects';
import * as ActionTypes from '../shared/types';

const forwardLogic = {};

function* fetchRoverSaga() {
  const newState = yield select(forwardLogic);
  yield put({ type: ActionTypes.ROVER_FETCH, newState });
}

function* resetRoverSaga() {
  const newState = yield select(forwardLogic);
  yield put({ type: ActionTypes.ROVER_RESET, newState });
}

function* fetchRoverCameraSaga() {
  const newState = yield select(forwardLogic);
  yield put({ type: ActionTypes.FETCH_BY_CAMERA, newState });
}

function* fetchRoverDaySaga() {
  const newState = yield select(forwardLogic);
  yield put({ type: ActionTypes.FETCH_BY_DAY, newState });
}

function* watchRoverDay() {
  yield takeLatest(ActionTypes.FETCH_BY_DAY, fetchRoverDaySaga);
}

function* watchRoverCam() {
  yield takeLatest(ActionTypes.FETCH_BY_CAMERA, fetchRoverCameraSaga);
}

function* watchRoverReset() {
  yield takeLatest(ActionTypes.ROVER_RESET, resetRoverSaga);
}

function* watchRover() {
  yield takeLatest(ActionTypes.ROVER_FETCH, fetchRoverSaga);
}

export default function* rootSaga() {
  yield all([
    watchRover(),
    watchRoverReset(),
    watchRoverCam(),
    watchRoverDay(),
  ]);
}
