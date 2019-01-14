import * as ActionTypes from '../shared/types';

// Actions
export const fetchEntities = () => ({
  type: ActionTypes.ENTITIES_LOADING,
});

export const filterByCamera = () => ({
  type: ActionTypes.ENTITIES_FILTER_CAMERAS,
});

export const filterByDay = day => ({
  type: ActionTypes.ENTITIES_FILTER_DAYS,
  day,
});
