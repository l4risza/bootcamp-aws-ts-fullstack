export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {    //get para pegar valores de atributos privados ou protegidos
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,  //aluno tem sala
  ) {
    super(nome, sobrenome, idade, cpf); //fornece dados para a classe pai (Pessoa) inicializar
  }

  getNomeCompleto(): string {
    console.log('Criando ficha de aluno...');
    const result = super.getNomeCompleto();
    return result + ' é um aluno';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Gabriela', 'Goncalves', 30, '000.000.000-00');
const aluno = new Aluno('Heitor', 'Hebert', 30, '000.000.000-00', '05');
const cliente = new Cliente('Iago', 'Inacio', 30, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
