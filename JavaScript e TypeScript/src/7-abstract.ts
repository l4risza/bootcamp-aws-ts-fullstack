export abstract class Personagem {  //ABSTRACT - Classe de modelo base que não pode ser instanciada diretamente
  protected abstract emoji: string; //toda classe que herdar da classe principal precisará ter um emoji

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {  //passa parâmetro personagem do tipo Personagem (classe)
    this.bordao();
    personagem.perderVida(this.ataque);   //personagem atacado perde vida (valor da força do ataque)
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;             //this. refere-se ao personagem atacado (método atacar(personagem))
    console.log(
      `${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`,
    );
  }

  abstract bordao(): void;    //toda classe que eu criar precisará ter um bordão que eu vou criar nas classes filhas
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + ': Fogo!!');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + ': Roooaaaarrrrr');
  }
}

const guerreira = new Guerreira('Guerreira do Fogo', 90, 1000); //instancia com new Guerreira, não new Personagem pois Personagem é um molde
const monstro = new Monstro('Monstro da Caverna', 67, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
