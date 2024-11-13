const StoreServices = require('../../services/storeServices');

class StoreController {
    async get(req, res) {
        try {
            const stores = await StoreServices.get();
            return res.json(stores);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new StoreController();
