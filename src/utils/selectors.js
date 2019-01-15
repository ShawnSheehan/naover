import countBy from 'lodash/countBy';
import map from 'lodash/map';

/* Enitities Selector */
export const entities = state => state.naover;

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
