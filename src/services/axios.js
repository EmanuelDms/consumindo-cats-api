import axios from 'axios';

const baseDomain = "https://api.thecatapi.com/v1/";
const baseURL = `${baseDomain}`;

// ALL DEFAULT CONFIGURATION HERE

const api = axios.create({
    baseURL,
    headers: {
        'x-api-key': `9310ef98-c2fc-4022-b119-7f8033597b6d`
    }
});

export default api;