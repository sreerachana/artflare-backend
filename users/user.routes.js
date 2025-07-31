const express = require('express');
const router = express.Router();
const userController = require('./user.controller');
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');


router.get('/', authenticate, userController.getAllUsers);
router.get('/:id', authenticate, userController.getUserById);
router.put('/:id', authenticate, userController.updateUser);
router.delete('/:id', authenticate, userController.deleteUser);
router.delete('/delete/:id', authenticate, authorize('admin'), userController.hardDeleteUser);

module.exports = router;

// router.post('/', userController.createUser); 
// authorize('admin'), 