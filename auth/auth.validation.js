const {body} = require('express-validator');
exports.registerValidation = [
    body('name')
        .isLength({ min: 2 })
        .withMessage('Full name is required'),

    body('email')
        .isEmail()
        .withMessage('Valid email required'),

    body('password')
        .isLength({ min: 6 })
        .withMessage('Password too short'),
        
    body('phone_number')
        .matches(/^\d{10}$/)
        .withMessage('Phone must be 10 digits'),
];
exports.loginValidation = [
    body('email')
        .isEmail()
        .withMessage('Valid email required'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters')
];
exports.forgotPasswordValidation = [
    body('email')
        .isEmail()
        .withMessage('Valid email required')
];
exports.verifyOtpValidation = [
    body('email')
        .isEmail()
        .withMessage('Valid email required'),
    body('reset_code')
        .isLength({ min: 6 })
        .withMessage('Reset code must be at least 6 characters')
];
exports.resetPasswordValidation = [
    body('email')
        .isEmail()
        .withMessage('Valid email required'),
    body('reset_code')
        .isLength({ min: 6 })
        .withMessage('Reset code must be at least 6 characters'),
    body('new_password')
        .isLength({ min: 6 })
        .withMessage('New password must be at least 6 characters')
];



















































// exports.bodyresetPasswordValidation = [
//     body('email')
//         .isEmail()
//         .withMessage('Valid email required'),
//     body('reset_code')
//         .isLength({ min: 6 })
//         .withMessage('Reset code must be at least 6 characters'),
//     body('new_password')
//         .isLength({ min: 6 })
//         .withMessage('New password must be at least 6 characters')
// ];