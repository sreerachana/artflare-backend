const rolesService = require('./roles.service');
const mongoose = require('mongoose');

// Get all roles
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await rolesService.getAllRoles();
    res.status(200).json({ success: true, data: roles });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch roles', error: error.message });
  }
};

// Get a role by ID
exports.getRoleById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid role ID' });
    }

    const role = await rolesService.getRoleById(id);

    if (!role) {
      return res.status(404).json({ success: false, message: 'Role not found' });
    }

    res.status(200).json({ success: true, data: role });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch role', error: error.message });
  }
};

// Create a new role
exports.createRole = async (req, res) => {
  try {
    const { role_name } = req.body;

    if (!role_name) {
      return res.status(400).json({ success: false, message: 'Role name is required' });
    }

    const newRole = await rolesService.createRole({ role_name });
    res.status(201).json({ success: true, message: 'Role created successfully', data: newRole });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create role', error: error.message });
  }
};

// Update a role
exports.updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid role ID' });
    }

    const updatedRole = await rolesService.updateRole(id, updates);

    if (!updatedRole) {
      return res.status(404).json({ success: false, message: 'Role not found' });
    }

    res.status(200).json({ success: true, message: 'Role updated successfully', data: updatedRole });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update role', error: error.message });
  }
};

// Delete a role
exports.deleteRole = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid role ID' });
    }

    const deletedRole = await rolesService.deleteRole(id);

    if (!deletedRole) {
      return res.status(404).json({ success: false, message: 'Role not found or already deleted' });
    }

    res.status(200).json({ success: true, message: 'Role deleted successfully', data: deletedRole });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete role', error: error.message });
  }
};
