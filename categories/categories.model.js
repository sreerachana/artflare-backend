const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 100
    },
    description: {
      type: String,
      default: null,
      trim: true,
      maxlength: 300
    },
//     is_active: {
//       type: Boolean,
//       default: true
//     }
  },
  {
    timestamps: true,
    collection: 'categories'
  }
);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
