import axios from "axios";

const API = axios.create({
  baseURL: "https://your-api-url.com/api",
  timeout: 5000,
});

export default API;
