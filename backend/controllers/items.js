const itemService = require('../services/itemService.js');
const { statusMapper, priceFormatter } = require('../utils/formatters.js');
const { constants } = require('../constants.js');

const searchItems = async (req, res) => {
    let params = {
        q: req.query.search,
        limit: constants.app.searchLimit,
    };

    let { data } = await itemService.searchItems(params);

    let topCategory = data.filters.find(f => f.id = 'category');

    const items = data.results.map(item => {
        return {
            id: item.id,
            title: item.title,
            price: priceFormatter(item),
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            city: item.address.state_name
        }
    });
    
    return res.json({
        author: constants.app.author,
        categories: topCategory.values[0].path_from_root,
        items,
    });
};

const getItemById = async (req, res) => {
    let item = await itemService.getItemById(req.params.id);
    let category = await itemService.getCategoryById(item.idCategory);

    return res.json({
        author: constants.app.author,
        item: {
            ...item,
            price: priceFormatter(item),
            condition: statusMapper(item.condition),
            categories: category.path_from_root,
        },
    });
};

module.exports = {
    searchItems,
    getItemById,
};