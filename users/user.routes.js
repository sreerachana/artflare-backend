const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.get('/', userController.getAllUsers);// Get all users
router.get('/:user_id', userController.getUserById);// Get user by ID
router.post('/', userController.createUser);// Create a new user        
router.put('/:user_id', userController.updateUser);// Update user by ID
router.delete('/:user_id', userController.deleteUser);// Delete user by ID
router.delete('/delete/:id', userController.hardDeleteUser);// Delete user by ID

module.exports = router;