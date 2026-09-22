import ILandVehicle from "./Interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle{
    startRoute(): void {
      this.getCargo();
      console.log("Iniciando o trajeto da entrega...")
    }
    getCargo(): void {
      console.log("Pedido recolhido na moto.")
    }
}
