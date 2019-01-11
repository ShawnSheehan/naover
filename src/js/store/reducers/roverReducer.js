import {
  ROVER_FETCH,
  ROVER_RESET,
  FETCH_BY_CAMERA,
  FETCH_BY_DAY,
} from '../shared/ActionTypes';

const initalState = {
  byCamera: null,
  byDay: null,
  loading: false,
};

export default function(state = initalState, action) {
  switch (action.type) {
    case ROVER_FETCH:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BY_CAMERA:
      return {
        ...state,
        byCamera: action.payload,
        loading: false,
      };

    case FETCH_BY_DAY:
      return {
        ...state,
        byDay: action.payload,
        loading: false,
      };

    case ROVER_RESET:
      return {
        ...state,
        byCamera: null,
        byDay: null,
      };

    default:
      return state;
  }
}
