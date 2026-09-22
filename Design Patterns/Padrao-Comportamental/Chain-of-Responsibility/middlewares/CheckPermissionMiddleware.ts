import DataBase from "../servers/DataBase";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware {

  public check(email: string, password: string): boolean {

    //verifica se cada item email do banco de dados é igual o email digitado
    const users = DataBase.filter(item => item.email === email);

    if (!users.length) {  //se 0 emails foram encontrados
      console.log("E-mail não cadastrado.");
      return false;
    }

    if (users[0].permission === PermissionType.ADMIN) {//se primeiro email encontrado for admin
      console.log("Seja bem-vindo, Administrador!");
      return true;
    }

    console.log("Seja bem-vindo, Usuário!"); //caso nem um nem outro, usuário comum

    return this.checkNext(email, password); //checar se tem proximo elo
  }
}
