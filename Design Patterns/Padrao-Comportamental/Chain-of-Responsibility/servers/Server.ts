import Middleware from "../middlewares/Middleware";

export default class Server {

  //pode ser ambos checkUser e checkPermission, já que ambos implementam Middleware
  private middleware!: Middleware;

  public setMiddleware(middleware: Middleware): void {  //setter
    this.middleware = middleware;
  } //define que middleware será a variável que passamos como parâmetro

  logIn(email: string, password: string): boolean {

    if (this.middleware.check(email, password)) { //se middleware (qualquer um) existente

      console.log("Usuário autorizado com sucesso!");
      return true;
    }

    return false;
  }
}
