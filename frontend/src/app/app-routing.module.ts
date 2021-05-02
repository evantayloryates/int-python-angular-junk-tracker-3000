import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmptyVehicleComponent } from './vehicles/empty-vehicle/empty-vehicle.component';
import { UpdateVehicleComponent } from './vehicles/update-vehicle/update-vehicle.component';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
    { path: 'vehicles/new/:type', component: UpdateVehicleComponent },
    { path: 'vehicles/:id/edit', component: UpdateVehicleComponent},
    { path: 'vehicles',component: VehiclesComponent, children: [
      { path: '', component: EmptyVehicleComponent },
      { path: ':id', component: VehicleComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
