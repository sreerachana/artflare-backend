const mongoose = require('mongoose');
// const dotenv = require('dotenv');

const artworkSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  artist_id: {
    type: String, // Assuming UUID stored as a string
    required: true
  },
  art_name: {
    type: String,
    required: true,
    trim: true
  },
  art_image: {
    type: String,
    default: null
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
  created_at: {
    type: Date,
    default: Date.now
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  category_id: {
    type: Number,
    required: true
  },
  payment_id: {
    type: String,
    default: null
  }
});

const Artwork = mongoose.model('Artwork', artworkSchema, 'artworks');
module.exports = Artwork;




// const mongoose = require('mongoose');
// // const dotenv = require('dotenv');

// const artworkSchema = new mongoose.Schema({
//   addedBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true
//   },
//   art_name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   images: [{
//     path: {
//       type : String
//     }
//   }],
//   pricing: {
//     type: mongoose.Types.Decimal128,
//     required: true,
//     min: [0, 'Price must be zero or positive']
//   },
//   discount: {
//     type: mongoose.Types.Decimal128,
//     default: mongoose.Types.Decimal128.fromString("0"),
//     min: [0, 'discount must be zero or positive']
//   },
//   description: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   quantity: {
//     type: Number,
//     required: true,
//     min: [0, 'Quantity must be Zero or positive']
//   },
//   category: {
//     type: String,
//     enum: ['illustration', 'painting', 'sculpture', 'handcrafted', 'sketch', 'digital art', 'photography', 'classic', 'abstract', 'modern', 'fantasy'],
//     required: true
//   },
//   is_deleted: { 
//     type: Boolean, 
//     default: false, 
//     required: true 
//   }
// },  { timestamps: true});

// const Artwork = mongoose.model('Artwork', artworkSchema, 'artworks');
// module.exports = Artwork;
