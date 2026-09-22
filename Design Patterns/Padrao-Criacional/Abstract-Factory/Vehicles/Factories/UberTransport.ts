import Airplane from "../Aerial/Airplane";
import IAircraft from "../Aerial/Interfaces/IAircraft";
import Car from "../Land/Car";
import ILandVehicle from "../Land/Interfaces/ILandVehicle";
import ITransportFactory from "./Interfaces/ITransportFactory";

export default class UberTransport implements ITransportFactory{
  createTransportVehicle(): ILandVehicle {
    console.log("UBER Carro");
    return new Car;
  }

  createTransportAircraft(): IAircraft {
    console.log("UBER Avião");
    return new Airplane;
  }
}
