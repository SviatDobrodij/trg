import { Injectable } from '@angular/core';
import { ILocationData, ILocationFormData } from '../interfaces/locations.interface';

@Injectable({
  providedIn: 'root'
})
export class DataTransformService {

  constructor() {
    //
  }

  public convertToTableFormat(locationData: ILocationFormData): ILocationData {
    if (!locationData) {
      throw ('No data to conwert in \'convertToTableFormat\' ');
    }

    const coordinates: number[] = [];
    coordinates.push(+locationData.latitude);
    coordinates.push(+locationData.longitude);

    return { name: locationData.name, coordinates }
  }

  public convertToModalFormat(locationData: ILocationData): ILocationFormData {
    if (!locationData) {
      throw ('No data to conwert in \'convertToModalFormat\' ');
    }

    const result: ILocationFormData = {
      name: locationData.name,
      longitude: locationData.coordinates[0],
      latitude: locationData.coordinates[1]
    };

    return result;
  }
}
