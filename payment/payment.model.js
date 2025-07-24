const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  payment_amt: {
    type: Number,
    required: true,
    min: 0
  },
  status_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PaymentStatus',
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
