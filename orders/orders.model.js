const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  user_id: {
    type: String, // UUID stored as a string
    required: true
  },
  total_amt: {
    type: Number,
    required: true,
    min: 0
  },
  status_id: {
    type: String, // Assuming "SHIPPING", "DELIVERED", etc.
    required: true,
    enum: ['PENDING', 'SHIPPING', 'DELIVERED', 'CANCELLED'] // update as needed
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  order_date: {
    type: Date,
    required: true
  }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
