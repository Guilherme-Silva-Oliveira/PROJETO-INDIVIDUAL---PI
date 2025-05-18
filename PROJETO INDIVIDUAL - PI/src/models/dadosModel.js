var database = require("../database/config");

function coletarFavorito() {
  var instrucaoSql = `
    SELECT favorito FROM Usuarios;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function coletarRaca() {
  var instrucaoSql = `
    SELECT raca FROM Usuarios order by raca;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function totalUsuarios() {
  var instrucaoSql = `
    SELECT COUNT(nome) as quantidade FROM Usuarios;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function racaMaisEscolhida() {
  var instrucaoSql = `
    SELECT raca, COUNT(raca) FROM Usuarios GROUP BY raca ORDER BY COUNT(raca) DESC LIMIT 1;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function personagemMaisEscolhida() {
  var instrucaoSql = `
    SELECT favorito, COUNT(favorito) FROM Usuarios GROUP BY favorito ORDER BY COUNT(favorito) DESC LIMIT 1;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  coletarFavorito,
  coletarRaca,
  totalUsuarios,
  racaMaisEscolhida,
  personagemMaisEscolhida
};
