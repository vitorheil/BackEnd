import express from "express"
import adminController from "../controller/adminController.js"

const control = adminController.actionController
const router = express.Router()

router
    
    .get("/actions", control.viewAction)
    .get("/actions/:id", control.viewActionById)
    .post("/actions", control.registerAction)
    .put("/actions/:id", control.updateAction)
    .delete("/actions/:id", control.removeAction)
    .post("/actions/methods/:id", control.addMethodById)
    .delete("/actions/methods/:id", control.removeMethodById)

 export default router