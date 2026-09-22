import IPlatform from "../platforms/IPlatform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission{

  constructor(protected plataforma: IPlatform){ //passa plataforma, não importa qual (abstrata)

  }

  broadcasting(): void {
    console.log("LIVE: Iniciando transmissão...")
  }

  result(): void {
    console.log("=== ON AIR ===")
  }

}
