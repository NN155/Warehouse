const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  country: { type: String, required: true },
  region: { type: String },
  city: { type: String, required: true },
  street: { type: String, required: true },
  buildingNumber: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true }
});

const Store = mongoose.model('Store', StoreSchema);

module.exports = Store;
