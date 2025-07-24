const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new Error('User not authenticated'));
    }

    const userRoles = req.user.role || [];

    if (!Array.isArray(userRoles)) {
      return next(new Error('User roles must be an array'));
    }

    // Convert populated role objects to names
    const roleNames = userRoles.map(role => role.name || role.toString());

    const hasAccess = allowedRoles.some(role => roleNames.includes(role));
    if (!hasAccess) {
      return next(new Error('User does not have permission to access this resource'));
    }

    next();
  };
};

module.exports = authorize;





// const authorize = (...allowedRoles) => {
//   return (req, res, next) => {
//     if (!req.user) {
//         throw new Error('User not authenticated', 401);
//     }
 
//     const userRoles = req.user.role || req.user.roles || [];
//     if (!Array.isArray(userRoles)) {
//         throw new Error('User roles must be an array', 400);
//     }
 
//     const hasAccess = allowedRoles.some(role => userRoles.includes(role));
//     if (!hasAccess) {
//         throw new Error('User does not have permission to access this resource', 403);
//     }
 
//     next();
//   };
// };
 
// module.exports = authorize;