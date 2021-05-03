import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  id: string;
  vehicle: Observable<Object>;

  constructor(private route: ActivatedRoute,
              private vehiclesSrv: VehiclesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.id != null) {
        this.vehicle = this.vehiclesSrv.getVehicle(this.id);
      }});
  }

}
