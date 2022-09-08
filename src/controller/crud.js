async function view(req, res, model){

    try{
        const checkView = await model.find()

        res.send({sucess: true, data: checkView})
    } catch (error) {
        res.status(400).send({succes:false, error: error})
    }
}

async function viewById(req, res, model){
    try {
        const { id } = req.params;
        const checkAction = await model.findById(id);
        res.status(200).send(checkAction);

    } catch (err) {
        res.status(400).send({ message: `${err.message} - ID não localizado.` });
    }
}

async function create(req, res, model){
    try{
        const create = new model(req.body)

       await  create.save()
        res.status(200).send(create.toJSON())
    } catch (err){
        res.status(500).send({message:`${err.message}- falha ao cadastrar`})
    }
}

async function update(req, res, model){
    try{
        const id = req.params.id

       await model.findByIdAndUpdate(id, {$set: req.body})
       res.status(200).send({message: 'cadastrado com sucesso'})        
    } catch (err){
        res.status(500).send({message: err.message})
    }
}

async function remove(req, res, model){
    try{
        const id = req.params.id

      await  model.findByIdAndDelete(id)
        res.status(200).send({message: 'deletado com sucesso'})
    } catch (err){
        res.status(500).send({message: err.message})
    }
}

const crud = {
    create,
    viewById,
    view,
    update,
    remove
}

export default crud