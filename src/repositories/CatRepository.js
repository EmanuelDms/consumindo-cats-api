import axios from '../services/axios';
const resource = 'breeds';

const catRepository = {
    get(search = '') {

        if (!!search)
            return axios.get(`${resource}/search`, { params: {
                q: search
            } });

        return axios.get(resource);
    }
}

export default catRepository;