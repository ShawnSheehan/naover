import * as ActionTypes from "Constants/ActionTypes";

export const init = (rover, sol) => ({
    type: ActionTypes.INIT_REQUEST,
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
