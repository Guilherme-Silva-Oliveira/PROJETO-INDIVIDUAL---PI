var express = require("express");
var router = express.Router();
var dadosController = require("../controllers/dadosController");

router.get("/coletarFavorito", function (req, res) {
    dadosController.coletarFavorito(req, res);
});

router.get("/coletarRaca", function (req, res) {
    dadosController.coletarRaca(req, res);
});

router.get("/totalUsuarios", function (req, res) {
    dadosController.totalUsuarios(req, res);
});

router.get("/racaMaisEscolhida", function (req, res) {
    dadosController.racaMaisEscolhida(req, res);
});

router.get("/personagemMaisEscolhida", function (req, res) {
    dadosController.personagemMaisEscolhida(req, res);
});

module.exports = router;