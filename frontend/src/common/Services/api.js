import Axios from 'axios';
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const getSearchResults = async data => {
    let result = await Axios.get('/items', {params: data});
    return result.data;
};

const getItemById = async itemId => {
    let result = await Axios.get(`/items/${itemId}`);
    return result.data;
};

export default {
    getSearchResults,
    getItemById
}