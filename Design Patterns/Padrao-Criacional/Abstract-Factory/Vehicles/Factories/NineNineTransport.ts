import Helicopter from "../aerial/Helicopter";
import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Motorcycle from "../land/Motorcycle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory{
  createTransportVehicle(): ILandVehicle {
    console.log("99 Moto");
    return new Motorcycle;
  }

  createTransportAircraft(): IAircraft {
    console.log("99 Helicóptero");
    return new Helicopter;
  }
}
