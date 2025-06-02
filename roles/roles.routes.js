const rolesController = require('./roles.controller');
const express = require('express');
const router = express.Router();

// Define routes for roles
router.get('/', rolesController.getAllRoles); // Get all roles
router.get('/:id', rolesController.getRoleById); // Get role by ID
router.post('/', rolesController.createRole); // Create a new role
router.put('/:id', rolesController.updateRole); // Update role by ID
router.delete('/:id', rolesController.deleteRole); // Delete role by ID

// Export the router
module.exports = router;