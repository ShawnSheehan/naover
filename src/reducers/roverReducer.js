import * as ActionTypes from '../shared/types';

const initalState = {
  loading: false,
  error: null,
};

export default function(state = initalState, action) {
  switch (action.type) {
    case ActionTypes.ENTITIES_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.ENTITIES_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        entities: action.entities,
      };

    case ActionTypes.ENTITIES_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case ActionTypes.ENTITIES_FILTER:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.ENTITIES_FILTER_CAMERAS:
      return {
        ...state,
        loading: false,
        cameras: action.cameras,
      };

    case ActionTypes.ENTITIES_FILTER_DAYS:
      return {
        ...state,
        loading: false,
        days: action.days,
      };

    case ActionTypes.ENTITIES_SELECT_DAYS_SUCCESS:
      return {
        ...state,
        loading: false,
        entities: action.entities,
      };

    case ActionTypes.ENTITIES_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
