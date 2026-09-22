import Engine from "../Components/Engine";
import Transmission from "../Components/Transmission";
import VehicleType from "../Components/VehicleType";
import Wheel from "../Components/Wheel";
import Vehicle from "../Products/Vehicle";

export default interface IBuilder {
    reset(): void;
    getVehicle(): Vehicle;

    addWheel(wheel: Wheel): void;
    setVehicleType(vt: VehicleType): void;
    setSeats(seats: number): void;
    setEngine(engine: Engine): void;
    setTransmission(tr: Transmission): void;
}
