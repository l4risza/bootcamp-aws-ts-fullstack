type TipoNome = { //com types posso criar tipos simples
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

/*type TipoNomeCompleto = {
  nomeCompleto: () => string;
};*/

export class Pessoa implements TipoNome, TipoSobrenome {  //Implements, não Extends - não tem herança
  //Implements pode implementar quantos tipos e interfaces quiser, Extends só pode herdar de uma classe
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Joao', 'Pessoa');
console.log(pessoa.nomeCompleto());
