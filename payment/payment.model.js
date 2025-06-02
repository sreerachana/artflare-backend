const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  order_id: {
    type: Number,
    required: true
  },
  payment_amt: {
    type: Number,
    required: true,
    min: 0
  },
  status_id: {
    type: String, // e.g., "SHIPPING", "PAID", etc.
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

const Payment = mongoose.model('Payment', paymentSchema, 'payments');
module.exports = Payment;
