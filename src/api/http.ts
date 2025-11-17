import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000", // Cambiar según backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar token si el usuario está logueado
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
