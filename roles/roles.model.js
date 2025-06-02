const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  role_name: {
    type: String,
    required: true
  }
}, { collection: 'roles' });

module.exports = mongoose.model('Role', RoleSchema, 'roles');
