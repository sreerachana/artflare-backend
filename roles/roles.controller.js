const rolesService = require('./roles.service');

exports.getAllRoles = async (req, res) => {
    try {
        const roles = await rolesService.getAllRoles();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.getRoleById = async (req, res) => {
    try {
        const role = await rolesService.getRoleById(req.params.id);
        res.status(200).json(role);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.createRole = async (req, res) => {
    try {
        const newRole = await rolesService.createRole(req.body);
        res.status(201).json(newRole);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.updateRole = async (req, res) => {
    try {
        const updatedRole = await rolesService.updateRole(req.params.id, req.body);
        res.status(200).json(updatedRole);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.deleteRole = async (req, res) => {
    try {
        const deletedRole = await rolesService.deleteRole(req.params.id);
        res.status(200).json(deletedRole);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}