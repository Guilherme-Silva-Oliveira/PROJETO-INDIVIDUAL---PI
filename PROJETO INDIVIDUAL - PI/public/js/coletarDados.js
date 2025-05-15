let favoritos = [];
function coletarFavorito() {
    //Coletando favoritos dos usuários
    fetch("http://localhost:3333/dados/coletarFavorito", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO buscar()!");

            if (resposta.ok) {
                //Confirma o recebimento dos dados no resposta
                resposta.json().then(data => {
                    console.log(data);
                    console.log(JSON.stringify(data));

                    //Adiciona ao vetor de questões o valor recebido em data
                    favoritos = data;
                    console.log(favoritos);
                    gerarGraficoPizza();
                });
            } else {
                console.log("Houve um erro ao tentar buscar as perguntas!");
                resposta.text().then(texto => {
                    console.error(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });

    return false;
}

function gerarGraficoPizza(){
//For para fazer um contador de todos os favoritos
let quantidades = [];
let personagens = [];

for(var i = 0; i < favoritos.length; i++){
    var personagem = favoritos[i].favorito;
    var existe = personagens.indexOf(personagem);

    if(existe >= 0){
        quantidades[existe]++;
    }else{
        personagens.push(personagem);
        quantidades.push(1);
    }
}

const cty = document.getElementById('grafico-pizza');
new Chart(cty, {
    type: 'pie',
    data: {
        labels:personagens,
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