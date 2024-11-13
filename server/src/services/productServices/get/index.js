const Product = require('../../../model/product');

const get = async (filter) => {
    try {
        const products = await Product.find(filter).sort({ price: 1 });
        return products;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = get
