import { Component, OnInit } from '@angular/core';
import { ILocationData } from 'src/app/shared/interfaces/locations.interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as mockData from '../../../locations.json';
import { ModalFormComponent } from 'src/app/shared/components/modal-form/modal-form.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  displayedColumns: string[] = ['name', 'longitude', 'latitude', 'edit'];
  dataSource: ILocationData[] = { ...mockData }.data;

  constructor(public dialog: MatDialog) {
    //
  }

  ngOnInit(): void {
    // Zconsole.log('json data ====>>>> ', LOCATION_DATA);
  }

  openDialog(): void {
    const dialogRef: MatDialogRef<unknown, any> = this.dialog.open(ModalFormComponent, {
      width: '80%',
      data: { },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog was closed ', result.data);
      }
      // this.animal = result;
    });
  }
}
