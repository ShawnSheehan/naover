import axios from 'axios';

const apiBaseUrl =
  'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2019-1-1&api_key=z2IfhXlVEzHoA6TFYyd97ODUEgWZJsk5mfEpVsJv';

const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiCall = config => (data, options) =>
  api({
    method: 'GET',
    ...options,
    ...config(data),
  });

export default {
  fetchRover: apiCall(() => ({
    url: apiBaseUrl,
  })),
};
