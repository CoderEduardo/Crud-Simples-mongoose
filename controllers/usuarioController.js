const Usuario = require("../model/Usuario")

const mostrarUsuario = async (req,res)=>{
    try{
        let usuarios = await Usuario.find({})
        res.render("index",{usuarios})
    }catch(erro){
        res.sendStatus(404)
    }
} 



const novoUsuario = async (req, res) => {
    let { nome, email } = req.body
    try {
        let usuario = new Usuario({ nome, email })
        await usuario.save()
        res.redirect("/")
    } catch (erro) {
        res.sendStatus(erro)
    }
}

module.exports = { novoUsuario, mostrarUsuario }