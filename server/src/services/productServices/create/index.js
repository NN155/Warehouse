const Product = require('../../../model/product');

const create = async (data) => {
    try {
        const product = await Product.create(data);
        return product;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = create
