import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesMonitoringComponent } from './air-quality-tables/cities-monitoring/cities-monitoring.component';
import { DevicesMonitoringComponent } from './air-quality-tables/devices-monitoring/devices-monitoring.component'


const routes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  { path: 'cities', component: CitiesMonitoringComponent },
  { path: 'devices', component: DevicesMonitoringComponent },
  { path: '**', redirectTo: '/cities' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
