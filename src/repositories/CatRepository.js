import axios from '../services/axios';
const resource = 'breeds';

const catRepository = {
    get(options) {
        return axios.get(resource, { params: options });
    }
}

export default catRepository;