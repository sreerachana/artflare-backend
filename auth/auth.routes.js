const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
// const { validate } = require('express-validation');
// const { register, login, logout, resetPassword } = require('./auth.validation');

// Route to handle user registration
router.post('/register', authController.register);

// Route to handle user login
router.post('/login', authController.login);

// Route for forgot password
router.post('/forgot-password', authController.handleForgotPassword)

// Route for verification otp
router.post('/verify-otp', authController.handleVerifyOtp)

// Route for reset password
router.post('/reset-password', authController.handleResetPassword)

router.post('/register-artist', authController.registerArtist)
module.exports = router;