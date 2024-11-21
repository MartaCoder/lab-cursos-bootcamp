function test() {
  console.log("teste");
}

test();
test();

function myName(name) {
  console.log(`Seu nome é ${name}`);
}

myName("Julio");

console.log("************************************************");
/* //////////////////////////////////////////////////////////////////// */
function quadrado(valor) {
  return valor * valor;
}
const quadradoDeDez = quadrado(10);

console.log(quadradoDeDez);

console.log(quadrado(10) + quadrado(10));

console.log("***********************************************");
/*//////////////////////////////////////////////////////////////////////// */
function incrementarJuros(valor, percentualJuros) {
  const valoDeAcrecimo = (percentualJuros / 100) * valor;
  return valor + valoDeAcrecimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 20));
console.log(incrementarJuros(100, 30));

console.log("***********************************************");
/*//////////////////////////////////////////////////////////////////////// */

/*Organização */

/*cod. principal*/

function calcularJuros() {}

function main() {
  calcularJuros();
  console.log("Programa Principal");
}
main();
