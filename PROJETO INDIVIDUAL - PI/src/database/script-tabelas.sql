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

INSERT INTO Perguntaquiz (idPergunta, enunciado, alt_A, alt_B, alt_C, alt_D) VALUES
(1, 'Qual o seu Contato com o Jogo?', 'Já Joguei', 'Apenas Assisti', 'Já Ouvi Falar', 'Nunca Joguei'),
(2, 'Se Já Jogou, Por Quantas Horas?', 'Menos de 15 Horas', 'Entre 15 e 40 Horas', 'Mais de 40 Horas', 'Nunca Joguei'),
(3, 'Qual seu Estilo de Jogo Favorito?', 'Ação', 'História e Narrativa', NULL, 'Não Gosto de Jogar'),
(4, 'Diga qual a Opção mais lhe Descreve', 'Força Bruta', 'Magias Várias', 'Lâminas de Fogo', 'Machado de Gelo'),
(5, 'Qual seu Lema?', 'Guerra é a Primeira Opção', 'Manter a Paz a Todo Custo', 'Confiança é uma Conquista', 'Salvar vidas em Primeiro Lugar'),
(6, 'Qual Reino Gostaria de Visitar?', 'Svartalfheim Reino dos Anões', 'Muspelheim Reino do Fogo', 'Vanaheim Reino dos Deuses Vanir', 'Asgard Reino dos Deuses Vanir'),
(7, 'Recomendaria este Jogo para Alguém?', 'Sim', 'Não', NULL, NULL);
