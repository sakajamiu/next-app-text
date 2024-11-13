import axios from 'axios';
import config from './config.json';

const Axios = axios.create({
  baseURL: config.Base_Url,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

export default Axios;
