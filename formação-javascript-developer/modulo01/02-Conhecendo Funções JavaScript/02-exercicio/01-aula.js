function myName(nome) {
  console.log(`Meu nome é ${nome}`);
}

myName("Julio");

/******************************************************* */

function maiorIdade(idade) {
  if (idade < 18) {
    return "Menor de idade";
  } else {
    return "Maior de idade";
  }
}

function main() {
  const suaIdade = 13;
  const idade = maiorIdade(suaIdade);
  console.log(idade);
}
main();

/******************************************************** */

/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar
o cálculo adequado.

Código Condição de pagamento:
- À vista Debito, recebe 10% de desconto;
- À vista no Dinhero ou Pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 
*/

function pagamentoDesconto(valor, desc) {
  const debito = (desc / 100) * valor;
  return valor - debito;
}
function pagamentoDescontoAcima(valor, acrec) {
  const acima2x = (acrec / 100) * valor;
  return valor + acima2x;
}
const valor = 200.0;
/*
Pix e dinheiro = 15% desc;
Debito = 10% desc;
2x = preço normal;
Acima de 2x = juros 10%.
*/
const tipoPagamento = "acima2";

if (tipoPagamento === "pix" || tipoPagamento === "dinheiro") {
  console.log(pagamentoDesconto(valor, 15));
} else if (tipoPagamento === "Debito") {
  console.log(pagamentoDesconto(valor, 10));
} else if (tipoPagamento === "2x") {
  console.log(pagamentoDesconto(valor, 0));
} else if (tipoPagamento === "acima2x") {
  console.log(pagamentoDescontoAcima(valor, 10));
} else {
  console.log(
    "Opção Invalida escolha 'Pix e dinheiro = 15% desc. 'Debito = 10% desc.'  '2x = preço normal' 'Acima de 2x = juros 10%'."
  );
}
