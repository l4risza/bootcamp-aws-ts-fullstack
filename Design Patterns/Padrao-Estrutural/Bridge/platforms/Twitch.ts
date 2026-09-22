import IPlatform from "./IPlatform";

export default class Twitch implements IPlatform{

  constructor(){
    this.configureRMTP();
    console.log("Transmissão Iniciada na Twitch.")
  }

  configureRMTP(): void {
    this.authToken();
    console.log("TWITCH: Configurando Broadcasting...")
  }

  authToken(): void {
    console.log("================================")
    console.log("TWITCH: Plataforma Autorizada!")
  }

}
