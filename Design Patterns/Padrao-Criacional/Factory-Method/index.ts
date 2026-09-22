import Transport from "./transport/Transport"; //importa classe molde
import CarTransport from "./transport/CarTransport";
import MotoTransport from "./transport/MotoTransport";
import BikeTransport from "./transport/BikeTransport";

declare var process: any;

let transport: Transport | undefined;   //do tipo Transport (molde abstrato) ou indefinido

if (process.argv.includes("--uber")) {  //argv = array de argumentos que foram passados
  transport = new CarTransport();   //se for --uber vai ser carro

} else if (process.argv.includes("--moto")) {  //se for --moto vai ser moto
  transport = new MotoTransport();

} else if (process.argv.includes("--bike")) {  //se for --bike vai ser bicicleta
  transport = new BikeTransport();

} else {  //se não for nenhum
  console.error("Selecione o tipo de entrega.")
}

if (transport) {  //se transporte foi definido
  transport.startTransport();
}

//npm run dev -- "Design Patterns/Padrao-Criacional/Factory-Method/index.ts" --uber
