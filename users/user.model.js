const mongoose = require('mongoose');
const bycrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  user_id: {
    type: String, // UUID as a string
    // required: true,
    // unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone_number: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role_id: {
    type: Number,
    // required: true
  },
  role: {
    type:[String],
    enum: ['artist','user'],
    default: ['user']
  },
  block_status: {
    type: Boolean,
    default: false
  },
  profile_photo: {
    type: String,
    default: null
  },
  reset_code: {
    type: String,
    default: null
  },
  reset_code_expiry: {
    type: Date,
    default: null
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  is_deleted: {
    type: Boolean,
    default: false
  },
  deleted_at: {
    type: Date,
    default: null
  }
});

// Hash password before saving user
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const salt = await bycrypt.genSalt(10);
    this.password = await bycrypt.hash(this.password, salt);
  }
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
