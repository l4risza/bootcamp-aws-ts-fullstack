import VehicleBuilder from "./builders/VehicleBulder";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();

const sedan: Vehicle = builder.getVehicle();  //pega todas info do veículo criado

console.log(`Veículo ${sedan.vehicleType} de ${sedan.seats} banco(s) e
  ${sedan.wheelsTotal} rodas foi criado!`);


director.constructTruck();

const truck: Vehicle = builder.getVehicle();  //pega todas info do veículo criado

console.log(`Veículo ${truck.vehicleType} de ${truck.seats} banco(s) e
  ${truck.wheelsTotal} rodas foi criado!`);

director.constructMotorcycle();

const motorcycle: Vehicle = builder.getVehicle();  //pega todas info do veículo criado

console.log(`Veículo ${motorcycle.vehicleType} de ${motorcycle.seats} banco(s) e
  ${motorcycle.wheelsTotal} rodas foi criado!`);

//npm run dev -- "Design Patterns/Padrao-Criacional/Builder/index.ts"
