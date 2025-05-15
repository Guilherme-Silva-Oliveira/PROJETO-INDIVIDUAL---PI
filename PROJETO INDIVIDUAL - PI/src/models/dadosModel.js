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
    SELECT raca FROM Usuarios;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  coletarFavorito,
  coletarRaca
};
