const express = require("express")
const router = express.Router()
const usuarioController = require("../controllers/usuarioController")

router.get("/",(req,res)=>{
    res.send("Olá mundo")
})

router.get("/criar", (req,res)=>{
    res.render("novo")
})

module.exports = router
