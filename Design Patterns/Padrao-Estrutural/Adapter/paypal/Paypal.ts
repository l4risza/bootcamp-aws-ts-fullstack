import Token from "../Utils/Token";
import IPayPalPayment from "./IPayPalPayment";

export default class PayPal implements IPayPalPayment {
  private token!: Token;

  authToken(): Token {
    return new Token();
  }

  sendPayment(): void {
    this.token = this.authToken();  //token da instancia recebe o token de autenticação
    console.log("Enviando pagamento (via PayPal)...")
  }

  receivePayment(): void {
    console.log("Recebendo pagamento (via PayPal)...")
  }
}
