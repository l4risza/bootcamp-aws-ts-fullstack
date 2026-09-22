import IVehicle from "./vehicles/interfaces/IVehicle";

export default abstract class Transport{  //classe abstrata pois servirá de molde
  startTransport(): void{
    const vehicle = this.createTransport(); //cria veículo

    vehicle.startRoute(); //começar rota do veículo
  }
  //Factory Method
  protected abstract createTransport(): IVehicle;
}
