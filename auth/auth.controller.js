const authService = require('./auth.service');
const { transporter, generateResetCode, generateResetCodeTimeLimit } = require('./auth.util');
const AppError = require('../utils/appError.util');
const sendResponse = require('../utils/sendResponse.utils');
const buildPasswordResetTemplate = require('../utils/emailTemplates.utils');

// REGISTER
exports.register = async (req, res, next) => {
    try {
        const { name, phone_number, email, password, role } = req.body;
        const user = await authService.register(name, phone_number, email, password, role);

        return sendResponse(res, 201, true, 'User registered successfully', user);
    } catch (error) {
        next(error);
    }
};

// LOGIN
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await authService.login(email, password);
        console.log(user, token)

        return sendResponse(res, 200, true, 'User logged in successfully', { user, token });
    } catch (error) {
        next(error);
    }
};

// FORGOT PASSWORD
exports.handleForgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await authService.findUserByEmail(email);
        if (!user) {
            throw new AppError('User not found', 404, ['User does not exist']);
        }

        const resetCode = generateResetCode();
        const resetExpiry = generateResetCodeTimeLimit();
        
        await authService.updateResetCode(user, resetCode, resetExpiry);

        const html = buildPasswordResetTemplate(user, resetCode);

        await transporter.sendMail({
            to: 'msreerachana@gmail.com',   //user.email,
            subject: 'Artflare Password Reset Code',
            html
        });

        return sendResponse(res, 200, true, 'OTP successfully sent to email', { email: user.email });
    } catch (error) {
        next(error);
    }
};

// VERIFY OTP
exports.handleVerifyOtp = async (req, res, next) => {
    try {
        const { email, otp } = req.body;
        let user = await authService.findUserByEmail(email);
        if (!user) {
            throw new AppError('User not found', 404, ['User not found']);
        }

        if (!user.reset_code || !user.reset_code_expiry) {
            throw new AppError('OTP not generated or expired', 400, ['OTP not generated or expired']);
        }

        if (user.reset_code_expiry < Date.now()) {
            throw new AppError('OTP expired. Please request a new one.', 400, ['OTP expired']);
        }

        if (user.reset_code !== otp) {
            throw new AppError('Invalid OTP', 400, ['Invalid OTP']);
        }

        await authService.resetResetCode(user);

        return sendResponse(res, 200, true, 'OTP verified successfully');
    } catch (error) {
        next(error);
    }
};

// RESET PASSWORD
exports.handleResetPassword = async (req, res, next) => {
    try {
        const { email, password, confirm_password } = req.body;

        if (!email || !password || !confirm_password) {
            throw new AppError('All fields are required', 400, ['Missing required fields']);
        }

        if (password !== confirm_password) {
            throw new AppError('Passwords do not match', 400, ['Passwords do not match']);
        }

        const user = await authService.findUserByEmail(email);
        if (!user) {
            throw new AppError('User not found', 404, ['User not found']);
        }

        await authService.saveUser(user, password);

        return sendResponse(res, 200, true, 'Password changed successfully');
    } catch (error) {
        next(error);
    }
};

