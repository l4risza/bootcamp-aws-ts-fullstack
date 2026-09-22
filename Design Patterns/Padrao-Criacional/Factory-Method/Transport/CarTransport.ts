import Transport from "./Transport";
import Car from "./Vehicles/Car";
import IVehicle from "./Vehicles/Interfaces/IVehicle";

export default class CarTransport extends Transport{ //carro estende do transporte
  protected createTransport(): IVehicle {   //chama factory method
    return new Car();   //cria objeto Car
  }
}
