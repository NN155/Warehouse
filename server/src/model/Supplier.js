const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    companyName: { type: String, required: true },
    contactDetails: {
      phone: { type: String, required: true },
      email: { type: String },
      address: { type: String }
    },
    supplyTerms: { type: String },
    cooperationHistory: { type: String }
});

const Supplier = mongoose.model('Supplier', SupplierSchema);

module.exports = Supplier;