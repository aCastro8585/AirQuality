import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesMonitoringComponent } from './cities-monitoring.component';

describe('CitiesMonitoringComponent', () => {
  let component: CitiesMonitoringComponent;
  let fixture: ComponentFixture<CitiesMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
