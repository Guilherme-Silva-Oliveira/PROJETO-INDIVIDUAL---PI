var express = require("express");
var router = express.Router();

var respostasController = require("../controllers/respostasController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/salvar", function (req, res) {
    respostasController.salvar(req, res);
})

module.exports = router;