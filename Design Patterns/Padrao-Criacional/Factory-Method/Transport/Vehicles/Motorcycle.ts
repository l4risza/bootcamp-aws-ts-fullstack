import IVehicle from "./interfaces/IVehicle";

export default class Moto implements IVehicle{
  startRoute(): void{
    this.getCargo();
    console.log("Iniciando trajeto de entrega...")
  }
  getCargo(): void{
    console.log("Pedido recolhido na moto.")
  }
}
