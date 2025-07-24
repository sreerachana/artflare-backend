const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  art_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artwork',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  price_at_purchase: {
    type: Number,
    required: true,
    min: 0
  },
  deliver_date: {
    type: Date,
    required: true
  },
  status_id: {
    type: String,
    required: true,
    enum: ['PENDING', 'SHIPPING', 'DELIVERED', 'CANCELLED']
  }
}, {
  timestamps: true
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema, 'order_items');
module.exports = OrderItem;
