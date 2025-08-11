const userService = require('./user.service');
const { validationResult } = require('express-validator');
const AppError = require('../utils/appError.util');
const sendResponse = require('../utils/sendResponse.utils');

// Get all users
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        return sendResponse(res, 200, true, 'Users fetched successfully', users);
    } catch (error) {
        next(error);
    }
};

exports.getAllArtists = async (req, res, next) => {
    try {
        const artists = await userService.getAllArtists();
        return sendResponse(res, 200, true, 'Artists fetched successfully', artists);
    } catch (error) {
        next(error);
    }
};


// Get user by ID
exports.getUserById = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        return sendResponse(res, 200, true, 'User fetched successfully', user);
    } catch (error) {
        next(error);
    }
};

// Create user
exports.createUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new AppError('Validation failed', 422, errors.array());
        }

        const { name, phone_number, email, password, role } = req.body;
        const user = await userService.createUser({ name, phone_number, email, password, role });

        return sendResponse(res, 201, true, 'User created successfully', user);
    } catch (error) {
        next(error);
    }
};

// Update user
exports.updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, phone_number, email, password, role_id } = req.body;

        const user = await userService.updateUser(id, {
            name,
            phone_number,
            email,
            password,
            role_id,
        });

        return sendResponse(res, 200, true, 'User updated successfully', user);
    } catch (error) {
        next(error);
    }
};

// Soft delete user
exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await userService.deleteUser(id);

        return sendResponse(res, 200, true, 'User deleted successfully');
    } catch (error) {
        next(error);
    }
};

// Hard delete user
exports.hardDeleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        await userService.hardDeleteUser(id);

        return sendResponse(res, 200, true, 'User hard deleted successfully');
    } catch (error) {
        next(error);
    }
};
