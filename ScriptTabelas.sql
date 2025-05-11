create database ProjetoIndividual;
use ProjetoIndividual;

create table Usuarios (
idUser int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(20),
raca varchar(15),
favorito varchar(20)
);

create table ResultadoQuiz (
idResposta int primary key auto_increment,
pergunta1 varchar(20),
pergunta2 varchar(20),
pergunta3 varchar(20),
pergunta4 varchar(20),
pergunta5 varchar(20),
pergunta6 varchar(20),
pergunta7 varchar(20),
pergunta8 varchar(20)
);

select * from Usuarios;
select * from Respostas;