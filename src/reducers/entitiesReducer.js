import * as ActionTypes from '../shared/types';

const initalState = {
  loading: false,
  error: null,
};

export default function(state = initalState, action) {
  switch (action.type) {
    case ActionTypes.ROVER_FETCH:
      return {
        ...state,
        loading: true,
        entities: action.entities,
      };

    case ActionTypes.ROVER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
