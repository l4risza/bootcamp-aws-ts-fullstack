//ASSOCIAÇÃO - As classes Escritor e Ferramentas não dependem uma da outra, Escritor usa Ferramenta abstrata (qualquer uma)
//Inversão de dependência - Escritor está ligado a algo concreto (Ferramenta) que aponta para algo que pode mudar (Caneta ou Máquina)
export class Escritor {
  private _ferramenta: Ferramenta | null = null;  //ferramenta pode ser do tipo Ferramentar ou nulo

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {  //classe abstrata para servir de molde
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Tolkien');
const caneta = new Caneta('Bic de gel');
const maquinaEscrever = new MaquinaEscrever('Máquina Poderosa 3.000');

console.log("Escritor: " + escritor.nome);
console.log("Ferramentas:")
console.log(caneta.nome);
console.log(maquinaEscrever.nome);

escritor.ferramenta = null;
escritor.escrever();

escritor.ferramenta = caneta;
escritor.escrever();

escritor.ferramenta = maquinaEscrever;
escritor.escrever();
