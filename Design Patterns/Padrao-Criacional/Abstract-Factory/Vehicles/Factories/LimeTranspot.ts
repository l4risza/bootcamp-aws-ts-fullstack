import Drone from "../Aerial/Drone";
import IAircraft from "../Aerial/Interfaces/IAircraft";
import ILandVehicle from "../Land/Interfaces/ILandVehicle";
import Scooter from "../Land/Scooter";
import ITransportFactory from "./Interfaces/ITransportFactory";

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
