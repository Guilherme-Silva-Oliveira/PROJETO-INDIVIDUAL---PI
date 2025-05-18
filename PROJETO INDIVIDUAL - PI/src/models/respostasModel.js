var database = require("../database/config");

function salvar(resposta1,resposta2,resposta3,resposta4,resposta5,resposta6,resposta7) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function salvar(): ", resposta1,resposta2,resposta3,resposta4,resposta5,resposta6,resposta7)
  var instrucaoSql = `
    INSERT INTO RespostaUsuario (resposta1,resposta2,resposta3,resposta4,resposta5,resposta6,resposta7)
    VALUES ('${resposta1}','${resposta2}','${resposta3}','${resposta4}','${resposta5}','${resposta6}','${resposta7}')
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  salvar
};
