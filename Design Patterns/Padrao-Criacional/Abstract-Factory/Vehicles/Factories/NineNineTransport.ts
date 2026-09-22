import Helicopter from "../Aerial/Helicopter";
import IAircraft from "../Aerial/Interfaces/IAircraft";
import ILandVehicle from "../Land/Interfaces/ILandVehicle";
import Motorcycle from "../Land/Motorcycle";
import ITransportFactory from "./Interfaces/ITransportFactory";

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
