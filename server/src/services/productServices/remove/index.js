const Product = require('../../../model/product');
const mongoose = require('mongoose');

const remove  = async (id) => {
    try {
        const _id = new mongoose.Types.ObjectId(id);
        const product = await Product.deleteOne(_id);
        return product;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = remove
