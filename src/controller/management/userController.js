import user from "../../schema/userModel.js"
import crud from ".././crud.js"


function viewUsers  (req, res)  {
    
    crud.view(req, res, user)
}

function viewUserById  (req, res)  {
    crud.viewById(req, res, user)
}


function registerUser (req, res) {
   crud.create(req, res, user)
}


function updateUser (req, res) {
   crud.update(req, res, user)
}

function removeUser (req, res) {
    crud.remove(req, res, user)
}

const loginUser = async (req, res) => {
    try{
        const{cpf, password} = req.params
        const checkUser = await user.findOne({cpf: cpf})
        if (!checkUser) return res.status(400).send("Cpf ou senha incorreto")
        const passwordCheck = bcrypt.compareSync(password, checkUser.password)
        if (!passwordCheck) return res.status(400).send("Cpf ou senha incorreto")
        res.status(200).send(`logado`)

    } catch (err){
        res.status(400).send("Cpf ou senha incorreto")
    }
}


const users = {
    viewUsers,
    viewUserById,
    updateUser,
    removeUser,
    registerUser,
    loginUser
}

export default users