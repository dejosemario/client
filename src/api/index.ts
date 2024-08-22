import axios from "axios";

// let inactivityTimeout: NodeJS.Timeout | undefined;

// const startInactivityTimer = () => {
//   clearTimeout(inactivityTimeout);
//   inactivityTimeout = setTimeout(() => {
//     logout();    
//   }, 60000);
// };

// export const resetInactivityTimer = (): void => {
//   startInactivityTimer();
// };

// // Event listeners to track user activity
// window.addEventListener("mousemove", resetInactivityTimer);
// window.addEventListener("keypress", resetInactivityTimer);
// window.addEventListener("click", resetInactivityTimer);

// Create an axios instance
const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  headers: {
    "Content-Type": "application/json",
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
        console.log("Unable to refresh token:", refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export { api };
