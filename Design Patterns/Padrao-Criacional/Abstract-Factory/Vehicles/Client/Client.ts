import IAircraft from "../aerial/interfaces/IAircraft";
import ITransportFactory from "../factories/interfaces/ITransportFactory";
import ILandVehicle from "../land/Interfaces/ILandVehicle";

export default class Client{
  private vehicle: ILandVehicle;
  private aircraft: IAircraft;

  constructor(factory: ITransportFactory){  //parametro factory do tipo ITransportFactory
    this.vehicle = factory.createTransportVehicle();
    this.aircraft = factory.createTransportAircraft();
  }

  startRoute(): void{
    this.vehicle.startRoute();
    this.aircraft.startRoute();
  }
}
