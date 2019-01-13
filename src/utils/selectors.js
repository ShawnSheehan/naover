export const entities = state => state.rover.entities;

export const cameras = state => state.rover.entities.map(c => c.camera);
