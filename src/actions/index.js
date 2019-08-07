import * as ActionTypes from "Constants/ActionTypes";

export const fetch = (rover, sol) => ({
    type: ActionTypes.FETCH_REQUEST,
    rover,
    sol,
});

export const select = obj => ({
    type: ActionTypes.SELECT_REQUEST,
    obj,
});

export const update = theme => ({
    type: ActionTypes.THEME_UPDATE,
    theme,
});
