const mongoose = require('mongoose');

const returnSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  productName: { type: String, required: true },
  reason: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Return', returnSchema);

