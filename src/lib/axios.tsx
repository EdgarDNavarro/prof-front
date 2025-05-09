import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "ngrok-skip-browser-warning": "true",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("PROF_AUTH_TOKEN");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;
