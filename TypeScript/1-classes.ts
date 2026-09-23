export class Empresa {
  public readonly nome: string;                         //poderia ser com ou sem public
  private readonly colaboradores: Colaborador[] = [];   //trata Colaborador como um tipo (contendo array)
  protected readonly cnpj: string;                      //readonly permite que o valor só seja inserido na primeira vez

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {     //passa pelos colaboradores da array
      console.log(colaborador);
    }
  }
}

export class Colaborador {                              //jeito mais rápido de criar classe já com construtor
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Empresa Incrível', '00.000.000/0000-00');

const colaborador1 = new Colaborador('Astolfo', 'Antonio');
const colaborador2 = new Colaborador('Bruna', 'Borges');
const colaborador3 = new Colaborador('Carla', 'Carvalho');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
empresa1.mostrarColaboradores();
