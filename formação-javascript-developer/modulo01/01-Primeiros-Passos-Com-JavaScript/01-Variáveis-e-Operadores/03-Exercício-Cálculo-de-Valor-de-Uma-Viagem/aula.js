//Preço combustivel;
//Gasto de combustivel por KM
//Distancia em KM

//Imprima no console o valor que será gasto de
//combistivel para realizar esta viagem.

//picos ate teresina sao 300km

let precoLitro = 5.99;
let litroKM = 10;
let distancia = 300;

let gasto = (precoLitro / litroKM) * distancia;

console.log(`O gasto de combustivel será $ ${gasto}`);
