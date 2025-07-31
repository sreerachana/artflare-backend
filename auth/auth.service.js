const User = require('../users/user.model');
const Role = require('../roles/roles.model');
const { comparePassword, generateToken } = require('./auth.util');

const AppError = require('../utils/appError.util');

// Register a new user
exports.register = async (name, phone_number, email, password, role = 'Customer') => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new AppError('User already exists', 400);
    }

    const roleDoc = await Role.findOne({ role_name: role.toLowerCase() });
    if (!roleDoc) {
        throw new AppError(`Role "${role}" not found`, 400);
    }

    const newUser = new User({
        name,
        phone_number,
        email,
        password,
        role: [roleDoc._id],
    });

    return await newUser.save();
};

// Login existing user
exports.login = async (email, password) => {
    const user = await User.findOne({ email }).populate('role');
    // console.log(user);

    if (!user) {
        throw new AppError('User not found', 404);
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
        throw new AppError('Invalid password', 401);
    }

    // Map all role names from populated role array
    const roleNames = Array.isArray(user.role)
        ? user.role.map((r) => r.role_name)
        : [];

    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        roles: roleNames, 
    };

    const token = generateToken(payload);

    const sanitizedUser = {
        id: user.id,
        name: user.name,
        roles: roleNames, 
        email: user.email,
    };

    return { user: sanitizedUser, token };
};



// Find user by email
exports.findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

// Update user's reset code and expiry
exports.updateResetCode = async (user, code, expiry) => {
    user.reset_code = code;
    user.reset_code_expiry = expiry;
    return await user.save();
};

// Reset the reset_code and expiry fields
exports.resetResetCode = async (user) => {
    user.reset_code = undefined;
    user.reset_code_expiry = undefined;
    return await user.save();
};

// Save updated password
exports.saveUser = async (user, password) => {
    user.password = password;
    return await user.save();
};
