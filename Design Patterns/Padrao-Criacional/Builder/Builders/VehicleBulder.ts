import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder {

  private vehicle = new Vehicle();

  reset(): void {
    this.vehicle = new Vehicle();   //reseta
  }

  getVehicle(): Vehicle {
    const result: Vehicle = this.vehicle;
    this.reset();     //reseta o this, mas o veículo continua no result
    return result;    //então não tem o risco do veículo ficar na memória (se fizesse this)
  }

  addWheel(wheel: Wheel) {
    this.vehicle.addWheel(wheel);
  }

  //utilizando os métodos get e set para criar os componentes
  setVehicleType(vt: VehicleType) {
    this.vehicle.vehicleType = vt;
  }

  setSeats(seats: number) {
    this.vehicle.seats = seats;
  }

  setEngine(engine: Engine) {
    this.vehicle.engine = engine;
  }

  setTransmission(tr: Transmission) {
    this.vehicle.transmission = tr;
  }

}
