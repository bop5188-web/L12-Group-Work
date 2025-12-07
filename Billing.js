const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true },
  cardHolder: { type: String, required: true },
  expiryDate: { type: String, required: true },
  cvv: { type: String, required: true },
  billingAddress: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Billing', billingSchema);

