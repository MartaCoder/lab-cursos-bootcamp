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
