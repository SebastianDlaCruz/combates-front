import { TestBed } from '@angular/core/testing';

import { StateFightsHttpService } from './state-fights-http.service';

describe('StateFightsHttpService', () => {
  let service: StateFightsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateFightsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
