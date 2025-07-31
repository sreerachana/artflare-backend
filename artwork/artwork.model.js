const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema(
  {
    artist_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist',
      required: true
    },
    art_name: {
      type: String,
      required: true,
      trim: true
    },
    art_image: {
      type: String,
      default: '/artworks/default_artwork.jpeg'
    },
    pricing: {
      type: Number,
      required: true,
      min: 0
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    quantity: {
      type: Number,
      required: true,
      min: 0
    },
    is_featured: {
      type: Boolean,
      default: false
    },
    is_popular:{
      type: Boolean,
      default: false
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    payment_id: {
      type: String,
      default: null
    },
    is_deleted: {
    type: Boolean,
    default: false
    },
    is_new: {
      type: Boolean,
      default: true
    }
  },
  
  {
    timestamps: true,
    collection: 'artworks'
  }
);

const Artwork = mongoose.model('Artwork', artworkSchema);
module.exports = Artwork;
