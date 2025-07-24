// const connectDB = require('../config/mongoose');
const Category = require('./categories.model');

exports.getCategories = async () => {
    // const conn = await connectDB();s
    // const db = conn.connection.db;
    // const categories = await db.collection('categories').find({}).toArray();

    const categories = await Category.find({ });
    
    return categories;
};

exports.getCategoryById = async (categoryId) => {
    const category = await Category.findOne({ _id: categoryId });
    return category;
};

exports.createCategory = async (categoryData) => {
    const category = new Category(categoryData);
    await category.save();
    return category;
};

exports.updateCategory = async (categoryId, categoryData) => {
    const category = await Category.findOneAndUpdate(
        { _id : categoryId },
        { $set: categoryData },
        { new: true }
    );
    return category;
};

exports.deleteCategory = async (categoryId) => {
    // const conn = await connectDB();
    // const db = conn.connection.db;
    // const result = await db.collection('categories').deleteOne({ _id: new ObjectId(categoryId) });   
    const result = await Category.deleteOne({ _id: categoryId });
    return result.deletedCount > 0;
};
// exports.searchCategories = async (searchTerm) => {
//     const conn = await connectDB();

//     const db = conn.connection.db;

//     const categories = await db.collection('categories').find({
//         $or: [
//             { name: { $regex: searchTerm, $options: 'i' } },
//             { description: { $regex: searchTerm, $options: 'i' } }
//         ]
//     }).toArray();

//     return categories;
// }