const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');

const { 
    registerValidation, 
    loginValidation, 
    forgotPasswordValidation, 
    verifyOtpValidation, 
    resetPasswordValidation 
} = require('./auth.validation');


router.post('/register', registerValidation, authController.register);


router.post('/login', loginValidation, authController.login);


router.post('/forgot-password', forgotPasswordValidation, authController.handleForgotPassword)


router.post('/verify-otp', verifyOtpValidation, authController.handleVerifyOtp)


router.post('/reset-password', resetPasswordValidation, authController.handleResetPassword)



module.exports = router;









// router.post('/register-artist', authController.registerArtist)