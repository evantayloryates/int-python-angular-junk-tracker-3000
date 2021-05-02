import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles = []
  
  constructor(private vehiclesSrv: VehiclesService) { }

  ngOnInit(): void {
    this.vehiclesSrv.getVehicles().subscribe( 
      vehicles => {
        this.vehicles = vehicles;
      }
    )
  }

}
