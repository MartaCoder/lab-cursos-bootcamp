/*Definir como são pessoas para serem instanciadas */
class Pessoa {
  nome;
  idade;

  descrever() {
    console.log(`Meu nome é ${this.nome} e idade ${this.idade}`);
  }
}

/*Ocorrencia daquele objeto */
const julio = new Pessoa();
julio.nome = "Julio Lima";
julio.idade = 24;

const flavio = new Pessoa();
flavio.nome = "Flavio Marta";
flavio.idade = 21;

julio.descrever();
flavio.descrever();

/******************************************************************************** */
//usando contructor()

class PessoaA {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.dataNascimento = 2024 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e idade ${this.idade}`);
  }
}

const lucas = new PessoaA("Lucas", 21);

lucas.descrever();
console.log(lucas);

/******************************************************************************* */



function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`É mais velho(a) ${p1.nome} que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`É mais velho(a) ${p2.nome} que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}

const vitor = new PessoaA("vitor", 30);
const lele = new PessoaA("lele", 15);

compararPessoas(vitor, lele);
