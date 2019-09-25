import { Component, OnInit } from '@angular/core';
import {City} from '../../model/city'
import { AirPollutionService } from '../../services/air-pollution.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cities-monitoring',
  templateUrl: './cities-monitoring.component.html',
  styleUrls: ['./cities-monitoring.component.css']
})
export class CitiesMonitoringComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Name', 'Country', 'AlertDevices', 'WarningDevices', 'NormalDevices'];

  public dataSource: Observable<City[]>;

  constructor(private airPollutionService: AirPollutionService) { }

  ngOnInit() {
    this.dataSource=this.airPollutionService.getCitiesInformation();
  }

}
