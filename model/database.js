const mongoose = require("mongoose")

const connection = mongoose.connect('mongodb://127.0.0.1/crud').then(()=>{
    console.log("Conexão feita com sucesso")
}).catch(erro=>{
    console.log(`Erro ao se conectar: ${erro}`)
})

module.exports = connection

