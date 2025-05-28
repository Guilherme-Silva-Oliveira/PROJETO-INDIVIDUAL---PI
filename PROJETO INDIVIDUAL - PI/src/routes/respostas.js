var express = require("express");
var router = express.Router();

var respostasController = require("../controllers/respostasController");

router.post("/salvar", function (req, res) {
    respostasController.salvar(req, res);
})

module.exports = router;