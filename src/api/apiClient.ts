import axios from "axios";

export const BECKEND_URL = 'http://localhost:8001/api';

const apiClient = axios.create({
    baseURL: BECKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;