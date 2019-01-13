import { call, put, all, fork, select } from 'redux-saga/effects';

import * as ActionTypes from '../shared/types';
import services from '../utils/services';
import * as selectors from '../utils/selectors';

function* camSelectorSaga() {
  const cameras = yield select(selectors.cameras);
  yield put({ type: ActionTypes.ENTITIES_FILTER, cameras });
}

function* workerSaga() {
  try {
    const response = yield call(services.fetchRover);
    const { photos } = response.data;
    yield put({ type: ActionTypes.ROVER_FETCH, entities: photos });
  } catch (error) {
    yield put({ type: ActionTypes.ROVER_FAILURE, error });
  }
  yield fork(camSelectorSaga);
}

export default function* rootSaga() {
  yield all([fork(workerSaga)]);
}
