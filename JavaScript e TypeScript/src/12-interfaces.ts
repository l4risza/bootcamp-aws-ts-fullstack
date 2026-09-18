interface TipoNome {  //Interface define a estrutura de um objeto, e não usa '='
    nome: string;
}

interface TipoSobrenome {
    sobrenome: string;
}

interface TipoNomeCompleto {
    nomeCompleto(): string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;  //junta os tipos

interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}  //Extends permite uma interface herdar outras interfaces

export class Pessoa implements TipoPessoa2 {  //Implements faz a classe seguir o contrato da interface
    constructor(
        public nome: string,
        public sobrenome: string
    ) {}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoaObj: TipoPessoa2 = {  //um objeto também pode receber uma interface como tipo
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    },

    nome: 'Marina',
    sobrenome: 'Marques',
};

const pessoa = new Pessoa('Nicole', 'Nogueira');

console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());


//Declaration merging: interfaces com o mesmo nome são unidas
interface Pessoa1 {
    nome: string;
}

interface Pessoa1 {
    readonly sobrenome: string;
    readonly enderecos: readonly string[];
    idade?: number;  //? significa opcional (number ou undefined)
}


//agora Pessoa possui nome + sobrenome + enderecos + idade
const pessoa2: Pessoa1 = {
    nome: 'Olivia',
    sobrenome: 'Osvalda',
    enderecos: ['Av. Brasil'],
    idade: 30,
};

pessoa2.idade = 31;  //pode alterar pq idade não é readonly
console.log(pessoa2);



