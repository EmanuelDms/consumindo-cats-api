import axios from '../services/axios';
const resource = 'breeds';

const catRepository = {
    getAll(options) {
        return axios.get(resource, options);
    },

    getSearch(id, options) {
        return axios.get(`${resource}/`)
    }
}

export default catRepository;