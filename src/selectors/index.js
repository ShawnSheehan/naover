import { createSelector } from "reselect";
import countBy from "lodash/countBy";
import map from "lodash/map";

export const entities = state => state.entities.data;

/* Image Selector */
export const imageSelector = id =>
    createSelector(
        entities,
        images => images.find(o => o.id == Number(id)),
    );

/* Cameras Selector */
export const cameras = state =>
    map(countBy(state.entities.data.map(c => c.camera), "name"), (value, name) => ({
        name,
        value,
    }));

/* Days Selector */
export const sols = state =>
    map(countBy(state.entities.data.map(c => c.sol)), (value, name) => ({
        name,
        value,
    }));

/* Filter By Sol (Day) */
export const sol = sol => state => state.entities.data.filter(s => s.sol == sol);

/* Filter By Camera */
export const camera = cam => state =>
    state.entities.data.filter(s => s.camera.name == cam);

/* Filter By Camera & Sol (Day) */
export const all = (sol, cam) => state =>
    state.entities.data.filter(s => s.sol == sol && s.camera.name == cam);
