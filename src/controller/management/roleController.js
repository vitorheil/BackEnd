import role from "../../schema/role.js" 
import crud from ".././crud.js"



function viewRoles  (req, res) {
    crud.view(req, res, role)
}

function viewRoleById  (req, res) {
    crud.viewById(req, res, role)
}

function registerRole  (req, res) {
    crud.create(req, res, role)
}

function updateRole  (req, res) {
    crud.update(req, res, role)
}

function removeRole  (req, res){
    crud.remove(req, res, role)
}

const roles = {
    viewRoles,
    viewRoleById,
    registerRole,
    updateRole,
    removeRole
}

export default roles