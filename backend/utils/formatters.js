const statusEnum = require('../utils/statusEnum.js');
const currencyEnum = require('../utils/currencyEnum.js');

const priceFormatter = item => {
    let parsedPrice = parseInt(item.price);
    let decimals = (item.price - parsedPrice).toFixed(2);

    return {
        currency: currencyEnum[item.currency_id],
        intPrice: parsedPrice,
        decimals,
    }
}

const statusMapper = status => {
    return statusEnum[status];
}

module.exports = {
    priceFormatter,
    statusMapper,
};