const axios = require('axios');

const searchItems = async params => {
    let result = await axios.get('https://api.mercadolibre.com/sites/MLA/search', { params });
    return result;
};

const getItemById = async id => {
    let [ itemInfo, itemDescription ] = await Promise.all([
        axios.get(`https://api.mercadolibre.com/items/${id}`),
        axios.get(`https://api.mercadolibre.com/items/${id}/description`),
    ]);

    const picture = itemInfo.data.pictures.length > 1 ? itemInfo.data.pictures[0].url : itemInfo.thumbnail;
    
    let item = {
        id: id,
        title: itemInfo.data.title,
        price: itemInfo.data.price,
        picture,
        condition: itemInfo.data.condition,
        free_shipping: itemInfo.data.shipping.free_shipping,
        sold_quantity: itemInfo.data.sold_quantity,
        description: itemDescription.data.plain_text,
    }

    return item;
};

module.exports = {
    // Receives a query and calls the MeLi API with it returning a
    searchItems,

    getItemById,
};