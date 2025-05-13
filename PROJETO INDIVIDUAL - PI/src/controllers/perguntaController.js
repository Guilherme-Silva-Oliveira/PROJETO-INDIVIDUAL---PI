var perguntaModel = require("../models/perguntaModel");

function listarPerguntas(req, res) {
    perguntaModel.listarPerguntas()
        .then(function (resultado) {
            res.status(200).json(resultado);
        }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
}
module.exports = {
    listarPerguntas
};