/* Enitities Selector */

export const entities = state => state.naover;

/* Cameras Selector */

export const cameras = state => state.naover.entities.map(c => c.camera);

/* Days Selector */

export const days = state => state.naover.entities.map(c => c.sol);
