import  express  from "express";

import db from './config/dbconfig.js'
import routes from "./routes/index.js"
const app = express();


db.on("error", console.log.bind(console,'Error de Conexão'))
db.once("open",() =>{
   console.log('conexão bem sucedida')
})

app.use(express.json())

routes(app)

export default app