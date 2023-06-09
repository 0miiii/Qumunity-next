import axios from "axios";
import { getAccessTokenFromLocalStorage } from "@/libs/tokenHandler";

const instance = axios.create({
  baseURL: "/api",
});

instance.interceptors.request.use(
  (config) => {
    const token = getAccessTokenFromLocalStorage();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
