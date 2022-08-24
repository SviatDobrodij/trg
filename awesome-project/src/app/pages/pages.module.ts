import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { SecondModule } from './second/second.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainModule,
    SecondModule
  ]
})
export class PagesModule { }
