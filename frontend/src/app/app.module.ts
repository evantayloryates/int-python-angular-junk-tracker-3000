import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UpdateCoupeComponent } from './vehicles/update-vehicle/update-coupe/update-coupe.component';
import { UpdateMinivanComponent } from './vehicles/update-vehicle/update-minivan/update-minivan.component';
import { UpdateMotorcycleComponent } from './vehicles/update-vehicle/update-motorcycle/update-motorcycle.component';
import { UpdateSedanComponent } from './vehicles/update-vehicle/update-sedan/update-sedan.component';
import { VehicleListItemComponent } from './vehicles/vehicle-list/vehicle-list-item/vehicle-list-item.component';
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';


@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleListItemComponent,
    VehicleComponent,
    UpdateCoupeComponent,
    UpdateSedanComponent,
    UpdateMinivanComponent,
    UpdateMotorcycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
