const Product = require('../../../model/product');
const mongoose = require('mongoose');

const update = async ({ _id, ...rest }) => {
    try {
        const product = await Product.findByIdAndUpdate(_id, { ...rest }, { new: true });
        return product;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = update
