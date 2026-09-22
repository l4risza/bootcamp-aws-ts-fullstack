import IBuilder from "../Builders/IBuilder";
import Engine from "../Components/Engine";
import Transmission from "../Components/Transmission";
import VehicleType from "../Components/VehicleType";
import Wheel from "../Components/Wheel";

export default class Director{
  constructor(private builder: IBuilder){ //se tivesse mais de um builder ele ainda funcionaria

  }

  constructSedanCar(){    //diretor construirá veículo como deveria
    this.builder.setVehicleType(VehicleType.SEDAN);
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.setEngine(new Engine(1600)); //coloca um novo motor 1.6
    this.builder.setSeats(5);
    this.builder.addWheel(new Wheel(15));     //adiciona uma roda aro 15
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
  }

  constructTruck(){
    this.builder.setVehicleType(VehicleType.TRUCK);
    this.builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL);
    this.builder.setEngine(new Engine(13000));
    this.builder.setSeats(3);
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
  }

  constructMotorcycle(){
    this.builder.setVehicleType(VehicleType.MOTORCYCLE);
    this.builder.setTransmission(Transmission.MANUAL);
    this.builder.setEngine(new Engine(250));
    this.builder.setSeats(1);
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
  }
}
