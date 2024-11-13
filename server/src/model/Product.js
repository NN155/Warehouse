const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  manufacturer: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  arrivalDate: { type: Date, required: true },
  expirationDate: { type: Date },
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;