import IPlatform from "../platforms/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live {
  constructor(protected plataforma: IPlatform) {  //a live avançada já tera os recursos da live comum
    super(plataforma);
  }

  subtitles(): void {
    console.log("LIVE AVANCADA: Legendas Ativadas!");
  }

  comments(): void {
    console.log("LIVE AVANCADA: Comentários liberados!");
  }
}
