import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { VehicleOwnerRoutingModule } from './vehicle-owner-routing.module';
import { VehicleOwnerComponent } from './vehicle-owner.component';


@NgModule({
  imports: [
    CommonModule,
    VehicleOwnerRoutingModule,
    NgxDatatableModule
  ],
  declarations: [
   VehicleOwnerComponent
  ]
})
export class VehicleOwnerModule { }
