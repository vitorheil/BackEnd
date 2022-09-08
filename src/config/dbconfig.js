import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vitor:123@cluster0.t6pqlm3.mongodb.net/?retryWrites=true&w=majority")


let db = mongoose.connection

export default db