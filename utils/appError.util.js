class AppError extends Error {
  constructor(message, statusCode = 500, errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors.length ? errors : [message];
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;