import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicle;

  id: string;

  constructor(private vehiclesSrv: VehiclesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.vehiclesSrv.getVehicle(this.id).subscribe(
            vehicle => {
              this.vehicle = vehicle;
            }
          );
        }
      );
  }
  
  vehicleIs(vehicle_types) {
    return vehicle_types.indexOf(this.vehicle.vehicle_type) >= 0;
  }

  onEditVehicle() {
    this.router.navigate(['vehicles', this.vehicle.id, 'edit'])
  }

  onDeleteVehicle() {
    this.vehiclesSrv.deleteVehicle(this.vehicle.id).subscribe(
      (conf) => {
        console.log(conf)
      }
    )
  }

}
