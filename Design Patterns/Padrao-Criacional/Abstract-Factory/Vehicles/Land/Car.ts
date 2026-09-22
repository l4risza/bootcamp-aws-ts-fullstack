import ILandVehicle from "./Interfaces/ILandVehicle";

export default class Car implements ILandVehicle{
    startRoute(): void {
      this.getCargo();
      console.log("Iniciando o trajeto...")
    }
    getCargo(): void {
      console.log("Passageiros a bordo no carro.")
    }
}
