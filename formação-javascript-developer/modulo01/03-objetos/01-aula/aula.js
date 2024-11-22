/*Dinamico*/

const pessoa = {
  nome: "Julio",
  idade: "24",
};

pessoa.altura = 1.69;

console.log(pessoa);

delete pessoa.altura;

console.log(pessoa);

/**************************************************************** */

const gato = {
  nome: "Flok",
  idade: "1",

  descrever: function () {
    this;
    console.log(`Nome do gato ${this.nome} e a idade ${this.idade}`);
  },
};
/*
Tem como atribuir 
gato.descrever = function () {
  console.log(`Meu nome é ${this.nome}`);
};
*/
gato.nome = "bola";
gato.idade = 2;

gato.descrever();

/*****************************/

const atributo = "idade";
console.log(pessoa[atributo]);

pessoa['nome'] = 'julio' //Dinamico
pessoa.nome = 'julio' //acesso direto

/*********************************************** */

