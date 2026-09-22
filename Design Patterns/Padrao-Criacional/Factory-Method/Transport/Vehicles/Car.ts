import IVehicle from './interfaces/IVehicle';

export default class Car implements IVehicle{ //implementa interface
  startRoute(): void{
    this.getCargo();
    console.log("Iniciando trajeto...")
  }
  getCargo(): void{
    console.log("Passageiro embarcado.")
  }
}
