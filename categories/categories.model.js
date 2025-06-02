const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    id: Number,
    category: { 
        type: String, 
        required: true, 
        unique: true, 
        maxlength: 100 
    },
});

const Category = mongoose.model('Category', categorySchema, 'categories');

module.exports = Category;
