import IAircraft from "../../Aerial/Interfaces/IAircraft";
import ILandVehicle from "../../Land/Interfaces/ILandVehicle";

export default interface ITransportFactory{
  createTransportVehicle(): ILandVehicle;
  createTransportAircraft(): IAircraft;
}
