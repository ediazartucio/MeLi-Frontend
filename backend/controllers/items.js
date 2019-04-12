const itemService = require('../services/itemService.js');
const { constants } = require('../constants.js');

const searchItems = async (req, res) => {
    let params = {
        q: req.query.q,
        limit: constants.app.searchLimit,
    };

    let { data } = await itemService.searchItems(params);
    
    const items = data.results.map(item => {
        return {
            id: item.id,
            title: item.title,
            price: item.price,
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            city: item.address.state_name
        }
    });
    
    return res.json({
        author: constants.app.author,
        categories: [],
        items,
    });
};

const getItemById = async (req, res) => {
    let item = await itemService.getItemById(req.params.id);

    return res.json({
        author: constants.app.author,
        item,
    });
};

module.exports = {
    searchItems,
    getItemById,
};