import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { CitiesMonitoringComponent } from './air-quality-tables/cities-monitoring/cities-monitoring.component';
import { DevicesMonitoringComponent } from './air-quality-tables/devices-monitoring/devices-monitoring.component'

@NgModule({
  declarations: [
    AppComponent,
    CitiesMonitoringComponent,
    DevicesMonitoringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
