 import action from "../../schema/actions.js"
 import crud from ".././crud.js"


 
async function viewAction (req, res){
    crud.view(req, res, action)
 }
function viewActionById(req, res)  {
     crud.viewById(req, res, action)
 }
function registerAction  (req, res) {
   crud.create(req, res, action)
 }
function updateAction  (req, res) {
     crud.update(req, res, action)
 }
function removeAction  (req, res) {
      crud.remove(req, res, action)
 }
async function addMethodById(req, res)  {
    try {
        const { id } = req.params
        const { methods } = req.body
        const currentAction = await action.findById(id)
        currentAction.methods.push(methods)
        await currentAction.save()
        res.status(200).send({ sucess: true, data: currentAction })
    }
    catch (error) {
        res.status(400).send(error)
    }
 }
async function removeMethodById(req, res)  {
    try {
        const { id } = req.params
        const { methods } = req.body
        const currentAction = await action.findById(id)
        const index = currentAction.methods.findIndex(element => element == methods)

        if (index != -1) {
            currentAction.methods.splice(index, 1)
            await currentAction.save()
            res.status(200).send(currentAction)
            
        } else {
            res.status(500).send({ message: 'Método não encontrado'})
        }

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
 }


const actions = {
    viewAction,
    viewActionById,
    registerAction,
    updateAction,
    removeAction,
    addMethodById,
    removeMethodById

}

export default actions
