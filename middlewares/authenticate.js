const { getUserById } = require('../users/user.service');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError.util');

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new AppError('No token provided', 401);
  }

  const token = authHeader.split(' ')[1];
  
  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);

    const user = await getUserById(decoded.id);
    console.log('User from token:', user);

    if (!user || user.is_deleted) {
      throw new AppError('User not found or deactivated', 401);
    }
    req.user = user;
    next();
  } catch (error) {
    throw new AppError('Invalid or expired token', 401);
  }
};

module.exports = authenticate;
