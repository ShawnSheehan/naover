import * as ActionTypes from '../shared/types';

// Actions
export const fetchEntities = () => ({
  type: ActionTypes.ENTITIES_LOADING,
});

export const filterByAll = (sol, cam) => ({
  type: ActionTypes.ENTITIES_LOADING,
  sol,
  cam,
});

export const filterByDay = sol => ({
  type: ActionTypes.ENTITIES_LOADING,
  sol,
});
