import { takeLatest, call, put, select, all, fork } from "redux-saga/effects";
import { initRoverData } from "Services/api";
import * as ActionTypes from "Constants/ActionTypes";

export function* selectSaga(action) {
    try {
        yield put({
            type: ActionTypes.SELECT_SUCCESS,
            payload: action.obj,
        });
    } catch (error) {
        yield put({ type: ActionTypes.SELECT_FAILURE, error });
    }
}

function* fetchSolSaga(action) {
    const { data } = yield call(initRoverData, action.rover, action.sol);
    try {
        yield put({
            type: ActionTypes.FETCH_SUCCESS,
            payload: data.photos,
        });
    } catch (error) {
        yield put({ type: ActionTypes.FETCH_FAILURE, error });
    }
}

function* initSaga(action) {
    const { data } = yield call(initRoverData, action.rover, action.sol);
    try {
        yield put({
            type: ActionTypes.INIT_SUCCESS,
            payload: data.photos,
        });
    } catch (error) {
        yield put({ type: ActionTypes.INIT_FAILURE, error });
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(ActionTypes.INIT_REQUEST, initSaga),
        takeLatest(ActionTypes.FETCH_REQUEST, fetchSolSaga),
        takeLatest(ActionTypes.SELECT_REQUEST, selectSaga),
    ]);
}
