import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesMonitoringComponent } from './devices-monitoring.component';

describe('DevicesMonitoringComponent', () => {
  let component: DevicesMonitoringComponent;
  let fixture: ComponentFixture<DevicesMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
