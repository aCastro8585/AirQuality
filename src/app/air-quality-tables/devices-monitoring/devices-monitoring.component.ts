import { Component, OnInit } from '@angular/core';
import {Device} from '../../model/device'
import { AirPollutionService } from '../../services/air-pollution.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'devices-monitoring',
  templateUrl: './devices-monitoring.component.html',
  styleUrls: ['./devices-monitoring.component.css']
})
export class DevicesMonitoringComponent implements OnInit {
  public devices: Observable<Device[]>;

  constructor(private airPollutionService: AirPollutionService) { }

  ngOnInit() {
    this.devices=this.airPollutionService.getDevicesInformation();
  }

}
