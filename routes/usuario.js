const express = require("express")
const router = express.Router()
const usuarioController = require("../controllers/usuarioController")

router.get("/",(req,res)=>{
    res.render("index",{erro:false})
})

router.get("/criar", (req,res)=>{
    res.render("novo")
})

router.post("/criar",usuarioController.novoUsuario)

module.exports = router
