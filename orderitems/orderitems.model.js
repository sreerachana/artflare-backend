const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  order_item_id: {
    type: Number,
    required: true,
    unique: true
  },
  order_id: {
    type: Number,
    required: true
  },
  art_id: {
    type: Number,
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
    enum: ['PENDING', 'SHIPPING', 'DELIVERED', 'CANCELLED'] // extend as needed
  }
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema, 'order_items');
module.exports = OrderItem;
