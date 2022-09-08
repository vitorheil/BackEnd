import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    
    name:{type: String, unique: true},
    action: {
        type:[
            {
                type: mongoose.Schema.Types.ObjectId, ref:'actions',
                required: true
            }
        ]
    }
})

   


const role = mongoose.model('role', roleSchema )

export default role