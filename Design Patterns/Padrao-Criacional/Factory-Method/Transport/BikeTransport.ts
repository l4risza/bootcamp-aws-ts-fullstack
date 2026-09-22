import Transport from "./Transport";
import Bike from "./Vehicles/Bike";
import IVehicle from "./Vehicles/Interfaces/IVehicle";

export default class BikeTransport extends Transport{ //bike estende do transporte
  protected createTransport(): IVehicle {   //chama factory method
    return new Bike();   //cria objeto Bike
  }
}
