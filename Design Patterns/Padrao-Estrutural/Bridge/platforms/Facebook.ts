import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform{

  constructor(){
    this.configureRMTP();
    console.log("Transmissão iniciada no Facebook...");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("FACEBOOK: Configurando Broadcasting...");
  }

  authToken(): void {
    console.log("================================")
    console.log("FACEBOOK: Plataforma Autorizada!");
  }

}
