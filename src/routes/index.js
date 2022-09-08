import  express  from "express";
import user from "./userRoute.js"
import action from "./actionsRoute.js"
import role from "./roleRoute.js"
import subject from "./subjectRoute.js";
import classes from "./classesRoute.js";
import registration from "./registration.js"
const routes = (app) =>{
    app.route("/").get((req,res)=>{
        res.status(200).send({titulo: "Bem vindo ao Login de usuario"})

    })

    app.use(
        express.json(),
        user,
        action,
        role,
        subject,
        classes,
        registration
        
    )
}

export default routes