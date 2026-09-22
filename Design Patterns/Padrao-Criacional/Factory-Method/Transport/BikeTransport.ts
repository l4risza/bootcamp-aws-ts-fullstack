import Transport from "./Transport";
import Bike from "./vehicles/Bike";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class BikeTransport extends Transport{ //bike estende do transporte
  protected createTransport(): IVehicle {   //chama factory method
    return new Bike();   //cria objeto Bike
  }
}
