import mongoose from "mongoose";

const classSchema = new mongoose.Schema({

    name: {type: String, required: true},
    seats: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    registered: {type: String, required: true},
    subject: {type: String, required: true},
})


const classes = mongoose.model('classes', classSchema)

export default classes