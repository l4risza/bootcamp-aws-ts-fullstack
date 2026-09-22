import Token from "../Utils/Token"

export default interface IPayoneerPayment{
  authToken(): Token;
  PayoneerPayment(): void;  //mesmos métodos que o paypal, só muda o nome
  PayoneerReceive(): void;
}
