function mudarPerfil(){
    var personagemFavorito = sel_personagem_favorito.value;

    if(personagemFavorito == 'kratos'){
        imageuser.src = `IMAGENS/kratos-user.webp`;
    }else if(personagemFavorito == 'freya'){
        imageuser.src = `IMAGENS/freya-user.avif`;
    }else if(personagemFavorito == 'atreus'){
        imageuser.src = `IMAGENS/atreus-user.jpg`
    }else if(personagemFavorito == 'tyr'){
        imageuser.src = `IMAGENS/tyr-user.jpg`;
    }else if(personagemFavorito == 'thor'){
        imageuser.src = `IMAGENS/thor-user.webp`;
    }else if(personagemFavorito == 'odin'){
        imageuser.src = `IMAGENS/odin-user.webp`;
    }else if (personagemFavorito == 'brok'){
        imageuser.src = `IMAGENS/brok-user.jpg`;
    }else if(personagemFavorito == 'sindri'){
        imageuser.src = `IMAGENS/sindri-user.jpg`;
    }else if(personagemFavorito == 'heimdall'){
        imageuser.src = `IMAGENS/heimdall-user.jpg`;
    }else if(personagemFavorito == 'fenrir'){
        imageuser.src = `IMAGENS/fenrir-user.gif`;
    }else if(personagemFavorito == 'angrboda'){
        imageuser.src = `IMAGENS/angrboda-user.jpg`;
    }else if(personagemFavorito == 'thurd'){
        imageuser.src = `IMAGENS/thurd-user.jpeg`;
    }else if(personagemFavorito == 'jormungand'){
        imageuser.src = `IMAGENS/jormungand-user.webp`;
    }else if(personagemFavorito == 'mimir'){
        imageuser.src = `IMAGENS/mimir-user.jpg`;
    }else if(personagemFavorito == 'nada'){
        imageuser.src = ``;
    }
}
function entrar(){
    videoload.src = `https://superstorefinder.net/support/wp-content/uploads/2018/01/grey_style.gif`;

    setTimeout(escrever,tempo);
    setTimeout(encaminhar,tempo2);
}

var tempo = 1000;
function escrever(){
    responselogin.innerHTML = `Login Bem Sucedido`;
}

var tempo2 = 2000;
function encaminhar(){
    window.location.href = 'dashboard.html';
}

function cadastrar(){
    window.location.href = 'login.html'
}