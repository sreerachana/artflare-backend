const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


exports.hashPassword = async (password) => {
    try {
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
}
exports.comparePassword = async (password, hashedPassword) => {
    try {
        const isMatch = await bycrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        throw new Error('Error comparing password');
    }
}
exports.generateToken = (payload) => {
    try {
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' });
        return token;
    } catch (error) {
        throw new Error('Error generating token');
    }
}
// new token verification

exports.verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        console.error('JWT verification error:', error.name, error.message);
        throw new Error('Invalid token');
    }
};


// old token verification

// exports.verifyToken = (token) => {
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         return decoded;
//     } catch (error) {
//         throw new Error('Invalid token');
//     }
// }
exports.generateResetCode = () => {
    try {
        const reset_code = Math.floor(100000 + Math.random() * 900000);
        return reset_code;
    } catch (error) {
        throw new Error('Error generating reset code');
    }
}
exports.generateResetCodeTimeLimit = () => {
    try {
        const timeLimit = Date.now() + 10 * 60 * 1000; // 10 minutes
        return timeLimit;
    } catch (error) {
        throw new Error('Error generating reset code time limit');
    }
}

exports.transporter = nodemailer.createTransport({
    service: 'Gmail',
    // host: process.env.MAIL_HOST,
    // port: process.env.MAIL_PORT,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: 'ashokkumarkola.ytp@gmail.com', // process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
      pass: 'hrao snvh hqvo lrqi', // process.env.NODE_CODE_SENDING_EMAIL_PASSWORD
    }
});