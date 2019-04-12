const axios = require('axios');

const searchItems = async params => {
    let result = await axios.get('https://api.mercadolibre.com/sites/MLA/search', { params });
    return result;
};

module.exports = {
    // Receives a query and calls the MeLi API with it returning a
    searchItems
};