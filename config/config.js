const dotenv = require('dotenv');
 
dotenv.config();
 
module.exports = {
  env: process.env.NODE_ENV,
  app: {
    port: process.env.PORT,
  },
  mongoose: {
    url: process.env.MONGO_URI,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRE,
  },
  otp: {
    expiresIn: process.env.OTP_EXPIRE_MINUTES || 10,
  },
}
 