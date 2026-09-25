import Drone from "../aerial/Drone";
import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Scooter from "../land/Scooter";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class LimeTransport implements ITransportFactory{
  createTransportVehicle(): ILandVehicle {
    console.log("LIME Patinete");
    return new Scooter;
  }

  createTransportAircraft(): IAircraft {
    console.log("LIME Drone");
    return new Drone;
  }
}
