const User = require('./user.model');

exports.getAllUsers = async () => {
    try {
        const users = await User.find({ is_deleted: false });
        return users;
    } catch (error) {
        return { message: 'Error retrieving users', error };
    }
}
exports.getUserById = async (id) => {
    try {
        const user = await User.findOne({ user_id: id, is_deleted: false });
        if (!user) {
            return { message: 'User not found' };
        }
        return user;
    } catch (error) {
        return { message: 'Error retrieving user', error };
    }
}
exports.createUser = async ({user_id,name,phone_number,email,password,role_id}) => {
    try {
        // const { user_id, name, phone_number, email, password, role_id } = req.body;
        const newUser = new User({
            user_id,
            name,
            phone_number,
            email,
            password,
            role_id
        });
        await newUser.save();
        return newUser;
    } catch (error) {
        return { message: 'Error creating user', error };
    }
}

exports.updateUser = async (user_id,
    { name, phone_number, email, password, role_id }) => {
    try {
        // const { user_id } = req.params;
        // const { name, phone_number, email, password, role_id } = req.body;
        const updatedUser = await User.findOneAndUpdate(
            { user_id },
            { name, phone_number, email, password, role_id },
            { new: true }
        );
        if (!updatedUser) {
            return { message: 'User not found' };
        }
        return updatedUser;
    } catch (error) {
        return { message: 'Error updating user', error };
    }
}

exports.deleteUser = async (user_id) => {
    try {
        // const { user_id } = req.params;
        const deletedUser = await User.findOneAndUpdate(
            { user_id },
            { is_deleted: true, deleted_at: Date.now() },
            { new: true }
        );
        if (!deletedUser) {
            return { message: 'User not found' };
        }
        return deletedUser;
    } catch (error) {
        return { message: 'Error deleting user', error };
    }
}

exports.hardDeleteUser = async (id) => {
    try {
        const deletedUser = await User.findOneAndDelete({ user_id: id });
        return deletedUser;
    } catch (error) {
        return { message: 'Error deleting user', error };
    }
}