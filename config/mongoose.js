const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.log(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};
 
module.exports = connectDB;