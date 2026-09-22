export default abstract class Middleware {    //abstrata, molde

  public next: Middleware | null = null;  //próximo middleware da corrente

  public linkWith(next: Middleware): Middleware {   //cria/continua corrente

    this.next = next; //define próximo middleware
    return next;  //retorna próximo middleware
  }

  //define método que cada middleware deve implementar, retorna true ou false
  public abstract check(email: string, password: string): boolean;

  protected checkNext(email: string, password: string): boolean {  //vê se existe próximo

    if (this.next === null) { //se middleware for o último da corrente
      return true;          //retorna true, permitindo continuar
    }                       //ou seja, chama próximo até o fim

    return this.next.check(email, password);  //executa check do próximo middleware
  }
}
