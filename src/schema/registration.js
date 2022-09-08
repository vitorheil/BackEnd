import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({

    role: {type: String, required: true},
    classes: {type: String, required: true},
    finalNote: {type: String },
    frequency: {type: String }
  
})


const registration = mongoose.model('registration', registrationSchema)

export default registration