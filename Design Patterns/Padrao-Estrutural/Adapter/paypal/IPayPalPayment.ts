import Token from "../Utils/Token";

export default interface IPayPalPayment{
  authToken(): Token;   //do tipo Token, retornará token
  sendPayment(): void;  //retorna void
  receivePayment(): void;
}
