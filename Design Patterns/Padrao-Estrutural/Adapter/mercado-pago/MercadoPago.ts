import Token from "../Utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment{
  private token!: Token;  //! promete definir valor a variavel mais tarde

  autenticarToken(){
    return new Token();
  }

  enviarPagamento(): void {
    this.token = this.autenticarToken();
    console.log("Enviando pagamento (via Mercado Pago)...")
  }

  receberPagamento(): void {
    console.log("Recebendo pagamento (via Mercado Pago)...")
  }
}
