import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../Utils/Token";

//adapta os métodos do payoneer para o modelo do paypal
export default class PayoneerAdapter implements IPayPalPayment{
  private token!: Token;

  constructor(private payoneer: Payoneer){
    console.log("Adaptando o Payoneer utilizando os métodos padrões do PayPal...");
  }

  authToken(): Token {
    return new Token();
  }

  //feito pelo payoneer, porém transforma o método padrao payoneer para o padrão paypal
  sendPayment(): void { //tem o mesmo nome do método do paypal
    return this.payoneer.PayoneerPayment();   //porém é o método do payoneer
  }

  receivePayment(): void {
    return this.payoneer.PayoneerReceive();
  }

}
