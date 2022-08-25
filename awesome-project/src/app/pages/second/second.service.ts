import { Injectable } from '@angular/core';
import { ILocationData, ILocationFormData } from 'src/app/shared/interfaces/locations.interface';
import { ISecondService } from './interfaces/second-service.interface';

@Injectable({
  providedIn: 'root'
})
export class SecondService implements ISecondService {

  constructor() {
    //
  }

  public addNewLocation(): void {
    //
  }

  public editCurrentLocation(): void {
    //
  }

  public sort(): void {
    //
  }

  public convertDataFormat(locationData: ILocationFormData): ILocationData {
    const coordinates: number[] = [];
    coordinates.push(+locationData.latitude);
    coordinates.push(+locationData.longitude);

    return { name: locationData.name, coordinates }
  }
}
