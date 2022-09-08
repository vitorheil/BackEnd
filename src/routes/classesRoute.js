import express from "express"
import adminController from "../controller/adminController.js"

const control = adminController.classesController
const router = express.Router()

router
    
    .get("/classes", control.viewClasses)
    .get("/classes/:id", control.viewClassesById)
    .post("/classes", control.registerClasses)
    .put("/classes/:id", control.updateClasses)
    .delete("/classes/:id", control.removeClasses)
    

 export default router