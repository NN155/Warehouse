const ProductServices = require('../../services/productServices');

class ProductController {
    async get(req, res) {
        try {
            const { storeId, category, manufacturer, price } = req.query;
            const filter = {};
            filter.store = storeId;
            if (category) filter.category = category;
            if (manufacturer) filter.manufacturer = manufacturer;
            if (price) filter.price = { $lte: price }; 

            const products = await ProductServices.get(filter);
            return res.json(products);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async update(req, res) {
        try {
            const data = req.body;
            const product = await ProductServices.update(data);
            return res.json(product);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async create(req, res) {
        try {
            const data = req.body;
            const product = await ProductServices.create(data);
            return res.json(product);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            await ProductServices.remove(id);
            return res.json({ message: 'Product deleted' });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new ProductController();
