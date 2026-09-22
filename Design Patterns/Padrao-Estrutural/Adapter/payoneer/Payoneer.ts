import Token from "../Utils/Token";
import IPayoneerPayment from "./IPayoneerPayment";

export default class Payoneer implements IPayoneerPayment{
  private token!: Token;

  authToken() {
    return new Token();
  }

  PayoneerPayment(){
    this.token = this.authToken();
    console.log("Enviando pagamento (via Payoneer)...")
  }

  PayoneerReceive(){
    console.log("Recebendo pagamento (via Payoneer)...")
  }
}
