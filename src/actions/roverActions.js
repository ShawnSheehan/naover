import * as ActionTypes from '../shared/types';

// Actions
export const roverFetch = () => ({
  type: ActionTypes.ROVER_FETCH,
});

export const roverReset = () => ({
  type: ActionTypes.ROVER_RESET,
});

export const fetchByDay = () => ({
  type: ActionTypes.FETCH_BY_DAY,
});

export const fetchByCamera = () => ({
  type: ActionTypes.FETCH_BY_CAMERA,
});
