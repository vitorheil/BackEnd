import express from "express"
import adminController from "../controller/adminController.js"

const control = adminController.registrationController
const router = express.Router()

router
    
    .get("/registration", control.viewRegistration)
    .get("/registration/:id", control.viewRegistrationById)
    .post("/registration", control.registerRegistration)
    .put("/registration/:id", control.updateRegistration)
    .delete("/registration/:id", control.removeRegistration)

 export default router