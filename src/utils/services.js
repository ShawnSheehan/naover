import axios from 'axios';
import { apiKEY, baseURL } from '../shared/constants';

/* API Does Not Seem To Support A Query For Date Ranges??? */

export default {
  getInitialEntities: sol => axios.get(`${baseURL}sol=${sol}${apiKEY}`),
  getEntititesBySol: sol => axios.get(`${baseURL}sol=${sol}${apiKEY}`),
  getEntititesByAll: (sol, cam) =>
    axios.get(`${baseURL}sol=${sol}&camera=${cam}${apiKEY}`),
};
