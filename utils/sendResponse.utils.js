const sendResponse = (res, statusCode, success, message = '', data = null, errors = null) => {
  return res.status(statusCode).json({
    success,
    message,
    data,
    errors,
  });
};
 
module.exports = sendResponse;