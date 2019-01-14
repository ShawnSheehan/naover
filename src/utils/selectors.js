/* Enitities Selector */

export const entities = state => state.rover.entities;

/* Cameras Selector */

export const cameras = state => state.rover.entities.map(c => c.camera);

/* Days Selector */

export const days = state => state.rover.entities.map(c => c.sol);
