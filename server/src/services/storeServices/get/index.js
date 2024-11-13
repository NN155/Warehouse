const Store = require('../../../model/store');

const get = async () => {
    try {
        const stores = await Store.find();
        return stores;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = get
