import IAircraft from "./Interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
      this.checkWind();
      this.getCargo();
      console.log("Iniciando a decolagem...")
    }
    getCargo(): void {
      console.log("Passageiros a bordo no helicóptero.")
    }
    checkWind(): void {
      console.log("Ventos ok!")
    }
}
