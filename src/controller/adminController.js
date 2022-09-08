
import users from "./management/userController.js"
import subject from "./management/subjectController.js"
import role from "./management/roleController.js"
import registration from "./management/registrationController.js"
import classes from "./management/classesController.js"
import action from "./management/actionsControlle.js"


class adminController {

    static userController = users
    static subjectController = subject
    static roleController = role
    static registrationController = registration
    static classesController = classes
    static actionController = action
}

export default adminController