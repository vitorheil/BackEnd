import express from "express"
import adminController from "../controller/adminController.js"

const control = adminController.roleController
const router = express.Router()

router
    
    .get("/role", control.viewRoles)
    .get("/role/:id", control.viewRoleById)
    .post("/role", control.registerRole)
    .put("/role/:id", control.updateRole)
    .delete("/role/:id", control.removeRole)
    

 export default router