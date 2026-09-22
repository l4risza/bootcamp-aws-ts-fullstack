import Token from "../Utils/Token";

export default interface IMercadoPagoPayment{
  autenticarToken(): Token;
  enviarPagamento(): void;
  receberPagamento(): void;
}
