import { Component, OnInit } from '@angular/core';
import { ILocationData } from 'src/app/shared/interfaces/locations.interface';
import * as mockData from '../../../locations.json';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  displayedColumns: string[] = ['name', 'longitude', 'latitude', 'edit'];
  dataSource: ILocationData[] = { ...mockData }.data;

  ngOnInit(): void {
    // Zconsole.log('json data ====>>>> ', LOCATION_DATA);
  }
}
