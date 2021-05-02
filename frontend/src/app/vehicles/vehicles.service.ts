import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class VehiclesService {

  url = `${environment.BACKEND_URL}:${environment.BACKEND_PORT}`;

  constructor(private http: HttpClient) { }


  getVehicles() {
    return this.http.get(`${this.url}/vehicles`);
  }

  postVehicle(vehicle) {
    this.http.post(`${this.url}/vehicles`, {})
  }

  putVehicle(id, vehicle) {
    this.http.put(`${this.url}/vehicles/${id}`, {})
  }

  deleteVehicle(id, vehicle) {
    this.http.delete(`${this.url}/vehicles/${id}`)
  }
}
