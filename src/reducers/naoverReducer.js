import * as ActionTypes from '../utils/ActionTypes';

const initalState = {
  loading: false,
  error: null,
  selected: []
};

export default function(state = initalState, action) {
  switch (action.type) {
    case ActionTypes.ENTITIES_FETCH_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.ENTITIES_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        entities: action.entities
      };

    case ActionTypes.ENTITIES_FETCH_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case ActionTypes.SELECT_INITIAL_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.SELECT_INITIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        selected: action.selected
      };

    case ActionTypes.SELECT_INITIAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case ActionTypes.SELECT_DAY_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.SELECT_DAY_SUCCESS:
      return {
        ...state,
        loading: false,
        selected: action.selected
      };

    case ActionTypes.SELECT_DAY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case ActionTypes.SELECT_CAMERA_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.SELECT_CAMERA_SUCCESS:
      return {
        ...state,
        loading: false,
        selected: action.selected
      };

    case ActionTypes.SELECT_CAMERA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case ActionTypes.SELECT_ALL_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.SELECT_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        entities: action.entities
      };

    case ActionTypes.SELECT_ALL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case ActionTypes.FILTER_CAMERA_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.FILTER_CAMERA_SUCCESS:
      return {
        ...state,
        loading: false,
        cameras: action.cameras
      };

    case ActionTypes.FILTER_CAMERA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case ActionTypes.FILTER_DAY_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ActionTypes.FILTER_DAY_SUCCESS:
      return {
        ...state,
        loading: false,
        sols: action.sols
      };

    case ActionTypes.FILTER_DAY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}
