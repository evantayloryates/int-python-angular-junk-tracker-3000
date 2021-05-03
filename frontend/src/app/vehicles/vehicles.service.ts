import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class VehiclesService {

  url = `${environment.BACKEND_URL}:${environment.BACKEND_PORT}`;

  constructor(private http: HttpClient) { }


  getVehicles() {
    return this.http.get(`${this.url}/vehicles`) as Observable<Object[]>;
  }

  getVehicle(id: string) {
    return this.http.get(`${this.url}/vehicles/${id}`) as Observable<Object[]>;
  }

  postVehicle(vehicle) {
    return this.http.post(`${this.url}/vehicles`, vehicle);
  }

  patchVehicle(id, vehicle) {
    return this.http.patch(`${this.url}/vehicles/${id}`, vehicle);
  }

  deleteVehicle(id) {
    return this.http.delete(`${this.url}/vehicles/${id}`);
  }
  
  
}
