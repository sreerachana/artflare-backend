const User = require('./user.model');
const AppError = require('../utils/appError.util');

// Get all active (non-deleted) users
exports.getAllUsers = async () => {
    return await User.find({ is_deleted: false });
};

// exports.getAllArtists = async () => {
//     return await User.find({
//         role: { $in: ['artist', 'creator'] },
//         is_deleted: false
//     });
// };

exports.getAllArtists = async () => {
    const artists = await User.find({ is_deleted: false })
        .populate({
            path: 'role', // This should be the field in User schema (ObjectId ref)
            match: { role_name: { $in: ['creator'] } }, // match on role_name field in Role collection
            select: 'role_name'
        });
        
    // Filter out users whose role didn't match
    return artists.filter(user => user.role);
};



// Get a user by ID
exports.getUserById = async (id) => {
    const user = await User.findOne({ _id: id, is_deleted: false }).populate('role', 'name');
    if (!user) {
        throw new AppError('User not found', 404);
    }
    return user;
};

// Create a new user
exports.createUser = async ({ name, phone_number, email, password, role }) => {
    const newUser = new User({ name, phone_number, email, password, role });
    return await newUser.save();
};

// Update an existing user by ID
exports.updateUser = async (_id, { name, phone_number, email, password, role_id }) => {
    const updatedUser = await User.findOneAndUpdate(
        { _id },
        { name, phone_number, email, password, role_id },
        { new: true }
    );
    if (!updatedUser) {
        throw new AppError('User not found', 404);
    }
    return updatedUser;
};

// Soft delete a user (mark as deleted)
exports.deleteUser = async (_id) => {
    const deletedUser = await User.findOneAndUpdate(
        { _id },
        { is_deleted: true, deleted_at: new Date() },
        { new: true }
    );
    if (!deletedUser) {
        throw new AppError('User not found', 404);
    }
    return deletedUser;
};

// Permanently delete a user
exports.hardDeleteUser = async (id) => {
    const deletedUser = await User.findOneAndDelete({ _id: id });
    if (!deletedUser) {
        throw new AppError('User not found', 404);
    }
    return deletedUser;
};
