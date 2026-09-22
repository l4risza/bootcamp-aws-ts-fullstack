import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";
import UberTransport from "./vehicles/factories/UberTransport";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import LimeTransport from "./vehicles/factories/LimeTranspot";

const currentCompany = Company.LIME;
let factory: ITransportFactory | undefined; //variável factory do tipo ITransportFactory
//fábrica abstrata pois nossa variável não sabe qual é a fábrica

switch(currentCompany){
  case Company.UBER:
    factory = new UberTransport(); //variável factory recebe valor new Uber
    break;
  case Company.NINENINE:
    factory = new NineNineTransport();
    break;
  case Company.LIME:
    factory = new LimeTransport();
    break;
  default:
    console.error("Companhia Desconhecida!")
}

if (factory) {  //se factory tem algum valor
    const client = new Client(factory);
    client.startRoute();
}

//npm run dev -- "Design Patterns/Padrao-Criacional/Abstract-Factory/index.ts"
