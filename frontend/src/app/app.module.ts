import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component';
import { VehicleListItemComponent } from './vehicles/vehicle-list/vehicle-list-item/vehicle-list-item.component';
import { EmptyVehicleComponent } from './vehicles/empty-vehicle/empty-vehicle.component';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';

import { UpdateVehicleComponent } from './vehicles/update-vehicle/update-vehicle.component';
import { UpdateSedanComponent } from './vehicles/update-vehicle/update-sedan/update-sedan.component';
import { UpdateCoupeComponent } from './vehicles/update-vehicle/update-coupe/update-coupe.component';
import { UpdateMinivanComponent } from './vehicles/update-vehicle/update-minivan/update-minivan.component';
import { UpdateMotorcycleComponent } from './vehicles/update-vehicle/update-motorcycle/update-motorcycle.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleListItemComponent,
    VehicleComponent,
    VehiclesComponent,
    UpdateCoupeComponent,
    UpdateSedanComponent,
    UpdateMinivanComponent,
    UpdateMotorcycleComponent,
    UpdateVehicleComponent,
    EmptyVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
