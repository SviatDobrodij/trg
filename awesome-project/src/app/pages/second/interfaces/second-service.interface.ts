import { ILocationData, ILocationFormData } from "src/app/shared/interfaces/locations.interface";

export interface ISecondService {
    addNewLocation(): void;
    editCurrentLocation(): void;
    sort(): void;
    convertDataFormat(locationData: ILocationFormData): ILocationData;
}
