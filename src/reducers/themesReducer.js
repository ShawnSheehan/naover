import match from "conditional-expression";
import * as ActionTypes from "Constants/ActionTypes";

const initialState = {
    theme: "lunar",
};

const themesReducer = (state = initialState, action) =>
    match(action.type)
        .equals(ActionTypes.THEME_UPDATE)
        .then({ ...state, theme: action.theme })

        .else(state);

export { initialState, themesReducer };
