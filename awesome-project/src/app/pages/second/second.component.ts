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
      maxWidth: '400px',
      data: { action, rowData }
    });

    dialogRef.afterClosed().subscribe((result?: IDataFromModal) => {
      this.handleOnCloseEvent(result);
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

  private handleOnCloseEvent(dataFromModal?: IDataFromModal): void {
    if (dataFromModal?.data) {
      switch (dataFromModal.event) {
        case 'add':
          this.addNewLocation(dataFromModal);
          break;
        case 'edit':
          this.updateLocation(dataFromModal);
          break;
        default:
          return;
      }
    }
  }
}
