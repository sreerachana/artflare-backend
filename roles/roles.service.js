const rolesModel = require('./roles.model');

exports.getAllRoles = async () => {
    try {
        const roles = await rolesModel.find();
        return roles;
    } catch (error) {
        throw new Error('Error fetching roles: ' + error.message);
    }
}
exports.getRoleById = async (id) => {
    try {
        const role = await rolesModel.findOne({id: id});
        if (!role) {
            throw new Error('Role not found');
        }
        return role;
    }
    catch (error) {
        throw new Error('Error fetching role: ' + error.message);
    }
}
exports.createRole = async (roleData) => {
    try {
        const newRole = new rolesModel(roleData);
        await newRole.save();
        return newRole;
    } catch (error) {
        throw new Error('Error creating role: ' + error.message);
    }
}
exports.updateRole = async (role_id, roleData) => {
    try {
        const updatedRole = await rolesModel.findOneAndUpdate({id:role_id}, roleData, { new: true });
        if (!updatedRole) {
            throw new Error('Role not found');
        }
        return updatedRole;
    } catch (error) {
        throw new Error('Error updating role: ' + error.message);
    }
}
exports.deleteRole = async (id) => {
    try {
        const deletedRole = await rolesModel.findOneAndDelete({id});
        if (!deletedRole) {
            throw new Error('Role not found');
        }
        return deletedRole;
    } catch (error) {
        throw new Error('Error deleting role: ' + error.message);
    }
}