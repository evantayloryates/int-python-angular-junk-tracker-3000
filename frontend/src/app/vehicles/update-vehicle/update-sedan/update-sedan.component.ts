import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from '../../vehicles.service';

@Component({
  selector: 'app-update-sedan',
  templateUrl: './update-sedan.component.html',
  styleUrls: ['./update-sedan.component.css']
})
export class UpdateSedanComponent implements OnInit {

  id: string;

  sedanForm = new FormGroup({
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
      this.sedanForm.get('nickname').patchValue(this.vehicle["nickname"]);
      this.sedanForm.get('mileage').patchValue(this.vehicle["mileage"]);
      this.sedanForm.get('engine_status').patchValue(this.vehicle["engine_status"]);
      this.sedanForm.get('wheels').patchValue(this.vehicle["wheels"]);
      this.sedanForm.get('doors').patchValue(this.vehicle['doors'])
    }
  }

  getMileageRating(mileage: number): string {
    if (mileage < 10000) return "low";
    else if (mileage < 100000) return "medium";
    else return "high";
  }

  onSubmit() {
    if (this.sedanForm.valid) {
      let form_vehicle = {
        vehicle_type: 'sedan',
        nickname: this.sedanForm.get('nickname').value,
        mileage: this.sedanForm.get('mileage').value,
        mileage_rating: this.getMileageRating(this.sedanForm.get('mileage').value),
        engine_status: this.sedanForm.get('engine_status').value,
        wheels: this.sedanForm.get('wheels').value,
        doors: this.sedanForm.get('doors').value,
      };
      if (this.id) {
        this.vehicleSrc.patchVehicle(this.id, form_vehicle).subscribe(
          patched_vehicle => {
            console.log(patched_vehicle);
            this.router.navigate(['vehicles']);
          }
        );
      } else {
        this.vehicleSrc.postVehicle(form_vehicle).subscribe(
          new_vehicle => {
            console.log(new_vehicle);
            this.router.navigate(['vehicles']);
          });
      }
    }  
  }
}
 