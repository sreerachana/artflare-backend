const Role = require('./roles.model');
const mongoose = require('mongoose');

// Get all roles
exports.getAllRoles = async () => {
  try {
    return await Role.find().lean();
  } catch (error) {
    throw new Error(`Error fetching roles: ${error.message}`);
  }
};

// Get a single role by ID
exports.getRoleById = async (id) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid role ID');
    }

    const role = await Role.findById(id).lean();
    if (!role) {
      throw new Error('Role not found');
    }

    return role;
  } catch (error) {
    throw new Error(`Error fetching role: ${error.message}`);
  }
};

// Create a new role
exports.createRole = async (roleData) => {
  try {
    const roleExists = await Role.findOne({ role_name: roleData.role_name });
    if (roleExists) {
      throw new Error('Role with this name already exists');
    }

    const newRole = new Role(roleData);
    return await newRole.save();
  } catch (error) {
    throw new Error(`Error creating role: ${error.message}`);
  }
};

// Update existing role
exports.updateRole = async (id, roleData) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid role ID');
    }

    const updatedRole = await Role.findByIdAndUpdate(id, roleData, {
      new: true,
      runValidators: true,
    });

    if (!updatedRole) {
      throw new Error('Role not found');
    }

    return updatedRole;
  } catch (error) {
    throw new Error(`Error updating role: ${error.message}`);
  }
};

// Delete role by ID
exports.deleteRole = async (id) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid role ID');
    }

    const deletedRole = await Role.findByIdAndDelete(id);

    if (!deletedRole) {
      throw new Error('Role not found');
    }

    return deletedRole;
  } catch (error) {
    throw new Error(`Error deleting role: ${error.message}`);
  }
};
