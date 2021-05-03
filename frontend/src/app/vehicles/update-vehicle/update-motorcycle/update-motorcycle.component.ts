import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiclesService } from '../../vehicles.service';

@Component({
  selector: 'app-update-motorcycle',
  templateUrl: './update-motorcycle.component.html',
  styleUrls: ['./update-motorcycle.component.css']
})
export class UpdateMotorcycleComponent implements OnInit {

  id: string;

  motorcycleForm = new FormGroup({
    nickname: new FormControl('', [Validators.required, Validators.maxLength(80)]),
    mileage: new FormControl('', [Validators.required, Validators.min(0)]),
    engine_status: new FormControl('works', [Validators.required]),
    wheels: new FormControl('', [Validators.required, Validators.min(0), Validators.max(2)]),
    seat_status: new FormControl('works', [Validators.required]),
  });

  constructor(private router: Router,
              private vehicleSrc: VehiclesService) { }

  @Input() vehicle;
  
  ngOnInit(): void {
    if (this.vehicle) {
      this.id = this.vehicle.id;
      this.motorcycleForm.get('nickname').patchValue(this.vehicle["nickname"]);
      this.motorcycleForm.get('mileage').patchValue(this.vehicle["mileage"]);
      this.motorcycleForm.get('engine_status').patchValue(this.vehicle["engine_status"]);
      this.motorcycleForm.get('wheels').patchValue(this.vehicle["wheels"]);
      this.motorcycleForm.get('seat_status').patchValue(this.vehicle['seat_status'])
    }
  }

  getMileageRating(mileage: number): string {
    if (mileage < 10000) return "low";
    else if (mileage < 100000) return "medium";
    else return "high";
  }

  onSubmit() {
    if (this.motorcycleForm.valid) {
      let form_vehicle = {
        vehicle_type: 'motorcycle',
        nickname: this.motorcycleForm.get('nickname').value,
        mileage: this.motorcycleForm.get('mileage').value,
        mileage_rating: this.getMileageRating(this.motorcycleForm.get('mileage').value),
        engine_status: this.motorcycleForm.get('engine_status').value,
        wheels: this.motorcycleForm.get('wheels').value,
        seat_status: this.motorcycleForm.get('seat_status').value,
      };
      if (this.id) {
        this.vehicleSrc.patchVehicle(this.id, form_vehicle).subscribe(
          patched_vehicle => {
            this.router.navigate(['vehicles']);
          }
        );
      } else {
        this.vehicleSrc.postVehicle(form_vehicle).subscribe(
          new_vehicle => {
            this.router.navigate(['vehicles']);
          });
      }
    }  
  }
}
 