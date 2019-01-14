import axios from 'axios';
import api from './config';

/* API Does Not Seem To Support A Query For Date Ranges??? */

export default {
  getInitialEntities: sol => axios.get(`${api.baseURL}sol=${sol}${api.apiKEY}`),
  getEntititesBySol: sol => axios.get(`${api.baseURL}sol=${sol}${api.apiKEY}`),
  getEntititesByAll: (sol, cam) =>
    axios.get(`${api.baseURL}sol=${sol}&camera=${cam}${api.apiKEY}`)
};
