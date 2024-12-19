import axios from 'axios';

// Base URL for the backend API
const API = axios.create({
    baseURL: 'http://localhost:4000/api', // Update this with your backend's base URL
});

// Add a token for authenticated routes if needed
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
