import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.10.32:3333",
});

export default api;
