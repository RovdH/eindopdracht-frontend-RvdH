import axios from 'axios';

const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
const baseUrl = 'https://api.spoonacular.com';

const api = axios.create({
    baseURL: baseUrl,
    params: {
        apiKey: apiKey
    }
});
export default api