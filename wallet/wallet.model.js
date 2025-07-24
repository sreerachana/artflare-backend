const mongoose = require('mongoose');
const { Schema } = mongoose;

const artistWalletSchema = new Schema({
  // _id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   // required: true
  // },
  artist_id: {
    type: mongoose.Schema.Types.ObjectId, // if referencing another collection
    required: true,
    // ref: 'Artist' // optional, if you're referencing an Artist collection
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  last_updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ArtistWallet', artistWalletSchema, 'wallet');
