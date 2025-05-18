var dadosModel = require("../models/dadosModel");

function coletarFavorito(req, res) {
    dadosModel.coletarFavorito()
        .then(function (dados) {
            if (dados.length > 0) {
                res.status(200).json(dados);
            } else {
                res.status(204).send('Informações Não Encontradas!!')
            }
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao Coletar Informações! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function coletarRaca(req, res) {
    dadosModel.coletarRaca()
        .then(function (dados) {
            if (dados.length > 0) {
                res.status(200).json(dados);
            } else {
                res.status(204).send('Informações Não Encontradas!!')
            }
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao Coletar Informações! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function totalUsuarios(req, res) {
    dadosModel.totalUsuarios()
        .then(function (dados) {
            var quantidade = dados[0];
            if (dados.length > 0) {
                res.status(200).json(quantidade);
            } else {
                res.status(204).send('Informações Não Encontradas!!')
            }
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao Coletar Informações! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function racaMaisEscolhida(req, res) {
    dadosModel.racaMaisEscolhida()
        .then(function (dados) {
            var quantidade = dados[0];
            if (dados.length > 0) {
                res.status(200).json(quantidade);
            } else {
                res.status(204).send('Informações Não Encontradas!!')
            }
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao Coletar Informações! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function personagemMaisEscolhida(req, res) {
    dadosModel.personagemMaisEscolhida()
        .then(function (dados) {
            var quantidade = dados[0];
            if (dados.length > 0) {
                res.status(200).json(quantidade);
            } else {
                res.status(204).send('Informações Não Encontradas!!')
            }
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao Coletar Informações! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    coletarFavorito,
    coletarRaca,
    totalUsuarios,
    racaMaisEscolhida,
    personagemMaisEscolhida
};