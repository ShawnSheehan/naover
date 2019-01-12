import { call, put, all, fork } from 'redux-saga/effects';
import * as ActionTypes from '../shared/types';
import services from '../utils/services';

function* workerSaga() {
  try {
    const response = yield call(services.fetchRover);
    const { photos } = response.data;
    yield put({ type: ActionTypes.ROVER_FETCH, entities: photos });
    console.log(response);
  } catch (error) {
    yield put({ type: ActionTypes.ROVER_FAILURE, error });
  }
}

export default function* rootSaga() {
  yield all([fork(workerSaga)]);
}
