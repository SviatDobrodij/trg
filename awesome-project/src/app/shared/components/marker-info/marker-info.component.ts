import { Component, Input } from '@angular/core';
import { IMarker } from 'src/app/pages/main/interfaces/marker.interface';

@Component({
  selector: 'app-marker-info',
  templateUrl: './marker-info.component.html',
  styleUrls: ['./marker-info.component.scss']
})
export class MarkerInfoComponent {
  @Input() data!: IMarker | undefined;

  constructor() { 
    //
  }
}
