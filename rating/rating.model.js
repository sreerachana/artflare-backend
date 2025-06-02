const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
  review_id: {
    type: Number,
    required: true,
    unique: true
  },
  review: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },

},{ 
  collection: 'ratings' 
});


module.exports = mongoose.model('Rating', RatingSchema, 'ratings');

