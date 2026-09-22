import MercadoPago from "../mercado-pago/MercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../Utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment{

  constructor(private mercadopago: MercadoPago){
    console.log("Adaptando o Mercado Pago utilizando os métodos padrões do PayPal...");
  }

  authToken(){
    return new Token;
  }

  sendPayment(): void {
    return this.mercadopago.enviarPagamento();
  }

  receivePayment(): void {
    return this.mercadopago.receberPagamento();
  }
}
