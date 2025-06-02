const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  user_id: {
    type: String, // UUID stored as a string
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
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

const Cart = mongoose.model('cart', cartSchema, 'cart');
module.exports = Cart;
