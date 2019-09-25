import { Component, OnInit } from '@angular/core';
import {City} from '../../model/city'

const ELEMENT_DATA: City[] = [
  {
      Id: 3,
      Name: "Medellín",
      Country: "Colombia",
      AlertDevicesCount: 10,
      WarningDevicesCount: 3,
      NormalDevicesCount: 1
  },
  {
      Id: 21,
      Name: "Miami",
      Country: "United states",
      AlertDevicesCount: 3,
      WarningDevicesCount: 1,
      NormalDevicesCount: 3
  },
  {
      Id: 26,
      Name: "Rio de Janeiro",
      Country: "Brasil",
      AlertDevicesCount: 2,
      WarningDevicesCount: 5,
      NormalDevicesCount: 0
  },
  {
      Id: 83,
      Name: "México D.F.",
      Country: "México",
      AlertDevicesCount: 0,
      WarningDevicesCount: 0,
      NormalDevicesCount: 2
  }
];
@Component({
  selector: 'cities-monitoring',
  templateUrl: './cities-monitoring.component.html',
  styleUrls: ['./cities-monitoring.component.css']
})
export class CitiesMonitoringComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Name', 'Country', 'AlertDevices', 'WarningDevices', 'NormalDevices'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
