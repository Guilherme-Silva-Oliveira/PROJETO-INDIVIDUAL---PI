function recomendados() {
    var labelRecomendacao = document.getElementById('total-recomendacoes');
    //Coletando favoritos dos usuários
    fetch("http://localhost:3333/dados/recomendados")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            labelRecomendacao.innerHTML = `${data.totalRecomendacao}%`;
        })
        .catch(function (err) {
            console.log(err);
        })
}

function reinos() {
    var labelReino = document.getElementById('total-reino');
    var retornoReino = '';
    //Coletando favoritos dos usuários
    fetch("http://localhost:3333/dados/reinos")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            if (data.resposta6 == 'alternativaA') {
                retornoReino = 'Svartalfheim';
            }else if (data.resposta6 == 'alternativaB'){
                retornoReino = 'Muspelheim';
            }else if (data.resposta6 == 'alternativaC'){
                retornoReino = 'Vanaheim';
            }else if (data.resposta6 == 'alternativaD'){
                retornoReino = 'Asgard';
            }

            labelReino.innerHTML = `${retornoReino}`;
        })
        .catch(function (err) {
            console.log(err);
        })
}

function estilos() {
    var labelEstilo = document.getElementById('total-estilo');
    var retornoEstilo = '';
    //Coletando favoritos dos usuários
    fetch("http://localhost:3333/dados/estilos")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            if (data.resposta3 == 'alternativaA') {
                retornoEstilo = 'Ação';
            }else if (data.resposta3 == 'alternativaB'){
                retornoEstilo = 'Aventura';
            }else if (data.resposta3 == 'alternativaC'){
                retornoEstilo = 'História e Narrativa';
            }else if (data.resposta3 == 'alternativaD'){
                retornoEstilo = 'Não Gosto de Jogar';
            }

            labelEstilo.innerHTML = `${retornoEstilo}`;
        })
        .catch(function (err) {
            console.log(err);
        })
}