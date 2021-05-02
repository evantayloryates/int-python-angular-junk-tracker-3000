import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyVehicleComponent } from './vehicles/empty-vehicle/empty-vehicle.component';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

import { UpdateVehicleComponent } from './vehicles/update-vehicle/update-vehicle.component';
import { UpdateCoupeComponent } from './vehicles/update-vehicle/update-coupe/update-coupe.component';
import { UpdateMinivanComponent } from './vehicles/update-vehicle/update-minivan/update-minivan.component';
import { UpdateMotorcycleComponent } from './vehicles/update-vehicle/update-motorcycle/update-motorcycle.component';
import { UpdateSedanComponent } from './vehicles/update-vehicle/update-sedan/update-sedan.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
    { path: 'vehicles/new/sedan', component: UpdateSedanComponent },
    { path: 'vehicles/new/coupe', component: UpdateCoupeComponent },
    { path: 'vehicles/new/minivan', component: UpdateMinivanComponent },
    { path: 'vehicles/new/motorcycle', component: UpdateMotorcycleComponent },
    { path: 'vehicles/:id/edit', component: UpdateVehicleComponent},
    { path: 'vehicles',component: VehiclesComponent, children: [
      { path: '', component: EmptyVehicleComponent },
      { path: ':registration_number', component: VehicleComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
