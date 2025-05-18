var respostasModel = require("../models/respostasModel");

function salvar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
var respostas = req.body;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    respostasModel.salvar(
        respostas.resposta1,
        respostas.resposta2,
        respostas.resposta3,
        respostas.resposta4,
        respostas.resposta5,
        respostas.resposta6,
        respostas.resposta7
    )
      .then(
        function (resultado) {
            res.json(resultado);
      }
    ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao Registrar Respostas! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );
}

module.exports = {
  salvar
};