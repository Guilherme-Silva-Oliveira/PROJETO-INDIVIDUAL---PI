var express = require("express");
var router = express.Router();

var perguntaController = require("../controllers/perguntaController");

router.get("/perguntas", function (req, res) {
    perguntaController.listarPerguntas(req, res);
});

module.exports = router;