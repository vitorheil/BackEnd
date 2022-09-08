import express from "express"
import adminController from "../controller/adminController.js"

const control = adminController.userController
const router = express.Router()

router
    
    .get("/user", control.viewUsers)
    .get("/user/:id", control.viewUserById)
    .post("/user", control.registerUser)
    .put("/user/:id", control.updateUser)
    .delete("/user/:id", control.removeUser)

 export default router