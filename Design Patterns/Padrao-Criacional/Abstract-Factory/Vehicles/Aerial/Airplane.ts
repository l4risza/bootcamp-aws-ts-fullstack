import IAircraft from "./Interfaces/IAircraft";

export default class Airplane implements IAircraft{
    startRoute(): void {
      this.checkWind();
      this.getCargo();
      console.log("Iniciando a decolagem...")
    }
    getCargo(): void {
      console.log("Passageiros a bordo no avião.")
    }
    checkWind(): void {
      console.log("Ventos ok!")
    }
}
