import mongoose from "mongoose";

const acaoSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    methods: [
        
        {type: String , required: true}
    ]
})


const action = mongoose.model('actions', acaoSchema)

export default action