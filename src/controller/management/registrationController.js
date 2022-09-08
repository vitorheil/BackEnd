import registration from "../../schema/registration.js"
import crud from ".././crud.js"


async function viewRegistration  (req, res) {
    crud.view(req, res, registration)
}
async function viewRegistrationById  (req, res) {
    crud.viewById(req, res, registration)
}
async function updateRegistration  (req, res) {
    crud.update(req, res, registration)
}
async function registerRegistration  (req, res) {
    crud.create(req, res, registration)
}
async function removeRegistration  (req, res) {
    crud.remove(req, res, registration)
}

const registrations = {
    viewRegistration,
    viewRegistrationById,
    updateRegistration,
    registerRegistration,
    removeRegistration,
}

export default registrations