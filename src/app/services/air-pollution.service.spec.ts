import { TestBed } from '@angular/core/testing';

import { AirPollutionService } from './air-pollution.service';

describe('AirPollutionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirPollutionService = TestBed.get(AirPollutionService);
    expect(service).toBeTruthy();
  });
});
