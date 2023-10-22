import Axios from 'axios';
import {API_URL} from "./API_URL"

const AuthAPI = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // 'ngrok-skip-browser-warning':true
  }
});

export default AuthAPI;
