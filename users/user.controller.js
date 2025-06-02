const userServices = require('./user.service');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userServices.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await userServices.getUserById(req.params.user_id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user', error });
    }
}

exports.createUser = async (req, res) => {
    try {
        const { user_id, name, phone_number, email, password, role_id } = req.body;
        const newUser = await userServices.createUser({
            user_id,
            name,
            phone_number,
            email,
            password,
            role_id
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}
exports.updateUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const { name, phone_number, email, password, role_id } = req.body;
        const updatedUser = await userServices.updateUser(
            user_id,
            { name, phone_number, email, password, role_id }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const deletedUser = await userServices.deleteUser(user_id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
}
exports.hardDeleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await userServices.hardDeleteUser(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User hard deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error hard deleting user', error });
    }
}