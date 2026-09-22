import Transport from "./Transport";
import Motorcycle from "./Vehicles/Motorcycle";
import IVehicle from "./Vehicles/Interfaces/IVehicle";

export default class MotoTransport extends Transport{ //moto estende do transporte
  protected createTransport(): IVehicle {   //chama factory method
    return new Motorcycle();   //cria objeto Motorcycle
  }
}
