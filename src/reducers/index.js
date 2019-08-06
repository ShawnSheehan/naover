import { combineReducers } from "redux";
import { entitiesReducer } from "./entitiesReducer";
import { themesReducer } from "./themesReducer";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    themes: themesReducer,
});

export default rootReducer;
