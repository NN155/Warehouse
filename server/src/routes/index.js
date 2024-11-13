const express = require('express');
const router = express.Router();
const path = require('path');
const productRoutes = require('./productRoutes');
const storeRoutes = require('./storeRoutes');


router.use(express.static(path.join(__dirname, '../../../client/build')));

router.use('/api/product', productRoutes);
router.use('/api/store', storeRoutes);

router.use('*', (_req, res) => {
    return res.sendFile(path.join(__dirname, '../../../client/build/index.html'));
});

module.exports = router;