const dotenv = require('dotenv');
dotenv.config();

//Importing all constants in a single file so we don't have to require dotenv everytime
exports.constants = {
    app: {
        domain: process.env.APP_DOMAIN,
        frontendPort: process.env.APP_FRONTEND_PORT || 3000,
        port: process.env.PORT || 8000,
        searchLimit: process.env.SERVER_RESULT_LIMIT,
        author: {
            name: 'Estefania',
            lastName: 'Diaz Artucio',
        },
    },
};
