import axios from '../services/axios';
const resource = 'breeds';

const catRepository = {
    getAll(options) {
        return axios.get(resource, {
            params: options
        });
    },

    getSearch(id, options) {
        return axios.get(`${resource}/`)
    }
}

export default catRepository;