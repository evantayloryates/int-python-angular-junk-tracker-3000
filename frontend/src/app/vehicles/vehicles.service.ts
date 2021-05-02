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

  putVehicle(id, vehicle) {
    this.http.put(`${this.url}/vehicles/${id}`, {})
  }

  deleteVehicle(id, vehicle) {
    this.http.delete(`${this.url}/vehicles/${id}`)
  }
  
  
}
