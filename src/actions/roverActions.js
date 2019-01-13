import { createAction } from 'redux-actions';
import * as ActionTypes from '../shared/types';

function createAsyncAction(actionType) {
  return {
    request: createAction(
      actionType.REQUEST,
      data => data,
      (data, meta) => meta,
    ),
    success: createAction(
      actionType.SUCCESS,
      data => data,
      (data, meta) => meta,
    ),
    failure: createAction(
      actionType.FAILURE,
      data => data,
      (data, meta) => meta,
    ),
  };
}

// Actions
export const fetchEntities = createAction(ActionTypes.ROVER_FETCH);
export const filterEntities = createAction(ActionTypes.ENTITIES_FILTER);

// Entities
export const enitities = createAsyncAction(ActionTypes.ENTITIES);
