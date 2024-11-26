/*
1) Faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

    Exemplo:
        Entrada:
            5.5
        Saída:
            Recuperação

*/

const { gets, print } = require("./module");

const nota = gets();
if (nota < 5) {
  print("reprovado");
} else if (nota >= 5 && nota < 7) {
  print("Recuperação");
} else if (nota >= 7) {
  print("Aprovado");
}
