import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second.component';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: 'second',
    component: SecondComponent
  }
];

@NgModule({
  declarations: [
    SecondComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule
  ]
})
export class SecondModule { }
