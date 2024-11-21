/*
O IMC - Indice de Massa Corporal é um criério da Organização Mundial de Saúde para dar 
uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:

Imc = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a alturade um adulto mostre sua condição de acordo com
a tabela abaixo .

IMC em adultos condiçoes :
- Abaixo de 18.5 abaixo do peso; 
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 obeso;
- Acima de 40 obesidade grave
 */

function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do Peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso Normal";
  } else if (imc >= 25 && imc < 30) {
    return "Acima do Peso";
  } else if (imc >= 30 && imc < 40) {
    return "Obeso";
  } else {
    return "Obesidade Grave";
  }
}

(function () {
  const peso = 64.0;
  const altura = 1.69;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
})();
