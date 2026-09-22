import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayoneerAdapter from "./adapters/PayoneerAdapter";
import MercadoPago from "./mercado-pago/MercadoPago";
import Payoneer from "./payoneer/Payoneer";
import IPayPalPayment from "./paypal/IPayPalPayment";

const payment: IPayPalPayment = new PayoneerAdapter(new Payoneer());
//payment do tipo IPayPalPayment recebe um novo PayoneerAdapter com o parâmetro novo Payoneer
//= adapta do payoneer para o modelo da interface paypal

payment.sendPayment();
payment.receivePayment();

const pagamento: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());

pagamento.sendPayment();
pagamento.receivePayment();

//npm run dev -- "Design Patterns/Padrao-Estrutural/Adapter/index.ts"
