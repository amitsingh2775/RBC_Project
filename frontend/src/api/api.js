import axios from "axios";

// Create an axios instance for API requests
const API = axios.create({
  baseURL: "http://localhost:5000/api", // Make sure this matches your backend URL
});

// Request to login a user
export const loginUser = (credentials) => API.post("/auth/login", credentials);

// Get user profile using the token
export const getUserProfile = (token) =>
  API.get("/", { headers: { Authorization: `Bearer ${token}` } });

export default API;
