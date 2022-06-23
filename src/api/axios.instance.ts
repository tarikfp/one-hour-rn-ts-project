import axios from "axios";

const BASE_URL = "https://dummyjson.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;
