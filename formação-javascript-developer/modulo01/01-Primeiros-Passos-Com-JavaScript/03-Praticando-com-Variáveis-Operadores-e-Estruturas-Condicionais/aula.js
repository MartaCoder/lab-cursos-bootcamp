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

console.log(
  "***********************************************************************"
);
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

console.log(
  "***********************************************************************"
);

/*
 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
 normal de etiqueta e a escolha da condição de pagamento.
 Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar
 o cálculo adequado.
 
 Código Condição de pagamento:
 - À vista Debito, recebe 10% de desconto;
 - À vista no Dinhero ou Pix, recebe 15% de desconto;
 - Em duas vezes, preço normal de etiqueta sem juros;
 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 
 */

const preco = 200.0;
/*
Pix e dinheiro = 15% desc;
Debito = 10%;
2x = preço normal;
Acima de 2x = juros 10%.
*/
const tipoPagamento = "acima2x";

if (tipoPagamento === "pix" || tipoPagamento === "dinheiro") {
  const valorAhVista = preco - (preco * 15) / 100; //Juros Simples (15 / 100) = 0.15 * preco = 30.00
  console.log(
    `Valor original: $${preco.toFixed(
      2
    )} Valor após desconto de 15%: $${valorAhVista.toFixed(2)}`
  );
} else if (tipoPagamento === "Debito") {
  const valorDebito = preco - (preco * 10) / 100; //Juros Simples (10 / 100) = 0.1 * preco = 20.00
  console.log(
    `O valor original: $${preco.toFixed(
      2
    )} o Valor após desconto de 10%: $${valorDebito.toFixed(2)}`
  );
} else if (tipoPagamento === "2x") {
  const valor2x = preco / 2;
  console.log(
    `O valor original: $${preco.toFixed(2)} em 2x
  Primeira Parcela: $${valor2x.toFixed(2)} Segunda Parcela: $${valor2x.toFixed(
      2
    )} `
  );
} else if (tipoPagamento === "acima2x") {
  const valorAhAcima2x = preco + (preco * 10) / 100; //Juros Simples (10 / 100) = 0.1 * preco = 20.00
  console.log(
    `O valor original: $${preco.toFixed(
      2
    )} Acima de 2x juros de 10%: $${valorAhAcima2x.toFixed(2)}`
  );
} else {
  console.log(
    "Opção Invalida escolha 'Pix e dinheiro = 15% desc. 'Debito = 10% desc.'  '2x = preço normal' 'Acima de 2x = juros 10%'."
  );
}
