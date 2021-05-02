import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list-item',
  templateUrl: './vehicle-list-item.component.html',
  styleUrls: ['./vehicle-list-item.component.css']
})
export class VehicleListItemComponent implements OnInit {

  @Input() vehicle;

  constructor() { }

  ngOnInit(): void {
    console.log(this.vehicle);
  }

}
