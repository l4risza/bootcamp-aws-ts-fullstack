import IVehicle from './Interfaces/IVehicle';

export default class Bike implements IVehicle{ //implementa interface
  startRoute(): void{
    this.getCargo();
    console.log("Iniciando trajeto de entrega...")
  }
  getCargo(): void{
    console.log("Pedido recolhido na bicicleta.")
  }
}
