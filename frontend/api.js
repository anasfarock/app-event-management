import axios from "axios";

const API = axios.create({
  baseURL: "http://10.0.2.16:3000/api", // special IP for Android emulator to access localhost
  timeout: 5000,
});

export default API;
