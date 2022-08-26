import * as mockData from '../../../assets/locations.json';
import { Component, ViewChild } from '@angular/core';
import { ILocationData } from 'src/app/shared/interfaces/locations.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalFormComponent } from 'src/app/shared/components/modal-form/modal-form.component';
import { MatTable } from '@angular/material/table';
import { ModalActionsType } from 'src/app/shared/types/modal-actions.type';
import { IDataFromModal } from './interfaces/data-from-modal.interface';
import { DataTransformService } from 'src/app/shared/services/data-transform.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  public displayedColumns: string[] = ['name', 'longitude', 'latitude', 'edit'];
  public dataSource: ILocationData[] = { ...mockData }.data;
  private editItemIndex: number = 0;

  @ViewChild(MatTable, { static: true }) table!: MatTable<unknown>;

  constructor(private dialog: MatDialog, private dataTransformService: DataTransformService) {

  }

  public openDialog(action: ModalActionsType, rowData?: ILocationData, index?: number): void {
    if (index) {
      this.editItemIndex = index;
    }

    const dialogRef: MatDialogRef<ModalFormComponent, IDataFromModal> = this.dialog.open(ModalFormComponent, {
      width: '80%',
      data: { action, rowData }
    });

    dialogRef.afterClosed().subscribe((result?: IDataFromModal) => {
      console.log('result ===>> ', result);
      if (result?.data) {
        switch (result.event) {
          case 'add':
            this.addNewLocation(result);
            break;
          case 'edit':
            this.updateLocation(result);
            break;
          default:
            return;
        }
      }
    });
  }

  private addNewLocation(locationData: IDataFromModal): void {
    this.dataSource.push(this.dataTransformService.convertToTableFormat(locationData.data));
    this.table.renderRows();
  }

  private updateLocation(locationData: IDataFromModal): void {
    const editedData: ILocationData = this.dataTransformService.convertToTableFormat(locationData.data);
    this.dataSource[this.editItemIndex] = { ...editedData };
    this.table.renderRows();
  }
}
