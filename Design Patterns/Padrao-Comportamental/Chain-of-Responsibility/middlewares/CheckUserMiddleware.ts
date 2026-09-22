import DataBase from '../servers/DataBase';
import Middleware from './Middleware';

export default class CheckUserMiddleware extends Middleware {

  public check(email: string, password: string): boolean {

    if (email.indexOf('@') === -1) {    //se email não tem @
      console.log('E-mail inválido!');
      return false;
    }

    //se email e senha informados NÃO forem existentes no banco de dados
    if (
      !DataBase.filter(
        item => item.email === email && item.password === password
      ).length  //.length conta quantos resultados o filter encontrou (se for 0...)
    ) {
      console.log('E-mail e/ou Senha inválidos!');
      return false;
    }

    return this.checkNext(email, password); //vai pro próximo check
  }
}
