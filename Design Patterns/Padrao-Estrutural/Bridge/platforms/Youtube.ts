import IPlatform from "./IPlatform";

export default class Youtube implements IPlatform{

  constructor(){
    this.configureRMTP();
    console.log("Transmissão Iniciada no Youtube.")
  }

  configureRMTP(): void {
    this.authToken();
    console.log("YOUTUBE: Configurando Broadcasting...")
  }

  authToken(): void {
    console.log("================================")
    console.log("YOUTUBE: Plataforma Autorizada!")
  }

}
