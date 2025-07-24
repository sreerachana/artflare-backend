const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema(
  {
    role_name: {
      type: String,
      required: [true, 'Role name is required'],
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: [50, 'Role name must not exceed 50 characters']
    },

    // description: {
    //   type: String,
    //   trim: true,
    //   maxlength: [200, 'Description must not exceed 200 characters'],
    //   default: null
    // },

    is_active: {
      type: Boolean,
      default: true
    },

    // permissions: [{
    //   type: String
    //   // or type: mongoose.Schema.Types.ObjectId, ref: 'Permission'
    // }]
  },
  {
    timestamps: true,
    collection: 'roles',
  }
);

module.exports = mongoose.model('Role', RoleSchema);
