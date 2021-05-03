import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiclesService } from '../../vehicles.service';

@Component({
  selector: 'app-update-minivan',
  templateUrl: './update-minivan.component.html',
  styleUrls: ['./update-minivan.component.css']
})
export class UpdateMinivanComponent implements OnInit {

  id: string;

  minivanForm = new FormGroup({
    nickname: new FormControl('', [Validators.required, Validators.maxLength(80)]),
    mileage: new FormControl('', [Validators.required, Validators.min(0)]),
    engine_status: new FormControl('works', [Validators.required]),
    wheels: new FormControl('', [Validators.required, Validators.min(0), Validators.max(4)]),
    doors: new FormControl('', [Validators.required, Validators.min(0), Validators.max(4)])
  });

  constructor(private router: Router,
              private vehicleSrc: VehiclesService) { }

  @Input() vehicle;
  
  ngOnInit(): void {
    if (this.vehicle) {
      this.id = this.vehicle.id;
      this.minivanForm.get('nickname').patchValue(this.vehicle["nickname"]);
      this.minivanForm.get('mileage').patchValue(this.vehicle["mileage"]);
      this.minivanForm.get('engine_status').patchValue(this.vehicle["engine_status"]);
      this.minivanForm.get('wheels').patchValue(this.vehicle["wheels"]);
      this.minivanForm.get('doors').patchValue(this.vehicle['doors'])
    }
  }

  getMileageRating(mileage: number): string {
    if (mileage < 10000) return "low";
    else if (mileage < 100000) return "medium";
    else return "high";
  }

  onSubmit() {
    if (this.minivanForm.valid) {
      let form_vehicle = {
        vehicle_type: 'minivan',
        nickname: this.minivanForm.get('nickname').value,
        mileage: this.minivanForm.get('mileage').value,
        mileage_rating: this.getMileageRating(this.minivanForm.get('mileage').value),
        engine_status: this.minivanForm.get('engine_status').value,
        wheels: this.minivanForm.get('wheels').value,
        doors: this.minivanForm.get('doors').value,
      };
      if (this.id) {
        this.vehicleSrc.patchVehicle(this.id, form_vehicle).subscribe(
          () => {
            this.router.navigate(['vehicles']);
          }
        );
      } else {
        this.vehicleSrc.postVehicle(form_vehicle).subscribe(
          () => {
            this.router.navigate(['vehicles']);
          });
      }
    }  
  }
}
 