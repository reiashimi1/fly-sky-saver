import Axios from 'axios';
import { API_URL } from './API_URL';
import { store } from '../redux/store';
import { login, logout } from '../redux/authSlice.js';

let isTokenRefreshing = false;
let failedRequests = [];

const API = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // 'ngrok-skip-browser-warning':true
  }
});

const processFailedRequests = (error, accessToken) => {
  failedRequests.forEach((promise) =>
    error ? promise.reject(error) : promise.resolve(accessToken)
  );
  failedRequests = [];
};
// const name = useSelector((state) => _.get(state, 'meReducer.name', ''));

const getAuth = () => {
  const accessToken = store.getState().authSlice.accessToken;
  if (!accessToken) {
    return null;
  }
  return `Bearer ${accessToken}`;
};

API.interceptors.request.use((config) => {
  const authentication = getAuth();
  if (authentication) {
    config.headers.Authorization = authentication;
  }
  return config;
});

API.interceptors.response.use(
  (res) => res,
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isTokenRefreshing) {
        return new Promise((resolve, reject) => {
          failedRequests.push({ resolve, reject });
        })
          .then((accessToken) => {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return API(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isTokenRefreshing = true;

      if (originalRequest.headers.Authorization !== getAuth()) {
        originalRequest.headers.Authorization = getAuth();
        return Promise.resolve(API(originalRequest));
      }

      const refreshToken = store.getState().authSlice.refreshToken;

      return new Promise((resolve, reject) => {
        API.post('/auth/token', {
          refreshToken
        })
          .then((response) => {
            const data = response.data;
            const { dispatch } = store;
            dispatch(login(data));
            processFailedRequests(null, response.data.data.accessToken);
            resolve(API(originalRequest));
          })
          .catch(async (error) => {
            processFailedRequests(error, null);
            const { dispatch } = store;
            await dispatch(logout());
            window.location.reload();
            reject(error);
          })
          .finally(() => {
            isTokenRefreshing = false;
          });
      });
    }
    return Promise.reject(error);
  }
);

export default API;
