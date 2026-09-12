import axios from "axios";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
});
axiosInstance.interceptors.request.use((config) => {
  const auth = sessionStorage.getItem("auth");
  if (auth) {
    try {
      const { accessToken, token, tokenType = "Bearer" } = JSON.parse(auth);
      const authToken = accessToken ?? token;
      if (authToken) {
        config.headers.Authorization = `${tokenType} ${authToken}`;
      }
    } catch {
      sessionStorage.removeItem("auth");
    }
  }
  return config;
});
export default axiosInstance;
