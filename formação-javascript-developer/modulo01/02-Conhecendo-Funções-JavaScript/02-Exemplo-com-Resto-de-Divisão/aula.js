const numeroPar = 10 % 2 === 0;

console.log(numeroPar);

/*
= atribuicao
== igualdade 0 e "0" true
=== igualdade 0 != "0" false

*/

if (numeroPar) {
  console.log("OK");
} else {
  console.log("NOOO");
}
const numero = 0;
const numeroDivPor5 = numero % 5 === 0;

if (numero === 0) {
  console.log("O numero é invalido");
} else if (numeroDivPor5) {
  console.log("Sim");
} else {
  console.log("Naão");
}
