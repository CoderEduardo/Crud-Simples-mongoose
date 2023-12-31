const express = require("express")
const router = express.Router()
const usuarioController = require("../controllers/usuarioController")

router.get("/", usuarioController.mostrarUsuario)

router.get("/criar", (req,res)=>{
    res.render("novo")
})

router.post("/criar",usuarioController.novoUsuario)

router.delete("/",usuarioController.deletarUsuario)

router.get("/atualizar/:id",usuarioController.pagAtualizar)

router.put("/",usuarioController.atualizarUsuario)

module.exports = router
