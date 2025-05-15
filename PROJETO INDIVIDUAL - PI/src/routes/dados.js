var express = require("express");
var router = express.Router();
var dadosController = require("../controllers/dadosController");

router.get("/coletarFavorito", function (req, res) {
    dadosController.coletarFavorito(req, res);
});

router.get("/coletarRaca", function (req, res) {
    dadosController.coletarRaca(req, res);
});

module.exports = router;