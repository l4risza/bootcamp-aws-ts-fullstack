import IAircraft from "../Aerial/Interfaces/IAircraft";
import ITransportFactory from "../Factories/Interfaces/ITransportFactory";
import ILandVehicle from "../Land/Interfaces/ILandVehicle";

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
