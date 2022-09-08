import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({

    name: {type: String},
    workLoad: {type: String},
    menu: {type: String},
    class: {type: String},
})


const subject = mongoose.model('subject', subjectSchema )

export default subject