import classes from "../../schema/classes.js"
import crud from ".././crud.js"

async function viewClasses  (req, res) {
    crud.view(req, res, classes)
}
async function viewClassesById  (req, res) {
    crud.viewById(req, res, classes)
}
async function registerClasses  (req, res) {
    crud.create(req, res, classes)
}
async function updateClasses  (req, res) {
    crud.update(req, res, classes)
}
async function removeClasses  (req, res) {
    crud.remove(req, res, classes)
}

const classess = {
    viewClasses,
    viewClassesById,
    registerClasses,
    updateClasses,
    removeClasses,
}

export default classess