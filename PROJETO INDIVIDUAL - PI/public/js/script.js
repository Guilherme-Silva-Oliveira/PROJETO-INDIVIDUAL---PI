let navBar = document.querySelector('#header');
document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  if (scrollTop > 0) {
    navBar.classList.add('rolar');
  } else {
    navBar.classList.remove('rolar');
  }
});

function mudarPerfil(){
  var personagemFavorito = document.getElementById('sel_personagem_favorito').value;

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

function entrar() {
  var emailVar = document.getElementById("ipt_email_usuario").value;
  var senhaVar = document.getElementById("ipt_senha_usuario").value;
  var videoLoad = document.getElementById("videoload");
  var respostaLogin = document.getElementById("responselogin");

  if (emailVar === "" || senhaVar === "") {
    respostaLogin.innerHTML = "Preencha todos os campos!";
    videoLoad.src = "";
    return;
  }

  videoLoad.src = `https://superstorefinder.net/support/wp-content/uploads/2018/01/grey_style.gif`;
  respostaLogin.innerHTML = "Verificando credenciais...";

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: emailVar,
      senha: senhaVar
    })
  }).then(resposta => {
    if (resposta.ok) {
      resposta.json().then(json => {
        sessionStorage.EMAIL_USUARIO = json.email;
        sessionStorage.NOME_USUARIO = json.nome;
        sessionStorage.ID_USUARIO = json.id;
        sessionStorage.RACA_USUARIO = json.raca;
        sessionStorage.PERSONAGEM_USUARIO = json.personagemFavorito;

        setTimeout(() => {
          respostaLogin.innerHTML = "Login Bem Sucedido";
        }, 1000);

        setTimeout(() => {
          window.location.href = "dashboard/dashboard.html";
        }, 2000);
      });
    } else {
      resposta.text().then(texto => {
        respostaLogin.innerHTML = "Email ou senha incorretos.";
        videoLoad.src = "";
        console.error(texto);
      });
    }
  }).catch(erro => {
    console.error("Erro na requisição:", erro);
    respostaLogin.innerHTML = "Erro de conexão com o servidor.";
    videoLoad.src = "";
  });
}

function cadastrar() {
  var nomeVar = document.getElementById("ipt_nome_usuario").value;
  var emailVar = document.getElementById("ipt_email_usuario").value;
  var senhaVar = document.getElementById("ipt_senha_usuario").value;
  var racaInput = document.querySelector('input[name="radio_raca"]:checked');
  var personagemFavoritoVar = document.getElementById("sel_personagem_favorito").value;

  if (!nomeVar || !emailVar || !senhaVar || !racaInput || personagemFavoritoVar === "nada") {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
    nomeServer: nomeVar,
    emailServer: emailVar,
    senhaServer: senhaVar,
    racaServer: racaInput.value,
    favoritoServer: personagemFavoritoVar
}),
  })
    .then(resposta => {
      if (resposta.ok) {
        alert("Cadastro realizado com sucesso! Redirecionando para o login...");
        setTimeout(() => {
          window.location.href = "login.html";
        }, 2000);
      } else {
        alert("Erro ao cadastrar. Verifique os dados e tente novamente.");
      }
    })
    .catch(erro => {
      console.error("Erro na requisição:", erro);
      alert("Erro de comunicação com o servidor.");
    });
}