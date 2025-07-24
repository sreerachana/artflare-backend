const rolesController = require('./roles.controller');
const express = require('express');

const router = express.Router();

router.get('/', rolesController.getAllRoles); 
router.get('/:id', rolesController.getRoleById); 
router.post('/', rolesController.createRole);
router.put('/:id', rolesController.updateRole);
router.delete('/:id', rolesController.deleteRole);

module.exports = router;