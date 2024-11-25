// Declaração das variáveis
let numero = 10; // Número máximo a ser multiplicado
let numMulti = 5; // Multiplicador

// Loop que irá se repetir 11 vezes (de 0 a 10)
for (let i = 0; i <= numero; i++) {
  // Calcula a multiplicação entre i e numMulti
  const mult = i * numMulti;

  // Imprime o resultado da multiplicação no console
  console.log(`${i} * ${numMulti} = ${mult}`);
}

/***************************************************************************** */

console.log("");
console.log("");
console.log("");

/***************************************************************************** */



const array = [1, 6, 8, 14, 15, 20, 30, 45,]

array.push(10)
array.push(5)
array.push(4)
array.push(7)
array.push(3)
array.push(2)

console.log(array)

for (let i = 0; i < array.length; i++) {
  const numeroPar = array[i]

  if(numeroPar % 2 === 0){
    console.log(numeroPar);
    
  }
}


