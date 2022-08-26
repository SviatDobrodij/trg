import * as mockData from '../../../assets/locations.json';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ILocationData } from 'src/app/shared/interfaces/locations.interface';
import { IMarker } from './interfaces/marker.interface';
import { MapInfoWindow, MapAnchorPoint } from '@angular/google-maps';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;

  public zoom: number = 6;
  public dataSource: ILocationData[] = { ...mockData }.data;
  public center: google.maps.LatLngLiteral = {
    lat: this.dataSource[0].coordinates[0],
    lng: this.dataSource[0].coordinates[1]
  };
  public markers: IMarker[] = [];
  public isInfoWindowOpen: boolean = false;

  constructor() {
    //
  }

  ngOnInit(): void {
    this.markers = this.dataSource.map(item => {
      const eeee: IMarker = {
        position: {
          lng: item.coordinates[1],
          lat: item.coordinates[0]
        },
        label: {
          color: 'red',
          text: item.name,
        }
      }

      return eeee;
    });
  }

  public openInfo(marker: MapAnchorPoint): void {
    this.infoWindow?.open(marker);
    this.isInfoWindowOpen = true;
  }

  public onInfoWindowClose(): void {
    this.isInfoWindowOpen = false;
  }
}
