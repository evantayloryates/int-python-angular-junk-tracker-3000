import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNewVehicle(vehicle_type: string) {
    this.router.navigate(['vehicles','new', vehicle_type]);
  }

}
