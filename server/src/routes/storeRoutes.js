const express = require('express');
const router = express.Router();
const StoreController = require('../controller/StoreController');

router.get('/get', StoreController.get);

module.exports = router;