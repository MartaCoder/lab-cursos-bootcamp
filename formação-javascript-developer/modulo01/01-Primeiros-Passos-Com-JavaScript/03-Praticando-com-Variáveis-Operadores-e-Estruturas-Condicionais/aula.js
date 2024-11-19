/*
1) Faça um algoritmo que dade as 3 notas tiradas por um aluno em um semestre de
faculdade calcule e imprima a sua média e a sua classificaçã conforme a tabela 
abaixo.
 

media = (nota 1 + nota 2 + nota 3) / 3;

classificação:

-média menor que 5, reprovado
-média entre 5 e 7, recuperação
-média acima de 7, passou
*/

const nota1 = 5.0;
const nota2 = 10.0;
const nota3 = 10.0;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log("Reprovado");
} else if (media >= 5 && media < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}

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

const peso = 200.0;
const altura = 1.69;

const imc = peso / (altura * 2);

console.log(`Seu IMC é ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log("Abaixo do Peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso Normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do Peso");
} else if (imc >= 30 && imc < 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade Grave");
}
