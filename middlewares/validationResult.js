const {validationResult} = require('express-validator');
const AppError = require('../utils/appError.util');
 
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
 
  if (!errors.isEmpty()) {
    const extractedErrors = errors.array().map(err => ({
      field: err.param,
      message: err.msg,
    }));
 
    return next(new AppError('Validation failed', 422, extractedErrors));
  }
 
  next();
};
 
module.exports = validateRequest;
