import request from "./request";

import { getAccessToken, setAccessToken, getRefreshToken } from "./storage";

request.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return request
        .post("auth/refresh-token", {
          headers: {
            Authorization: `Bearer ${getRefreshToken()}`,
          },
        })
        .then((res: any) => {
          setAccessToken(res.access_token);

          request.defaults.headers.common.Authorization = `Bearer ${getAccessToken()}`;

          return request(originalRequest);
        });
    }
    return Promise.reject(error);
  }
);

export default request;
