const express = require('express');
const app = express();
const http = require('http').Server(app);
const { constants } = require('./constants.js');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `${constants.app.domain}:${constants.app.frontendPort}`);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Pragma');
    next();
});

app.use('/api', require('./routes.js'));

const server = http.listen(constants.app.port, () => console.log(`node listening at port ${server.address().port}`));
