const mongoose = require('mongoose');
const { Schema } = mongoose;

const artistWalletSchema = new Schema({
  _id: {
    type: Number,
    required: true
  },
  artist_id: {
    type: String, // or mongoose.Schema.Types.ObjectId if referencing another collection
    required: true,
    // ref: 'Artist' // optional, if you're referencing an Artist collection
  },
  balance: {
    type: Number,
    required: true,
    min: 0
  },
  last_updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ArtistWallet', artistWalletSchema, 'wallet');
