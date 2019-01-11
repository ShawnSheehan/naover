function createRequestTypes(base) {
  return {
    REQUEST: `${base}_REQUEST`,
    SUCCESS: `${base}_SUCCESS`,
    FAILURE: `${base}_FAILURE`,
  };
}

export const ROVER_FETCH = createRequestTypes('ROVER_FETCH');
export const ROVER_RESET = createRequestTypes('ROVER_RESET');
export const FETCH_BY_DAY = createRequestTypes('FETCH_BY_DAY');
export const FETCH_BY_CAMERA = createRequestTypes('FETCH_BY_CAMERA');
