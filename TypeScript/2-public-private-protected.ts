export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];   //protected = pode ser acessado na classe em que foi criado e nas subclasses
  private readonly cnpj: string;                          //private = só pode ser acessado na classe em que foi criado, não subclasses

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/1111-11');   //super chama construtor da classe pai (Empresa) e passa os valores necessários para
                                            //inicializar a parte herdada da classe. (nesse caso vai ser sempre esse nome e esse cnpj)
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) { }
}

const empresa1 = new Udemy();

const colaborador1 = new Colaborador('Daniel', 'Dantas');
const colaborador2 = new Colaborador('Elena', 'Espaghetti');
const colaborador3 = new Colaborador('Fernanda', 'Farias');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);

const colaboradorRemovido = empresa1.popColaborador();

console.log(colaboradorRemovido + " saiu");
console.log(empresa1);
