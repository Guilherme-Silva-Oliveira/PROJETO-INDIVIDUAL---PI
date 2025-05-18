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

function recomendados() {
  var instrucaoSql = `
    SELECT truncate((select COUNT(resposta7)*100 from RespostaUsuario where resposta7 = "alternativaA") 
/ COUNT(idRespostaUsuario),0) as totalRecomendacao FROM RespostaUsuario;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function reinos() {
  var instrucaoSql = `
SELECT resposta6, COUNT(*) AS escolhas from RespostaUsuario
group by resposta6 order by resposta6 desc limit 1;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function estilos() {
  var instrucaoSql = `
SELECT resposta3, COUNT(*) AS favestilos from RespostaUsuario
group by resposta3 order by resposta3 desc limit 1;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function contatos() {
  var instrucaoSql = `
SELECT resposta1 FROM RespostaUsuario;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function combates() {
  var instrucaoSql = `
SELECT resposta4 FROM RespostaUsuario;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function horas() {
  var instrucaoSql = `
SELECT resposta2 FROM RespostaUsuario;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  coletarFavorito,
  coletarRaca,
  totalUsuarios,
  racaMaisEscolhida,
  personagemMaisEscolhida,
  recomendados,
  reinos,
  estilos,
  contatos,
  combates,
  horas
};
