let favoritos = [];
let racas = [];
function coletarFavorito() {
    //Coletando favoritos dos usuários
    fetch("http://localhost:3333/dados/coletarFavorito")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            favoritos = data;
            gerarGraficoPizza();
        })
        .catch(function (err) {
            console.log(err);
        })
}

function totalUsuarios() {
    var labelTotalDeUsuarios = document.getElementById('total-usuarios');
    //Coletando favoritos dos usuários
    fetch("http://localhost:3333/dados/totalUsuarios")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            
            labelTotalDeUsuarios.innerHTML = `${data.quantidade}`;
        })
        .catch(function (err) {
            console.log(err);
        })
}
function racaMaisEscolhida() {
    var labelRacaFavorita = document.getElementById('total-raca');
    //Coletando favoritos dos usuários
    fetch("http://localhost:3333/dados/racaMaisEscolhida")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            labelRacaFavorita.innerHTML = `${data.raca}`;
        })
        .catch(function (err) {
            console.log(err);
        })
}

function personagemMaisEscolhida() {
    var labelPersonagemFavorita = document.getElementById('total-personagem');
    //Coletando favoritos dos usuários
    fetch("http://localhost:3333/dados/personagemMaisEscolhida")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            labelPersonagemFavorita.innerHTML = `${data.favorito}`;
        })
        .catch(function (err) {
            console.log(err);
        })
}

function coletarRaca() {
    //Coletando favoritos dos usuários
    fetch("http://localhost:3333/dados/coletarRaca")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            racas = data;
            gerarGraficoRaca();
        })
        .catch(function (err) {
            console.log(err);
        })
}


function gerarGraficoPizza() {
    //For para fazer um contador de todos os favoritos
    let quantidades = [];
    let personagens = [];

    for (var i = 0; i < favoritos.length; i++) {
        var personagem = favoritos[i].favorito;
        var existe = personagens.indexOf(personagem);

        if (existe >= 0) {
            quantidades[existe]++;
        } else {
            personagens.push(personagem);
            quantidades.push(1);
        }
    }

    const cty = document.getElementById('grafico-pizza');
    new Chart(cty, {
        type: 'pie',
        data: {
            labels: personagens,
            datasets: [{
                data: quantidades,
                borderWidth: 1,
                backgroundColor: [
                    '#0057d9',
                    '#fea42e',
                    '#FF0000',
                    '#4CAF50',
                    '#9C27B0',
                    '#FF9800',
                    '#795548'
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

function gerarGraficoRaca() {
    //For para fazer um contador de todos os favoritos
    let quantidades = [];
    let escolhas = [];

    for (var i = 0; i < racas.length; i++) {
        var raca = racas[i].raca;
        var existe = escolhas.indexOf(raca);

        if (existe >= 0) {
            quantidades[existe]++;
        } else {
            escolhas.push(raca);
            quantidades.push(1);
        }
    }

    //Gráfico de Barras
    const ctx = document.getElementById('grafico-bar');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: escolhas,
            datasets: [{
                label: 'Raças Escolhidas Pelos Usuários',
                data: quantidades,
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

