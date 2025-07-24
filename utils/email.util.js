const nodemailer = require('nodemailer');
 
// Setup transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',  // SMTP provider
  auth: {
    user: "msreerachana@gmail.com", // process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
    pass: "hrao snvh hqvo lrqi", // process.env.NODE_CODE_SENDING_EMAIL_PASSWORD,
  }
});
 
const sendEmail = async ({ to, subject, html }) => {
  const mailOptions = {
    from: `"Artflare Support" <${process.env.NODE_CODE_SENDING_EMAIL_ADDRESS}>`,
    to,
    subject,
    html
  };
 
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email: ', error);
    throw new Error('Email sending failed');
  }
};

module.exports = sendEmail;