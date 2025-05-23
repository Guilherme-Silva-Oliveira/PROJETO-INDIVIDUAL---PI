create database ProjetoIndividual;
use ProjetoIndividual;

create table Usuarios (
idUser int primary key auto_increment,
nome varchar(50),
email varchar(50) unique,
senha varchar(20),
raca varchar(15),
favorito varchar(20)
);

create table PerguntaQuiz (
idPergunta int primary key auto_increment,
enunciado varchar(50),
alt_A varchar(40),
alt_B varchar(40),
alt_C varchar(40),
alt_D varchar(40)
);

create table RespostaUsuario (
idRespostaUsuario int primary key auto_increment,
resposta1 varchar(40),
resposta2 varchar(40),
resposta3 varchar(40),
resposta4 varchar(40),
resposta5 varchar(40),
resposta6 varchar(40),
resposta7 varchar(40)
);