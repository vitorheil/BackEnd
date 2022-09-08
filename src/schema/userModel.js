import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    cpf: { type: String, Unique: true },
    email: {type: String, Unique: true },
    name: {type: String, Required: true},
    surname: {type: String, Required: true},
    password: {type: String, Required: true},
    telephone: {type: String},
    endereco: {type: String, Required: true},
    matricula: {type: String},

})

const user = mongoose.model('users', userSchema )

export default user