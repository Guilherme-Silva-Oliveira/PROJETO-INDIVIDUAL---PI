//Indicadores KPI

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
            } else if (data.resposta6 == 'alternativaB') {
                retornoReino = 'Muspelheim';
            } else if (data.resposta6 == 'alternativaC') {
                retornoReino = 'Vanaheim';
            } else if (data.resposta6 == 'alternativaD') {
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
            } else if (data.resposta3 == 'alternativaB') {
                retornoEstilo = 'Aventura';
            } else if (data.resposta3 == 'alternativaC') {
                retornoEstilo = 'História e Narrativa';
            } else if (data.resposta3 == 'alternativaD') {
                retornoEstilo = 'Não Gosto de Jogar';
            }

            labelEstilo.innerHTML = `${retornoEstilo}`;
        })
        .catch(function (err) {
            console.log(err);
        })
}


//Gráficos
let respostasContatos = [];
function contatos() {
    //Coletando favoritos dos usuários
    fetch("http://localhost:3333/dados/contatos")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            respostasContatos = data;

            gerarGraficoContato();
        })
        .catch(function (err) {
            console.log(err);
        })
}
function gerarGraficoContato() {
    //For para fazer um contador de todos os favoritos
    let quantidades = {
        alternativaA: 0,
        alternativaB: 0,
        alternativaC: 0,
        alternativaD: 0,
    };

    //Essa variável será parte do método para personalizar a legenda das colunas
    let labelAlternativas = {
        alternativaA: 'Já Joguei',
        alternativaB: 'Apenas Assisti',
        alternativaC: 'Já Ouvi Falar',
        alternativaD: 'Nunca Ouvi Falar'
    }

    for (var i = 0; i < respostasContatos.length; i++) {
        var contato = respostasContatos[i].resposta1;
        quantidades[contato]++;
    }

    let escolhas = ['alternativaA', 'alternativaB', 'alternativaC', 'alternativaD'];
    let legenda = [];
    let informacoes = [];

    for (var i = 0; i < escolhas.length; i++) {
        let index = escolhas[i];
        legenda.push(labelAlternativas[index]);
        informacoes.push(quantidades[index]);
    }


    //Gráfico de Barras
    const ctx = document.getElementById('grafico-bar');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: legenda,
            datasets: [{
                label: 'Contato dos Usuários com o Jogo',
                data: informacoes,
                borderWidth: 1,
                backgroundColor: '#0057d9',
                borderRadius: 50
            }]
        },
        options: {
            indexAxis: 'x',
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    ticks: {
                        font: {
                            size: 20,
                            family: 'Poppins'
                        },
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 30,
                            family: 'Poppins'
                        },
                        color: 'white'
                    }
                }
            }
        }
    });
}

let opcaoCombate = [];
function combates() {
    //Coletando favoritos dos usuários
    fetch("http://localhost:3333/dados/combates")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            respostasContatos = data;

            gerarGraficoCombates();
        })
        .catch(function (err) {
            console.log(err);
        })
}
function gerarGraficoCombates() {
    //For para fazer um contador de todos os favoritos
    let quantidades = {
        alternativaA: 0,
        alternativaB: 0,
        alternativaC: 0,
        alternativaD: 0,
    };

    //Essa variável será parte do método para personalizar a legenda das colunas
    let labelAlternativas = {
        alternativaA: 'Força Bruta',
        alternativaB: 'Magias Vanir',
        alternativaC: 'Lâminas de Fogo',
        alternativaD: 'Machado de Gelo'
    }

    for (var i = 0; i < respostasContatos.length; i++) {
        var contato = respostasContatos[i].resposta4;
        quantidades[contato]++;
    }

    let escolhas = ['alternativaA', 'alternativaB', 'alternativaC', 'alternativaD'];
    let legenda = [];
    let informacoes = [];

    for (var i = 0; i < escolhas.length; i++) {
        let index = escolhas[i];
        legenda.push(labelAlternativas[index]);
        informacoes.push(quantidades[index]);
    }


    //Gráfico de Barras
    const ctx = document.getElementById('grafico-radar');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: legenda,
            datasets: [{
                label: 'Estilo de Combate dos Jogadores',
                data: informacoes,
                borderWidth: 1,
                backgroundColor: '#7B68EE',
                borderRadius: 50
            }]
        },
        options: {
            indexAxis: 'x',
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    ticks: {
                        font: {
                            size: 20,
                            family: 'Poppins'
                        },
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 30,
                            family: 'Poppins'
                        },
                        color: 'white'
                    }
                }
            }
        }
    });
}

let horasJogadas = [];
function horas() {
    fetch("http://localhost:3333/dados/horas")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            horasJogadas = data;
            gerarGraficoPizza();
        })
        .catch(function (err) {
            console.log(err);
        })
}

function gerarGraficoPizza() {
    let quantidades = {
        alternativaA: 0,
        alternativaB: 0,
        alternativaC: 0,
        alternativaD: 0,
    };

    let labelAlternativas = {
        alternativaA: 'Menos de 15 Horas',
        alternativaB: 'Entre 15 e 40 Horas',
        alternativaC: 'Mais de 40 Horas',
        alternativaD: 'Nunca Joguei'
    };

    // Use horasJogadas aqui, não respostasContatos
    for (var i = 0; i < horasJogadas.length; i++) {
        var contato = horasJogadas[i].resposta2;
        if (quantidades.hasOwnProperty(contato)) {
            quantidades[contato]++;
        }
    }

    let escolhas = ['alternativaA', 'alternativaB', 'alternativaC', 'alternativaD'];
    let legenda = [];
    let informacoes = [];

    for (var i = 0; i < escolhas.length; i++) {
        let index = escolhas[i];
        legenda.push(labelAlternativas[index]);
        informacoes.push(quantidades[index]);
    }

    const cty = document.getElementById('grafico-pizza-quiz');
    new Chart(cty, {
        type: 'doughnut',  // corrigido aqui
        data: {
            labels: legenda,  // corrigido aqui
            datasets: [{
                data: informacoes,  // corrigido aqui
                borderWidth: 1,
                backgroundColor: [
                    '#0057d9',
                    '#fea42e',
                    '#FF0000',
                    '#7B68EE'
                ],
                borderColor: 'white',
                hoverOffset: 10
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 20
                        },
                        color: 'white'
                    }
                }
            }
        }
    });
}
