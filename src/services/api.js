// src/axiosInstance.js

import axios from "axios";

// const API_URL = "https://regio-backend.onrender.com/api/v1";
const API_URL = "https://regiofarm.onrender.com/api/v1";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercept requests to add the token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accesstoken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercept responses to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle specific status codes here if needed
    if (error.response.status === 401) {
      // Redirect to login page or handle unauthorized errors
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
