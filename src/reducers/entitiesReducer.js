import match from "conditional-expression";
import * as ActionTypes from "Constants/ActionTypes";

const initialState = {
    data: [],
    selected: {},
    errors: null,
    loading: false,
};

const entitiesReducer = (state = initialState, action) =>
    match(action.type)
        .equals(ActionTypes.INIT_REQUEST)
        .then({ ...state, loading: true })

        .equals(ActionTypes.INIT_SUCCESS)
        .then({ ...state, data: action.payload, loading: false })

        .equals(ActionTypes.INIT_FAILURE)
        .then({ ...state, errors: action.error, loading: false })

        .equals(ActionTypes.SELECT_REQUEST)
        .then({ ...state, loading: true })

        .equals(ActionTypes.SELECT_SUCCESS)
        .then({ ...state, selected: action.payload, loading: false })

        .equals(ActionTypes.SELECT_FAILURE)
        .then({ ...state, errors: action.error, loading: false })

        .else(state);

export { initialState, entitiesReducer };
