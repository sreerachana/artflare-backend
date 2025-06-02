const authService = require('./auth.service');
const { transporter, generateResetCode } = require('./auth.util');

exports.register = async (req, res) => {
    try {
        const { name, phone_number, email, password, role } = req.body;
        const user = await authService.register(name, phone_number, email, password, role);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await authService.login(email, password);
        res.status(200).json({ message: 'User logged in successfully', user, token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

exports.handleForgotPassword = async (req, res) => {
  try {
      const { email } = req.body;

      const existingUser = await authService.findUserByEmail( email );
      if (!existingUser) {        
          return res.status(404).json({success:false, message: 'User does not exist' });
      }

      const resetCode = generateResetCode();
      const resetExpiry = Date.now() + 100 * 60 * 1000;

      const user = await authService.updateResetCode(existingUser, resetCode, resetExpiry);

      const mailOptions = {
          from: 'ashokkumarkola.ytp@gmail.com', // "Artflare Support" <no-reply@artflare.com>
          to: 'msreerachana@gmail.com', // user.email,
          subject: 'Artflare Password Reset Code',
          html:`
                  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
                      <h2 style="color: #2c3e50;">Artflare Password Reset Code</h2>
                      <p>Hello, ${user.name}</p>
                      <p>Your verification code is:</p>
                      <p style="font-size: 24px; font-weight: bold; color: #007bff;">${resetCode}</p>
                      <p>This code is valid for <strong>10 minutes</strong>.</p>
                      <p>If you did not request this code, please ignore this email.</p>
                      <br>
                      <p>Thank you,</p>
                      <p><strong>Artflare Team</strong></p>
                  </div>
              `
      };

      await transporter.sendMail(mailOptions);

      res.json({
          success: true,
          message: 'OTP successfully sent to mail',
          mail: user.email,
      });
  
    } catch (error) {
      res.status(500).json({
          success: false,
          message: error.message
      });
  }
}
exports.handleVerifyOtp = async (req, res) => {
  try {
      const { email, otp } = req.body;

      let user = await authService.findUserByEmail(email); // .populate("role_id")

      if (!user) {  
          return res.status(400).json({ message: "User not found." });
      }

      if (!user.reset_code || !user.reset_code_expiry) {
          return res.status(400).json({ message: "OTP not generated or expired." });
      }
  
      if (user.reset_code_expiry < Date.now()) {
          return res.status(400).json({ message: "OTP expired. Please request a new one." });
      }

      if (user.reset_code !== otp) {
          return res.status(400).json({ message: "Invalid OTP." });
      }

      user = await authService.resetResetCode(user)

      res.json({
          success: true,
          message: "OTP verified successfully",

      });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: error.message
      });
  }
}
exports.handleResetPassword = async (req, res) => {
  try {
      const { email, password, confirm_password } = req.body;

      if (!email) {
          return res.status(400).json({ message: 'Email is missing from request.' });
      }

      if (!password || !confirm_password) {
          return res.status(400).json({ message: 'Both password fields are required.' });
      }

      if (password !== confirm_password) {
          return res.status(400).json({ message: 'Passwords do not match.' });
      }

      const user = await authService.findUserByEmail(email);
      if (!user) {
          return res.status(404).json({ message: 'User not found.' });
      }

      await authService.saveUser( user, password );

      res.json({
          success: true,
          message: "Password changed successfully"
      });
  } catch (error) {
      return res.status(500).json({
          message: 'Password reset failed.',
          error: error.message
      });
  }
};

exports.registerArtist = async (req, res) => {
    const { name, email, phone_number, password } = req.body;

  // Hash password and save with role "artist"
  const existingUser = await authService.findUserByEmail({ email });
  if (existingUser) return res.status(400).json({ error: 'Artist already exists' });

  const artist = authService.registerArtist({ name, email, phone_number, password, })
 
  res.json({ message: 'Artist registered successfully' });
}
