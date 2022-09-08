import express from "express"
import adminController from "../controller/adminController.js"

const control = adminController.subjectController
const router = express.Router()

router
    
    .get("/subject", control.viewSubject)
    .get("/subject/:id", control.viewSubjectById)
    .post("/subject", control.registerSubject)
    .put("/subject/:id", control.updateSubject)
    .delete("/subject/:id", control.removeSubject)
    

 export default router