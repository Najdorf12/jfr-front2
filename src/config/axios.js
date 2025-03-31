import axios from "axios";

const instance = axios.create({
  baseURL: "https://jfr-backend.vercel.app/api", // http://localhost:1212/api - https://jfr-backend.vercel.app/api
  withCredentials: true,
});

export default instance;
