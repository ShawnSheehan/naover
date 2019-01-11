import axios from 'axios';
import { API_KEY, API_URL } from '../constants';

const apiBaseUrl = params => `${API_URL}${params}&api_key=${API_KEY}`;

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
  pictureByCamera: apiCall(() => ({
    params: 'camera=fhaz',
  })),
};
