import IAircraft from "./Interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
      this.checkWind();
      this.getCargo();
      console.log("Iniciando a decolagem...")
    }
    getCargo(): void {
      console.log("Pedido recolhido no Drone.")
    }
    checkWind(): void {
      console.log("Ventos ok!")
    }
}
