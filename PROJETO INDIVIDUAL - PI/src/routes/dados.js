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

router.get("/recomendados", function (req, res) {
    dadosController.recomendados(req, res);
});

router.get("/reinos", function (req, res) {
    dadosController.reinos(req, res);
});

router.get("/estilos", function (req, res) {
    dadosController.estilos(req, res);
});

module.exports = router;