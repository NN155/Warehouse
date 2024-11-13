const express = require('express');
const router = express.Router();
const ProductController = require('../controller/productController');
const convertIdToObject = require('../middlewares/convertIdToObject');

router.get('/get', ProductController.get);
router.put('/update', convertIdToObject, ProductController.update);

module.exports = router;