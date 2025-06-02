const express = require('express');
const router = express.Router();
const categoriesController = require('./categories.controller');
    

router.get('/', categoriesController.getCategories); // Get all categories
router.get('/:id', categoriesController.getCategoryById); // Get category by ID
router.post('/', categoriesController.createCategory); // Create a new category
router.put('/:id', categoriesController.updateCategory); // Update a category by ID
router.delete('/:id', categoriesController.deleteCategory); // Delete a category by ID
// router.get('/search', categoriesController.searchCategories); // Search categories by name



module.exports = router;