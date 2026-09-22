import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle{
    startRoute(): void {
      this.getCargo();
      console.log("Iniciando o trajeto...")
    }
    getCargo(): void {
      console.log("Pedido recolhido no patinete.")
    }
}
