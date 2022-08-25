import * as mockData from '../../../assets/locations.json';
import { Component, ViewChild } from '@angular/core';
import { ILocationData, ILocationFormData } from 'src/app/shared/interfaces/locations.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalFormComponent } from 'src/app/shared/components/modal-form/modal-form.component';
import { SecondService } from './second.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  displayedColumns: string[] = ['name', 'longitude', 'latitude', 'edit'];
  dataSource: ILocationData[] = { ...mockData }.data;

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  constructor(public dialog: MatDialog, private secondService: SecondService) {

  }

  public openDialog(): void {
    const dialogRef: MatDialogRef<unknown, any> = this.dialog.open(ModalFormComponent, {
      width: '80%', // TODO: it looks not so fancy for the desktop
      data: {},
    });

    // TODO: don't forget to unsubscribe
    dialogRef.afterClosed().subscribe((result: { data: ILocationFormData }) => {
      if (result.data) {
        this.addNewLocation(result.data);
      }
    });
  }

  private addNewLocation(locationData: ILocationFormData): void {
    this.dataSource.push(this.secondService.convertDataFormat(locationData));
    this.table.renderRows();
  }
}
