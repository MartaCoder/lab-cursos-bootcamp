/*
1) Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivelpor Kilômetro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustivel nos dê o
valor gasto em reais para realizar este percurso.
*/

class Carro {
  marca; //atributo
  cor;
  gastoMedioKM;

  constructor(marca, cor, gastoMedioKM) {
    this.marca = marca; //o this é quando nos queremos nos referir um atributo
    this.cor = cor;
    this.gastoMedioKM = gastoMedioKM;
  }

  //metodo: ação dentro do objeto
  calcularGastoPercurso(distanciaKM, precoCobustivel) {
    return distanciaKM * this.gastoMedioKM * precoCobustivel;
  }
}

const uno = new Carro("Fiat", "Prata", 1 / 10); //Atribuição
console.log(uno.calcularGastoPercurso(70, 5.0).toFixed(2));

const palio = new Carro("Fiat", "preto", 1 / 12);
console.log(palio.calcularGastoPercurso(70, 5.0).toFixed(2));

/* 
2) crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso, e altura.
As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / (altura*altura));
Instancie uma pessoa chamada José que tenha 70kg e peso e 1.75 de altura e peça ao José para dizer 
o valor do seu IMC.
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome) {
    this.nome = nome;
  }

  imc(peso, altura) {
    return peso / (altura * altura);
  }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(`O IMC de ${jose.nome} ${jose.imc(70, 1.75).toFixed(2)}`);

const flavio = new Pessoa("Flavio", 60, 1.68);
console.log(`O IMC de ${flavio.nome} é ${flavio.imc(60, 1.68).toFixed(2)}`);

/*********************************************************************************************** */
class PessoaIMC {
  // Atributos da classe
  nome;
  peso;
  altura;

  // Construtor da classe
  constructor(nome, peso, altura) {
    // Inicializa os atributos do objeto
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  // Método para calcular o IMC
  imcPes() {
    // Fórmula para calcular o IMC
    return this.peso / Math.pow(this.altura, 2);
  }

  // Método para classificar a pessoa de acordo com o IMC
  classificarPessoa() {
    // Lógica para classificação
    if (this.imcPes() < 18.5) {
      return `Baixo Peso`;
    } else if (this.imcPes() >= 18.5 && this.imcPes() <= 24.9) {
      return `Peso Normal`;
    } else if (this.imcPes() >= 25 && this.imcPes() <= 29) {
      return `Sobrepeso`;
    } else {
      return `Obeso`;
    }
  }
}

const julio = new PessoaIMC("Julio", 200, 1.69);
console.log(
  `Seu IMC é ${julio
    .imcPes()
    .toFixed(2)}, e voce está com ${julio.classificarPessoa()}`
);
/*new PessoaIMC: Cria uma nova instância da classe PessoaIMC 
e atribui a um objeto chamado julio. Os valores entre parênteses 
são passados para o construtor. */
