import subject from "../../schema/subject.js" 
import crud from ".././crud.js"




function viewSubject (req, res) {

    crud.view(req, res, subject)
}
function viewSubjectById (req, res) {

    crud.viewById(req, res, subject)
}
function registerSubject (req, res) {

    crud.create(req, res, subject)
}
function updateSubject (req, res) {

    crud.update(req, res, subject)
}
function removeSubject (req, res) {

    crud.remove(req, res, subject)
}

const subjects = {
    viewSubject,
    viewSubjectById,
    registerSubject,
    updateSubject,
    removeSubject
}

export default subjects