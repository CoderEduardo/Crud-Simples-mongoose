const Usuario = require("../model/Usuario")

const novoUsuario = async (req,res)=>{
    let {nome,email} = req.body
    try{
        let usuario = new Usuario({nome,email})
        await usuario.save()
        res.redirect("/")
    }catch(erro){
        res.sendStatus(erro)
    }
}

module.exports = {novoUsuario}