import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../model/city';
import { Device } from '../model/Device';

@Injectable({
  providedIn: 'root'
})
export class AirPollutionService {
  constructor(private http: HttpClient) {}
  getCitiesInformation() : Observable<City[]> {
  return this.http.get<City[]>('http://patatas-air.s3.amazonaws.com/cities');
  }
  getDevicesInformation() : Observable<Device[]> {
    return this.http.get<Device[]>('http://patatas-air.s3.amazonaws.com/devices');
    }
}
