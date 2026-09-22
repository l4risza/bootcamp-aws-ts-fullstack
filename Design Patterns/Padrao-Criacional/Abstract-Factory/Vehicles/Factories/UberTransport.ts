import Airplane from "../aerial/Airplane";
import IAircraft from "../aerial/interfaces/IAircraft";
import Car from "../land/Car";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

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
