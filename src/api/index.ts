import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});


api.interceptors.request.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/auth/refresh-token`,
          {},
          { withCredentials: true }
        );

        // Retry the original request with the new token
        return api(originalRequest);
      } catch (refreshError) {
        console.log('Unable to refresh token:', refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export { api };
