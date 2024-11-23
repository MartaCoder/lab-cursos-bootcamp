const nome = "Julio Henrique";

for (let i = 0; i < nome.length; i++) {
  const letras = nome[i];
  console.log(letras);
}

const notas = [];

notas.push(10);
notas.push(10);
notas.push(10);

let nota = 0;

for (let i = 0; i < notas.length; i++) {
  const soma = notas[i];
  nota += soma;
}
const media = nota / notas.length;

console.log(media);



