import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleOwnerComponent } from './vehicle-owner.component';

const routes: Routes = [
  {
    path: '',
    component: VehicleOwnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleOwnerRoutingModule { }
