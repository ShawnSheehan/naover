import { createAction } from 'redux-actions';
import * as ActionTypes from '../shared/ActionTypes';

// Actions
export const resetRoverData = createAction(ActionTypes.ROVER_RESET);

export const fetchRoverData = createAction(
  ActionTypes.ROVER_FETCH,
  p => p,
  (_, meta) => meta,
);

export const fetchByDay = createAction(
  ActionTypes.FETCH_BY_DAY,
  p => p,
  (_, meta) => meta,
);

export const fetchByCamera = createAction(
  ActionTypes.FETCH_BY_CAMERA,
  p => p,
  (_, meta) => meta,
);
