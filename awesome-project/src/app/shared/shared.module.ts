import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MarkerInfoComponent } from './components/marker-info/marker-info.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalFormComponent,
    MarkerInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    ModalFormComponent,
    MarkerInfoComponent
  ]
})
export class SharedModule { }
