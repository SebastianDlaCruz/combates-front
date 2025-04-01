import { TestBed } from '@angular/core/testing';

import { StateBoxerHttpService } from './state-boxer-http.service';

describe('StateBoxerHttpService', () => {
  let service: StateBoxerHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateBoxerHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
