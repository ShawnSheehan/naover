import * as ActionTypes from '../utils/ActionTypes';

export const initEntities = () => ({
  type: ActionTypes.ENTITIES_FETCH_REQUEST
});

export const selectInitial = () => ({
  type: ActionTypes.SELECT_INITIAL_REQUEST
});

export const selectDay = sol => ({
  type: ActionTypes.SELECT_DAY_REQUEST,
  sol
});

export const selectCamera = cam => ({
  type: ActionTypes.SELECT_CAMERA_REQUEST,
  cam
});

export const selectAll = (sol, cam) => ({
  type: ActionTypes.SELECT_ALL_REQUEST,
  sol,
  cam
});
