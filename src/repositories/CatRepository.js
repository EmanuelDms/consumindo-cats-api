import axios from '../services/axios';
const resource = 'breeds';

const catRepository = {
    get() {
        return axios.get(resource);
    }
}

export default catRepository;