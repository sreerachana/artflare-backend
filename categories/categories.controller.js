const categoriesService = require('./categories.service');

exports.getCategories = async (req, res) => {
    try {
        const categories = await categoriesService.getCategories();
        res.status(200).json({
            success: true,
            categories: categories
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to load categories'
        });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await categoriesService.getCategoryById(categoryId);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }
        res.status(200).json({
            success: true,
            data: category
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to load category'
        });
    }
};
exports.createCategory = async (req, res) => {
    try {
        const categoryData = req.body;
        const newCategory = await categoriesService.createCategory(categoryData);
        res.status(201).json({
            success: true,
            data: newCategory
        });
    } catch (error) {
        console.error("Error creating category:", error); 
        res.status(500).json({
            success: false,
            message: 'Failed to create category'
        });
    }
};
exports.updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const categoryData = req.body;
        const updatedCategory = await categoriesService.updateCategory((categoryId), categoryData);
        
        if (!updatedCategory) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }
        res.status(200).json({
            success: true,
            data: updatedCategory
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update category'
        });
    }
};  
exports.deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const deletedCategory = await categoriesService.deleteCategory(categoryId);
        if (!deletedCategory) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Category deleted successfully'
        });
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete category'
        });
    }
};
