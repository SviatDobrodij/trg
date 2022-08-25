import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    ModalFormComponent
  ]
})
export class SharedModule { }
