const express = require("express")
const app = express()
const PORTA = 8080
const bodyParser = require("body-parser")
const ejs = require("ejs")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set("view engine",'ejs')
app.use(express.static('public'))
const connection = require("./model/database")
const Usuario = require("./model/Usuario")
const usuarioRouter = require("./routes/usuario")

app.use("/", usuarioRouter)

app.listen(PORTA,()=>{
    console.log("Servidor rodando")
})

