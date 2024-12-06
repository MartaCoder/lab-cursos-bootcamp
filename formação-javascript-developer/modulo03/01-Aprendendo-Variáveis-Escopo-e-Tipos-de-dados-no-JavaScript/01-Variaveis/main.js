//variaveis
var var1 = 10;
var var2 = "20";

console.log(var1 + var2);

//hoisting

teste();

function teste() {
  console.log("Funcionado");
}

console.log(variavel1);

var variavel1 = 100;

var teste1 = function () {
  console.log("teste1");
};
function teste2() {
  console.log("teste2");
}

teste1();
teste2();

//var,let,const

if (true) {
  var vari1 = 10; //<- sofre o hoisting
}

console.log(vari1);
//////////////////////////
function test() {
  var varia = 10; //se mantem restrito com função
}
test();

console.log(varia);
/////////////////////////////

if (true){
    let n1 = 10
}
console.log(n1);

//////////////////////

const x = 10
x = 11

console.log(x);
//////////////////////

//nomenclaturas

var teste = 10
var $teste = 10
var _teste = 10 //"_" não devera ser alterada dentro de um determinado escopo

//Class ou função construtora
var Class = 10

//const letra maiuscula

const TESTE = 10

// CamelCase
const testeVariavel = 10