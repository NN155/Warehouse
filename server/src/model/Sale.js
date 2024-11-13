const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaleSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    saleDate: { type: Date, default: Date.now },
    quantitySold: { type: Number, required: true },
    finalPrice: { type: Number, required: true }
});

const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;
