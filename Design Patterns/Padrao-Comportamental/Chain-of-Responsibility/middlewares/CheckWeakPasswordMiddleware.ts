import DataBase from '../servers/DataBase';
import Middleware from './Middleware';

export default class CheckWeakPasswordMiddleware extends Middleware {

  public check(email: string, password: string): boolean {

    if (password === '123456') {
      console.log('Atenção: Senha fraca!');
      return false;
    }

    return this.checkNext(email, password); //vai pro próximo check
  }
}
