import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://torii-backend-server.onrender.com/api",
});
