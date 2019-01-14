import { createAction } from 'redux-actions';
import * as ActionTypes from '../utils/ActionTypes';

export const initEntities = createAction(ActionTypes.ENTITIES_FETCH_REQUEST);

export const selectDay = createAction(ActionTypes.SELECT_DAY_REQUEST, sol => ({
  sol
}));

export const selectCamera = createAction(
  ActionTypes.SELECT_CAMERA_REQUEST,
  cam => ({
    cam
  })
);

export const selectAll = createAction(
  ActionTypes.SELECT_ALL_REQUEST,
  ({ sol, cam }) => ({ sol, cam })
);
