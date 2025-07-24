const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishlistSchema = new Schema({
  // _id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true
  // },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  art_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Artwork'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Wishlist', wishlistSchema, 'wishlist');
