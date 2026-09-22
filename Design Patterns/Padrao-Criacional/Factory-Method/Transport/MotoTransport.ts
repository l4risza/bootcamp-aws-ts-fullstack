import Transport from "./Transport";
import Motorcycle from "./vehicles/Motorcycle";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class MotoTransport extends Transport{ //moto estende do transporte
  protected createTransport(): IVehicle {   //chama factory method
    return new Motorcycle();   //cria objeto Motorcycle
  }
}
