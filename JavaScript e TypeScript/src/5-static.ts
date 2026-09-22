export class Pessoa {
  static idadePadrao = 0;                 //atributos estáticos
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);            //os atrib estáticos não são acessados com this.
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {    //cria instância da própria classe sem passar todos atributos
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Joana', 'Pessoa', 25, '123.456.789-00');
const pessoa2 = Pessoa.criaPessoa('Tito', 'Silva'); //não tem acesso à métodos estáticos pela instância, mas pela classe

console.log(pessoa1);
console.log(pessoa2); //possui idade e cpf 0 por padrão, pois não inseriu ao criar

pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
