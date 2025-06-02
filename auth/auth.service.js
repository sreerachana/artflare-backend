const User = require('../users/user.model');
const {comparePassword, generateToken} = require('./auth.util');

// register new user
exports.register = async (name, phone_number, email, password, role = 'user') => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }
    // Create new user
    const newUser = new User({
      name,
      phone_number,
      email,
      password,
      role,
    });
    await newUser.save();
    return newUser;
  }
  catch (error) {
    throw new Error(error.message);
  }
}
// login user
exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    const error = new Error('Invalid password');
    error.statusCode = 401;
    throw error;
  }

  const payload = {
    id: user._id,
    name: user.name,
    email: user.email,
  };

  const token = generateToken(payload);

  const sanitizedUser = {
    name: user.name,
    role: user.role,
    email: user.email,
  };

  return {
    message: 'Login successful',
    user: sanitizedUser,
    token,
  };
};

// handle forgot password
exports.handleForgotPassword = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        // Generate reset code
        const reset_code = Math.floor(100000 + Math.random() * 900000);
        // Send reset code to user's email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Password Reset Code',
            text: `Your password reset code is ${reset_code}`
        };
        await transporter.sendMail(mailOptions);
        // Save reset code to user
        user.reset_code = reset_code;
        await user.save();
        return { message: 'Reset code sent to email' };
    }
    catch (error) {
        throw new Error(error.message);
    }
}
// handle verify otp
exports.handleVerifyOtp = async (email, reset_code) => {
    try {
        const user = await User.find({ email, reset_code });
        if (!user) {
            throw new Error('User not found');
        }
        // Verify reset code
        if (user.reset_code !== reset_code) {
            throw new Error('Invalid reset code');
        }
        // Reset reset code
        user.reset_code = null;
        await user.save();
        return { message: 'Reset code verified' };
    }
    catch (error) {
        throw new Error(error.message);
    }
}
// handle reset password
exports.handleResetPassword = async (email, reset_code, new_password) => {
    try {
        const user = await User.find({ email, reset_code, new_password });
        if (!user) {
            throw new Error('User not found');
        }
        // Verify reset code
        if (user.reset_code !== reset_code) {
            throw new Error('Invalid reset code');
        }
        // Hash new password
        const hashedPassword = await hashPassword(new_password);
        // Update password
        user.password = hashedPassword;
        user.reset_code = null;
        await user.save();
        return { message: 'Password reset successfully' };
    }
    catch (error) {
        throw new Error(error.message);
    }
}
exports.findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
}
exports.updateResetCode = async (existingUser, resetCode, resetExpiry) => {
  existingUser.reset_code = resetCode;
  existingUser.reset_code_expiry = resetExpiry;

  return await existingUser.save();
}
exports.resetResetCode = async (user) => {
  user.reset_code = undefined;
  user.reset_code_expiry = undefined;

  return await user.save();
}
exports.saveUser = async ( user, password ) => {
  user.password = password
  return await user.save()
}

exports.registerArtist = async ( { name, email, phone_number, password, } ) =>{
  const artist = new User({
    name,
    email,
    phone_number,
    password,
    role: 'artist',
  });
   
return await artist.save();
}