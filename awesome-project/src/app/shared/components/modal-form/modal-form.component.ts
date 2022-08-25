import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ILocationFormData } from '../../interfaces/locations.interface';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit{
  location!: FormGroup;
  locationData: ILocationFormData = {
    name: '',
    latitude: '',
    longitude: ''
  };

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onOkClick(): void {
    this.dialogRef.close({ event: 'close', data: this.location.value });
  }

  private initializeForm(): void {
    this.location = this.fb.group({ ...this.locationData })
  }
}
