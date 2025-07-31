const express = require('express');
const router = express.Router();
const categoriesController = require('./categories.controller');
    

router.get('/', categoriesController.getCategories); 
router.get('/:id', categoriesController.getCategoryById); 
router.post('/', categoriesController.createCategory); 
router.put('/:id', categoriesController.updateCategory); 
router.delete('/:id', categoriesController.deleteCategory); 
// router.get('/search', categoriesController.searchCategories); 



module.exports = router;