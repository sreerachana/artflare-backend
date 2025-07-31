// const jwt = require('jsonwebtoken');
// const AppError = require('../utils/appError.util');

// const authenticate = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return next(new AppError('Token not provided', 401));
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     console.error("JWT error:", err.message);
//     return next(new AppError('Invalid or expired token', 401));
//   }
// };

// module.exports = authenticate;
