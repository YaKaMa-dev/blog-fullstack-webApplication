import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    "X-API-KEY": apiKey, // Pass the API key here
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
