// sessão
function validarSessao() {
    var nome = sessionStorage.NOME_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var favorito = sessionStorage.FAVORITO_USUARIO;
    var raca = sessionStorage.RACA_USUARIO;

    var b_nome = document.getElementById("response_nome");
    var b_email = document.getElementById("response_email");
    var b_favorito = document.getElementById("response_favorito");
    var b_raca = document.getElementById("response_raca");

    if (email != null && nome != null && favorito != null && raca != null) {
        b_nome.innerHTML = nome;
        b_email.innerHTML = email;
        b_favorito.innerHTML = favorito;
        b_raca.innerHTML = raca;

    } else {
        window.location = "../login.html";
    }

    if (favorito == 'kratos') {
        imageuser.src = `IMAGENS/kratos-user.webp`;
    } else if (favorito == 'freya') {
        imageuser.src = `IMAGENS/freya-user.avif`;
    } else if (favorito == 'atreus') {
        imageuser.src = `IMAGENS/atreus-user.jpg`
    } else if (favorito == 'tyr') {
        imageuser.src = `IMAGENS/tyr-user.jpg`;
    } else if (favorito == 'thor') {
        imageuser.src = `IMAGENS/thor-user.webp`;
    } else if (favorito == 'odin') {
        imageuser.src = `IMAGENS/odin-user.webp`;
    } else if (favorito == 'brok') {
        imageuser.src = `IMAGENS/brok-user.jpg`;
    } else if (favorito == 'sindri') {
        imageuser.src = `IMAGENS/sindri-user.jpg`;
    } else if (favorito == 'heimdall') {
        imageuser.src = `IMAGENS/heimdall-user.jpg`;
    } else if (favorito == 'fenrir') {
        imageuser.src = `IMAGENS/fenrir-user.gif`;
    } else if (favorito == 'angrboda') {
        imageuser.src = `IMAGENS/angrboda-user.jpg`;
    } else if (favorito == 'thurd') {
        imageuser.src = `IMAGENS/thurd-user.jpeg`;
    } else if (favorito == 'jormungand') {
        imageuser.src = `IMAGENS/jormungand-user.webp`;
    } else if (favorito == 'mimir') {
        imageuser.src = `IMAGENS/mimir-user.jpg`;
    } else if (favorito == 'nada') {
        imageuser.src = ``;
    }
}

