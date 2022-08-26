import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ILocationFormData } from '../../interfaces/locations.interface';
import { DataTransformService } from '../../services/data-transform.service';
import { ILocationModalData } from '../../interfaces/location-modal-data.interface';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
  public location!: FormGroup;
  private locationData: ILocationFormData = {
    name: '',
    latitude: '',
    longitude: ''
  };

  constructor(
    private dataTransformService: DataTransformService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public dataToEdit: ILocationModalData,

  ) { }

  ngOnInit(): void {
    if (this.dataToEdit && this.dataToEdit.rowData) {
      const formatedData: ILocationFormData = this.dataTransformService.convertToModalFormat(this.dataToEdit.rowData);
      this.locationData = { ...formatedData };
    }

    this.initializeForm();
  }

  public onCancelClick(): void {
    this.dialogRef.close({ event: 'close' });
  }

  public onDoActionClick(): void {
    this.dialogRef.close({ event: this.dataToEdit.action, data: this.location.value });
  }

  private initializeForm(): void {
    this.location = this.fb.group({
      name: new FormControl(this.locationData.name, [
        Validators.required
      ]),
      latitude: new FormControl(this.locationData.latitude, [
        Validators.required,
      ]),
      longitude: new FormControl(this.locationData.longitude, [
        Validators.required,
      ]),
     })
  }
}
