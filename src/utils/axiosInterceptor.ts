import axios from "axios";
import { getAccessToken } from "../utils/storage";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Add a request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle 401 (Unauthorized) errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      localStorage.clear();
      window.location.href = "/login"; // Redirect to login on 401
    }
    return Promise.reject(error);
  }
);

export default api;
