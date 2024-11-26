/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1-100.
Faça um programa  que receba os 5 números sorteados para os alunos e mostre o 
maior número sorteado 

Dados de entrada:
5
50
10
98
23

Saída:
98

*/

const { gets, print } = require("./module");

const numerosSort = [];

for (let i = 0; i < 5; i++) {
  const numerosS = gets();

  numerosSort.push(numerosS);
}

let maiorValor = 0
for (let i = 0; i < numerosSort.length; i++) {
    const numerosS = numerosSort[i]
    if(numerosS > maiorValor){

        maiorValor = numerosS
    }
    
}
print(maiorValor)
