import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverComponent } from './driver.component';

@NgModule({
  imports: [
    CommonModule,
    DriverRoutingModule
  ],
  declarations: [
    DriverComponent
  ]
})
export class DriverModule { }
