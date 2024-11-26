const array = [4, 2, 5];

let i = 0;

function gets() {
  const valor = array[i];
  i++;
  return valor;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print };
