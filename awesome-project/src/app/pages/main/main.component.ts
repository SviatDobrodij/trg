import * as mockData from '../../../assets/locations.json';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ILocationData } from 'src/app/shared/interfaces/locations.interface';
import { IMarker } from './interfaces/marker.interface';
import { MapInfoWindow, MapAnchorPoint } from '@angular/google-maps';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;
  public zoom: number = 6;
  public markers: IMarker[] = [];
  public selectedMarkerInfo: IMarker | undefined;
  public isInfoWindowOpen: boolean = false;
  private dataSource: ILocationData[] = { ...mockData }.data;
  public center: google.maps.LatLngLiteral = {
    lat: this.dataSource[0].coordinates[0],
    lng: this.dataSource[0].coordinates[1]
  };

  constructor(private mainService: MainService) {
    //
  }

  ngOnInit(): void {
    this.markers = this.mainService.convertMarkersData(this.dataSource);
  }

  public openInfo(marker: MapAnchorPoint, markerInfo: IMarker): void {
    this.selectedMarkerInfo = { ...markerInfo };
    this.infoWindow?.open(marker);
    this.isInfoWindowOpen = true;
  }

  public onInfoWindowClose(): void {
    this.isInfoWindowOpen = false;
  }
}
