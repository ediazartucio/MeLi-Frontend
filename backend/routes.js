const router = require('express').Router();
const { searchItems, getItemById } = require('./controllers/items.js');

router.get('/items/', searchItems);
router.get('/items/:id', getItemById);

module.exports = router;