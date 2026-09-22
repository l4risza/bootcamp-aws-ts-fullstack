import Transport from "./Transport";
import Car from "./vehicles/Car";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class CarTransport extends Transport{ //carro estende do transporte
  protected createTransport(): IVehicle {   //chama factory method
    return new Car();   //cria objeto Car
  }
}
