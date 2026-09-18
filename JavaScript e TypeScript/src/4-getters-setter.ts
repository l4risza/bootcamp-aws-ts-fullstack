export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,             //usa _cpf quando for implementar getters e setters
  ) {
    this.cpf = _cpf;                  //também é um tipo de setter (por isso setter vai imprimir duas vezes no console)
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Joao', 'Pessoa', 99, '111.222.333-44');
pessoa.cpf = '111.222.333-44';  //Setter
console.log(pessoa.cpf);        //Getter
