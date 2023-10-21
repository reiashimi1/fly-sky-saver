import Axios from 'axios'
import {API_URL} from "./API_URL"
import { store } from '../redux/store';

const API = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

API.interceptors.request.use(function (config) {
  const token = store.getState().authSlice.accessToken
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default API;