import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    "X-API-KEY": apiKey, // Pass the API key here
    Accept: "application/json",
  },
});

export default api;
