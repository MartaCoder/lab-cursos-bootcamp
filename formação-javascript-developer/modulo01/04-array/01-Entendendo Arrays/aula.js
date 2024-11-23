const aluno = ["joao", "vitor", "marina"]; /*[]-lista, {}-objeto literal */

//adicionar itens a lista
aluno.push("Julio");

aluno[4] = "vinicius";

console.log(aluno); //armazena uma coleção de dados

console.log("****************************************************************");

const alunos = [];

alunos.push("teste");
alunos.push(10);
console.log(alunos);

console.log("****************************************************************");

const alunoo = ["1", "2", "3"];

console.log(alunoo);

console.log(alunoo.pop());
console.log(alunoo);

console.log("****************************************************************");

const alunooo = ["1", "2", "3"];

console.log(alunooo);

console.log(alunooo.shift());
console.log(alunooo);

console.log("****************************************************************");
const notas = [];

notas.push(5);
notas.push(9);
notas.push(8);

const soma = notas[0] + notas[1] + notas[2];

console.log((soma / notas.length).toFixed(2));
