const mongoose = require('mongoose');

const convertIdToObject = (req, res, next) => {
    const { _id, store, supplier } = req.body;
    try {
        if (store) {
            req.body.store = new mongoose.Types.ObjectId(store);
        }
        if (supplier) {
            req.body.supplier = new mongoose.Types.ObjectId(supplier);
        }
        if (_id) {
            req.body._id = new mongoose.Types.ObjectId(_id);
        }
        next();
    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = convertIdToObject;