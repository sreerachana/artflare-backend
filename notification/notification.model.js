const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  // id: {
  //   type: Number,
  //   unique: true,
  //   required: true
  // },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['ORDER_UPDATE', 'WALLET', 'ARTWORK_SOLD', 'PROMOTION', 'SYSTEM'],
    default: 'SYSTEM'
  },
  is_read: {
    type: Boolean,
    default: false
  },
  related_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artwork', 
    default: null 
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Optional: auto-update `updated_at` on document update
notificationSchema.pre('save', function (next) {
  this.updated_at = new Date();
  next();
});

const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;
