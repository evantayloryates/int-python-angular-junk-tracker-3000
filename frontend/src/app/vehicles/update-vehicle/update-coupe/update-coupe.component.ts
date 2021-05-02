import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VehiclesService } from '../../vehicles.service';

@Component({
  selector: 'app-update-coupe',
  templateUrl: './update-coupe.component.html',
  styleUrls: ['./update-coupe.component.css']
})
export class UpdateCoupeComponent implements OnInit {

  id: string;

  coupeForm = new FormGroup({
    nickname: new FormControl('', [Validators.required, Validators.maxLength(80)]),
    mileage: new FormControl('', [Validators.required, Validators.min(0)]),
    engine_status: new FormControl('works', [Validators.required]),
    wheels: new FormControl('', [Validators.required, Validators.min(0), Validators.max(4)]),
    doors: new FormControl('', [Validators.required, Validators.min(0), Validators.max(2)])
  });

  constructor(private route: ActivatedRoute,
    private router: Router,
    private vehicleSrc: VehiclesService) { }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.id != null) {
        this.vehicleSrc.getVehicle(this.id).subscribe(
          vehicle => {
            this.coupeForm.get('nickname').patchValue(vehicle["nickname"]);
            this.coupeForm.get('mileage').patchValue(vehicle["mileage"]);
            this.coupeForm.get('engine_status').patchValue(vehicle["engine_status"]);
            this.coupeForm.get('wheels').patchValue(vehicle["wheels"]);
            this.coupeForm.get('doors').patchValue(vehicle['doors'] || '')
          }
        );
      }});
  }

  onSubmit() {
    console.log(this.coupeForm);
    console.log(this.coupeForm.valid)
    if (this.coupeForm.valid) {
      let form_vehicle = {
        nickname: this.coupeForm.get('wheels').value,
        mileage: this.coupeForm.get('mileage').value,
        engine_status: this.coupeForm.get('engine_status').value,
        wheels: this.coupeForm.get('wheels').value,
        doors: this.coupeForm.get('doors').value
      };
      console.log(form_vehicle)
      this.vehicleSrc.postVehicle(form_vehicle).subscribe(
        new_vehicle => {
          
        }
      );
    }
    
  }

}
 