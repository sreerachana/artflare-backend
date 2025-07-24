const buildPasswordResetTemplate = (user, resetCode) => {
  return `
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
  `;
};


module.exports = buildPasswordResetTemplate;