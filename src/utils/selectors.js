import countBy from 'lodash/countBy';
import map from 'lodash/map';

/* Enitities Selector */
export const entities = state => state.naover.entities;

/* Cameras Selector */
export const cameras = state =>
  map(
    countBy(state.naover.entities.map(c => c.camera), 'name'),
    (value, name) => ({ name, value })
  );

/* Days Selector */
export const sols = state =>
  map(countBy(state.naover.entities.map(c => c.sol)), (value, name) => ({
    name,
    value
  }));

/* Image Selector */
export const getImage = id => state =>
  state.naover.entities.find(o => o.id == Number(id));

/* Filter By Sol (Day) */
export const getSol = sol => state =>
  state.naover.entities.filter(s => s.sol == sol);

/* Filter By Camera */
export const getCamera = cam => state =>
  state.naover.entities.filter(s => s.camera.name == cam);

/* Filter By Camera & Sol (Day) */
export const getAll = (sol, cam) => state =>
  state.naover.entities.filter(s => s.sol == sol && s.camera.name == cam);
