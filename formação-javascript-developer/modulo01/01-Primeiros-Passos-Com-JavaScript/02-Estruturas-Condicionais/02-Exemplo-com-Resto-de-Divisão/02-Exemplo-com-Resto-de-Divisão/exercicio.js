/*
Preço do combustivel;
Preço do etanol;
Tipo de combustivel que está no carro;
Gasto medio de combustivel por KM;
Distancia em KM da viagem.
*/
var gasolina = 5.99;
var etanol = 4.75;
var distancia = 300;

var tipoCombustivel = gasolina;

if (tipoCombustivel === gasolina) {
  let gastoPorKM = 10;

  gasolinaValorGasto = (gasolina / gastoPorKM) * distancia;
  console.log(`O valor será de $${gasolinaValorGasto.toFixed(2)}`);
} else if (tipoCombustivel === etanol) {
  let gastoPorKM = 9;

  etanolValorMedio = (etanol / gastoPorKM) * distancia;
  console.log(`O valor será $${etanolValorMedio.toFixed(2)}`);
} else console.log("Valor Invalido");
