const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishlistSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  user_id: {
    type: String, // mongoose.Schema.Types.ObjectId, // Change to mongoose.Schema.Types.ObjectId if using ObjectIds
    required: true,
    ref: 'User'
  },
  art_id: {
    type: String, // mongoose.Schema.Types.ObjectId, // Change to mongoose.Schema.Types.ObjectId if using ObjectIds
    required: true,
    ref: 'Artwork'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Wishlist', wishlistSchema, 'wishlist');
