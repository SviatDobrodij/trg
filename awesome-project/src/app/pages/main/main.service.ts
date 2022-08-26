import { Injectable } from '@angular/core';
import { ILocationData } from 'src/app/shared/interfaces/locations.interface';
import { IMarker } from './interfaces/marker.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() {
    //
  }

  public convertMarkersData(data: ILocationData[]): IMarker[] {
    return data.map(item => {
      const markerDataFormat: IMarker = {
        position: {
          lng: item.coordinates[1],
          lat: item.coordinates[0]
        },
        label: {
          color: 'red',
          text: item.name,
        }
      }

      return markerDataFormat;
    });
  }
}
