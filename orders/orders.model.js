const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  artwork_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artwork',
    required: true
  },
  total_amt: {
    type: Number,
    required: true,
    min: 0
  },
  status_id: {
    type: String,
    enum: ['PENDING', 'SHIPPING', 'DELIVERED', 'CANCELLED'],
    default: 'PENDING'
  },
  order_date: {
    type: Date,
    default: Date.now
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
