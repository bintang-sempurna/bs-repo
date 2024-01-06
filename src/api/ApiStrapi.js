import axios from "axios";

// const baseUrl = import.meta.env.VITE_APP_URL

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASEURL}api/`,
  headers,
});

export default api;
